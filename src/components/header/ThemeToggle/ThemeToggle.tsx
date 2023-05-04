import { Icon, Wrapper } from "./ThemeToggle.styles";
import ScanIcon from "@/assets/Icons/Scan.svg";

function ThemeToggle() {
  return (
    <Wrapper>
      <Icon src={ScanIcon} />
    </Wrapper>
  );
}

export default ThemeToggle;
