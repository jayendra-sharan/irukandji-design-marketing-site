
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = ({ toggleContactForm }: { toggleContactForm: () => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl">
          DesignZenith
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Button 
            onClick={toggleContactForm}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Get in Touch
          </Button>
        </nav>
        <Button 
          onClick={toggleContactForm}
          className="md:hidden bg-accent text-accent-foreground hover:bg-accent/90"
          size="sm"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
