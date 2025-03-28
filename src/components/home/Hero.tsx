
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-voting-lightGray">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-voting-blue/20 text-voting-blue font-medium animate-fade-in">
            <Shield className="h-4 w-4" />
            <span>Blockchain-Powered Secure Voting</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-voting-blue animate-slide-up">
            Secure, Transparent Elections for the Digital Age
          </h1>
          
          <p className="text-lg font-medium text-gray-700 max-w-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            TrustVote leverages blockchain technology to provide tamper-proof, 
            verifiable voting that ensures every vote is counted accurately and securely.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link to="/register">
              <Button className="bg-voting-blue hover:bg-voting-blue/90 gap-2 font-medium">
                Register to Vote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/elections">
              <Button variant="outline" className="gap-2 border-voting-blue text-voting-blue hover:bg-voting-blue/10">
                View Active Elections
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-voting-green mt-0.5" />
              <span className="text-sm font-medium">Immutable vote records</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-voting-green mt-0.5" />
              <span className="text-sm font-medium">End-to-end encryption</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-voting-green mt-0.5" />
              <span className="text-sm font-medium">Real-time verification</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end relative animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-voting-blue rounded-lg opacity-10 blur-xl"></div>
            <div className="relative bg-white border border-border shadow-lg rounded-lg p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-voting-green"></div>
                  <span className="font-medium text-sm">Secure Blockchain Vote</span>
                </div>
                <Lock className="h-5 w-5 text-voting-blue" />
              </div>
              
              <div className="space-y-4">
                <div className="p-3 border border-border rounded-md bg-voting-lightGray">
                  <h4 className="text-sm font-semibold mb-2 text-gray-800">City Council Election 2023</h4>
                  <p className="text-xs text-gray-700">Cast your secure vote for your district representative</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-voting-lightGray cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-medium text-sm">JD</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Jane Doe</div>
                      <div className="text-xs text-gray-700">District 5 Candidate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-md bg-voting-lightBlue/20 border border-voting-blue/20">
                    <div className="h-10 w-10 rounded-full bg-voting-blue/10 flex items-center justify-center">
                      <span className="font-medium text-sm text-voting-blue">JS</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">John Smith</div>
                      <div className="text-xs text-gray-700">District 5 Candidate</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-voting-blue ml-auto" />
                  </div>
                </div>
                
                <button className="w-full py-2 bg-voting-blue text-white rounded-md font-medium text-sm hover:bg-voting-blue/90 transition-colors">
                  Confirm Vote
                </button>
                
                <div className="text-xs text-center font-medium text-gray-700">
                  Your vote is encrypted and securely recorded on the blockchain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
