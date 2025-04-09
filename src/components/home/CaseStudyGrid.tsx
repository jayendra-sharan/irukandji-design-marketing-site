import React from "react";
import { Link } from "react-router-dom";

// Case study data
const caseStudies = [
  {
    id: 1,
    client: "Arctiq",
    title: "Digital Platform Redesign",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    logo: "A",
    slug: "arctiq-platform-redesign",
  },
  {
    id: 111,
    client: "Test Cllient",
    title: "Digital Platform Revamp",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    logo: "A",
    slug: "digital-platform-revamp",
  },
  {
    id: 2,
    client: "Luminar",
    title: "E-Commerce Transformation",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    logo: "L",
    slug: "luminar-ecommerce",
  },
  {
    id: 3,
    client: "Vertex",
    title: "Mobile App Experience",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    logo: "V",
    slug: "vertex-mobile-app",
  },
  {
    id: 4,
    client: "Solstice",
    title: "Brand Identity System",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    logo: "S",
    slug: "solstice-brand-identity",
  },
  {
    id: 5,
    client: "Meridian",
    title: "Web Application Dashboard",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    logo: "M",
    slug: "meridian-web-dashboard",
  },
];

const CaseStudyGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our portfolio of award-winning projects that have helped
            businesses achieve their goals and elevate their digital presence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/case-study/${study.slug}`}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl
                ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                    : "aspect-[4/3]"
                }`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    {study.logo}
                  </div>
                  <span className="text-white font-medium">{study.client}</span>
                </div>
                <h3 className="text-white text-xl md:text-2xl">
                  {study.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
