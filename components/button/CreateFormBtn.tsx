'use client';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
} from '../ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from '../ui/use-toast';
import { formSchema } from '@/actions/form/schema';
import { FormSchemaType } from '@/actions/form/types';
import { CreateForm } from '@/actions/form';
import { FilePlus } from 'lucide-react';

function CreateFormBtn() {
  const router = useRouter();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormSchemaType) {
    try {
      const formId = await CreateForm(values);
      toast({
        title: 'Success',
        description: 'Form created successfully',
      });
      router.push(`/builder/${formId}`);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again',
        variant: 'destructive',
      });
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className="group border border-primary/20 h-[190px] flex flex-col items-center justify-center gap-4 hover:border-primary hover:cursor-pointer"
        >
          <FilePlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className="font-bold text-lg text-muted-foreground group-hover:text-primary">
            Create new form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
            className="w-full mt-4"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
