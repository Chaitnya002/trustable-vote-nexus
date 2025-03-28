
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Users, Clock, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ElectionProps {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'ended';
  type: string;
  candidateCount: number;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-voting-green text-white';
    case 'upcoming':
      return 'bg-voting-amber text-black';
    case 'ended':
      return 'bg-gray-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'active':
      return 'Active Now';
    case 'upcoming':
      return 'Upcoming';
    case 'ended':
      return 'Completed';
    default:
      return 'Unknown';
  }
};

const ElectionCard = ({ id, title, description, startDate, endDate, status, type, candidateCount }: ElectionProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className={`h-2 ${getStatusColor(status)}`}></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge variant="outline" className={`${status === 'active' ? 'border-voting-green text-voting-green' : status === 'upcoming' ? 'border-voting-amber text-voting-amber' : 'border-gray-500 text-gray-500'}`}>
            {getStatusText(status)}
          </Badge>
          <Badge variant="secondary">{type}</Badge>
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span>
              {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{candidateCount} Candidates</span>
          </div>
          
          {status === 'active' && (
            <div className="flex items-center gap-2 text-sm text-voting-green">
              <Clock className="h-4 w-4" />
              <span>Vote now</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-0">
        <Link 
          to={`/elections/${id}`}
          className="py-3 px-6 w-full text-sm font-medium flex items-center justify-between text-voting-blue hover:bg-voting-lightBlue transition-colors"
        >
          <span>{status === 'active' ? 'Cast your vote' : status === 'upcoming' ? 'View details' : 'View results'}</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ElectionCard;
