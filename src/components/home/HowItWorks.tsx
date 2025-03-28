
import React from 'react';
import { UserPlus, Vote, Lock, ShieldCheck, CheckCircle2, BarChart4 } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-white" />,
    title: 'Secure Registration',
    description: 'Register with valid ID and create your secure voter account with multi-factor authentication.'
  },
  {
    icon: <Vote className="h-8 w-8 text-white" />,
    title: 'Cast Your Vote',
    description: 'View available elections, research candidates, and cast your vote through an intuitive interface.'
  },
  {
    icon: <Lock className="h-8 w-8 text-white" />,
    title: 'Encryption',
    description: 'Your vote is immediately encrypted end-to-end to ensure complete privacy and security.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: 'Blockchain Recording',
    description: 'The encrypted vote is recorded on a distributed blockchain ledger, making it immutable and tamper-proof.'
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-white" />,
    title: 'Vote Verification',
    description: 'Receive a unique receipt and transaction ID to verify your vote was recorded correctly.'
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-white" />,
    title: 'Results Tabulation',
    description: 'Votes are tallied automatically with cryptographic verification, providing accurate, real-time results.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-voting-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How Blockchain Voting Works</h2>
          <p className="text-white text-lg font-medium">
            Our secure blockchain voting process combines cutting-edge technology with a simple user experience.
            Here's how your vote goes from your device to the blockchain ledger.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/15 backdrop-blur-sm p-6 rounded-lg border border-white/30"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards',
                opacity: 0 
              }}
            >
              <div className="bg-voting-lightBlue p-3 rounded-lg inline-flex items-center justify-center mb-4 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-white font-medium">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-white text-lg font-medium">
            Every step of the process is designed with security and transparency as top priorities,
            ensuring your vote counts exactly as you intended.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
