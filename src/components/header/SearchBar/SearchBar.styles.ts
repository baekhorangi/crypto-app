import styled from "styled-components";

export const Wrapper = styled.div`
  height: 64px;
  width: 512px;
  background-color: #2c2f36;
  border-radius: 12px;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 20px;
`;

export const SearchForm = styled.form`
  height: 100%;
  width: 100%;
`;

export const SearchInput = styled.input`
  color: white;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 500;
  flex-grow: 1;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  filter: invert(100%);
`;
