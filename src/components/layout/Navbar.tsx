
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Vote, BarChart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-border py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-voting-blue" />
          <span className="font-bold text-lg text-voting-blue">TrustVote</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-voting-blue transition-colors">
            Home
          </Link>
          <Link to="/elections" className="text-sm font-medium hover:text-voting-blue transition-colors">
            Elections
          </Link>
          <Link to="/results" className="text-sm font-medium hover:text-voting-blue transition-colors">
            Results
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-voting-blue transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-voting-blue hover:bg-voting-blue/90">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-50 w-full bg-background border-b border-border shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="p-2 hover:bg-muted rounded-md transition-colors">
              Home
            </Link>
            <Link to="/elections" className="p-2 hover:bg-muted rounded-md transition-colors">
              Elections
            </Link>
            <Link to="/results" className="p-2 hover:bg-muted rounded-md transition-colors">
              Results
            </Link>
            <Link to="/about" className="p-2 hover:bg-muted rounded-md transition-colors">
              About
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link to="/login">
                <Button variant="outline" className="w-full justify-start">
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full justify-start bg-voting-blue hover:bg-voting-blue/90">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
