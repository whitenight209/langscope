import type { ProductModule } from "./productModuleSchema";

type ModelAdapterKey =
  | "Anthropic"
  | "OpenAI"
  | "Azure"
  | "Bedrock"
  | "VertexAI"
  | "GoogleAIStudio";

export type UiCustomization = {
  logoLightModeHref?: string;
  logoDarkModeHref?: string;
  documentationHref?: string;
  supportHref?: string;
  feedbackHref?: string;
  hostname?: string;
  defaultModelAdapter?: ModelAdapterKey;
  defaultBaseUrlOpenAI?: string;
  defaultBaseUrlAzure?: string;
  defaultBaseUrlAnthropic?: string;
  defaultBaseUrlBedrock?: string;
  defaultBaseUrlVertexAI?: string;
  visibleModules: ProductModule[];
};

export function useUiCustomization(): UiCustomization | null {
  return null;
}

export type UiCustomizationOption = keyof UiCustomization;
