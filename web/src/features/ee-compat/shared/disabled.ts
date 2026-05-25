import type { NextApiRequest, NextApiResponse } from "next";

export const eeDisabledMessage = "This enterprise feature is not available.";

export function respondEnterpriseFeatureUnavailable(res: NextApiResponse) {
  return res.status(404).json({ error: eeDisabledMessage });
}

export async function disabledApiHandler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  return respondEnterpriseFeatureUnavailable(res);
}
