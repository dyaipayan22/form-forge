import { GetFormContentByUrl } from '@/actions/form';
import { FormElementInstance } from '@/components/FormElements';
import SubmitForm from '@/components/SubmitForm';

interface FormPageProps {
  params: {
    formUrl: string;
  };
}

async function SubmitPage({ params }: FormPageProps) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error('Form not found');
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];
  return <SubmitForm formUrl={params.formUrl} content={formContent} />;
}

export default SubmitPage;
