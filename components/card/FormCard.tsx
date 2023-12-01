import { Form } from '@prisma/client';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { ViewIcon, FormInput, FileEdit, ArrowBigRight } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

function FormCard({ form }: { form: Form }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published ? (
            <Badge>Published</Badge>
          ) : (
            <Badge variant={'destructive'}>Draft</Badge>
          )}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-xs">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {form.published && (
            <span className="flex items-center gap-2">
              <ViewIcon />
              <span>{form.visits.toLocaleString()}</span>
              <FormInput />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || 'No description'}
      </CardContent>
      <CardFooter>
        {form.published ? (
          <Button asChild className="w-full mt-2 text-md gap-4">
            <Link href={`/forms/${form.id}`}>
              View Submissions
              <ArrowBigRight className="w-5 h-5" />
            </Link>
          </Button>
        ) : (
          <Button
            asChild
            variant={'secondary'}
            className="w-full mt-2 text-md gap-4"
          >
            <Link href={`/builder/${form.id}`}>
              Edit Form <FileEdit className="w-5 h-5" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default FormCard;

FormCard.Skeleton = function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary/20 h-[190px] w-full" />;
};
