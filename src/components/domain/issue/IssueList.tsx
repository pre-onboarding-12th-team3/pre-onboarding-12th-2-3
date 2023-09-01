import { Fragment, useState } from 'react';

import { IssueList as IssueListType, getIssues } from '@/apis';
import { Advertisement, Loading } from '@/components/common';
import { IssueListItem } from '@/components/domain/issue';
import { PER_PAGE } from '@/constants';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { parseIssue } from '@/utils';

const TERM_OF_AD = 4;

const IssueList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [issues, setIssues] = useState<IssueListType>([]);

  const fetchIssues = async (pageNumber: number) => {
    console.log(pageNumber);
    setIsFetching(true);
    try {
      const issueDatas = await getIssues(pageNumber);
      issueDatas.length < PER_PAGE && setHasMore(false);
      setIssues((prevIssues) => [...prevIssues, ...issueDatas]);
      setPageNumber((prev) => prev + 1);
    } catch {
      alert('데이터를 불러오는데 실패했습니다.');
    } finally {
      setIsFetching(false);
    }
  };

  const observedRef = useIntersectionObserver(fetchIssues, pageNumber);

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
      {hasMore && <div ref={observedRef}></div>}
    </>
  );
};

export default IssueList;
