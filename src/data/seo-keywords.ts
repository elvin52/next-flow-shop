// High-value SEO keyword mappings for specific filter combinations
// Based on keyword research showing high search volume and commercial intent

export interface HighValueFacet {
  title: string;
  h1: string;
  metaDescription: string;
  introText: string;
}

export interface HighValueMapping {
  [category: string]: {
    [filterKey: string]: HighValueFacet;
  };
}

// High-value filter combinations with proven search volume
export const HIGH_VALUE_FACETS: HighValueMapping = {
  // Hijab high-value filters
  hijab: {
    'fabric-modal': {
      title: 'Modal Hijabs | Premium Soft Islamic Headscarves',
      h1: 'Modal Hijabs',
      metaDescription: 'Shop premium modal hijabs - ultra-soft, breathable Islamic headscarves perfect for daily modest wear. Luxurious comfort meets Islamic modesty.',
      introText: 'Discover our collection of premium modal hijabs, crafted from ultra-soft modal fabric for ultimate comfort. These luxurious Islamic headscarves offer exceptional breathability and a silky feel, making them perfect for everyday modest wear.'
    },
    'fabric-jersey': {
      title: 'Jersey Hijabs | Comfortable Stretch Islamic Headscarves',
      h1: 'Jersey Hijabs',
      metaDescription: 'Shop comfortable jersey hijabs with stretch fabric. Easy-to-style Islamic headscarves for everyday modest wear. Premium quality jersey hijab collection.',
      introText: 'Explore our versatile jersey hijab collection featuring comfortable stretch fabric that\'s easy to style. These practical Islamic headscarves are perfect for active lifestyles while maintaining modest coverage.'
    },
    'fabric-silk': {
      title: 'Silk Hijabs | Luxury Islamic Headscarves & Scarves',
      h1: 'Silk Hijabs',
      metaDescription: 'Shop luxury silk hijabs and Islamic headscarves. Premium silk fabric for elegant modest wear. Beautiful drape and lustrous finish.',
      introText: 'Indulge in our exquisite silk hijab collection featuring lustrous, premium silk fabric. These elegant Islamic headscarves offer a beautiful drape and sophisticated look for special occasions and everyday luxury.'
    },
    'fabric-satin': {
      title: 'Satin Hijabs | Smooth Lustrous Islamic Headscarves',
      h1: 'Satin Hijabs',
      metaDescription: 'Shop elegant satin hijabs with smooth, lustrous finish. Premium satin Islamic headscarves for modest wear with beautiful drape and shine.',
      introText: 'Discover our elegant satin hijab collection with smooth, lustrous fabric that creates a beautiful drape. These refined Islamic headscarves combine modest coverage with sophisticated style.'
    },
    'color-black': {
      title: 'Black Hijabs | Classic Islamic Headscarves in Black',
      h1: 'Black Hijabs',
      metaDescription: 'Shop classic black hijabs - versatile Islamic headscarves in timeless black. Perfect for modest wear with any outfit. Premium quality black hijab collection.',
      introText: 'Browse our classic black hijab collection featuring timeless, versatile Islamic headscarves that complement any outfit. Essential pieces for every modest wardrobe.'
    }
  },
  
  // Abaya high-value filters  
  abaya: {
    'color-black': {
      title: 'Black Abayas | Classic Islamic Dress in Black',
      h1: 'Black Abayas',
      metaDescription: 'Shop elegant black abayas - timeless Islamic dresses for modest wear. Classic black abaya collection with modern and traditional styles.',
      introText: 'Discover our timeless black abaya collection featuring elegant Islamic dresses perfect for modest wear. From classic to contemporary styles, find your perfect black abaya.'
    },
    'fabric-modal': {
      title: 'Modal Abayas | Soft Comfortable Islamic Dresses',
      h1: 'Modal Abayas',
      metaDescription: 'Shop comfortable modal abayas - soft, breathable Islamic dresses perfect for daily wear. Premium modal fabric abaya collection.',
      introText: 'Experience comfort with our modal abaya collection featuring ultra-soft, breathable fabric perfect for daily modest wear. These premium Islamic dresses offer unmatched comfort.'
    }
  },

  // Thobe high-value filters
  thobe: {
    'fabric-cotton': {
      title: 'Cotton Thobes | Breathable Islamic Clothing for Men',
      h1: 'Cotton Thobes',
      metaDescription: 'Shop breathable cotton thobes - comfortable Islamic clothing for men. Premium cotton thobe collection for daily wear and prayer.',
      introText: 'Explore our cotton thobe collection featuring breathable, comfortable Islamic clothing for men. Perfect for daily wear, prayer, and special occasions.'
    }
  }
};

// Find override for specific category and filter combination
export function findFacetOverride(
  category: string,
  filterAttribute: string,
  filterValue: string
): HighValueFacet | null {
  const categoryOverrides = HIGH_VALUE_FACETS[category];
  if (!categoryOverrides) return null;
  
  const filterKey = `${filterAttribute}-${filterValue.toLowerCase()}`;
  return categoryOverrides[filterKey] || null;
}

// Get all high-value filter URLs for sitemap generation
export function getHighValueFilterUrls(): Array<{
  gender: string;
  category: string;
  filterAttribute: string;
  filterValue: string;
}> {
  const urls: Array<{
    gender: string;
    category: string;
    filterAttribute: string;
    filterValue: string;
  }> = [];

  for (const [category, filters] of Object.entries(HIGH_VALUE_FACETS)) {
    for (const filterKey of Object.keys(filters)) {
      const [attribute, value] = filterKey.split('-');
      urls.push({
        gender: category === 'thobe' ? 'men' : 'women', // Assuming thobes are men's, others are women's
        category,
        filterAttribute: attribute,
        filterValue: value
      });
    }
  }

  return urls;
}