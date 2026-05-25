import type { NextApiRequest, NextApiResponse } from "next";

import { disabledApiHandler } from "@/src/features/ee-compat/shared/disabled";

export async function createNewSsoConfigHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return disabledApiHandler(req, res);
}
