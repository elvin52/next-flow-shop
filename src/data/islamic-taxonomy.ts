// Islamic Wear Taxonomy - Gender-first approach for cultural relevance

export type GenderId = 'men' | 'women';

export interface Gender {
  id: GenderId;
  name: string;
  description: string;
}

export interface TypeConfig {
  id: string;
  name: string;
  description: string;
  styles: string[];
  seoKeywords: string[];
}

export const genders: Gender[] = [
  {
    id: 'men',
    name: 'Men',
    description: 'Islamic clothing for men including thobes, kurtas, and accessories'
  },
  {
    id: 'women', 
    name: 'Women',
    description: 'Modest Islamic wear for women including abayas, hijabs, and modest dresses'
  }
];

// Category configuration by gender - prevents invalid combinations
export const typesByGender: Record<GenderId, TypeConfig[]> = {
  men: [
    {
      id: 'thobe',
      name: 'Thobes',
      description: 'Traditional and modern thobes for prayer, daily wear, and special occasions',
      styles: ['Moroccan', 'Palestinian', 'Saudi', 'Emirati', 'Jubba', 'Pakistani', 'Omani'],
      seoKeywords: ['mens thobe', 'islamic dress', 'jubba', 'dishdasha']
    },
    {
      id: 'kurta',
      name: 'Kurtas', 
      description: 'Comfortable kurtas for casual and formal occasions',
      styles: ['Pakistani', 'Indian', 'Modern', 'Embroidered'],
      seoKeywords: ['mens kurta', 'pakistani kurta', 'islamic shirt']
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Prayer caps, Islamic accessories, and traditional items',
      styles: ['Kufi', 'Topi', 'Prayer Beads', 'Islamic Jewelry'],
      seoKeywords: ['kufi cap', 'prayer cap', 'islamic accessories']
    }
  ],
  women: [
    {
      id: 'abaya',
      name: 'Abayas',
      description: 'Elegant abayas in various styles for modest and fashionable wear',
      styles: ['Butterfly', 'Open', 'Closed', 'Turkish', 'Saudi', 'Emirati', 'Dubai', 'Umbrella'],
      seoKeywords: ['womens abaya', 'butterfly abaya', 'modest dress', 'islamic clothing']
    },
    {
      id: 'hijab',
      name: 'Hijabs',
      description: 'High-quality hijabs in various fabrics and styles for everyday wear',
      styles: ['Khimar', 'Square', 'Rectangle', 'Instant', 'Under-cap', 'Jilbab', 'Shayla'],
      seoKeywords: ['hijab scarf', 'khimar', 'modest hijab', 'islamic headscarf', 'modal hijab']
    },
    {
      id: 'dress',
      name: 'Modest Dresses',
      description: 'Modest dresses perfect for various occasions while maintaining Islamic values',
      styles: ['Casual', 'Formal', 'Party', 'Prayer', 'Maxi', 'A-line'],
      seoKeywords: ['modest dress', 'islamic dress', 'long sleeve dress', 'maxi dress']
    },
    {
      id: 'swimwear',
      name: 'Modest Swimwear',
      description: 'Full-coverage swimwear for modest swimming and beach activities',
      styles: ['Burkini', 'Swim Dress', 'Two-piece', 'Full Coverage'],
      seoKeywords: ['modest swimwear', 'burkini', 'islamic swimsuit', 'full coverage swimwear']
    }
  ]
};

// Filter options for UX refinement
export const filterOptions = {
  colors: [
    'Black', 'White', 'Navy', 'Beige', 'Brown', 'Grey', 
    'Green', 'Cream', 'Maroon', 'Gold', 'Silver', 'Purple'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  fabrics: [
    'Cotton', 'Linen', 'Polyester', 'Viscose', 'Modal', 
    'Crepe', 'Chiffon', 'Jersey', 'Silk', 'Satin', 'Blend'
  ],
  occasions: [
    'Everyday', 'Prayer', 'Formal', 'Wedding', 'Eid', 
    'Casual', 'Work', 'Party', 'Umrah', 'Hajj'
  ],
  priceRanges: [
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to100', label: '$50 - $100', min: 50, max: 100 },
    { id: '100to200', label: '$100 - $200', min: 100, max: 200 },
    { id: 'over200', label: 'Over $200', min: 200, max: Infinity }
  ]
};

// Helper functions
export function getGenderById(genderId: GenderId): Gender | null {
  return genders.find(g => g.id === genderId) || null;
}

export function getTypesByGender(genderId: GenderId): TypeConfig[] {
  return typesByGender[genderId] || [];
}

export function getTypeById(genderId: GenderId, typeId: string): TypeConfig | null {
  const types = getTypesByGender(genderId);
  return types.find(t => t.id === typeId) || null;
}

export function getValidStyles(genderId: GenderId, typeId: string): string[] {
  const type = getTypeById(genderId, typeId);
  return type ? type.styles : [];
}

export function validateGenderTypeStyle(genderId: string, typeId?: string, styleSlug?: string): {
  validGender: GenderId | null;
  validType: TypeConfig | null;
  validStyle: string | null;
} {
  const validGender = genders.find(g => g.id === genderId)?.id || null;
  
  let validType: TypeConfig | null = null;
  let validStyle: string | null = null;
  
  if (validGender && typeId) {
    validType = getTypeById(validGender, typeId);
    
    if (validType && styleSlug) {
      // Convert slug back to proper case and validate
      const styleLabel = styleSlug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      validStyle = validType.styles.find(s => 
        s.toLowerCase().replace(/\s+/g, '-') === styleSlug
      ) || null;
    }
  }
  
  return { validGender, validType, validStyle };
}