import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ErrorPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>404 - 페이지를 찾을 수 없습니다.</StyledTitle>
      <StyledLink to="/">홈으로 돌아가기</StyledLink>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 2rem;
`;
const StyledTitle = styled.h1`
  margin-bottom: 5px;
`;
const StyledLink = styled(Link)``;

export default ErrorPage;
