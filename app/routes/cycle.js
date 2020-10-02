import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  model() {
    return {
      how: "",
      what: "",
      hazards: "",
      energy: "",
      moral: "",
      completeness: "",
      distractions: "",
      improvements: "",
    };
  }
}
