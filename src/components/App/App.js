import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { NavBar } from "../NavBar";
import { Loading } from "../Loading";
import { createApolloClient } from "../../utils/apollo-client";
import { useAuth } from "../../auth";
// import { subscribe } from "graphql";
import { Subscribe } from "../../Pages/Subscribe";

export const App = ({ idToken }) => {
  const { loading, logout } = useAuth();

  if (loading || !idToken) {
    return <Loading />;
  }

  const client = createApolloClient(idToken);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar logoutHandler={logout} />
        <Subscribe />
      </div>
    </ApolloProvider>
  );
};
