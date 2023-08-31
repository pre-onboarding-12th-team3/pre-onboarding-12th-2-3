import { Link } from 'react-router-dom';
import { default as styled } from 'styled-components';

import { IssueInfo } from '@/components/domain/issue';
import { Issue } from '@/types/issue';

interface Props {
  issue: Issue;
}

const IssueListItem = ({ issue }: Props) => {
  return (
    <li>
      <StyledLink to={`/issues/${issue.issueNumber}`}>
        <IssueInfo issue={issue} />
      </StyledLink>
    </li>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default IssueListItem;
