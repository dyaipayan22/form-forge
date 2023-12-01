'use client';

import { Minus } from 'lucide-react';
import { FormElement, ElementsType } from '../FormElements';
import { Label } from '../ui/label';

import { Separator } from '../ui/separator';

const type: ElementsType = 'SeparatorField';

export const SeparatorFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
  }),
  designerBtnElement: {
    icon: Minus,
    label: 'SeparatorField',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

function DesignerComponent() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Separator Field</Label>
      <Separator />
    </div>
  );
}

function FormComponent() {
  return <Separator />;
}

function PropertiesComponent() {
  return <p>No properties for this element</p>;
}
