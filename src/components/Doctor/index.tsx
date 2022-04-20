import React from "react";

import { Container, Avatar, Name, Specialist } from "./styles";

export function Doctor() {
  return (
    <Container>
      <Avatar source={{ uri: "https://github.com/nilsonsierota/png" }} />

      <Name>Nilson Sierota</Name>

      <Specialist>Developer</Specialist>
    </Container>
  );
}
