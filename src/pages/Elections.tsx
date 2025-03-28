
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Calendar, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/components/layout/AppLayout';
import ElectionCard, { ElectionProps } from '@/components/elections/ElectionCard';

// Mock data for elections
const mockElections: ElectionProps[] = [
  {
    id: '1',
    title: 'City Council Election 2023',
    description: 'Vote for your district representative for the 2023-2027 term',
    startDate: '2023-11-01',
    endDate: '2023-11-15',
    status: 'active',
    type: 'Municipal',
    candidateCount: 5
  },
  {
    id: '2',
    title: 'School Board Election',
    description: 'Select members for the district school board oversight committee',
    startDate: '2023-11-10',
    endDate: '2023-11-20',
    status: 'upcoming',
    type: 'Education',
    candidateCount: 8
  },
  {
    id: '3',
    title: 'Community Budget Allocation',
    description: 'Vote on how to allocate the community improvement fund',
    startDate: '2023-10-01',
    endDate: '2023-10-15',
    status: 'ended',
    type: 'Budget',
    candidateCount: 4
  },
  {
    id: '4',
    title: 'City Charter Amendment',
    description: 'Vote on proposed amendments to the city charter',
    startDate: '2023-11-05',
    endDate: '2023-11-25',
    status: 'active',
    type: 'Legislative',
    candidateCount: 2
  },
  {
    id: '5',
    title: 'Park Development Proposal',
    description: 'Choose between competing proposals for the new city park',
    startDate: '2023-12-01',
    endDate: '2023-12-15',
    status: 'upcoming',
    type: 'Infrastructure',
    candidateCount: 3
  },
  {
    id: '6',
    title: 'Mayoral Election',
    description: 'Elect the mayor for the next 4-year term',
    startDate: '2023-09-01',
    endDate: '2023-09-15',
    status: 'ended',
    type: 'Municipal',
    candidateCount: 4
  }
];

const Elections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = React.useState('');
  const statusFilter = searchParams.get('status') || 'all';
  
  const filteredElections = React.useMemo(() => {
    return mockElections.filter(election => {
      const matchesSearch = election.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          election.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || election.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);
  
  const handleStatusChange = (value: string) => {
    setSearchParams({ status: value });
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The filtering is already handled by the useMemo effect
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Elections</h1>
            <p className="text-muted-foreground">
              View all available elections and cast your secure blockchain vote
            </p>
          </div>
          
          <form onSubmit={handleSearch} className="flex w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search elections..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" className="ml-2 bg-voting-blue hover:bg-voting-blue/90">Search</Button>
          </form>
        </div>
        
        <Tabs defaultValue={statusFilter} onValueChange={handleStatusChange} className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="all" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              All
            </TabsTrigger>
            <TabsTrigger value="active" className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Active
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="ended" className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Ended
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredElections.map(election => (
            <ElectionCard key={election.id} {...election} />
          ))}
          
          {filteredElections.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">No elections found matching your criteria</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSearchParams({ status: 'all' });
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Elections;
