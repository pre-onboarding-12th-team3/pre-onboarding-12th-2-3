import { styled } from 'styled-components';

import spinner from '@/assets/spinner.svg';

const Loading = () => {
  return (
    <StyledContainer>
      <StyledImage src={spinner} alt="로딩 이미지" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

export default Loading;
