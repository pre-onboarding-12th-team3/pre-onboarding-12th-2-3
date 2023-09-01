import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import wantedAdImgSrc from '@/assets/wanted-ad.jpeg';

const Advertisement = () => {
  return (
    <StyledContainer>
      <StyledLink to="https://www.wanted.co.kr">
        <StyledImage src={wantedAdImgSrc} alt="원티드 광고이미지" />
      </StyledLink>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled(Link)``;
const StyledImage = styled.img`
  width: 100%;
`;

export default Advertisement;
