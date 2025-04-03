
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="mb-6">Crafting Digital Experiences That Elevate Brands</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
            We transform ideas into exceptional digital solutions through strategic design 
            and innovative technology. Partner with us to bring your vision to life.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6" size="lg">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
