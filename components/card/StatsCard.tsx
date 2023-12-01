import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  className?: string;
  loading: boolean;
  icon?: ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  className,
  loading,
  icon,
}) => {
  return (
    <Card className={cn('shadow-md', className)}>
      <CardHeader className=" flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
