export function latencyRule(context) {
  return context.latency > 300;
}