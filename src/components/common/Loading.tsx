import { styled } from 'styled-components';

import spinner from '@/assets/spinner.svg';

const Loading = () => {
  return (
    <StyledContainer>
      <StyledImage src={spinner} alt="로딩 이미지" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

export default Loading;
