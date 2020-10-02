import Controller from "@ember/controller";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import cycleValidations from "../validations/cycle-validations";
import { reads } from "@ember/object/computed";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class cycleController extends Controller {
  @queryManager({ service: "extended-apollo" }) apollo;
  @service dataState;

  cycleValidations = cycleValidations;

  @reads("dataState.currentCycle") currentCycle;
  @reads("dataState.cycleCreated") cycleCreated;
  @reads("dataState.onBreak") onBreak;
  @reads("dataState.active") active;
  @reads("dataState.finished") finished;
  @reads("dataState.starting") starting;
}
