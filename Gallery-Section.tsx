import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Heart, Share2, Filter } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'hair',
      title: 'Platinum Blonde Transformation',
      description: 'Complete color makeover with precision cut',
      likes: 124,
      views: 856
    },
    {
      id: 2,
      category: 'spa',
      title: 'Rejuvenating Facial Treatment',
      description: 'Anti-aging therapy with visible results',
      likes: 89,
      views: 642
    },
    {
      id: 3,
      category: 'nails',
      title: 'Artistic Nail Design',
      description: 'Custom nail art with gold accents',
      likes: 156,
      views: 923
    },
    {
      id: 4,
      category: 'hair',
      title: 'Modern Bob Cut',
      description: 'Sleek and sophisticated styling',
      likes: 203,
      views: 1254
    },
    {
      id: 5,
      category: 'bridal',
      title: 'Elegant Bridal Updo',
      description: 'Perfect for your special day',
      likes: 287,
      views: 1876
    },
    {
      id: 6,
      category: 'spa',
      title: 'Deep Cleansing Treatment',
      description: 'Purifying facial for all skin types',
      likes: 97,
      views: 734
    },
    {
      id: 7,
      category: 'hair',
      title: 'Balayage Highlights',
      description: 'Natural-looking dimension and shine',
      likes: 178,
      views: 1123
    },
    {
      id: 8,
      category: 'nails',
      title: 'French Manicure Perfection',
      description: 'Classic elegance with modern twist',
      likes: 134,
      views: 789
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work', count: galleryItems.length },
    { id: 'hair', label: 'Hair', count: galleryItems.filter(item => item.category === 'hair').length },
    { id: 'spa', label: 'Spa', count: galleryItems.filter(item => item.category === 'spa').length },
    { id: 'nails', label: 'Nails', count: galleryItems.filter(item => item.category === 'nails').length },
    { id: 'bridal', label: 'Bridal', count: galleryItems.filter(item => item.category === 'bridal').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our stunning collection of transformations, showcasing the artistry 
            and expertise of our talented team.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Filter className="w-4 h-4 mr-2 inline" />
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="salon-card group p-0 overflow-hidden">
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/30">
                  {index + 1}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {item.likes}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {item.views}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-outline-luxury">
            View More Work
          </Button>
        </div>

        {/* Before & After Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Amazing <span className="text-gradient-gold">Transformations</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="salon-card">
              <h4 className="text-xl font-semibold text-foreground mb-4">Before & After Gallery</h4>
              <p className="text-muted-foreground mb-6">
                Witness the incredible transformations our expert stylists achieve. 
                Each before and after tells a story of confidence, beauty, and artistry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-foreground">Hair Makeovers</span>
                  <span className="text-primary font-semibold">25+ Cases</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-foreground">Skin Treatments</span>
                  <span className="text-primary font-semibold">40+ Cases</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-foreground">Complete Makeovers</span>
                  <span className="text-primary font-semibold">15+ Cases</span>
                </div>
              </div>
              <Button className="btn-luxury w-full mt-6">
                See All Transformations
              </Button>
            </div>

            <div className="salon-card">
              <h4 className="text-xl font-semibold text-foreground mb-4">Client Spotlight</h4>
              <p className="text-muted-foreground mb-6">
                Featured transformations from our satisfied clients, showcasing the 
                diverse range of styles and treatments we offer.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      S
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sarah M.</p>
                      <p className="text-xs text-muted-foreground">Hair Color Specialist - Priya</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">"Absolutely stunning results! The transformation exceeded my expectations."</p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Michael K.</p>
                      <p className="text-xs text-muted-foreground">Skincare Treatment - Raj</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">"My skin has never looked better. Professional and relaxing experience."</p>
                </div>
              </div>

              <Button className="btn-outline-luxury w-full mt-6">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;