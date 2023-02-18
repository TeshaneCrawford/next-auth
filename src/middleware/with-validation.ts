import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import * as z from 'zod';
import { ZodSchema } from 'zod';

export function withValidation<T extends ZodSchema>(
  schema: T,
  handler: NextApiHandler
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      const body = req.body ? req.body : {};

      await schema.parseAsync(body);
      return handler(req, res);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json({
          message: 'Validation error',
          errors: error.errors,
        });
      }
      return res.status(422).end();
    }
  };
}