import type { NextApiRequest, NextApiResponse } from "next";

import { respondEnterpriseFeatureUnavailable } from "@/src/features/ee-compat/shared/disabled";

export async function handleGetMemberships(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}

export async function handleUpdateMembership(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}

export async function handleDeleteMembership(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}
