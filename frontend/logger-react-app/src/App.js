import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap">
          <div className="title">OBD2 Data Logger for Car Forensics</div>
          <div className="member-menu">
            <ul>
              <li>
                <a href="">로그인</a>
              </li>
              <div className="slash">/</div>
              <li>
                <a href="">회원가입</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <body className="App-body">
        <div>대시보드 구성요소</div>
      </body>
      <footer className="App-footer">
        <div className="inner">
          <div className="message">차량 포렌식 데이터 수집을 위하여 OBD2 로그를 모아 시각화하는 서비스입니다.</div>
          <div className="contact">E-MAIL : whtjdqls01@gmail.com</div>
          <div className="copyright">Copyrigh 2024 All ⓒ rights reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
