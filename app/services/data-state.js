import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action, computed } from "@ember/object";

export default class DataState extends Service {
  @tracked timeRemaining;
  @tracked currentCycle;
  @tracked status = null;
  @tracked sessionId;
  @tracked cycleCreated = false;

  @computed("status")
  get onBreak() {
    return this.status == "break";
  }

  @computed("status")
  get active() {
    return this.status == "active";
  }

  @computed("status")
  get finished() {
    return this.status == "finished";
  }

  @computed("status")
  get starting() {
    return this.status == null;
  }
}
