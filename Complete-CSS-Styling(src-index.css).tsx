@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Sachin Salon Design System - Premium Black & Dark Yellow Theme */

@layer base {
  :root {
    /* Brand Colors - Sachin Salon */
    --background: 0 0% 6%;
    --foreground: 45 100% 96%;
    
    --card: 0 0% 8%;
    --card-foreground: 45 100% 96%;
    
    --popover: 0 0% 8%;
    --popover-foreground: 45 100% 96%;
    
    /* Primary - Dark Yellow/Gold */
    --primary: 43 91% 55%;
    --primary-foreground: 0 0% 6%;
    
    /* Secondary - Lighter variations */
    --secondary: 0 0% 12%;
    --secondary-foreground: 45 100% 96%;
    
    --muted: 0 0% 10%;
    --muted-foreground: 45 20% 70%;
    
    --accent: 43 91% 55%;
    --accent-foreground: 0 0% 6%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 45 100% 96%;
    
    --border: 0 0% 15%;
    --input: 0 0% 12%;
    --ring: 43 91% 55%;
    
    --radius: 0.75rem;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(43 91% 55%), hsl(43 91% 65%));
    --gradient-dark: linear-gradient(135deg, hsl(0 0% 6%), hsl(0 0% 12%));
    --gradient-gold: linear-gradient(45deg, hsl(43 91% 55%), hsl(45 100% 70%));
    
    /* Shadows */
    --shadow-luxury: 0 20px 60px -10px hsl(0 0% 0% / 0.4);
    --shadow-gold: 0 10px 30px -5px hsl(43 91% 55% / 0.3);
    --shadow-elegant: 0 4px 20px hsl(0 0% 0% / 0.3);
    
    /* Animations */
    --transition-luxury: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: all 0.3s ease-out;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-inter antialiased;
  }
}

@layer components {
  /* Luxury Button Variants */
  .btn-luxury {
    @apply bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold 
           shadow-[var(--shadow-gold)] transition-[var(--transition-luxury)] 
           hover:scale-105 hover:shadow-[var(--shadow-luxury)];
  }
  
  .btn-outline-luxury {
    @apply border-2 border-primary text-primary bg-transparent px-8 py-4 rounded-lg font-semibold
           transition-[var(--transition-luxury)] hover:bg-primary hover:text-primary-foreground
           hover:shadow-[var(--shadow-gold)];
  }
  
  /* Salon Card Styles */
  .salon-card {
    @apply bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-elegant)]
           transition-[var(--transition-luxury)] hover:shadow-[var(--shadow-luxury)]
           hover:scale-[1.02] hover:border-primary/50;
  }
  
  /* Text Gradients */
  .text-gradient-gold {
    @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent;
  }
  
  /* Section Spacing */
  .section-padding {
    @apply py-16 md:py-24 lg:py-32;
  }
  
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  /* Animations */
  .animate-fade-in-up {
    @apply animate-[fadeInUp_0.6s_ease-out];
  }
  
  .animate-slide-in-right {
    @apply animate-[slideInRight_0.8s_ease-out];
  }
}

@layer utilities {
  .bg-gradient-primary {
    background: var(--gradient-primary);
  }
  
  .bg-gradient-dark {
    background: var(--gradient-dark);
  }
  
  .bg-gradient-gold {
    background: var(--gradient-gold);
  }
}

/* Custom Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}