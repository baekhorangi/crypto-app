import React from "react";
import { Dropdown, Icon, Wrapper } from "./CurrencyDropdown.styles";

function CurrencyDropdown() {
  return (<Wrapper>
    <Icon>$</Icon>
    <Dropdown>
      <option value="usd">USD</option>
    </Dropdown>
  </Wrapper>);
}

export default CurrencyDropdown;
