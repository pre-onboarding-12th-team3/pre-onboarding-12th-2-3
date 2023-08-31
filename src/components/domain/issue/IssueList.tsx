import { Fragment, useEffect, useState } from 'react';

import { IssueList as IssueListType, getIssues } from '@/apis';
import { IssueListItem } from '@/components/domain/issue';
import { parseIssue } from '@/utils';

const TERM_OF_AD = 4;

const IssueList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [issues, setIssues] = useState<IssueListType>([]);

  const fetchIssues = async (/* pageNumber */) => {
    setIsFetching(true);
    try {
      const issueDatas = await getIssues(1); // TODO page 바꾸기
      setIssues(issueDatas);
    } catch {
      alert('데이터를 불러오는데 실패했습니다.');
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchIssues(/* pageNumber */);
  }, []);

  return (
    <>
      {/* TODO 로딩 컴포넌트 넣기 */}
      {isFetching && '로딩중'}
      <ul>
        {issues.map((issue, index) => (
          <Fragment key={issue.number}>
            <IssueListItem issue={parseIssue(issue)} />
            {/* TODO 광고 컴포넌트 넣기 */}
            {(index + 1) % TERM_OF_AD === 0 && '광고'}
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default IssueList;
