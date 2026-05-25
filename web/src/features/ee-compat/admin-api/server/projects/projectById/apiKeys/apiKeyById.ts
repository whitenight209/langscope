import type { NextApiRequest, NextApiResponse } from "next";
import type { ParsedUrlQuery } from "querystring";

import { respondEnterpriseFeatureUnavailable } from "@/src/features/ee-compat/shared/disabled";

export function validateQueryParams(query: ParsedUrlQuery) {
  const { projectId, apiKeyId } = query;
  if (typeof projectId !== "string" || typeof apiKeyId !== "string") {
    return null;
  }
  return { projectId, apiKeyId };
}

export async function handleDeleteApiKey(
  _req: NextApiRequest,
  res: NextApiResponse,
  ..._args: unknown[]
) {
  return respondEnterpriseFeatureUnavailable(res);
}
