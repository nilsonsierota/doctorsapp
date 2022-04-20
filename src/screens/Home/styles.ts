import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { DoctorDataProps } from "../../components/Doctor";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const List = styled(
  FlatList as new (
    props: FlatListProps<DoctorDataProps>
  ) => FlatList<DoctorDataProps>
)``;
