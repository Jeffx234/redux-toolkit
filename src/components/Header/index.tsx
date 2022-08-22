import { HeaderContainer, HeaderLeft, HeaderRight, HeaderLogo, HeaderMenu } from './styled';
import {BsCartDash} from 'react-icons/bs';
export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        Logo
      </HeaderLeft>

      <HeaderRight>
        <BsCartDash />
      </HeaderRight>
    </HeaderContainer>
  );
}