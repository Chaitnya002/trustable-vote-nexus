
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, Fingerprint, Smartphone, Lock } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showMfaStep, setShowMfaStep] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!showMfaStep) {
      // First step - validate email/password
      if (email && password) {
        setShowMfaStep(true);
        toast({
          title: "Verification code sent",
          description: "Enter the code sent to your mobile device",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please enter both email and password",
        });
      }
    } else {
      // Second step - validate verification code
      if (verificationCode) {
        toast({
          title: "Login successful",
          description: "You have been securely authenticated",
        });
        // In a real app, we would navigate to the elections page
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please enter the verification code",
        });
      }
    }
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4 max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-voting-lightBlue mb-4">
            <Shield className="h-8 w-8 text-voting-blue" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Secure Voter Login</h1>
          <p className="text-muted-foreground">
            Access your account with multi-factor authentication
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <form onSubmit={handleSubmit}>
            {!showMfaStep ? (
              <>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <Link to="/reset-password" className="text-xs text-voting-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center mb-6">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                    Remember this device
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-voting-blue hover:bg-voting-blue/90">
                  Continue
                </Button>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-voting-blue mb-4 p-2 rounded bg-voting-lightBlue">
                    <Smartphone className="h-4 w-4" />
                    <span>Verification code sent to your registered device</span>
                  </div>
                  
                  <label htmlFor="verification-code" className="block text-sm font-medium mb-1">
                    Enter Verification Code
                  </label>
                  <Input 
                    id="verification-code" 
                    type="text" 
                    placeholder="6-digit code" 
                    maxLength={6}
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-voting-blue hover:bg-voting-blue/90">
                  Verify and Log In
                </Button>
                
                <Button 
                  type="button" 
                  variant="link" 
                  className="w-full mt-2"
                  onClick={() => setShowMfaStep(false)}
                >
                  Back to login
                </Button>
              </>
            )}
          </form>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account yet?{' '}
              <Link to="/register" className="text-voting-blue hover:underline font-medium">
                Register to vote
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="bg-voting-lightGray rounded-lg p-4">
            <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4 text-voting-blue" />
              Secure Authentication
            </h3>
            <p className="text-xs text-muted-foreground">
              TrustVote uses multi-factor authentication to protect your account. 
              Your login information is never stored in plaintext and all communication is encrypted.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;
