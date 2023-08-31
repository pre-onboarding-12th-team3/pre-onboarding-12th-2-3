import { Endpoints } from '@octokit/types';

import { ENDPOINT, ENDPOINT_ISSUE_DETAIL } from '@/constants';

export type IssueList = Endpoints[typeof ENDPOINT]['response']['data'];
export type IssueDetail = Endpoints[typeof ENDPOINT_ISSUE_DETAIL]['response']['data'];
