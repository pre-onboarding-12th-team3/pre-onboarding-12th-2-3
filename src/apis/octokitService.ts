import { IssueDetail, IssueListResponse, octokitInstance } from '@/apis';
import { ENDPOINT, ENDPOINT_ISSUE_DETAIL, OWNER, PER_PAGE, REPO } from '@/constants';

export const getIssues = async (page: number): Promise<IssueListResponse> => {
  const response = await octokitInstance.request(ENDPOINT, {
    owner: OWNER,
    repo: REPO,
    state: 'open',
    sort: 'comments',
    per_page: PER_PAGE,
    page,
  });

  const linkHeader = response.headers.link;
  if (linkHeader) {
    const links = linkHeader.split(',');
    const lastPageLink = links.find((link) => link.includes('rel="last"'));
    if (lastPageLink) {
      const match = lastPageLink.match(/<([^>]+)>/);
      if (match) {
        const lastPageUrl = match[1];
        const params = new URLSearchParams(lastPageUrl.split('?')[1]);
        const lastPage = parseInt(params.get('page') || '1', 10);

        const isLastPage = page === lastPage;

        return {
          data: response.data,
          isLastPage: isLastPage,
        };
      }
    }
  }

  return {
    data: response.data,
    isLastPage: true,
  };
};

export const getIssueDetail = async (issueNumber: string): Promise<IssueDetail> => {
  const issue_number = Number(issueNumber);

  if (isNaN(issue_number)) {
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
