import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import watchImage from "@/assets/product-watch.jpg";
import bagImage from "@/assets/product-bag.jpg";
import sunglassesImage from "@/assets/product-sunglasses.jpg";

const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: "$299",
    originalPrice: "$399",
    image: watchImage,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Luxury Leather Bag",
    price: "$199",
    originalPrice: "$249",
    image: bagImage,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: "$159",
    originalPrice: "$199",
    image: sunglassesImage,
    rating: 4.7,
    reviews: 156
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, 
            carefully curated for style and quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-product hover:shadow-glow transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Sale
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 group">
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;