// grounded in the actual product categories from the old site
import {
  Lightbulb,
  Settings2,
  SlidersHorizontal,
  ToggleLeft,
  Cable,
  Box,
  GaugeCircle,
  Wrench,
  Radio,
} from 'lucide-react';

export const CATEGORIES = [
  { slug: 'luminaires', label: 'Luminaires', icon: Lightbulb },
  { slug: 'control-gear', label: 'Control Gear', icon: Settings2 },
  {
    slug: 'control-stations',
    label: 'Control Stations',
    icon: SlidersHorizontal,
  },
  { slug: 'switches', label: 'Switches', icon: ToggleLeft },
  { slug: 'cable-glands', label: 'Cable Glands', icon: Cable },
  { slug: 'junction-boxes', label: 'Junction Boxes', icon: Box },
  { slug: 'flow-measurement', label: 'Flow Measurement', icon: GaugeCircle },
  { slug: 'accessories', label: 'Accessories', icon: Wrench },
  { slug: 'communication', label: 'Communication', icon: Radio },
];
