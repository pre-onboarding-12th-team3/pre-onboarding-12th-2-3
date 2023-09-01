# [Week 2] Best Practice of Wanted Pre-onboarding Assignment
원티드 프리온보딩 인턴십 3팀 2주차 과제 레포지토리입니다.


## 🔎 프로젝트 소개


- **주제** : 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축
- **작업 기간** : 2023.08.29 ~2023.09.01
- **진행 방식** :
   - 같은 주제의 프로젝트를 개인이 작업한 후 코드 리뷰 시간을 가지고 Best Practice를 선정합니다.
   - 정해진 기준에 맞게 각자 맡은 기능의 리팩토링을 진행합니다.

<br/>

## 💁‍♂️ 팀원 소개

| 성지현                                    | 신재일                                  | 윤혜영                                            | 조병현                                            | 채하은                                      | 홍성욱                                |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
|<img src="https://avatars.githubusercontent.com/u/69228045?v=4" alt='@jhsung23' width="130" height="130">|<img src="https://avatars.githubusercontent.com/u/101620064?v=4" alt='@JaeIl00' width="130" height="130">|<img src="https://avatars.githubusercontent.com/u/93719660?v=4" alt='@creamy-ocean' width="130" height="130">|<img src="https://avatars.githubusercontent.com/u/102468625?v=4" alt='@ChoByungHyun' width="130" height="130">|<img src="https://avatars.githubusercontent.com/u/103991310?v=4" alt='@chaehaeun' width="130" height="130">|<img src="https://avatars.githubusercontent.com/u/86929961?v=4" alt='@ukssss' width="130" height="130">|
| [@jhsung23](https://github.com/jhsung23/) | [@JaeIl00](https://github.com/JaeIl00/) | [@creamy-ocean](https://github.com/creamy-ocean/) | [@ChoByungHyun](https://github.com/ChoByungHyun/) | [@chaehaeun](https://github.com/chaehaeun/) | [@ukssss](https://github.com/ukssss/) |
|<p style='text-align:center'>이슈 리스트 -<br/>Fetch</p>|<p style='text-align:center'>프로젝트 환경 설정,<br/>배포</p>|<p style='text-align:center'>이슈 리스트 -<br/>Infinity Scroll</p>|<p style='text-align:center'>이슈 디테일</p>| <p style='text-align:center'>api, 문서작성</p>|<p style='text-align:center'>광고, 로딩,<br/>글로벌레이아웃(+헤더),<br/>라우터(+에러)</p>|

<br/>

## 🚀 배포 링크

배포 링크: [wanted-pre-onboarding-12th-2week.s3-website.ap-northeast-2.amazonaws.com](http://wanted-pre-onboarding-12th-2week.s3-website.ap-northeast-2.amazonaws.com)

<br/>

## 🎬 프로젝트 로컬 실행 방법

1. 본 repository를 clone합니다.

```bash
$ git clone https://github.com/pre-onboarding-12th-team3/pre-onboarding-12th-2-3.git
```

2. `.env` 파일을 루트 경로에 생성한 뒤 아래와 같이 환경 변수를 설정합니다.

```
VITE_GITHUB_AUTH_TOKEN=YOUR_GITHUB_AUTH_TOKEN
```
3. 의존성 패키지를 설치합니다.

```bash
npm install
```
4. 개발 서버를 실행합니다.

```bash
npm run dev
```

브라우저가 자동으로 실행되지 않는다면 로컬호스트에 직접 접속해 주세요.

<br/>

## 🛠️ 기술 스택

<div>
   <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white">
   <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
   <img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat&logo=eslint&logoColor=white">
   <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white">
   <br/>
   <img src="https://img.shields.io/badge/octokit-000000?style=flat&logo=octokit&logoColor=white">
   <img src="https://img.shields.io/badge/react markdown-efefef?style=flat&logo=react-markdown&logoColor=white">
   <img src="https://img.shields.io/badge/husky-efefef?style=flat&logo=husky&logoColor=white">
   <img src="https://img.shields.io/badge/lint staged-efefef?style=flat&logo=lint staged&logoColor=white">
   <img src="https://img.shields.io/badge/vite tsconfig paths-efefef?style=flat&logo=vite tsconfig paths&logoColor=white">
</div>

<br/>

## 🎖️ 과제 요구 사항 및 Best Practice

### **[Assignment 1] 이슈 목록 가져오기**

> - React 레포지토리의 Issue 목록 가져오기
> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
> - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시

|  이름  | 의견 |
| ------ | --- |
| 성지현 | 로딩 상태와 로딩 컴포넌트를 두어 데이터를 불러오고 있음을 표시. octokit의 request 메서드 사용. open 상태와 정렬 값을 메서드의 option값으로 주어 필요한 데이터 요청. |
| 신재일 | octikit으로 요청 세부옵션을 parameter로 전달 및 Issue 목록 요청. 전역 변수로 이슈목록 관리하여 매번 Issue List Page 접근 시 이전 목록 유지. 로딩 상태를 두어 로딩 컴포넌트 표시. |
| 윤혜영 | pageNumber state을 octokit 인스턴스로 전달해 이슈 목록을 페이지별로 받아옴, octokit request의 sort를 이용해 코멘트 많은 순으로 정렬, octokit isLoading state를 이용해 데이터 로딩 상태 표시 |
| 조병현 | octokit으로 요구사항에 맞는 이슈목록 요청, 로딩상태를 두어 로딩 컴포넌트 랜더링.  |
| 채하은 | @octokit/rest 메서드 활용하여 데이터 호출. 페이지당 20개의 데이터를 불러오도록 설정. |
| 홍성욱 |  |

#### **Best Practice**

- octokit 형식으로 api 호출
  - 이유 : 간편하고 가독성이 좋음
  - 불러오는 데이터 수 : 20개 (상수로 관리)
- 지역 변수로 Issue 목록 관리
  - 이유 : 전역 변수로 관리할 시 페이지 이동 후 복귀 때 이전 값이 보존되있는 장점이 있지만 전역 변수의 일반적 필요성에 맞지 않아 지역 상태 관리를 하기로 함
- isLoading state를 두어 로딩 컴포넌트 렌더링
  - 이유 : 로딩 상태를 표시해줌으로써 UX 향상
- issues 데이터가 없는 경우, Fallback 컴포넌트 렌더링
  - 이유 : 추가 동작으로 유저 가이드하여 UX 개선

<br/>

### **[Assignment 2] 광고 이미지 출력**

> - 다섯번째 셀마다 광고 이미지 출력
> - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동

|  이름  | 의견 |
| ------ | --- |
| 성지현 | issue를 리스트 아이템 컴포넌트로 맵핑하는 과정에서 index를 사용해 4의 배수에 해당하는 issue와 함께 광고 컴포넌트 렌더. |
| 신재일 | Issue List를 맵핑합니다. index 매개변수에 나머지 연산을 통해서 5번째 셀마다 광고 컴포넌트를 출력합니다. 광고 이미지 로드 되기 전까지 대체 요소가 표시됩니다. |
| 윤혜영 | map 함수를 이용해 이슈 목록을 IssueItem 컴포넌트로 매핑하는 과정에서 map 함수의 index + 1 값이 4로 나누어지면 AdItem 컴포넌트를 함께 렌더링 |
| 조병현 | issue list 맵핑하는 과정에서 index를 활용해 4번째 셀에 광고를 함께 랜더링  |
| 채하은 | map 함수의 두번째 인자인 index를 이용하여 4의 배수번째에 렌더링 되는 목록 뒤에 광고 컴포넌트가 붙도록 작성. |
| 홍성욱 |  |

#### **Best Practice**

- listitem을 컴포넌트로 맵핑할 때, 인덱스가 4의 배수라면 item과 함께 Ad 컴포넌트를 렌더링
   - 이때 4는 상수로 관리
- Img Load 상태 표시
   - 이유 : UI 동일성과 UX 향상

<br/>

### **[Assignment 3] 인피니티 스크롤**

> - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩

|  이름  | 의견 |
| --------- | --- |
| 성지현 | intersection observer api를 hook으로 만들어 사용. 요청 시 다음 페이지 존재 여부를 확인하기 위한 hasNextPage 상태를 둠. 리스트의 끝임을 확인하기 위한 빈 div 태그를 두고, div가 뷰포트 안에 들어온 경우 hasNextPage를 체크하여 api 재요청 |
| 신재일 | IntersectionObserver API 사용. 맵핑된 리스트 하단에 타겟하는 <div />가 뷰포트와 교차 시 Issue List Api Call함. await fetch 전과 후에 타겟 요소를 해제하고 등록하여 중복 Call 방지. |
| 윤혜영 |  |
| 조병현 | eventListener로 scroll값에 따라 이슈 목록 추가 로딩 구현 |
| 채하은 | intersection observer 사용하여 구현.  observing을 위해 생성한 div를 로딩 상태일 때는 로딩스피너로 변하도록함.  |
| 홍성욱 |  |

#### **Best practice**

- intersection-observer 사용
- API 응답 이슈 갯수가 일정 갯수보다 적을 시 unobserve하여 추가 로드 중단
   - 이유 : 불필요한 API Call과 잘못된 요청을 방지


### **[Assignment 4] 이슈 상세 화면**

> - 이슈의 상세 내용 표시
> - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

|  이름  | 의견 |
| ------ | --- |
| 성지현 | 이슈 리스트의 아이템을 Link로 감싸 클릭 시 /issues/:id로 라우팅. 클릭한 아이템의 정보를 Link의 state 프롭으로 넘겨 렌더링. 마크다운을 보여주기 위해 react-markdown 라이브러리 사용. |
| 신재일 | 이슈 리스트 아이템으로 이슈 상세 화면 진입. /issue/:issueId 경로로 이동한 뒤 상세 페이지에서 useParams 를 활용하여 Issue Id 추출. 전역으로 관리되는 이슈 리스트에서 동일한 아이디의 데이터를 필터링하여 상세화면 출력. 전역 상태 초기화 될 시 에러 화면 표시 |
| 윤혜영 | |
| 조병현 | /:num 으로 이슈 클릭 시 해당 이슈번호를 parameter설정 후 상세페이지에서 useParams 를 활용하여 해당 이슈번호에 맞는 이슈를 api요청. |
| 채하은 | /issue/:id 로 url parameter 구성.(id는 이슈 넘버를 사용) 사용자가 임의로 주소를 수정할 경우를 대비해 useParams 를 활용하여 api 재요청. api 함수에서 조건부로 에러핸들링을 하여 임의의 페이지로 접근했을 때 pr이나 닫힌 이슈인 경우 사용자가 잘못된 접근을 했음을 알도록 표시 |
| 홍성욱 |  |

#### **Best practice**
  
- `/issue/:issueNumber` url 경로 지정
- 사용자가 주소를 임의로 수정할 경우를 대비해 useParams 활용해 가져온 issueNumber로 API 추가 요청
   - 사용자가 접속한 이슈 페이지가 pr이나 닫힌 이슈, 잘못된 경로인 경우 사용자가 잘못된 접근을 했음을 알려주도록 에러 핸들링
- isLoading state를 두어 로딩 컴포넌트 렌더링
   - 이유 : 로딩 상태를 표시해줌으로써 UX 향상
- react-markdown 사용해 issue body 렌더링

<br/>

## 📑 컨벤션

Husky / lint-staged 적용

###  폴더 구조

```
root
└── src/
    ├── components/
    │   ├── common/
    │   └── domain/
    ├── hooks/
    ├── types/
    ├── constants/
    ├── pages/
    ├── routes/
    ├── utils/
    └── apis/
```

### 커밋 규칙 (commit convention)

| 태그 이름        | 설명                                                                      |
| ----------------| ------------------------------------------------------------------------- |
| [Feat]          | 새로운 기능을 추가                                                         |
| [Fix]           | 버그 수정                                                                  |
| [Design]        | CSS 등 사용자 UI 디자인 변경                                                |
| [Style]         | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                          |
| [Refactor]      | 프로덕션 코드 리팩토링                                                      |
| [Comment]       | 프로덕션 코드 리팩토링                                                      |
| [Docs]          | 문서를 수정한 경우                                                          |
| [Test]          | 테스트 코드, 리팩토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음|
| [Chore]         | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음|
| [Rename]        | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                             |
| [Remove]        | 파일을 삭제하는 작업만 수행한 경우                                            |
| [Type]          | 타입 수정                                                                   |
| [!BREAKING]     | CHANGE 커다란 API 변경의 경우                                                |
| [!HOTFIX]       | 급하게 치명적인 버그를 고쳐야 하는 경우                                        |

### Eslint 설정
```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
	"@typescript-eslint/no-unused-vars": ['warn'],
  },
}
```
### Prettier
```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto",
  "editor.wordWrap": "on"
}
```

### Setting.json
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
},
```
