import { IssueDetail, IssueList, octokitInstance } from '@/apis';
import { ENDPOINT, ENDPOINT_ISSUE_DETAIL, OWNER, PER_PAGE, REPO } from '@/constants';

export const getIssues = async (page: number): Promise<IssueList> => {
  const response = await octokitInstance.request(ENDPOINT, {
    owner: OWNER,
    repo: REPO,
    state: 'open',
    sort: 'comments',
    per_page: PER_PAGE,
    page,
  });

  return response.data;
};

export const getIssueDetail = async (issueNumber: string): Promise<IssueDetail> => {
  const issue_number = parseInt(issueNumber);

  if (typeof issue_number === 'string') {
    throw new Error('잘못된 접근입니다.');
  }

  const response = await octokitInstance.request(ENDPOINT_ISSUE_DETAIL, {
    owner: OWNER,
    repo: REPO,
    issue_number,
  });

  if (response.status !== 200) {
    throw new Error('이슈를 불러오는데 실패했습니다.');
  }
  if (response.data.pull_request) {
    throw new Error('해당 페이지는 이슈가 아닙니다.');
  }
  if (response.data.state !== 'open') {
    throw new Error('해당 이슈는 닫혀있습니다.');
  }

  return response.data;
};
