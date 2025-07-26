import { Button } from '@/components/ui/button';
import { Check, Crown, Star, Gem } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: "Silver",
      icon: <Star className="w-8 h-8" />,
      price: "$29",
      period: "/month",
      description: "Perfect for occasional visits",
      features: [
        "10% discount on all services",
        "Priority booking",
        "Free hair consultation",
        "Birthday month special offer",
        "Access to exclusive events"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Gold",
      icon: <Crown className="w-8 h-8" />,
      price: "$59",
      period: "/month",
      description: "Most popular choice for regular clients",
      features: [
        "20% discount on all services",
        "Priority booking & extended hours",
        "Free monthly hair treatment",
        "Complimentary spa add-ons",
        "VIP lounge access",
        "Personal stylist consultation",
        "Product discounts"
      ],
      popular: true,
      color: "from-primary to-accent"
    },
    {
      name: "Platinum",
      icon: <Gem className="w-8 h-8" />,
      price: "$99",
      period: "/month",
      description: "Ultimate luxury experience",
      features: [
        "30% discount on all services",
        "Unlimited priority booking",
        "Free weekly services",
        "Premium product line access",
        "Private suite access",
        "Personal beauty concierge",
        "Exclusive member events",
        "Home service options"
      ],
      popular: false,
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="membership" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Exclusive <span className="text-gradient-gold">Membership</span> Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our membership community and enjoy premium benefits, exclusive discounts, 
            and priority access to our luxury services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={salon-card relative ${plan.popular ? 'ring-2 ring-primary scale-105 md:scale-110' : ''}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-white}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={w-full ${plan.popular ? 'btn-luxury' : 'btn-outline-luxury'}}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Special Launch Offer
            </h3>
            <p className="text-muted-foreground mb-6">
              Sign up for any membership plan this month and get your first month 50% off! 
              Plus, receive a complimentary welcome package worth $150.
            </p>
            <Button className="btn-luxury">
              Claim Your Offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;