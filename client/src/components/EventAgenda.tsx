import { Clock } from 'lucide-react';

interface AgendaItem {
  time: string;
  title: string;
  description?: string;
}

const agendaItems: AgendaItem[] = [
  {
    time: '8:30 AM',
    title: 'Networking & Coffee',
    description: 'Connect with local business leaders and innovators'
  },
  {
    time: '9:00 AM',
    title: 'Welcome & The State of Local AI',
    description: 'Opening remarks and overview of AI adoption in Thurston County'
  },
  {
    time: '9:20 AM',
    title: 'Keynote Speaker',
    description: 'AI Expert from Seattle (Speaker TBD)'
  },
  {
    time: '9:50 AM',
    title: 'Local Leader Panel',
    description: 'Insights from businesses successfully implementing AI'
  },
  {
    time: '10:20 AM',
    title: 'Q&A and Closing',
    description: 'Your questions answered by our expert panel'
  }
];

export default function EventAgenda() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary opacity-20"></div>
      
      <div className="space-y-8">
        {agendaItems.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
            
            {/* Content */}
            <div className="pl-16">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono font-medium text-primary">
                  {item.time}
                </span>
              </div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              {item.description && (
                <p className="text-muted-foreground mt-1">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}