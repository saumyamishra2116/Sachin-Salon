import { Button } from '@/components/ui/button';
import { Scissors, Sparkles, Heart, Palette } from 'lucide-react';
import hairService from '@/assets/hair-service.jpg';
import spaService from '@/assets/spa-service.jpg';
import nailService from '@/assets/nail-service.jpg';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Services",
      description: "Professional cuts, styling, coloring, and treatments for all hair types",
      image: hairService,
      features: ["Precision Cuts", "Color Transformation", "Hair Treatments", "Wedding Styling"],
      price: "Starting from $65"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Spa & Wellness",
      description: "Rejuvenating facial treatments and relaxing spa experiences",
      image: spaService,
      features: ["Deep Cleansing Facials", "Anti-Aging Treatments", "Massage Therapy", "Skin Analysis"],
      price: "Starting from $85"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nail Care",
      description: "Complete manicure and pedicure services with premium products",
      image: nailService,
      features: ["Gel Manicures", "Spa Pedicures", "Nail Art", "Hand Treatments"],
      price: "Starting from $45"
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Premium</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, 
            delivered by expert professionals in a luxurious environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="salon-card group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3 bg-primary/90 backdrop-blur-sm rounded-lg text-primary-foreground">
                  {service.icon}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <Button className="btn-outline-luxury w-full">
                    Book Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-luxury text-lg px-12 py-4">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;