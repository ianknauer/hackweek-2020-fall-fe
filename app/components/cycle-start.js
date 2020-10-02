import Component from "@glimmer/component";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import gql from "graphql-tag";
import { inject as service } from "@ember/service";

const mutation = gql`
  mutation($cycle: CreateCycleInput!) {
    createCycle(input: $cycle) {
      cycle {
        id
      }
    }
  }
`;

export default class CycleStartComponent extends Component {
  @queryManager({ service: "extended-apollo" }) apollo;
  @service dataState;
  @service router;

  @action
  createCycle(changeset) {
    let variables = {
      cycle: {
        how: changeset.get("how"),
        what: changeset.get("what"),
        hazards: changeset.get("hazards"),
        energy: changeset.get("energy"),
        moral: changeset.get("moral"),
        sessionId: parseInt(this.dataState.sessionId),
      },
    };

    let cycle = this.apollo.mutate({ mutation, variables }, "cycle");

    this.dataState.cycleCreated = true;

    return cycle;
  }
}
