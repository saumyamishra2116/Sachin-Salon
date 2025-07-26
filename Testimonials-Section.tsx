import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Hair Color & Cut",
      rating: 5,
      text: "Absolutely incredible experience! Sachin transformed my hair beyond my wildest dreams. The attention to detail and professional service is unmatched. I've never felt more confident!",
      location: "Downtown Client"
    },
    {
      name: "Michael Chen",
      service: "Spa Treatment",
      rating: 5,
      text: "The spa services here are world-class. From the moment I walked in, I felt pampered and relaxed. The facial treatment was rejuvenating and the staff was incredibly professional.",
      location: "VIP Member"
    },
    {
      name: "Priya Patel",
      service: "Bridal Package",
      rating: 5,
      text: "My wedding day look was absolutely perfect! The team went above and beyond to ensure everything was flawless. They understood exactly what I wanted and delivered beyond expectations.",
      location: "Bridal Client"
    },
    {
      name: "David Thompson",
      service: "Membership Program",
      rating: 5,
      text: "Being a Gold member has been the best decision. The exclusive benefits, priority booking, and consistent quality make it worth every penny. Highly recommend!",
      location: "Gold Member"
    },
    {
      name: "Lisa Rodriguez",
      service: "Nail Art",
      rating: 5,
      text: "Maya's nail artistry is incredible! She created the most beautiful design that lasted for weeks. The attention to detail and creativity is outstanding.",
      location: "Regular Client"
    },
    {
      name: "James Wilson",
      service: "Men's Grooming",
      rating: 5,
      text: "Finally found a salon that understands men's grooming needs. Professional, efficient, and the results speak for themselves. The atmosphere is welcoming for everyone.",
      location: "Platinum Member"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who have 
            experienced the Sachin Salon difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="salon-card text-center p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-primary font-medium">
                  {testimonials[currentSlide].service}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentSlide].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Return Clients</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Happy Clients?
          </h3>
          <p className="text-muted-foreground mb-6">
            Experience the luxury and excellence that our clients rave about.
          </p>
          <Button className="btn-luxury text-lg px-8 py-4">
            Book Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;