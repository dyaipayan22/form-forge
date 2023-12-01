import useDesigner from '@/hooks/useDesigner';
import { Button } from '../ui/button';
import { Loader2, Save } from 'lucide-react';
import { UpdateFormContent } from '@/actions/form';
import { toast } from '../ui/use-toast';
import { startTransition, useTransition } from 'react';

function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({
        title: 'Success',
        description: 'Form saved successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };
  return (
    <Button
      variant={'outline'}
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <Save className="w-4 h-4" />
      Save
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
    </Button>
  );
}

export default SaveFormBtn;
