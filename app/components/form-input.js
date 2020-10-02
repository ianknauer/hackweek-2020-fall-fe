import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class FormInputComponent extends Component {
  @tracked focused = false;

  @action
  addFocus() {
    this.focused = true;
  }

  @action
  removeFocus() {
    if (!this.args.value || this.args.value === "") {
      this.focused = false;
    }
  }
}
