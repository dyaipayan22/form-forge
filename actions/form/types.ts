import { z } from 'zod';
import { formSchema } from './schema';

export type FormSchemaType = z.infer<typeof formSchema>;
