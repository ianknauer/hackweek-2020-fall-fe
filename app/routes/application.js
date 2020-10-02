import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import { addListener, removeListener } from "@ember/object/events";
import gql from "graphql-tag";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

const query = gql`
  subscription {
    statusUpdate {
      timeRemaining
      status
      currentCycle
      sessionId
    }
  }
`;

export default class ApplicationRoute extends Route {
  @queryManager({ service: "extended-apollo" }) apollo;
  @service dataState;
  @service router;

  model() {
    return this.apollo.subscribe({ query });
  }

  setupController(controller, model) {
    addListener(model, "event", this.handleEvent);
  }

  @action
  handleEvent(event) {
    if (
      this.dataState.status == "break" &&
      event.statusUpdate.status == "active"
    ) {
      this.dataState.cycleCreated = false;
      this.router.transitionTo("cycle");
    }

    this.dataState.timeRemaining = event.statusUpdate.timeRemaining;
    this.dataState.currentCycle = event.statusUpdate.currentCycle;
    this.dataState.status = event.statusUpdate.status;
    this.dataState.sessionId = event.statusUpdate.sessionId;

    if (event.statusUpdate.status == "break") {
      this.router.transitionTo("break");
    }

    if (event.statusUpdate.status == "finished") {
      this.router.transitionTo("complete");
    }
  }
}
