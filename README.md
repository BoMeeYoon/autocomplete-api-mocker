## 자동검색어 만들기
-----
<br/>

#### 목표
* 실제 개발환경과 비슷한 환경을 경험하기 위해 api-mocker를 사용해본다.
* fetch 에 대한 이해를 높인다.

#### 서버 구동방법
* client : `autocomplete` 현 폴더에서 `npm start`를 입력한다
* server : `autocomplete` 현 폴더에서 `cd server` 폴더로 이동 후, `npm start`를 입력한다

#### 개발이슈
* html 번들 및 favicon 경로 설정 에러
 - html 번들 파일에 js 파일이 중복 link 되어 index 파일이 두번 호출 됨.<br/>
   기존 html에 링크파일 모두 삭제 후 번들에서만 관리 하도록 webpack 설정으로 해결
 - file-loader, url-loader, html에서 중복으로 경로가 설정 됨.<br/>
   html에 정적으로 경로 설정 후, file-loader, url-loader 에서 재설정으로 해결 

* SourceMap 에러
  - 제일 힘들었던 에러...<br/>
    sockjs 를 번들링 할 수 없다는 에러가 뜨면서 404 페이지 오류가 뜸.<br/>
    source-map 설정으로 해결


#### 결과물
* 입력된 단어와 일치하는 단어 리스트 출력
* 리스트는 최대 5개로 제한
* 리스트 클릭 시 해당 검색어 입력창에 출력
* 공백제거 및 대문자 변환 후 api 요청
