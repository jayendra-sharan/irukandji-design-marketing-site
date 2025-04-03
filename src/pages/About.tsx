
import React from 'react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80')` }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto h-full flex items-end pb-16 relative z-10">
          <div className="text-white max-w-4xl">
            <h1 className="mb-4">About DesignZenith</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We're a team of strategists, designers, and developers who are passionate about 
              creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2015, DesignZenith began with a simple mission: create digital experiences 
                that people love. We've grown from a three-person team to a full-service digital 
                studio working with clients across the globe.
              </p>
              <p className="text-lg text-muted-foreground">
                Our approach combines strategic thinking, human-centered design, and technical 
                excellence to deliver solutions that not only look beautiful but drive real business 
                results for our clients.
              </p>
            </div>
            <div>
              <h2 className="mb-6">Our Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-2">User-Centered</h3>
                  <p className="text-muted-foreground">
                    We put users at the heart of everything we create, designing experiences that 
                    are intuitive, accessible, and delightful.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Collaborative</h3>
                  <p className="text-muted-foreground">
                    We work closely with our clients, treating their challenges as our own and 
                    bringing their teams into our process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Purposeful</h3>
                  <p className="text-muted-foreground">
                    We believe in design with intention—every element, interaction, and decision 
                    serves a clear purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl mb-3">Discover</h3>
              <p className="text-muted-foreground">
                We immerse ourselves in your business, users, and market to understand the true 
                nature of the challenge.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl mb-3">Define</h3>
              <p className="text-muted-foreground">
                We establish clear goals, requirements, and success metrics to guide the design 
                and development process.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl mb-3">Design</h3>
              <p className="text-muted-foreground">
                We create user-centered designs that balance aesthetics, functionality, and 
                technical feasibility.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl mb-3">Deliver</h3>
              <p className="text-muted-foreground">
                We bring designs to life with clean, efficient code, rigorous testing, and 
                thoughtful implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
