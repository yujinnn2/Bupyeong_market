# Bupyeong_market

# 부평종합시장 re-design README


![Image](https://github.com/user-attachments/assets/ae47b0d0-cc56-4604-afa1-90a8c2e2cdcf)




- 배포 URL :https://bupyeongmarket.netlify.app/

## 프로젝트 소개


**부평종합시장 웹사이트 리디자인 프로젝트**는 사용자 편의성과 시장 홍보 효과를 높이기 위해 진행된 웹 퍼블리싱 협업 프로젝트입니다.

실제 상권인 부평종합시장을 대상으로 하여, 전통시장의 접근성·가독성 문제를 개선하고 정보 전달력을 강화하고자 기획되었습니다.

- 시장 소개 및 특징, 점포별 정보, 위치 안내 등을 한눈에 확인할 수 있도록 제작하였으며,
- 간단한 네비게이션 구조와 콘텐츠 중심의 UI로 모든 연령층의 방문자들이 쉽게 정보를 찾을 수 있도록 설계했습니다.

## 팀원 구성


## 1. 개발 환경


- Skills : HTML, SCSS, JavaScript, jQuery
- 협업 툴 : Discord, Notion, Github
- 서비스 배포 환경 : Netlify
- 디자인 : [Figma](https://www.figma.com/file/fAisC2pEKzxTOzet9CfqML/README(oh-my-code)?node-id=39%3A1814)

## 2. 프로젝트 구조

```
BupyeongMarket/
├── README.md/                        # 프로젝트 기획 및 참고 자료
├── index.html
├── assets/                        # 정적 리소스 모음
│   ├── css/                      # 각 페이지별 스타일시트
│   │   ├── common.css
│   │   ├── detail.css
│   │   ├── event.css
│   │   ├── map.css
│   │   ├── market.css
│   │   ├── near.css
│   │   ├── notice.css
│   │   ├── notice_list.css
│   │   └── style.css            # 전체 공통 스타일 통합본
│   │
│   ├── scss/                     # SCSS 스타일시트 (CSS와 동일한 구조)
│   │   ├── common.scss
│   │   ├── detail.scss
│   │   ├── event.scss
│   │   ├── map.scss
│   │   ├── market.scss
│   │   ├── near.scss
│   │   ├── notice.scss
│   │   ├── notice_list.scss
│   │   └── style.scss
│   │
│   ├── js/                       # 공통 스크립트
│   │   └── common.js
│   │
│   ├── images/                   # 이미지 리소스
│   │   ├── event/
│   │   ├── favicon/
│   │   ├── icon/
│   │   ├── market/
│   │   ├── near/
│   │   └── notice/
│   │
│   └── videos/                   # 영상 자료
│       ├── 부평메인.mp4
│       └── 부평로고영상.mp4
│
├── bupyeongmarket/               # 실제 페이지 HTML 파일
│   ├── event.html
│   ├── event_detail.html
│   ├── map.html
│   ├── market.html
│   ├── near.html
│   ├── notice.html
│   └── notice_list.html
```

## 3. 역할 분담


## 4. 개발 기간 및 작업 관리


**개발 기간**

- 전체 개발 기간 : 2025-06-01 ~ 2022-07-10
- UI 구현 : 2022-12-09 ~ 2022-12-16
- 기능 구현 : 2022-12-17 ~ 2022-12-31

**작업 관리**

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 notion에 회의 내용을 기록했습니다.

## 5. 신경 쓴 부분



## 6. 주요 기술 구현



### 1. 초기화면 구성 (Splash Screen)

- **브랜드 아이덴티티 강조 및 사용자 몰입 유도**
- 사이트 진입 시 `부평메인.mp4` 영상을 활용한 **인트로 Splash 화면** 구성
- 자동 재생/반복/음소거 처리로 부드러운 시각적 연출
- 부평시장 로고 등장 → **지역 상권의 이미지 강화**

```
text
복사편집
📁 videos/
├── 부평메인.mp4
├── 부평로고영상.mp4

```

> 사용 파일: bupyeongmarket/market.html
> 
> 
> 스타일: `assets/css/style.css`
> 
> 



### 2. 반응형 웹 제작 (Responsive Web Design)

- **모바일·태블릿·PC 해상도별 완전 대응**
- `@media` 쿼리 기반 반응형 레이아웃 구현
- `%`, `vw`, `flex` 등을 활용한 **유연한 콘텐츠 배치**
- 모바일 환경에서의 **터치 인터랙션 최적화**

> 대응 해상도:
> 
> - Mobile: 480px 이하
> - Tablet: 768px
> - Desktop: 1280px 이상

> 관련 파일:
> 
> 
> `assets/css/style.css`, `market.css`, `map.css`, 각종 `.scss`
> 
> 
> []()
> 

![Image](https://github.com/user-attachments/assets/726a2452-32f5-42b0-867d-65f07db8e0d3)


### 📌 3. Kakao 지도 API 활용 (Kakao Map Integration)

- **시장 내 점포 위치를 시각적으로 안내**
- **Kakao 지도 API**를 통해 부평시장 주변 정보 및 상세 위치 표시
- 사용자 현재 위치 기반 거리 안내 및 마커 클릭 시 **오버레이 정보창** 출력
- 지도 컨트롤: 줌인/줌아웃, 드래그, 터치 대응
- **커스텀 마커 이미지 적용**으로 시각적 차별화

> 관련 파일:
> 
> 
> `bupyeongmarket/map.html`
> 
> `assets/js/common.js`
> 
> `assets/css/map.css`, `scss/map.scss`
> 

![Image](https://github.com/user-attachments/assets/48776fe2-c3a1-4b9d-a288-6d600e6f82ab)


### ✨ 기타 적용 사항 요약

| 항목 | 내용 |
| --- | --- |
| **초기화면** | Splash 영상으로 시각적 인트로 구현 |
| **반응형 웹** | 전 디바이스 대응 미디어 쿼리 적용 |
| **지도 연동** | Kakao Map API 활용, 위치 기반 상호 표시 |
| **접근성 고려** | 모바일/저사양 기기에서도 자연스러운 동작 |
