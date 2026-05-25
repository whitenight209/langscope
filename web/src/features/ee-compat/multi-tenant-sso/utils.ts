import type { Provider } from "next-auth/providers/index";

export async function getSsoAuthProviderIdForDomain(_domain?: string | null) {
  return null;
}

export async function isAnySsoConfigured() {
  return false;
}

export async function loadSsoProviders(): Promise<Provider[]> {
  return [];
}

export async function findMultiTenantSsoConfig(_params: {
  providerId: string;
}) {
  return {
    isMultiTenantSsoProvider: false,
    domain: "",
  };
}
