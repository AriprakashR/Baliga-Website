import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Use' };

const TERMS_SECTIONS = [
  {
    heading: 'Acceptance of Terms',
    body: [
      'By accessing or using www.baliga.com (the "Site"), you agree to be bound by these Terms of Use. "Baliga Lighting" refers to Baliga Lighting Equipments Private Limited; "user" means anyone who accesses or uses the Site. If you do not agree with any part of these terms, please discontinue use of the Site.',
    ],
  },
  {
    heading: 'Use of Website Content',
    body: [
      'Content on this Site is provided for general informational purposes about our products, certifications, and services. Commercial use, profit-making activity, unsolicited email campaigns, and advertising conducted through or in connection with the Site are prohibited without our prior written consent.',
      'Information is drawn from sources believed to be reliable at the time of publication but may be updated, corrected, or superseded without notice. You are responsible for independently verifying technical specifications, certifications, and compliance details before relying on them for procurement or installation decisions.',
    ],
  },
  {
    heading: 'Intellectual Property Rights',
    body: [
      'All content on this Site — including text, product imagery, specifications, trademarks, logos, and certification marks — is the property of Baliga Lighting Equipments Private Limited or its licensors and is protected under applicable patent, trademark, and copyright law.',
      'You may not copy, reproduce, transform, republish, transmit, or otherwise make available any part of this content for public or commercial use without our prior written permission.',
    ],
  },
  {
    heading: 'Disclaimer of Liability',
    body: [
      'The Site and its content are provided "as is" without warranties of any kind, express or implied, including as to accuracy, completeness, or fitness for a particular purpose. We do not guarantee uninterrupted or error-free access to the Site.',
      'Baliga Lighting shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content. Use of the Site is at your own risk.',
    ],
  },
  {
    heading: 'Indemnity',
    body: [
      'You agree to defend and indemnify Baliga Lighting against any claims, losses, or liabilities arising from your misuse of Site content or violation of these Terms of Use. Use of the Site does not create any agency, partnership, or employment relationship between you and Baliga Lighting.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'These Terms of Use are governed by the laws of India. Any disputes arising out of or in connection with the Site or these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.',
    ],
  },
  {
    heading: 'Privacy Policy & Copyright Notices',
    body: [
      'Any personal information submitted through this Site (for example, via our contact, feedback, or careers forms) is used solely to respond to your inquiry and is not sold or shared with third parties for marketing purposes.',
      `© ${new Date().getFullYear()} Baliga Lighting Equipments Private Limited. All rights reserved. All certification marks (ATEX, IECEx, and others referenced on this Site) belong to their respective certifying bodies.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            LEGAL
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>Terms of Use</h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Please read these terms carefully before using the Baliga Lighting
            website.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          <div className='max-w-3xl mx-auto'>
            <p className='font-body normal-case text-xs text-steel tracking-wide'>
              Last updated: January 2026
            </p>

            <div className='mb-8 mt-2 divide-y divide-line border-t border-line'>
              {TERMS_SECTIONS.map((section, index) => (
                <div key={section.heading} className='py-8 first:pt-8'>
                  <div className='flex items-baseline gap-4'>
                    <span className='font-mono text-xs text-amber-600 shrink-0'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className='font-display text-xl font-bold text-navy-900'>
                      {section.heading}
                    </h2>
                  </div>
                  <div className='mt-4 pl-0 sm:pl-9 space-y-4'>
                    {section.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className='font-body normal-case text-sm text-steel leading-relaxed'
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
