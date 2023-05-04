import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import {
  Container,
  LeftNav,
  NavButton,
  RightNav,
  Wrapper,
} from "./Header.styles";

function Header() {
  return (
    <Wrapper>
      <Container>
        <LeftNav>
          <NavButton active={true}>Coins</NavButton>
          <NavButton>Portfolio</NavButton>
        </LeftNav>
        <RightNav>
          <SearchBar />
          <CurrencyDropdown />
          <ThemeToggle />
        </RightNav>
      </Container>
    </Wrapper>
  );
}

export default Header;
