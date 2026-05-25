import type { NextApiRequest, NextApiResponse } from "next";

import { respondEnterpriseFeatureUnavailable } from "@/src/features/ee-compat/shared/disabled";

export async function handleGetOrganizationById(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}

export async function handleUpdateOrganization(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}

export async function handleDeleteOrganization(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}
