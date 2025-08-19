import { Shield, Truck, RefreshCw, Headphones } from "lucide-react";

const benefits = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Free Shipping",
    description: "Free shipping on all orders over $99. Fast and reliable delivery worldwide."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Payment",
    description: "Your payment information is protected with bank-level security."
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Easy Returns",
    description: "30-day hassle-free returns. Not satisfied? Get your money back."
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Our customer support team is here to help you anytime, anywhere."
  }
];

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose StyleHub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground mb-6 group-hover:shadow-glow transition-shadow duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;