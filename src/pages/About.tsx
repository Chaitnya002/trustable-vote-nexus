
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Shield, Lock, UserCheck, History, BarChart4, Globe } from 'lucide-react';

const About = () => {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="py-16 bg-voting-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About TrustVote</h1>
            <p className="text-xl font-medium">
              Secure, transparent, and tamper-proof blockchain-based digital voting for the future of democracy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg mb-8 text-gray-700">
              At TrustVote, we're revolutionizing democratic participation through secure blockchain technology. 
              Our mission is to create a voting platform that ensures every vote is counted accurately, 
              verifiably, and transparently while protecting voter privacy and security.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              We believe that democracy thrives when voting is accessible, secure, and trustworthy. 
              By leveraging blockchain technology, we're addressing the challenges that have undermined 
              traditional voting systems, including fraud, tampering, and accessibility barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-voting-mint/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Features</h2>
            <p className="text-lg text-gray-700">
              Our platform combines cutting-edge blockchain technology with a user-friendly interface 
              to deliver a secure and transparent voting experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-voting-blue/10 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-voting-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Immutable Records</h3>
              <p className="text-gray-700">
                Once recorded on the blockchain, votes cannot be altered or deleted, ensuring the integrity of every election.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-voting-blue/10 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-voting-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">End-to-End Encryption</h3>
              <p className="text-gray-700">
                Advanced encryption protects the content of each vote, ensuring voter privacy and preventing third-party interference.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-voting-blue/10 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-voting-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Secure Authentication</h3>
              <p className="text-gray-700">
                Multi-factor authentication and biometric verification ensure that only eligible voters can participate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-voting-blue/10 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                <History className="h-6 w-6 text-voting-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Real-Time Auditing</h3>
              <p className="text-gray-700">
                Transparent processes allow voters to verify their own votes and observe the overall integrity of the election.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-voting-blue/10 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-voting-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Results</h3>
              <p className="text-gray-700">
                Vote counting happens automatically and in real-time, eliminating delays and reducing administrative costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-voting-blue/10 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-voting-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Global Accessibility</h3>
              <p className="text-gray-700">
                Vote from anywhere with internet access, removing geographical barriers to democratic participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Our Team</h2>
            <p className="text-lg mb-12 text-gray-700 text-center">
              TrustVote was developed by a team of cybersecurity experts, blockchain developers, 
              and election specialists committed to improving democratic processes worldwide.
            </p>

            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Commitment to Security</h3>
              <p className="text-gray-700 mb-4">
                Our team follows the highest standards of security in software development, with regular 
                third-party audits and open-source code review to ensure the integrity of our platform.
              </p>
              <p className="text-gray-700 mb-4">
                We collaborate with election officials, cybersecurity researchers, and democratic institutions 
                to continuously improve our platform and adapt to emerging security challenges.
              </p>
              <p className="text-gray-700">
                TrustVote is committed to transparency in all aspects of our operation, publishing regular 
                reports on system performance, security tests, and user adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-voting-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
            <p className="text-lg mb-8 font-medium">
              TrustVote leverages state-of-the-art blockchain technology to create an immutable, 
              transparent voting record while maintaining voter privacy through advanced cryptographic techniques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/30">
                <h3 className="text-xl font-bold mb-3">Blockchain Ledger</h3>
                <p className="text-white">
                  Distributed and decentralized storage ensures no single point of failure or vulnerability.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/30">
                <h3 className="text-xl font-bold mb-3">Zero-Knowledge Proofs</h3>
                <p className="text-white">
                  Cryptographic verification without revealing private information, protecting voter identity.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/30">
                <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
                <p className="text-white">
                  Automated and transparent vote counting with predefined rules that cannot be altered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default About;
