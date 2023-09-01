import { Fragment, useEffect, useState } from 'react';

import { IssueList as IssueListType, getIssues } from '@/apis';
import { Advertisement, Loading } from '@/components/common';
import { EmptyList, IssueListItem } from '@/components/domain/issue';
import { useIntersectionObserver } from '@/hooks';
import { parseIssue } from '@/utils';

const TERM_OF_AD = 4;

const IssueList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [issues, setIssues] = useState<IssueListType>([]);
  const [ref, inView] = useIntersectionObserver({ threshold: 0.3 });

  const fetchIssues = async (pageNumber: number) => {
    setIsFetching(true);
    try {
      const { data, isLastPage } = await getIssues(pageNumber);
      setHasNextPage(!isLastPage);
      setIssues((prevIssues) => [...prevIssues, ...data]);
    } catch {
      alert('데이터를 불러오는데 실패했습니다.');
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchIssues(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    if (inView && hasNextPage) setPageNumber((prev) => prev + 1);
  }, [inView, hasNextPage]);

  return (
    <>
      {isFetching && <Loading />}
      <ul>
        {issues.length ? (
          issues.map((issue, index) => (
            <Fragment key={issue.number}>
              <IssueListItem issue={parseIssue(issue)} />
              {(index + 1) % TERM_OF_AD === 0 && <Advertisement />}
            </Fragment>
          ))
        ) : (
          <EmptyList />
        )}
      </ul>
      {!isFetching && <div ref={ref} style={{ height: '10px' }}></div>}
    </>
  );
};

export default IssueList;
