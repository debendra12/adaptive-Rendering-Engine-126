import engine from "../index.js";

const context = {
  networkSpeed: 1.5,
  cacheHit: false,
  userLoggedIn: false,
  latency: 100
};

const strategy = engine.decide(context);

console.log("Selected Strategy:", strategy);