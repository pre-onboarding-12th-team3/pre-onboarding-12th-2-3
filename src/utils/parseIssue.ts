import { IssueList } from '@/apis';
import { Issue } from '@/types/issue';

const parseIssue = (issue: IssueList[number]): Issue => {
  return {
    issueNumber: issue.number,
    title: issue.title,
    userName: issue.user?.login ?? 'unknown user',
    createdAt: issue.created_at,
    comments: issue.comments,
    avatarUrl: issue.user?.avatar_url ?? '',
    body: issue.body ?? '',
  };
};

export default parseIssue;
