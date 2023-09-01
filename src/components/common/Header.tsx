import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { OWNER, REPO } from '@/constants';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        {REPO} / {OWNER}
      </StyledLink>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 0;
  width: 70%;
  font-weight: bold;
  font-size: x-large;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
`;

export default Header;
