import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/app/api/auth/[...nextauth]';

export const withAuthentication = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const session = await getServerSession({ req, ...authOptions });
        if (!session) {
            res.status(401).send('Unauthorized');
            return;
        }
        return handler(req, res);
    };
};