import { Icon, SearchForm, SearchInput, Wrapper } from "./SearchBar.styles";
import SearchIcon from "@/assets/Icons/Search.svg";

function SearchBar() {
  return (
    <Wrapper>
      <Icon src={SearchIcon} />
      <SearchForm>
        <SearchInput placeholder="Search..."></SearchInput>
      </SearchForm>
    </Wrapper>
  );
}

export default SearchBar;
