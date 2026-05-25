import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";

export function SupportOrUpgradePage() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Access Restricted</AlertTitle>
          <AlertDescription>
            This feature requires additional permissions.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
