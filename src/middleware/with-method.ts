import type { NextApiRequest, NextApiHandler, NextApiResponse } from 'next';


export function withMethods(
  methods: string[],
  handler: NextApiHandler
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (!methods.includes(req.method ?? '')) {
      return res.status(405).end()
    }

    return handler(req, res)
  };
}

// export function withMethods(
//     methods: string[],
//     handler: NextApiHandler,
//     ): NextApiHandler {
//     return (req: NextApiRequest, res: NextApiResponse) => {
//         if (!methods.includes(req.method ?? '')) {
//         res.setHeader('Allow', methods);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//         return;
//         }
    
//         return handler(req, res);
//     };
// }