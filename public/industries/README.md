# Industry sector images

Used by `src/components/home/IndustriesServed.tsx`. The `.svg` files
currently in this folder are placeholder line-art (navy/amber, on-brand
colors) generated as stand-ins — swap each for a real photograph before
this ships to production. Keep the filenames the same so no code changes
are needed, or update the `image` path in `src/data/industries.ts`.

Spec for the replacement photos: 4:3, at least 1200px on the short side,
JPEG/WebP. Real industrial/site photography (not stock-photo people shots)
to match the tone set by the Hero and Product Carousel images — full color,
no heavy duotone, since the card gets its own gradient/overlay treatment.

| Industry                     | File                              | Suggested AI image-generation prompt |
| ----------------------------- | ---------------------------------- | ------------------------------------- |
| Refineries                    | `refineries.svg`                   | "Wide shot of an oil refinery at dusk, distillation towers and interconnecting pipework silhouetted against a deep blue-navy sky, amber sodium lighting, industrial photography, sharp detail, no people" |
| Oil Drilling & Platforms      | `oil-drilling-platforms.svg`       | "Offshore oil drilling platform at sea, derrick and crane structures, overcast sky, dramatic industrial photography, cool navy tones with amber safety lighting, no people" |
| Contracting Companies         | `contracting-companies.svg`        | "Industrial EPC construction site, steel structural framework and a tower crane against a dusk sky, engineering photography, navy and amber color grade, no people" |
| Petrochemicals                | `petrochemicals.svg`               | "Petrochemical plant processing unit, reactor vessels and pipe racks, night shot with amber floodlighting against navy sky, industrial photography, no people" |
| Fertilisers & Chemicals       | `fertilisers-chemicals.svg`        | "Chemical fertiliser processing plant exterior, storage silos and pipework, industrial photography, navy-blue dusk sky with warm amber plant lighting, no people" |
| Pharmaceutical                | `pharmaceutical.svg`               | "Clean pharmaceutical manufacturing facility exterior or sterile production line, stainless steel equipment, cool navy-toned industrial photography, subtle amber accent lighting, no people" |
| Space Research & Aeronautics  | `space-research-aeronautics.svg`   | "Aerospace research facility or rocket launch gantry at twilight, engineering structure against a navy sky, amber floodlighting, industrial photography, no people" |

Style notes for generation: match the site's established look — real
purpose-built industrial photography (not illustration, not stock people
shots), navy-blue dominant sky/background tones with warm amber accent
lighting, high detail, no visible logos or text.
