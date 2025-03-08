
// Express 모듈 가져오기 (웹 서버를 만들기 위해 사용)
const express = require('express');
// Node.js의 내장 모듈인 path 가져오기 (파일 및 디렉토리 경로를 다룰 때 사용)
const path = require('path');

// Express 애플리케이션 생성
const app = express();
// 사용할 포트 번호 설정
const port = 3011;

console.log(process.argv);
// 정적 파일 제공 (dist 디렉터리 내의 정적 파일을 클라이언트에게 제공)
// 클라이언트가 요청하는 정적 파일(css, js, 이미지 등)이 'dist' 폴더에 있다면 해당 파일을 제공함
app.use(express.static(path.join(__dirname, 'dist')));

// 기본 루트('/') 경로 요청 처리
// 사용자가 웹사이트의 루트 경로(http://localhost:3000/)에 접속하면 'dist' 디렉터리의 index.html을 응답으로 보냄
app.get('/', (req, res) => {
  console.log('welcome!', process.pid);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/test', (req, res) => {
  console.log('welcome!', process.pid);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
