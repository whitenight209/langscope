export async function stripeWebhookHandler() {
  return Response.json(
    { error: "This enterprise feature is not available." },
    { status: 404 },
  );
}

export async function createDefaultSpendAlerts() {
  return [];
}
