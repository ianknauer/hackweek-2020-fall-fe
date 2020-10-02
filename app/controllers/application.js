import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { reads, empty } from "@ember/object/computed";

export default class ApplicationController extends Controller {
  @service dataState;

  @reads("dataState.timeRemaining") timeRemaining;
  @reads("dataState.currentCycle") currentCycle;
  @reads("dataState.status") status;
  @reads("dataState.sessionId") sessionId;
  @reads("dataState.starting") isStarting;
  @reads("dataState.finished") isFinished;
  @reads("dataState.onBreak") isOnBreak;
  @reads("dataState.active") isActive;

  @empty("timeRemaining") timeIsEmpty;
}
