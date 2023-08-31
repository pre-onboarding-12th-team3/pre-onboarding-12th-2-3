import { Fragment, useEffect, useState } from 'react';

import { IssueListItem } from '@/components/domain/issue';
import { Issue } from '@/types/issue';

const TERM_OF_AD = 4;

// TODO 이슈 페이지에서 IssueList 리턴
const IssueList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [issues, setIssues] = useState<Issue[]>(dummy); // FIXME api에 맞는 타입으로 변경

  useEffect(() => {
    const fetchIssues = async () => {
      setIsFetching(true);
      try {
        // TODO api 요청
      } catch {
        alert('데이터를 불러오는데 실패했습니다.');
      } finally {
        setIsFetching(false);
      }
    };
    fetchIssues();
  }, []);

  return (
    <>
      {/* TODO 로딩 컴포넌트 넣기 */}
      {isFetching && '로딩중'}
      <ul>
        {issues.map((issue, index) => (
          <Fragment key={issue.issueNumber}>
            <IssueListItem issue={issue} />
            {/* TODO 광고 컴포넌트 넣기 */}
            {(index + 1) % TERM_OF_AD === 0 && '광고'}
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default IssueList;

// TODO api 연결 후 더미데이터 삭제
const dummy = [
  {
    issueNumber: 1,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 2,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 3,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 4,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 5,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 6,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 7,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 8,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 9,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
  {
    issueNumber: 10,
    title: 'title is ittile',
    userName: 'name',
    createdAt: new Date(),
    comments: 23,
    avatarUrl: '',
    body: 'string',
  },
];
