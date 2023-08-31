import { IssueList } from '@/apis';

type IssueListItem = IssueList[number];

export interface Issue {
  issueNumber: IssueListItem['number'];
  title: IssueListItem['title'];
  userName: Exclude<IssueListItem['user'], null>['login'] | null;
  createdAt: IssueListItem['created_at'];
  comments: IssueListItem['comments'];
  avatarUrl: Exclude<IssueListItem['user'], null>['avatar_url'] | null;
  body: IssueListItem['body'];
}
