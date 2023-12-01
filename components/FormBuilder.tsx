'use client';

import { Form } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import PreviewDialogBtn from './button/PreviewDialogBtn';
import SaveFormBtn from './button/SaveFormBtn';
import PublishFormBtn from './button/PublishFormBtn';
import Editor from './Editor';
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import DragOverlayWrapper from './DragOverlayWrapper';
import useDesigner from '@/hooks/useDesigner';
import { Loader2 } from 'lucide-react';
import FormPublished from './FormPublished';

function FormBuilder({ form }: { form: Form }) {
  const { setElements, setSelectedElement } = useDesigner();
  const [isReady, setIsReady] = useState<boolean>(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (isReady) return;
    const elements = JSON.parse(form.content);
    setElements(elements);
    setSelectedElement(null);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [form, setElements, isReady, setSelectedElement]);

  if (!isReady) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/submit/${form.shareUrl}`;

  if (form.published) {
    return <FormPublished shareUrl={shareUrl} formId={form.id} />;
  }

  return (
    <DndContext sensors={sensors}>
      <main className="w-full flex flex-col">
        <div className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn id={form.id} />
                <PublishFormBtn id={form.id} />
              </>
            )}
          </div>
        </div>
        <Editor />
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default FormBuilder;
