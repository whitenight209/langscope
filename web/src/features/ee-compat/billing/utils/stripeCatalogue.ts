import type { Plan } from "@langfuse/shared";

type StripeProduct = {
  stripeProductId: string;
  orderKey?: number;
  mappedPlan: Plan;
  checkout: {
    title: string;
    description: string;
    price: string;
    usagePrice: string;
    mainFeatures: string[];
    cta?: {
      label: string;
      href: string;
    };
  } | null;
};

export const stripeProducts: StripeProduct[] = [];

export const stripeUsageProduct = {
  id: "",
};

export const mapStripeProductIdToPlan = (_productId: string): Plan | null =>
  null;

export const isUpgrade = (_oldProductId: string, _newProductId: string) =>
  false;
