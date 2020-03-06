import React from "react";
import { Box, Button, Heading } from "grommet";

import { useAuth } from "../../auth";
import { Loading } from "../Loading";
import styled from "styled-components";

const StyledHeading = styled.div`
  font-family: "Libre Baskerville", serif;
  text-align: "center";
`;

export const Login = () => {
  const { loading, loginWithRedirect } = useAuth();

  const handleRedirect = () => loginWithRedirect({});

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      justify="center"
      align="center"
      opacity="medium"
      background="brand"
      fill
    >
      <StyledHeading>
        <Heading>Welcome to Ground Zero</Heading>

        <h2 align="center">Please login to continue</h2>
      </StyledHeading>
      <Box align="center" pad="medium">
        <Button
          id="loginBtn"
          primary
          color="#8CC63F"
          onClick={handleRedirect}
          label="Log In"
        />
      </Box>
    </Box>
  );
};
