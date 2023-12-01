import { GetForms } from '@/actions/form';
import FormCard from '../card/FormCard';

async function FormCardsContainer() {
  const forms = await GetForms();

  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

export default FormCardsContainer;
