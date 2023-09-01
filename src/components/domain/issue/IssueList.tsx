import { Fragment, useEffect, useState } from 'react';

import { IssueList as IssueListType, getIssues } from '@/apis';
import { Advertisement, Loading } from '@/components/common';
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
      {isFetching && <Loading />}
      <ul>
        {issues.map((issue, index) => (
          <Fragment key={issue.number}>
            <IssueListItem issue={parseIssue(issue)} />
            {(index + 1) % TERM_OF_AD === 0 && <Advertisement />}
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default IssueList;
