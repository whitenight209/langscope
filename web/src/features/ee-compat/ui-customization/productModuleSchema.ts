export const PRODUCT_MODULES = [
  "dashboards",
  "tracing",
  "evaluation",
  "prompt-management",
  "playground",
  "datasets",
] as const;

export type ProductModule = (typeof PRODUCT_MODULES)[number];

export function getVisibleProductModules() {
  return [...PRODUCT_MODULES];
}
