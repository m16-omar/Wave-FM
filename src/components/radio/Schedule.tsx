import React, { useState } from 'react';
import { WEEKLY_SCHEDULE } from '../../data/schedule';
import { DayOfWeek } from '../../types/schedule';
import { ScheduleItem } from './ScheduleItem';
import { Tabs, TabItem } from '../ui/Tabs';
import { clsx } from 'clsx';

interface ScheduleProps {
  className?: string;
  defaultDay?: DayOfWeek;
}

export const Schedule: React.FC<ScheduleProps> = ({
  className,
  defaultDay = 'monday',
}) => {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(defaultDay);

  const dayTabs: TabItem[] = [
    { id: 'monday', label: 'Monday', badge: 'TODAY' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' },
  ];

  const currentSlots = WEEKLY_SCHEDULE[selectedDay] || [];

  return (
    <div className={clsx('space-y-6', className)}>
      {/* Day Selector Tabs */}
      <div className="flex items-center justify-start overflow-x-auto pb-2">
        <Tabs
          tabs={dayTabs}
          activeTab={selectedDay}
          onChange={(tabId) => setSelectedDay(tabId as DayOfWeek)}
          variant="pills"
        />
      </div>

      {/* Schedule Items for Selected Day */}
      <div className="space-y-3">
        {currentSlots.length > 0 ? (
          currentSlots.map((item) => (
            <ScheduleItem key={item.id} item={item} />
          ))
        ) : (
          <div className="text-center py-12 bg-background-card rounded-2xl border border-border">
            <p className="text-gray-400 text-sm">
              Non-stop hit music playlist broadcasting on this day.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
