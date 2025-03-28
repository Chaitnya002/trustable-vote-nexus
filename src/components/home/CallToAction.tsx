
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to experience secure digital voting?</h2>
          <p className="text-xl text-gray-700 font-medium mb-8 max-w-2xl mx-auto">
            Join thousands of voters who have already discovered the security and 
            convenience of blockchain-based voting with TrustVote.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-voting-blue hover:bg-voting-blue/90 gap-2 font-medium">
                Register to Vote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/elections">
              <Button size="lg" variant="outline" className="gap-2 border-voting-blue text-voting-blue hover:bg-voting-blue/10 font-medium">
                View Active Elections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
