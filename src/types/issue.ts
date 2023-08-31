export interface Issue {
  issueNumber: number;
  title: string;
  userName: string;
  createdAt: Date | string;
  comments: number;
  avatarUrl: string;
  body: string;
}
