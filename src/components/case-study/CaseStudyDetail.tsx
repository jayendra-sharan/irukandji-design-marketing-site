
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Sample case study data
const caseStudies = [
  {
    slug: "arctiq-platform-redesign",
    client: "Arctiq",
    title: "Digital Platform Redesign",
    heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    logo: "A",
    overview: "A complete overhaul of Arctiq's digital platform, focused on improving user experience and conversion rates.",
    challenge: "Arctiq's legacy platform had become outdated, with a complex user journey that resulted in high bounce rates and low conversion. Our challenge was to simplify the user experience while maintaining the extensive functionality needed by their diverse customer base.",
    approach: "We began with extensive user research to understand pain points and motivations. Using this insight, we created a streamlined information architecture and intuitive UI that guided users more effectively toward conversion points.",
    solution: [
      {
        title: "User-Centered Design",
        description: "Implementing a design system that prioritized clarity and ease of use, with consistent patterns throughout the experience.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
      },
      {
        title: "Responsive Framework",
        description: "Building a fully responsive design that offered seamless experiences across all device types and screen sizes.",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
      },
      {
        title: "Performance Optimization",
        description: "Restructuring the platform architecture to improve load times and overall performance metrics.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
      }
    ],
    results: "The redesigned platform saw a 45% reduction in bounce rate, a 68% increase in time on site, and a 32% improvement in conversion rate within the first three months. Mobile engagement increased by 85%, opening up a previously underperforming channel.",
    testimonial: {
      quote: "The team at DesignZenith transformed our digital presence. Their strategic approach not only improved our metrics but fundamentally changed how our customers interact with our brand.",
      author: "Sarah Chen",
      role: "Chief Digital Officer, Arctiq"
    }
  },
  {
    slug: "luminar-ecommerce",
    client: "Luminar",
    title: "E-Commerce Transformation",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    logo: "L",
    overview: "A comprehensive e-commerce solution that unified Luminar's global product offerings into a cohesive shopping experience.",
    challenge: "Luminar had acquired multiple brands, each with separate e-commerce systems, creating a fragmented customer experience and operational inefficiencies. They needed a unified approach that maintained brand identity while streamlining operations.",
    approach: "We conducted a thorough audit of all existing systems, identifying common patterns and unique requirements. Working closely with stakeholders from each brand, we developed a unified e-commerce architecture that allowed for brand-specific customization.",
    solution: [
      {
        title: "Unified Platform Architecture",
        description: "Creating a scalable e-commerce foundation that could support multiple brands while sharing core functionality.",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
      },
      {
        title: "Personalized User Journeys",
        description: "Implementing sophisticated recommendation algorithms and personalized content delivery to enhance the shopping experience.",
        image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80"
      },
      {
        title: "Streamlined Checkout Process",
        description: "Redesigning the checkout flow to minimize steps and maximize conversion, with integrated cross-selling opportunities.",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
      }
    ],
    results: "The unified platform resulted in a 28% increase in average order value, 52% higher cross-brand purchases, and a 40% reduction in cart abandonment. Operational costs decreased by 35% due to consolidated systems.",
    testimonial: {
      quote: "DesignZenith delivered much more than an e-commerce site—they transformed how we think about our digital sales channels and created new growth opportunities we hadn't even considered.",
      author: "Michael Roberts",
      role: "VP of Digital Commerce, Luminar"
    }
  },
  {
    slug: "vertex-mobile-app",
    client: "Vertex",
    title: "Mobile App Experience",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    logo: "V",
    overview: "A native mobile application that transformed Vertex's customer service capabilities and created a new engagement channel.",
    challenge: "Vertex needed to reduce pressure on their call centers while improving customer satisfaction. They sought a mobile solution that would allow customers to self-serve for common requests while feeling more connected to the brand.",
    approach: "We developed a comprehensive mobile strategy, identifying key functionality that would deliver the greatest value to both customers and the business. The design process involved extensive user testing to refine interactions.",
    solution: [
      {
        title: "Intuitive Self-Service Tools",
        description: "Creating easy-to-use interfaces for common customer service tasks, reducing the need for call center contacts.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
      },
      {
        title: "Personalized Dashboard",
        description: "Developing a customizable home screen that presents the most relevant information and actions for each user.",
        image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80"
      },
      {
        title: "Integrated Communication",
        description: "Implementing in-app messaging and notification systems that provide timely, relevant updates to users.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
      }
    ],
    results: "Within six months of launch, the app was adopted by 64% of Vertex's customer base. Call center volume decreased by 38%, customer satisfaction scores improved by 27%, and the app generated 15% in additional revenue through contextual offers.",
    testimonial: {
      quote: "The mobile app has become our most important customer touchpoint. DesignZenith's strategic approach resulted in a solution that delights our customers while delivering measurable business value.",
      author: "Jennifer Lopez",
      role: "Customer Experience Director, Vertex"
    }
  },
  {
    slug: "solstice-brand-identity",
    client: "Solstice",
    title: "Brand Identity System",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    logo: "S",
    overview: "A comprehensive brand identity system for Solstice's launch, establishing them as a premium player in their industry.",
    challenge: "As a new entrant in a crowded market, Solstice needed a distinctive brand identity that would convey their innovative approach and premium positioning, while being flexible enough to grow with the company.",
    approach: "We conducted extensive market research and competitive analysis to identify opportunity spaces. Working closely with Solstice's leadership team, we developed a brand strategy that authentically expressed their values and vision.",
    solution: [
      {
        title: "Visual Identity System",
        description: "Creating a cohesive visual language including logo, typography, color palette, and imagery guidelines.",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80"
      },
      {
        title: "Brand Expression Guidelines",
        description: "Developing comprehensive guidelines for tone of voice, messaging hierarchies, and content strategy.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
      },
      {
        title: "Application Suite",
        description: "Designing a suite of applications across digital and physical touchpoints to bring the brand to life.",
        image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80"
      }
    ],
    results: "The new brand identity helped Solstice secure Series A funding 30% above their target. Brand recognition reached 45% among their target audience within the first year, and they successfully positioned as a premium alternative with pricing 20% above market average.",
    testimonial: {
      quote: "DesignZenith didn't just give us a logo—they gave us a complete identity that perfectly captures who we are and where we're going. The system has been invaluable as we've grown and expanded into new markets.",
      author: "David Park",
      role: "Founder & CEO, Solstice"
    }
  },
  {
    slug: "meridian-web-dashboard",
    client: "Meridian",
    title: "Web Application Dashboard",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    logo: "M",
    overview: "A sophisticated dashboard interface for Meridian's data analytics platform, making complex information accessible and actionable.",
    challenge: "Meridian's powerful analytics engine generated valuable insights, but users struggled to navigate the complex data structures and extract meaningful conclusions. They needed an interface that would democratize data access across the organization.",
    approach: "We embedded with Meridian's technical and business teams to understand the underlying data structures and user needs. Through iterative prototyping and testing, we developed information hierarchies and visualization approaches that made complex data intuitive.",
    solution: [
      {
        title: "Information Architecture",
        description: "Restructuring how data is organized and presented to align with users' mental models and business objectives.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
      },
      {
        title: "Data Visualization System",
        description: "Creating a library of visualization components that accurately represent different data types while maintaining visual consistency.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
      },
      {
        title: "Customization Framework",
        description: "Developing a system that allows users to configure their dashboard based on their specific roles and information needs.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
      }
    ],
    results: "User engagement with the analytics platform increased by 350%, with the average user session length doubling. Data-driven decision making improved across the organization, with 78% of users reporting that the dashboard directly informed business decisions.",
    testimonial: {
      quote: "The dashboard transformed how our organization uses data. What was once the domain of specialists is now accessible to everyone, driving better decisions at all levels. DesignZenith's work didn't just improve our product—it changed our company culture.",
      author: "Alex Rodriguez",
      role: "Chief Data Officer, Meridian"
    }
  }
];

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudies.find((study) => study.slug === slug);
  
  if (!caseStudy) {
    return <Navigate to="/not-found" />;
  }
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${caseStudy.heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto h-full flex items-end pb-16 relative z-10">
          <div className="text-white max-w-4xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                {caseStudy.logo}
              </div>
              <h4 className="text-xl font-medium">{caseStudy.client}</h4>
            </div>
            <h1 className="mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {caseStudy.overview}
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2">
              <h2 className="mb-6">Challenge</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="mb-6">Approach</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.approach}</p>
            </div>
          </div>
          
          <h2 className="mb-12">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {caseStudy.solution.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-6 overflow-hidden rounded-lg h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mb-3 text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="mb-6">Results</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.results}</p>
            </div>
            <div className="bg-muted rounded-xl p-8">
              <blockquote className="text-xl font-medium mb-6">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-muted-foreground">{caseStudy.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
