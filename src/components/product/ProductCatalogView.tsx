'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { PackageSearch } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductFilterBar from './ProductFilterBar';
import ProductCard from './ProductCard';
import ProductDetailView from './ProductDetailView';

const QuoteModal = dynamic(() => import('./QuoteModal'), { ssr: false });

function toggleInSet(set: Set<string>, value: string): Set<string> {
  const next = new Set(set);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

export default function ProductCatalogView() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(
    () => categoryParam,
  );
  const [activeExZones, setActiveExZones] = useState<Set<string>>(new Set());
  const [activeIpRatings, setActiveIpRatings] = useState<Set<string>>(
    new Set(),
  );
  const [activeCerts, setActiveCerts] = useState<Set<string>>(new Set());
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  const [quoteProductId, setQuoteProductId] = useState<string | null>(null);

  const categoryOptions = useMemo(
    () => Array.from(new Set(PRODUCTS.map(p => p.category))),
    [],
  );
  const exZoneOptions = useMemo(
    () => Array.from(new Set(PRODUCTS.flatMap(p => p.exZone))).sort(),
    [],
  );
  const ipRatingOptions = useMemo(
    () => Array.from(new Set(PRODUCTS.map(p => p.ipRating))).sort(),
    [],
  );
  const certOptions = useMemo(
    () => Array.from(new Set(PRODUCTS.flatMap(p => p.certifications))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter(
      p => activeCategory === null || p.category === activeCategory,
    )
      .filter(
        p =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      )
      .filter(
        p =>
          activeExZones.size === 0 || p.exZone.some(z => activeExZones.has(z)),
      )
      .filter(
        p => activeIpRatings.size === 0 || activeIpRatings.has(p.ipRating),
      )
      .filter(
        p =>
          activeCerts.size === 0 ||
          p.certifications.some(c => activeCerts.has(c)),
      );
  }, [search, activeCategory, activeExZones, activeIpRatings, activeCerts]);

  const hasActiveFilters =
    search.trim() !== '' ||
    activeCategory !== null ||
    activeExZones.size > 0 ||
    activeIpRatings.size > 0 ||
    activeCerts.size > 0;

  function clearAll() {
    setSearch('');
    setActiveCategory(null);
    setActiveExZones(new Set());
    setActiveIpRatings(new Set());
    setActiveCerts(new Set());
  }

  const selectedProduct =
    PRODUCTS.find(p => p.id === selectedProductId) ?? null;
  const quoteProduct = PRODUCTS.find(p => p.id === quoteProductId) ?? null;

  useEffect(() => {
    window.scrollTo({ top: 275, behavior: 'auto' });
  }, [selectedProductId]);

  // Clicking "Products" in the header nav while already on this page should
  // drop back to the catalog grid rather than leaving a product detail view
  // open — Header dispatches this event on click (see Header.tsx).
  useEffect(() => {
    function handleReset() {
      setSelectedProductId(null);
      setQuoteProductId(null);
    }
    window.addEventListener('baliga:reset-product-catalog', handleReset);
    return () =>
      window.removeEventListener('baliga:reset-product-catalog', handleReset);
  }, []);

  if (selectedProduct) {
    return (
      <>
        <section className='bg-white'>
          <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
            <ProductDetailView
              product={selectedProduct}
              onBack={() => setSelectedProductId(null)}
              onRequestQuote={() => setQuoteProductId(selectedProduct.id)}
            />
          </div>
        </section>
        <QuoteModal
          product={quoteProduct}
          onClose={() => setQuoteProductId(null)}
        />
      </>
    );
  }

  return (
    <>
      <ProductFilterBar
        search={search}
        onSearchChange={setSearch}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categoryOptions={categoryOptions}
        exZoneOptions={exZoneOptions}
        activeExZones={activeExZones}
        onToggleExZone={value =>
          setActiveExZones(prev => toggleInSet(prev, value))
        }
        ipRatingOptions={ipRatingOptions}
        activeIpRatings={activeIpRatings}
        onToggleIpRating={value =>
          setActiveIpRatings(prev => toggleInSet(prev, value))
        }
        certOptions={certOptions}
        activeCerts={activeCerts}
        onToggleCert={value => setActiveCerts(prev => toggleInSet(prev, value))}
        hasActiveFilters={hasActiveFilters}
        onClearAll={clearAll}
        resultCount={filtered.length}
        totalCount={PRODUCTS.length}
      />

      <section className='bg-mist'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          {filtered.length > 0 ? (
            <div
              key={`${activeCategory}-${search}-${activeExZones.size}-${activeIpRatings.size}-${activeCerts.size}`}
              className='animate-view-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            >
              {filtered.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onSelect={setSelectedProductId}
                />
              ))}
            </div>
          ) : (
            <div className='flex flex-col items-center gap-4 py-16 text-center'>
              <PackageSearch
                className='h-10 w-10 text-steel/50'
                strokeWidth={1.5}
              />
              <p className='font-display text-lg text-navy-900 normal-case'>
                No products match your filters
              </p>
              <button
                type='button'
                onClick={clearAll}
                className='mt-2 font-display text-xs tracking-widest text-navy-900 border-b border-navy-900 hover:text-amber-600 hover:border-amber-600 transition-colors cursor-pointer'
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
