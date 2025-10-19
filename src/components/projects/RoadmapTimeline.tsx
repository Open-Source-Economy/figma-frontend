import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Badge } from '../ui/badge';
import type { RoadmapItem } from '../../data/projectDetailData';

interface RoadmapTimelineProps {
  shipped: RoadmapItem[];
  inProgress: RoadmapItem[];
  upcoming: RoadmapItem[];
}

export function RoadmapTimeline({ shipped, inProgress, upcoming }: RoadmapTimelineProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Recently Shipped */}
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle className="h-5 w-5 text-brand-success" />
          <h4 className="text-brand-neutral-900">Recently Shipped</h4>
        </div>
        <div className="space-y-4">
          {shipped.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-brand-success/5 border border-brand-success/20 rounded-lg"
            >
              <div className="flex items-start justify-between mb-2">
                <h5 className="text-brand-neutral-800">{item.title}</h5>
                {item.quarter && (
                  <Badge variant="outline" className="text-brand-success border-brand-success/30">
                    {item.quarter}
                  </Badge>
                )}
              </div>
              <p className="text-brand-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* In Progress */}
      <div className="bg-brand-card-blue border border-brand-accent/30 rounded-xl p-6 md:scale-105 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="h-5 w-5 text-brand-accent animate-pulse" />
          <h4 className="text-brand-neutral-900">In Progress</h4>
        </div>
        <div className="space-y-4">
          {inProgress.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-brand-accent/10 border border-brand-accent/30 rounded-lg"
            >
              <div className="flex items-start justify-between mb-2">
                <h5 className="text-brand-neutral-800">{item.title}</h5>
                {item.quarter && (
                  <Badge className="bg-brand-accent text-white border-0">
                    {item.quarter}
                  </Badge>
                )}
              </div>
              <p className="text-brand-neutral-600">{item.description}</p>
              <div className="mt-3 pt-3 border-t border-brand-accent/20">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-brand-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-brand-accent text-sm">Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming */}
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Circle className="h-5 w-5 text-brand-highlight" />
          <h4 className="text-brand-neutral-900">Upcoming</h4>
        </div>
        <div className="space-y-4">
          {upcoming.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-brand-highlight/5 border border-brand-highlight/20 rounded-lg"
            >
              <div className="flex items-start justify-between mb-2">
                <h5 className="text-brand-neutral-800">{item.title}</h5>
                {item.quarter && (
                  <Badge variant="outline" className="text-brand-highlight border-brand-highlight/30">
                    {item.quarter}
                  </Badge>
                )}
              </div>
              <p className="text-brand-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
