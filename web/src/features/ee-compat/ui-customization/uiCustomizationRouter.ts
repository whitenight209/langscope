import { createTRPCRouter, publicProcedure } from "@/src/server/api/trpc";

export const uiCustomizationRouter = createTRPCRouter({
  get: publicProcedure.query(() => null),
});
