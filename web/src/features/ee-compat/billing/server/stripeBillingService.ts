import type { TRPCContext } from "@/src/server/api/trpc";

export function createBillingServiceFromContext(_ctx: TRPCContext) {
  return {
    async cancelImmediatelyAndInvoice(_orgId: string) {
      return null;
    },
  };
}
