import type { NextApiRequest, NextApiResponse } from "next";
import type { ParsedUrlQuery } from "querystring";

import { respondEnterpriseFeatureUnavailable } from "@/src/features/ee-compat/shared/disabled";

export function validateQueryAndExtractId(query: ParsedUrlQuery) {
  return typeof query.projectId === "string" ? query.projectId : null;
}

export async function handleGetApiKeys(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}

export async function handleCreateApiKey(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}
