
import React from 'react';
import { Shield, LockKeyhole, Fingerprint, FileCheck } from 'lucide-react';

const SecurityFeatures = () => {
  return (
    <section className="py-20 px-4 bg-voting-lightGray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-voting-blue p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Security by Design
              </h2>
              <p className="mb-6 text-white/80">
                Every aspect of TrustVote is built with security as the foundation,
                ensuring your vote remains private, secure, and tamper-proof.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-white/20 p-1 mt-0.5">
                    <LockKeyhole className="h-4 w-4" />
                  </div>
                  <span className="text-sm">End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-white/20 p-1 mt-0.5">
                    <Fingerprint className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Biometric verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-white/20 p-1 mt-0.5">
                    <FileCheck className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Immutable blockchain record</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/3 p-8">
              <h3 className="text-xl font-medium mb-6">Our Security Commitment</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-voting-lightBlue flex items-center justify-center text-voting-blue">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Multi-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      We implement rigorous identity verification using multiple factors, including 
                      something you know (password), something you have (device), and something you are (biometrics).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-voting-lightBlue flex items-center justify-center text-voting-blue">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Distributed Ledger Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      Your vote is recorded across a distributed network of nodes, making it virtually impossible 
                      to alter any recorded votes without consensus from the entire network.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-voting-lightBlue flex items-center justify-center text-voting-blue">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Independent Security Audits</h4>
                    <p className="text-sm text-muted-foreground">
                      Our platform undergoes regular security audits by third-party experts, and all source 
                      code is open for public review and scrutiny.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-voting-lightBlue flex items-center justify-center text-voting-blue">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Voter Privacy</h4>
                    <p className="text-sm text-muted-foreground">
                      While votes are verified and recorded publicly on the blockchain, sophisticated 
                      cryptographic techniques ensure your individual vote remains private.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
