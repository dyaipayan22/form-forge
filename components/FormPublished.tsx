import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import Link from 'next/link';
import Confetti from 'react-confetti';
import { MoveLeft, MoveRight } from 'lucide-react';

const FormPublished = ({
  shareUrl,
  formId,
}: {
  shareUrl: string;
  formId: number;
}) => {
  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={1000}
      />

      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="max-w-md">
          <h1 className="text-center text-4xl font-bold text-primary border-b pb-2 mb-10">
            Form Published
          </h1>
          <h2 className="text-2xl">Share this form</h2>
          <h3 className="my-4 flex flex-col gap-2 items-center w-full border-b pb-4">
            Anyone with this link can view and submit the form
          </h3>
          <Input className="w-full" readOnly value={shareUrl} />
          <Button
            className="mt-2 w-full"
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              toast({
                title: 'Copied',
                description: 'Link copied to clipboard',
              });
            }}
          >
            Copy link
          </Button>
        </div>
        <div className="flex justify-between">
          <Button variant={'link'} asChild>
            <Link href={'/'} className="gap-2">
              <MoveLeft className="h-4 w-4" />
              Go back home
            </Link>
          </Button>
          <Button variant={'link'} asChild>
            <Link href={`/forms/${formId}`} className="gap-2">
              Form details
              <MoveRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormPublished;
