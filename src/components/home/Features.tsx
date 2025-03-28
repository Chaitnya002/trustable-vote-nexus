
import React from 'react';
import { 
  Shield, 
  LockKeyhole, 
  Fingerprint, 
  FileCheck, 
  Eye, 
  Smartphone, 
  Clock, 
  BarChart3
} from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-voting-blue" />,
    title: 'Blockchain Security',
    description: 'Votes are stored on an immutable blockchain ledger, preventing tampering and ensuring the integrity of each election.'
  },
  {
    icon: <LockKeyhole className="h-10 w-10 text-voting-blue" />,
    title: 'End-to-End Encryption',
    description: 'Advanced encryption protects your vote from the moment it\'s cast through final tallying, ensuring complete privacy.'
  },
  {
    icon: <Fingerprint className="h-10 w-10 text-voting-blue" />,
    title: 'Secure Authentication',
    description: 'Multi-factor authentication and biometric verification ensure only eligible voters can participate.'
  },
  {
    icon: <FileCheck className="h-10 w-10 text-voting-blue" />,
    title: 'Vote Verification',
    description: 'Verify your vote was recorded correctly with a unique receipt and blockchain transaction ID.'
  },
  {
    icon: <Eye className="h-10 w-10 text-voting-blue" />,
    title: 'Full Transparency',
    description: 'Public ledger allows for independent verification of election results while maintaining voter anonymity.'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-voting-blue" />,
    title: 'Vote Anywhere',
    description: 'Cast your vote securely from any device with internet access, increasing participation and accessibility.'
  },
  {
    icon: <Clock className="h-10 w-10 text-voting-blue" />,
    title: 'Real-Time Results',
    description: 'Election results are calculated and displayed in real-time as votes are cast and verified.'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-voting-blue" />,
    title: 'Detailed Analytics',
    description: 'Access comprehensive election statistics and turnout data for complete electoral transparency.'
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Secure Voting Features</h2>
          <p className="text-gray-700 font-medium">
            Our blockchain-based voting platform combines cutting-edge security with 
            an intuitive user experience to deliver the most trustworthy digital elections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards',
                opacity: 0 
              }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
