import Component from "@glimmer/component";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import { tracked } from "@glimmer/tracking";
import gql from "graphql-tag";
import { inject as service } from "@ember/service";

const mutation = gql`
  mutation($session: CreateSessionInput!) {
    createSession(input: $session) {
      session {
        id
        goal
        reason
        completeness
        measurable
        other
      }
    }
  }
`;

export default class StartComponent extends Component {
  @queryManager({ service: "extended-apollo" }) apollo;
  @service dataState;
  @service router;

  @action
  createSession(changeset) {
    let variables = {
      session: {
        totalCycles: parseInt(changeset.get("totalCycles")),
        reason: changeset.get("reason"),
        completeness: changeset.get("completeness"),
        measurable: changeset.get("measurable"),
        other: changeset.get("other"),
        goal: changeset.get("goals"),
      },
    };

    changeset.rollback();

    this.dataState.timeRemaining = 290;
    this.dataState.currentCycle = 1;
    this.dataState.status = "active";

    let session = this.apollo.mutate({ mutation, variables }, "session");

    this.router.transitionTo("cycle");
    return session;
  }
}
