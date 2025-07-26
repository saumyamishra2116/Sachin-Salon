import { Button } from '@/components/ui/button';
import { Users, Award, Heart, Clock } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Sachin Kumar",
      role: "Founder & Master Stylist",
      experience: "15+ years",
      specialty: "Hair Color & Cuts",
      description: "Passionate about creating stunning transformations with precision and artistry."
    },
    {
      name: "Priya Sharma",
      role: "Senior Stylist",
      experience: "10+ years",
      specialty: "Bridal & Special Events",
      description: "Specializes in elegant updos and wedding hair styling for special occasions."
    },
    {
      name: "Raj Patel",
      role: "Spa Specialist",
      experience: "8+ years",
      specialty: "Skincare & Wellness",
      description: "Expert in rejuvenating treatments and personalized skincare solutions."
    },
    {
      name: "Maya Singh",
      role: "Nail Artist",
      experience: "6+ years",
      specialty: "Nail Art & Design",
      description: "Creative nail artist known for intricate designs and flawless finishes."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We're passionate about beauty and helping our clients feel their absolute best."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in every service we provide."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building lasting relationships with our clients and supporting our local community."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Innovation",
      description: "Staying current with the latest trends and techniques in beauty and wellness."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-gradient-gold">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Founded in 2009 by master stylist Sachin Kumar, Sachin Salon began as a vision to create 
            a premium beauty destination where luxury meets expertise. What started as a small studio 
            has grown into the city's most trusted unisex salon, serving over 5,000 satisfied clients.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that everyone deserves to look and feel their best. Our team of skilled 
            professionals is dedicated to providing personalized service in an elegant, welcoming 
            environment where artistry and innovation come together.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            What We <span className="text-gradient-gold">Stand For</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="text-gradient-gold">Expert Team</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="salon-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.experience} • {member.specialty}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your appointment today and discover why we're the city's premier destination 
              for luxury beauty and wellness services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury">
                Book Appointment
              </Button>
              <Button className="btn-outline-luxury">
                Take a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;