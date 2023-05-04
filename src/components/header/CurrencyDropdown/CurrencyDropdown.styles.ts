import styled from "styled-components";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #2c2f36;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 24px;
  gap: 16px;
`;

export const Icon = styled.div`
  height: 32px;
  width: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #00ff5f;
  border-radius: 50%;
  background-color: #191b1f;
`;

export const Dropdown = styled.select`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 500;
`;
