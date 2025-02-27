class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer id="footer">
            <div class="inner">
                <div class="top">
                    <div class="img-box"><img src="img/logo.png" alt="푸터 로고"></div>
                </div>
                <div class="txt">
                    주소 서울특별시 강남구 도산대로 310(논현동) 916빌딩 7~9층
                    <br> 전화 070-8854-1158
                    <br> 이메일 jeongjw@showbox.co.kr
                </div>
                <div class="link">
                    <a href="https://showbox.irpage.co.kr/#/agreements/terms-service" target="_blank">이용약관</a>
                    <a href="https://showbox.irpage.co.kr/#/agreements/privacy-policy" target="_blank">개인정보 처리방침</a>
                    <small>© 2019 SHOWBOX All rights reserved.</small>
                    <button class="login-btn" onclick="openPopup(loginPopup)">
                    관리자 로그인
                    </button>                
                </div>
            </div>
        </footer>
              <!-- 로그인 팝업창 -->
      <div class="popup-overlay" id="loginPopup">
        <div class="popup-container">
          <div class="popup-inner">
            <button class="close-btn" onclick="closePopup(loginPopup)">
              <span></span>
              <span></span>
            </button>
            <h2>관리자 로그인</h2>
            <form id="loginForm">
              <fieldset>
                <div>
                  <label for="loginId"></label>
                  <input
                    id="loginId"
                    type="text"
                    placeholder="아이디 입력"
                    name="loginId" />
                </div>
                <div>
                  <label for="loginPw"></label>
                  <input
                    id="loginPw"
                    type="password"
                    placeholder="비밀번호 입력"
                    name="loginPw" />
                </div>
                <button class="loginBtn">로그인</button>
              </fieldset>
            </form>
            <button class="sign_up-btn" onclick="openPopup(signUpPopup)">
              회원가입
            </button>
          </div>
        </div>
      </div>
      <!-- 회원가입 팝업창 -->
      <div class="popup-overlay" id="signUpPopup">
        <div class="popup-container">
          <div class="popup-inner">
            <button class="close-btn" onclick="closePopup(signUpPopup)">
              <span></span>
              <span></span>
            </button>
            <h2>관리자 회원가입</h2>
            <form id="signUpForm">
              <fieldset>
                <div class="form-input">
                  <label for="userName">이름</label>
                  <input id="userName" type="text" placeholder="이름 입력" />
                </div>
                <div class="form-input">
                  <label for="userId">아이디</label>
                  <input
                    id="userId"
                    type="text"
                    placeholder="아이디 입력"
                    name="userId" />
                </div>
                <div class="form-input">
                  <label for="userPw">비밀번호</label>
                  <input
                    id="userPw"
                    type="password"
                    placeholder="비밀번호 입력"
                    name="userPw" />
                </div>
                <div class="form-input">
                  <label for="userBirth">생년월일</label>
                  <input
                    id="userBirth"
                    type="date"
                    placeholder="생년월일 입력" />
                </div>
                <button type="submit">회원가입</button>
              </fieldset>
            </form>
            <!-- <button class="sign_up-btn">회원가입</button> -->
          </div>
        </div>
      </div>
      <div class="dash-board">
        <p class="text"></p>
        <button class="logout-btn">로그아웃</button>
      </div>
          `;
  }
}
customElements.define("component-footer", FooterComponent);
