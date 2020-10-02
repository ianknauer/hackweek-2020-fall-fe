import { helper as buildHelper } from "@ember/component/helper";
import moment from "moment";

export default buildHelper(function ([seconds] /*, hash*/) {
  const formatted = moment.utc((seconds + 10) * 1000).format("HH.mm:ss");
  return formatted;
});
