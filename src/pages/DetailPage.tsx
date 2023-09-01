import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { default as styled } from 'styled-components';

import { getIssueDetail } from '@/apis';
import { Loading, MarkdownViewer } from '@/components/common';
import { IssueInfo } from '@/components/domain/issue';
import { Issue } from '@/types/issue';
import { parseIssue } from '@/utils';

const DetailPage = () => {
  const [issue, setIssue] = useState<Issue>();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        if (id) {
          setIsLoading(true);
          const response = await getIssueDetail(id);
          const parsedIssue = parseIssue(response);
          setIssue(parsedIssue);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching issue:', error);
      }
    };

    fetchIssueDetail();
  }, [id]);

  return (
    <>
      {!isLoading && issue ? (
        <>
          <Layout>
            <ProfileImg src={issue.avatarUrl ?? ''} alt="avatar" />
            <IssueInfo issue={issue}></IssueInfo>
          </Layout>
          <MarkdownViewer content={issue.body ?? ''}></MarkdownViewer>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Layout = styled.section`
  display: flex;
  width: 100%;
  align-self: flex-start;
`;
const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  align-self: center;
`;
export default DetailPage;
