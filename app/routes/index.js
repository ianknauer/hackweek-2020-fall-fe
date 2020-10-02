import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  model() {
    return {
      totalCycles: null,
      goal: "",
      reason: "",
      completeness: "",
      measurable: "",
      other: "",
    };
  }
}
