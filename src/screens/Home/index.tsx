import React from "react";

import { Container, List } from "./styles";
import { Doctor } from "../../components/Doctor";

const DATA = [
  {
    id: "1",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "2",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "3",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "4",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "5",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "6",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "7",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "8",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "9",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
  {
    id: "10",
    avatar: "https://github.com/nilsonsierota.png",
    name: "Nilson Sierota",
    specialist: "Developer",
  },
];

export function Home() {
  return (
    <Container>
      <List
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Doctor type="primary" data={item} />}
        numColumns={2}
      />
    </Container>
  );
}
