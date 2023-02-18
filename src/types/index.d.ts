import { z } from 'zod';
import { User } from '@prisma/client';


const LinkSchema = z.object({
  href: z.string(),
  text: z.string(),
});

export type Link = z.infer<typeof LinkSchema>;



// export type ZodType<T> = T extends z.ZodType<infer U> ? U : never;

// export type ZodSchema<T> = T extends z.ZodSchema<infer U> ? U : never;

/** Overwite the properties of one type with another */
export type Merge<A extends object, B extends object> = Omit<A, keyof B> & B;
