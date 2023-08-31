import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { IssueDetail, getIssueDetail } from '@/apis';
import { MarkdownViewer } from '@/components/common';
import { IssueInfo } from '@/components/domain/issue';
import { Issue } from '@/types/issue';

const DetailPage = () => {
  const [issues, setIssues] = useState<Issue>();
  const { id } = useParams();
  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        if (id) {
          const response = await getIssueDetail(id);
          const filterdIssue = getFilteredIssue(response);
          setIssues(filterdIssue);
        }
      } catch (error) {
        console.error('Error fetching issue:', error);
      }
    };

    fetchIssueDetail();
  }, [id]);

  return (
    <>
      {issues ? (
        <>
          <Layout>
            <ProfileImg src={issues.avatarUrl} alt="avatar" />
            <IssueInfo issue={issues}></IssueInfo>
          </Layout>
          <MarkdownViewer content={issues.body}></MarkdownViewer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
const getFilteredIssue = (issue: IssueDetail): Issue => ({
  issueNumber: issue.number,
  userName: issue.user ? issue.user.login : '알 수 없음',
  title: issue.title,
  createdAt: new Date(issue.created_at),
  comments: issue.comments,
  avatarUrl: issue.user ? issue.user.avatar_url : 'https://i.stack.imgur.com/frlIf.png',
  body: issue.body ?? '',
});

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
