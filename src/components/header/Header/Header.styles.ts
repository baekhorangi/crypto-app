import styled from "styled-components";

interface IButtonStyled {
  active?: boolean;
}

export const Wrapper = styled.div`
  background-color: #191b1f;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 104px;
  max-width: 1920px;
  width: 100%;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  gap: 24px;
`;

export const NavButton = styled.button<IButtonStyled>`
  color: white;
  height: 56px;
  width: 168px;
  font-size: 24px;
  font-weight: 500;
  background-color: ${({ active }) => (active ? "#2C2F36" : "transparent")};
  border: none;
  border-radius: 12px;
`;
