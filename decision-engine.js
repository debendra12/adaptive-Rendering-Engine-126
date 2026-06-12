import { STRATEGIES } from "./strategy-registry.js";
import { networkRule } from "./rules/network-rule.js";
import { cacheRule } from "./rules/cache-rule.js";
import { sessionRule } from "./rules/session-rule.js";
import { latencyRule } from "./rules/latency-rule.js";

export class DecisionEngine {
  decide(context) {

    if (networkRule(context)) {
      return STRATEGIES.SSG;
    }

    if (sessionRule(context)) {
      return STRATEGIES.SSR;
    }

    if (cacheRule(context)) {
      return STRATEGIES.ISR;
    }

    if (latencyRule(context)) {
      return STRATEGIES.CSR;
    }

    return STRATEGIES.SSR;
  }
}