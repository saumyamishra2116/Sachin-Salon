import { Button } from '@/components/ui/button';
import { Star, Award, Users } from 'lucide-react';
import salonHero from '@/assets/salon-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={salonHero} 
          alt="Sachin Salon Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where <span className="text-gradient-gold">Luxury</span><br />
              Meets <span className="text-gradient-gold">Style</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
              Experience premium unisex salon services in an elegant atmosphere. 
              From stunning hair transformations to rejuvenating spa treatments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-luxury text-lg px-8 py-4">
                Join Our Membership
              </Button>
              <Button className="btn-outline-luxury text-lg px-8 py-4">
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="text-primary w-6 h-6 mr-2" fill="currentColor" />
                <span className="text-3xl font-bold text-primary">4.9</span>
              </div>
              <p className="text-foreground/80">Rating</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-primary w-6 h-6 mr-2" />
                <span className="text-3xl font-bold text-primary">5K+</span>
              </div>
              <p className="text-foreground/80">Happy Clients</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-primary w-6 h-6 mr-2" />
                <span className="text-3xl font-bold text-primary">15+</span>
              </div>
              <p className="text-foreground/80">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;