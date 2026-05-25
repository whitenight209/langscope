import type { NextApiRequest, NextApiResponse } from "next";

import { respondEnterpriseFeatureUnavailable } from "@/src/features/ee-compat/shared/disabled";

export async function handleGetProjects(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}
