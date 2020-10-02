import ApolloService from "ember-apollo-client/services/apollo";
import { Socket } from "phoenix";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import AbsintheSocket from "@absinthe/socket";

export default class extendedApollo extends ApolloService {
  link() {
    const socket = new Socket("ws://localhost:4000/socket", {
      params: {},
    });
    const absintheSocket = AbsintheSocket.create(socket);

    return createAbsintheSocketLink(absintheSocket);
  }
}
