
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Calendar, Clock, Users, CheckCircle2, LockKeyhole } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/components/layout/AppLayout';

// Mock data for this specific election
const electionData = {
  id: '1',
  title: 'City Council Election 2023',
  description: 'Vote for your district representative for the 2023-2027 term. The elected official will represent your interests in city government and make decisions about local policies, budgets, and urban development.',
  startDate: '2023-11-01',
  endDate: '2023-11-15',
  status: 'active',
  type: 'Municipal',
  candidateCount: 5,
  voterCount: 12458,
  candidates: [
    {
      id: '1',
      name: 'Jane Doe',
      party: 'Progressive Party',
      position: 'District 5 Candidate',
      bio: 'Former community organizer with 10 years of experience in public service. Focused on affordable housing and sustainable development.',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'John Smith',
      party: 'Citizens Alliance',
      position: 'District 5 Candidate',
      bio: 'Business owner and lifelong resident of District 5. Priorities include public safety, economic growth, and infrastructure improvement.',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      party: 'Community First',
      position: 'District 5 Candidate',
      bio: 'Civil engineer with expertise in urban planning. Advocate for smart city initiatives and public transportation improvements.',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      name: 'Robert Johnson',
      party: 'Independent',
      position: 'District 5 Candidate',
      bio: 'Education administrator committed to youth programs and community engagement. Focuses on inclusive governance and transparency.',
      image: '/placeholder.svg'
    },
    {
      id: '5',
      name: 'Sarah Lee',
      party: 'Green Coalition',
      position: 'District 5 Candidate',
      bio: 'Environmental scientist and community activist. Prioritizes sustainability, parks, and green spaces throughout the district.',
      image: '/placeholder.svg'
    }
  ]
};

const ElectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedCandidateId, setSelectedCandidateId] = React.useState<string | null>(null);
  
  const handleVote = () => {
    if (!selectedCandidateId) return;
    // In a real app, this would submit the vote to the blockchain
    alert(`Your vote for candidate ${selectedCandidateId} has been securely recorded on the blockchain`);
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <Link to="/elections" className="flex items-center gap-2 text-voting-blue mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Elections
        </Link>
        
        <div className="border-l-4 border-voting-blue pl-4 mb-8">
          <h1 className="text-3xl font-bold mb-2">{electionData.title}</h1>
          <Badge variant="outline" className="border-voting-blue text-voting-blue">
            {electionData.status === 'active' ? 'Active Now' : electionData.status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Election Information</h2>
                <p className="text-muted-foreground mb-6">{electionData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-voting-skyBlue/30 p-2">
                      <Calendar className="h-5 w-5 text-voting-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Election Period</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(electionData.startDate).toLocaleDateString()} - {new Date(electionData.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-voting-skyBlue/30 p-2">
                      <Users className="h-5 w-5 text-voting-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Candidates</p>
                      <p className="text-sm text-muted-foreground">{electionData.candidateCount} candidates running</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-voting-skyBlue/30 p-2">
                      <Clock className="h-5 w-5 text-voting-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Status</p>
                      <p className="text-sm text-voting-green font-medium">
                        {electionData.status === 'active' ? 'Vote now - Active Election' : 
                         electionData.status === 'upcoming' ? 'Coming Soon' : 'Election Ended'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-voting-skyBlue/30 p-2">
                      <Shield className="h-5 w-5 text-voting-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Security</p>
                      <p className="text-sm text-muted-foreground">End-to-end encryption, blockchain secured</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
                      
            <Tabs defaultValue="vote" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="vote">Vote</TabsTrigger>
                <TabsTrigger value="info">Candidates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vote" className="border rounded-md p-6 mt-4">
                <h2 className="text-xl font-semibold mb-4">Cast Your Vote</h2>
                <p className="text-muted-foreground mb-6">
                  Select a candidate below to cast your secure blockchain vote in this election. 
                  Your vote will be encrypted and permanently recorded on the blockchain.
                </p>
                
                <div className="space-y-4 mb-6">
                  {electionData.candidates.map((candidate) => (
                    <div 
                      key={candidate.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedCandidateId === candidate.id 
                          ? 'border-voting-blue bg-voting-skyBlue/20 shadow-sm' 
                          : 'hover:border-voting-lightBlue hover:bg-voting-mint/10'
                      }`}
                      onClick={() => setSelectedCandidateId(candidate.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-voting-lightBlue rounded-full flex items-center justify-center text-voting-blue font-medium">
                          {candidate.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.party}</p>
                        </div>
                        {selectedCandidateId === candidate.id && (
                          <CheckCircle2 className="h-5 w-5 text-voting-blue" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button 
                    onClick={handleVote}
                    disabled={!selectedCandidateId}
                    className="bg-voting-blue hover:bg-voting-blue/90 py-6 text-base"
                  >
                    <LockKeyhole className="mr-2 h-4 w-4" />
                    Cast Secure Blockchain Vote
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground pt-2">
                    Your vote is secured with end-to-end encryption and recorded on an immutable blockchain ledger
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="info" className="mt-4">
                <div className="space-y-6">
                  {electionData.candidates.map((candidate) => (
                    <Card key={candidate.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-20 h-20 rounded-full bg-voting-lightBlue/60 flex items-center justify-center text-voting-blue text-xl font-medium">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-medium">{candidate.name}</h3>
                            <p className="text-voting-blue font-medium text-sm">{candidate.party}</p>
                            <p className="text-sm text-muted-foreground mb-2">{candidate.position}</p>
                            <p className="text-sm">{candidate.bio}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Election Statistics</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Voter Turnout</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <div className="h-2 bg-voting-mint/30 rounded-full">
                      <div className="h-2 bg-voting-blue rounded-full" style={{ width: '32%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {electionData.voterCount.toLocaleString()} votes cast so far
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-3">Blockchain Security</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-voting-blue"></div>
                        <span className="text-sm">Real-time vote verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-voting-blue"></div>
                        <span className="text-sm">Tamper-proof vote recording</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-voting-blue"></div>
                        <span className="text-sm">End-to-end encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-voting-blue"></div>
                        <span className="text-sm">Anonymous vote tallying</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-3">Verification</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      After voting, you'll receive a unique receipt with your transaction ID
                      to verify your vote on the blockchain.
                    </p>
                    <Link to="/results">
                      <Button variant="outline" className="w-full">
                        View Live Results
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ElectionDetail;
