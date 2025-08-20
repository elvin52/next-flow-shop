// URL slug utilities for Islamic wear store

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function parseSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function createGenderSlug(gender: string): string {
  return gender.toLowerCase();
}

export function createCategorySlug(category: string): string {
  return createSlug(category);
}

export function createStyleSlug(style: string): string {
  return createSlug(style);
}

// URL building helpers
export function buildProductUrl(gender: string, category?: string, style?: string): string {
  let url = `/${gender.toLowerCase()}`;
  
  if (category) {
    url += `/${createCategorySlug(category)}`;
  }
  
  if (style) {
    url += `/${createStyleSlug(style)}`;
  }
  
  return url;
}

// Breadcrumb helpers
export function buildBreadcrumbs(gender?: string, category?: string, style?: string) {
  const breadcrumbs = [
    { label: 'Home', url: '/' }
  ];

  if (gender) {
    breadcrumbs.push({
      label: gender.charAt(0).toUpperCase() + gender.slice(1),
      url: `/${gender.toLowerCase()}`
    });

    if (category) {
      breadcrumbs.push({
        label: parseSlug(category),
        url: `/${gender.toLowerCase()}/${category}`
      });

      if (style) {
        breadcrumbs.push({
          label: parseSlug(style),
          url: `/${gender.toLowerCase()}/${category}/${createStyleSlug(style)}`
        });
      }
    }
  }

  return breadcrumbs;
}

// SEO helpers
export function generatePageTitle(gender?: string, category?: string, style?: string, siteName: string = 'Islamic Wear Store'): string {
  if (!gender) {
    return `Premium Islamic Clothing & Modest Muslim Wear | ${siteName}`;
  }

  const genderTitle = gender.charAt(0).toUpperCase() + gender.slice(1) + "'s";
  
  if (!category) {
    return `${genderTitle} Islamic Clothing & Muslim Wear | ${siteName}`;
  }

  const categoryTitle = parseSlug(category);
  
  if (!style) {
    if (category === 'hijab') {
      return `${categoryTitle} | Modest Islamic Headscarves in Silk, Jersey & More | ${siteName}`;
    }
    if (category === 'thobe') {
      return `${categoryTitle} | Traditional Islamic Robes in Cotton & Linen | ${siteName}`;
    }
    if (category === 'abaya') {
      return `${categoryTitle} | Modest Islamic Dresses in Various Fabrics | ${siteName}`;
    }
    return `${genderTitle} ${categoryTitle} - Islamic Clothing & Muslim Wear | ${siteName}`;
  }

  const styleTitle = parseSlug(style);
  return `${styleTitle} ${categoryTitle} for ${gender.charAt(0).toUpperCase() + gender.slice(1)} | ${siteName}`;
}

export function generateMetaDescription(gender?: string, category?: string, style?: string): string {
  if (!gender) {
    return 'Discover premium Islamic clothing and modest Muslim wear for men and women. Shop authentic thobes, abayas, hijabs, and accessories with fast shipping.';
  }

  const genderText = gender.charAt(0).toUpperCase() + gender.slice(1) + "'s";
  
  if (!category) {
    return `Shop ${genderText.toLowerCase()} Islamic clothing including ${gender === 'men' ? 'thobes, kurtas, and accessories' : 'abayas, hijabs, and modest dresses'}. Premium quality Muslim wear with authentic designs.`;
  }

  const categoryTitle = parseSlug(category);
  
  if (!style) {
    if (category === 'hijab') {
      return 'Shop modest Islamic hijabs including Khimar, Shayla, silk, jersey, and more. Perfect for everyday Muslim wear with premium fabrics and traditional styles.';
    }
    if (category === 'thobe') {
      return 'Explore traditional and modern Islamic thobes including Palestinian, Saudi, and Emirati styles. Modest Muslim wear for men in cotton, linen, and premium fabrics.';
    }
    if (category === 'abaya') {
      return 'Discover elegant abayas in butterfly, open, and closed styles. Modest Islamic dresses for women in silk, crepe, and premium fabrics with authentic designs.';
    }
    return `Explore our collection of ${genderText.toLowerCase()} ${categoryTitle.toLowerCase()}. High-quality Islamic clothing and Muslim wear with traditional and modern designs. Free shipping available.`;
  }

  const styleTitle = parseSlug(style);
  return `Shop authentic ${styleTitle} ${categoryTitle.toLowerCase()} for ${gender}. Premium Islamic clothing and Muslim wear with traditional craftsmanship and modern comfort. Fast worldwide shipping.`;
}