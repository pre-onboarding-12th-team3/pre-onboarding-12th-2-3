import { IssueList } from '@/apis';

type IssueListItem = IssueList[number];

export interface Issue {
  issueNumber: IssueListItem['number'];
  title: IssueListItem['title'];
  userName: string; // FIXME user 타입 활용하는 방법
  createdAt: IssueListItem['created_at'];
  comments: IssueListItem['comments'];
  avatarUrl: string; // FIXME user 타입 활용하는 방법
  body: IssueListItem['body'];
}
