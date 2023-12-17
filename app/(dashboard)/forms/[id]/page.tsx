import { GetFormById } from '@/actions/form';
import FormLinkShare from '@/components/FormLinkShare';
import SubmissionsTable from '@/components/SubmissionsTable';
import VisitBtn from '@/components/button/VisitBtn';
import StatsContainer from '@/components/container/StatsContainer';

interface FormPageProps {
  params: {
    id: string;
  };
}
async function FormPage({ params }: FormPageProps) {
  const { id } = params;
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error('Form not found');
  }

  const { visits, submissions } = form;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }
  const bounceRate = 100 - submissionRate;

  const data = { visits, submissions, submissionRate, bounceRate };

  return (
    <>
      <div className="py-10 border-b border-muted">
        <div className="flex justify-between container">
          <h1 className="text-4xl font-bold truncate">{form.name}</h1>
          <VisitBtn shareUrl={form.shareUrl} />
        </div>
      </div>
      <div className="py-4 border-b border-muted">
        <div className="container flex gap-2 items-center justify-between">
          <FormLinkShare shareUrl={form.shareUrl} />
        </div>
      </div>
      <StatsContainer loading={false} data={data} />
      <div className="container pt-10">
        <SubmissionsTable id={form.id} />
      </div>
    </>
  );
}

export default FormPage;
