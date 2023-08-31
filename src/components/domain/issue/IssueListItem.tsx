import { IssueInfo } from '@/components/domain/issue';
import { Issue } from '@/types/issue';

interface Props {
  issue: Issue;
}

const IssueListItem = ({ issue }: Props) => {
  return (
    <li>
      {/* TODO router 작성되면 path 수정하고 Link 넣기 */}
      {/* <Link to={`/${issue.issueNumber}`}> */}
      <IssueInfo issue={issue} />
      {/* </Link> */}
    </li>
  );
};

export default IssueListItem;
