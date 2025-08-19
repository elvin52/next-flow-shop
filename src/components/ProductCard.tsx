import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const currentPrice = product.salePrice || product.price;
  const isOnSale = !!product.salePrice;

  // Structured data for the product
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Shop"
    },
    "offers": {
      "@type": "Offer",
      "url": `${window.location.origin}/product/${product.id}`,
      "priceCurrency": "USD",
      "price": currentPrice,
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Shop"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(productStructuredData)}
      </script>
      <Card className="group overflow-hidden hover:shadow-product transition-smooth bg-gradient-card border-0">
        <Link to={`/product/${product.id}`}>
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm text-foreground group-hover:text-accent transition-fast line-clamp-2">
                {product.name}
              </h3>
              {!product.inStock && (
                <Badge variant="secondary" className="text-xs">
                  Out of Stock
                </Badge>
              )}
            </div>
            
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-rating text-rating'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-price">
                ${currentPrice.toFixed(2)}
              </span>
              {isOnSale && (
                <span className="text-xs text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
              {isOnSale && (
                <Badge variant="destructive" className="text-xs">
                  Sale
                </Badge>
              )}
            </div>
          </CardContent>
        </Link>
        
        <CardFooter className="p-4 pt-0">
          <Button
            variant="cart"
            size="sm"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;