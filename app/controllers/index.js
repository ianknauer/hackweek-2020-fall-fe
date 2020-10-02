import Controller from "@ember/controller";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import creationValidations from "../validations/creation-session";
import { reads } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default class IndexController extends Controller {
  @queryManager({ service: "extended-apollo" }) apollo;
  @service dataState;

  creationValidations = creationValidations;

  @reads("dataState.onBreak") onBreak;
  @reads("dataState.active") active;
  @reads("dataState.finished") finished;
  @reads("dataState.starting") starting;

  @action
  validate(_element, [object]) {
    return object.validate();
  }
}
