import crypto from "crypto";
import type { IncomingHttpHeaders } from "http";
import type { NextApiRequest, NextApiResponse } from "next";

import { env } from "@/src/env.mjs";
import { logger } from "@langfuse/shared/src/server";

export interface AdminAuthResult {
  isAuthorized: boolean;
  error?: string;
}

export interface AdminAuthOptions {
  isAllowedOnLangfuseCloud?: boolean;
}

export class AdminApiAuthService {
  static verifyAdminAuthFromAuthString(
    authString: string,
    options: AdminAuthOptions = {},
  ): AdminAuthResult {
    const { isAllowedOnLangfuseCloud = false } = options;

    if (
      !isAllowedOnLangfuseCloud &&
      env.NEXT_PUBLIC_LANGFUSE_CLOUD_REGION &&
      env.NEXT_PUBLIC_LANGFUSE_CLOUD_REGION !== "DEV"
    ) {
      return {
        isAuthorized: false,
        error: "Not accessible on Langfuse Cloud",
      };
    }

    if (!env.ADMIN_API_KEY) {
      logger.error("ADMIN_API_KEY is not set");
      return {
        isAuthorized: false,
        error: "ADMIN_API_KEY is not set",
      };
    }

    const [scheme, token] = authString.split(" ");
    if (scheme !== "Bearer" || !token) {
      return {
        isAuthorized: false,
        error: "Unauthorized: Invalid token",
      };
    }

    try {
      if (
        !crypto.timingSafeEqual(
          Buffer.from(token),
          Buffer.from(env.ADMIN_API_KEY),
        )
      ) {
        return {
          isAuthorized: false,
          error: "Unauthorized: Invalid token",
        };
      }
    } catch {
      return {
        isAuthorized: false,
        error: "Unauthorized: Invalid token",
      };
    }

    return { isAuthorized: true };
  }

  private static verifyAdminAuthFromHeader(
    headers: IncomingHttpHeaders,
    options: AdminAuthOptions = {},
  ): AdminAuthResult {
    const { authorization } = headers;
    if (!authorization) {
      return {
        isAuthorized: false,
        error: "Unauthorized: No authorization header provided",
      };
    }
    return AdminApiAuthService.verifyAdminAuthFromAuthString(
      authorization,
      options,
    );
  }

  static handleAdminAuth(
    req: NextApiRequest,
    res: NextApiResponse,
    options: AdminAuthOptions = {},
  ): boolean {
    const authResult = AdminApiAuthService.verifyAdminAuthFromHeader(
      req.headers,
      options,
    );

    if (!authResult.isAuthorized) {
      if (authResult.error?.startsWith("Unauthorized")) {
        res.status(401).json({ error: authResult.error });
      } else {
        res.status(403).json({ error: authResult.error });
      }
      return false;
    }

    return true;
  }
}
