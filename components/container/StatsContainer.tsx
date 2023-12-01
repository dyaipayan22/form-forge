import { ViewIcon, FormInput, MousePointerClick, Split } from 'lucide-react';

import { GetFormStats } from '@/actions/form';
import StatsCard from '../card/StatsCard';

interface StatsCardContainerProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

export async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsContainer loading={false} data={stats} />;
}

function StatsContainer({ data, loading }: StatsCardContainerProps) {
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
      <StatsCard
        title="Total Visits"
        icon={<ViewIcon className="text-blue-600" />}
        description="All time form visits"
        value={data?.visits.toLocaleString() || ''}
        loading={loading}
        className="shadow-blue-600"
      />
      <StatsCard
        title="Total Submissions"
        icon={<FormInput className="text-yellow-600" />}
        description="All time form submissions"
        value={data?.submissions.toLocaleString() || ''}
        loading={loading}
        className="shadow-yellow-600"
      />
      <StatsCard
        title="Submission Rate"
        icon={<MousePointerClick className="text-green-600" />}
        description="Visits that result in submission"
        value={data?.submissionRate.toLocaleString() + '%' || ''}
        loading={loading}
        className="shadow-green-600"
      />
      <StatsCard
        title="Bounce Rate"
        icon={<Split className="text-red-600" />}
        description="Visits that leave without interacting"
        value={data?.bounceRate.toLocaleString() + '%' || ''}
        loading={loading}
        className="shadow-red-600"
      />
    </div>
  );
}

export default StatsContainer;
