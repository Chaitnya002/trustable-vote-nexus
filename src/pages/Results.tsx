
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CalendarDays, Users, BarChart2, Clock, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/components/layout/AppLayout';

// Mock data for election results
const mockElectionResults = [
  {
    id: '1',
    title: 'City Council Election 2023',
    date: '2023-11-01 to 2023-11-15',
    totalVotes: 24689,
    candidates: [
      { name: 'Jane Doe', votes: 10542, percentage: 42.7, color: '#0056b3' },
      { name: 'John Smith', votes: 8965, percentage: 36.3, color: '#1e9160' },
      { name: 'Robert Johnson', votes: 3621, percentage: 14.7, color: '#ffc107' },
      { name: 'Sarah Williams', votes: 1561, percentage: 6.3, color: '#e53935' }
    ],
    districts: [
      { name: 'District 1', votes: 5120 },
      { name: 'District 2', votes: 6234 },
      { name: 'District 3', votes: 4876 },
      { name: 'District 4', votes: 4329 },
      { name: 'District 5', votes: 4130 }
    ],
    hourlyTurnout: [
      { hour: '8AM', votes: 1245 },
      { hour: '10AM', votes: 2145 },
      { hour: '12PM', votes: 3562 },
      { hour: '2PM', votes: 4789 },
      { hour: '4PM', votes: 6542 },
      { hour: '6PM', votes: 8965 },
      { hour: '8PM', votes: 24689 }
    ]
  },
  {
    id: '3',
    title: 'Community Budget Allocation',
    date: '2023-10-01 to 2023-10-15',
    totalVotes: 18432,
    candidates: [
      { name: 'Parks & Rec Funding', votes: 7812, percentage: 42.4, color: '#0056b3' },
      { name: 'Road Improvements', votes: 6521, percentage: 35.4, color: '#1e9160' },
      { name: 'Library Expansion', votes: 2342, percentage: 12.7, color: '#ffc107' },
      { name: 'Community Events', votes: 1757, percentage: 9.5, color: '#e53935' }
    ],
    districts: [
      { name: 'District 1', votes: 3965 },
      { name: 'District 2', votes: 4257 },
      { name: 'District 3', votes: 3754 },
      { name: 'District 4', votes: 3356 },
      { name: 'District 5', votes: 3100 }
    ],
    hourlyTurnout: [
      { hour: '8AM', votes: 945 },
      { hour: '10AM', votes: 1845 },
      { hour: '12PM', votes: 2912 },
      { hour: '2PM', votes: 4129 },
      { hour: '4PM', votes: 5842 },
      { hour: '6PM', votes: 7565 },
      { hour: '8PM', votes: 18432 }
    ]
  },
  {
    id: '6',
    title: 'Mayoral Election',
    date: '2023-09-01 to 2023-09-15',
    totalVotes: 32154,
    candidates: [
      { name: 'Michael Wilson', votes: 15423, percentage: 48.0, color: '#0056b3' },
      { name: 'Elizabeth Brown', votes: 12876, percentage: 40.0, color: '#1e9160' },
      { name: 'David Thompson', votes: 2487, percentage: 7.7, color: '#ffc107' },
      { name: 'Jennifer Garcia', votes: 1368, percentage: 4.3, color: '#e53935' }
    ],
    districts: [
      { name: 'District 1', votes: 6754 },
      { name: 'District 2', votes: 7123 },
      { name: 'District 3', votes: 6541 },
      { name: 'District 4', votes: 5897 },
      { name: 'District 5', votes: 5839 }
    ],
    hourlyTurnout: [
      { hour: '8AM', votes: 1543 },
      { hour: '10AM', votes: 3254 },
      { hour: '12PM', votes: 5876 },
      { hour: '2PM', votes: 9876 },
      { hour: '4PM', votes: 15423 },
      { hour: '6PM', votes: 22564 },
      { hour: '8PM', votes: 32154 }
    ]
  }
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Results = () => {
  const [selectedElection, setSelectedElection] = React.useState(mockElectionResults[0]);
  
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Election Results</h1>
          <p className="text-muted-foreground">
            View secure, blockchain-verified results from completed elections
          </p>
        </div>
        
        <Tabs 
          defaultValue={selectedElection.id} 
          onValueChange={(value) => {
            const election = mockElectionResults.find(e => e.id === value);
            if (election) setSelectedElection(election);
          }}
          className="mb-8"
        >
          <TabsList className="mb-4">
            {mockElectionResults.map(election => (
              <TabsTrigger key={election.id} value={election.id}>
                {election.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {mockElectionResults.map(election => (
            <TabsContent key={election.id} value={election.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      Election Period
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{election.date}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      Total Voter Turnout
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{election.totalVotes.toLocaleString()}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <BarChart2 className="h-4 w-4 text-muted-foreground" />
                      Winner
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{election.candidates[0].name}</p>
                    <p className="text-sm text-muted-foreground">{election.candidates[0].percentage}% of votes</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Vote Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={election.candidates}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="votes"
                        >
                          {election.candidates.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>District Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={election.districts}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="votes" fill="#0056b3" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Hourly Voter Turnout</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={election.hourlyTurnout}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="votes" fill="#1e9160" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <div className="mt-8 bg-voting-lightBlue p-4 rounded-lg flex items-start gap-3">
                <Info className="h-5 w-5 text-voting-blue mt-0.5" />
                <div>
                  <h3 className="font-medium text-voting-blue mb-1">Blockchain Verification</h3>
                  <p className="text-sm">
                    These results are secured and verified on the blockchain. Each vote has been cryptographically 
                    validated and the tally is immutable. View the public ledger for full transparency.
                  </p>
                  <button className="mt-2 text-sm font-medium text-voting-blue hover:underline">
                    View Blockchain Record
                  </button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Results;
