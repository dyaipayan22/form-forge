import { Suspense } from "react";

import StatsContainer, {
  CardStatsWrapper,
} from "@/components/container/StatsContainer";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/button/CreateFormBtn";
import FormCard from "@/components/card/FormCard";
import FormCardsContainer from "@/components/container/FormCardsContainer";

async function Dashboard() {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<StatsContainer loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">My Forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3].map((el) => (
            <FormCard.Skeleton key={el} />
          ))}
        >
          <FormCardsContainer />
        </Suspense>
      </div>
    </div>
  );
}

export default Dashboard;
