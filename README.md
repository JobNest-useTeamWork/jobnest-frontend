# JobNest - 취업 주거 매칭 MVP

## 프로젝트 소개

이 프로젝트는 공인중개사들이 자주 사용하는 서비스들을 보다 효율적이고 체계적으로 관리할 수 있도록 지원하는 프로젝트입니다.

※ 해당 프로젝트는 (주)테라파이에서 요청받아 협업하여 진행하였습니다.

## 목차

- [기술 스택](#기술-스택)
- [개발 기간](#개발-기간)
- [배포 주소](#배포-주소)
- [기획안 주소](#기획안-주소)
- [주요 기능](#주요-기능)
- [설치 및 실행 방법](#설치-및-실행-방법)
- [팀 소개](#팀-소개)

## 기술 스택

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Routing & Data Fetching

![React Router DOM](https://img.shields.io/badge/React_Router_DOM-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-20232A?style=for-the-badge&logo=zustand&logoColor=white)
![Tanstack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Google Calendar API](https://img.shields.io/badge/Google_Calendar_API-4285F4?style=for-the-badge&logo=google-calendar&logoColor=white)

### Form & UI

![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Dnd Kit](https://img.shields.io/badge/Dnd_Kit-FF4500?style=for-the-badge&logo=dnd&logoColor=white)
![Tailwind Merge](https://img.shields.io/badge/Tailwind_Merge-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 개발 도구 & 배포

![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 협업 툴

![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## 개발 기간

2024.09.02 ~ 2024.09.27

## 배포 주소

https://jobnest-frontend.vercel.app/

## 기획안 주소

https://smooth-newt-3c9.notion.site/useTeamWork-9315fa5454a74739943f31da67a35491

## 주요 기능

### 홈 대시보드 (즐겨찾기)

- 공인중개사들이 빠르게 자주 이용하는 사이트에 접근할 수 있도록 즐겨찾기 기능을 구현했습니다.
- 드래그 앤 드랍 기능 구현 : 즐겨찾기 요소들의 위치를 드래그 앤 드랍으로 변경이 가능합니다. DnD Kit 라이브러리를 사용했으며 신생 라이브러리이지만 가장 공식문서가 잘되있고 npm download trends가 가장 급격하게 증가중인 이점이 있어 사용했습니다.
- 즐겨찾기 CRUD 기능 : 테라파이에서 제공받은 API를 통해 웹 사이트별로 메타데이터를 가져와서 LocalStorage에 저장 후 데이터를 가공해 사용했습니다.

### 할 일 목록과 구글 캘린더 연동

- 공인중개사들의 스케줄 관리와 할일 목록 관리를 쉽게 할 수 있도록 구글 캘린더와의 연동을 지원했습니다.

### 계약서 작성 및 관리

- 등기부등본 데이터를 바탕으로 계약서의 기본 내용이 자동으로 작성되며, 게시판 형태로 CRUD 기능을 적용하여 사용자가 계약서를 관리할 수 있습니다.

### 등기/대장 열람 및 열람내역 관리

- 공인중개사들이 동시에 여러 개의 등기 또는 대장을 발급받을 수 있습니다. 또한 열람했던 등기 또는 대장 내역을 확인할 수 있습니다.
- Tanstack Query를 통해 API 호출 시 데이터 관리를 효율적으로 처리했습니다.
- API 호출 중 로딩 스피너를 표시해 데이터가 불러와지는 동안 비동기 처리 상태를 명확히 표시해 사용자 경험을 개선했습니다.
- React Hook Form을 사용해 Form 상태와 유효성 검증을 간편하게 관리할 수 있도록 구현했습니다.
- 페이지네이션 기능을 적용해 대량의 데이터도 성능 저하 없이 표시될 수 있도록 처리했습니다.
- LocalStorage를 사용해 사용자가 열람했던 등기 또는 대장 내역을 저장해 과거 열람 내역을 언제든지 확인할 수 있도록 기능을 구현했습니다.

## 설치 및 실행 방법

1. 저장소 클론하기

```
https://github.com/JobNest-useTeamWork/jobnest-frontend
```

2. 의존성 설치하기

```
yarn install
```

3. `.env` 파일 설정하기

```
VITE_CLIENT_ID=your-google-client-id
VITE_CLIENT_SECRET=your-google-secret-key

VITE_BASE_URL=api-base-url
```

4. 개발모드에서 실행하기

```
yarn dev
```

## 팀 소개

<img src='https://github.com/user-attachments/assets/6b5a6df5-c71f-46c9-86fc-62603ee1d70b' width=500 />

<br>

안녕하세요, 저희는 **useTeamWork** 팀입니다.

- TeamWork라는 hook으로 팀원 모두의 능력이 모여 최고의 결과물을 창출해냅니다.
- project의 lifecycle을 효과적으로 관리하여 탁월한 결과를 이끌어낼 준비가 되었습니다.

사용자를 사로잡는 서비스를 만드는 것과 성공적인 협업 사례의 표본이 되는 것이 저희들의 목표입니다.✨

<table>
  <tr>
    <th>김승윤 (팀장)</th>
    <th>박윤서 (팀 대표자)</th>
    <th>이수진 (팀원)</th>
    <th>정다솜 (팀원)</th>
  </tr>
  <tr>
    <td width=300>
      <img src='https://github.com/user-attachments/assets/6c25a1d1-99c1-4ad4-819e-5f3af98140f7' alt='seungyun' />
    </td>
    <td width=300>
      <img src='https://github.com/user-attachments/assets/93174298-b5f3-4ea3-9588-259104581cb1' alt='yunseo' />
    </td>
    <td width=300>
      <img src='https://github.com/user-attachments/assets/3d510fdc-e193-4248-919f-3c72225f1ce4' alt='sujin' />
    </td>
    <td width=300>
      <img src='https://github.com/user-attachments/assets/1a071a7d-92f1-4943-9d3a-7fb4d077ddbf' alt='dasom' />
    </td>
  </tr>
  <tr>
    <td>
      <div>* Header/Navigation Layout </div>
      <div>* 계약관리 </div>
    </td>
    <td>
      <div>* 메인페이지 Todo</div>
      <div>* Google Calender</div>
    </td>
    <td>
      <div>* 등기/대장 발급</div>
    </td>
    <td>
      <div>* 메인페이지 즐겨찾기</div>
    </td>
  </tr>
</table>

