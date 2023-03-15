import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import * as z from 'zod';

import { authOptions } from '@/app/api/auth/[...nextauth]';

export const schema = z.object({
    userID: z.string(),
});

export const withCurrentUser = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const query = await schema.parseAsync(req.query);

            // Check if the user has access to this user
            const session = await getServerSession({ req, ...authOptions });
            if (query.userID !== session?.user.id) {
                res.status(401).send('Unauthorized');
                return;
            }
            return handler(req, res);
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).send('Bad Request');
                return;
            }
            return res.status ? res.status(500).send('Internal Server Error') : null;
        }
    };
}