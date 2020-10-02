import { validatePresence } from "ember-changeset-validations/validators";

export default {
  totalCycles: [validatePresence(true)],
  goal: [validatePresence(true)],
  reason: [validatePresence(true)],
  completeness: [validatePresence(true)],
  measurable: [validatePresence(true)],
  other: [validatePresence(true)],
};
