import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import wantedAdImgSrc from '@/assets/wanted-ad.jpeg';

const Advertisement = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StyledContainer>
      <StyledLink to="https://www.wanted.co.kr">
        <StyledImage
          src={wantedAdImgSrc}
          alt="원티드 광고이미지"
          onLoad={() => setIsLoading(false)}
        />
      </StyledLink>
      {isLoading && <Skeleton />}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 1rem;
`;
const StyledLink = styled(Link)``;
const StyledImage = styled.img`
  width: 100%;
`;
const Skeleton = styled.img`
  width: 100%;
  height: 270px;
  background-color: #efefef;
`;

export default Advertisement;
