import styled, { css } from "styled-components/native";

export type DoctorProps = {
  type: "primary" | "secondary";
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<DoctorProps>`
  width: 45%;
  margin: 7px;

  padding: 22px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.INFO};

  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme, type }) =>
    type === "primary" ? "red" : "green"}; */
  /* ${({ type }) =>
    type === "primary" &&
    css`
      border: 5px solid ${({ theme }) => theme.COLORS.INFO};
    `} */
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;
export const Name = styled.Text`
  margin-top: 7px;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;
export const Specialist = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;
