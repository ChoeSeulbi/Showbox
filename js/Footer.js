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
                </div>
                <button id="openLoginBtn">관리자 로그인</button>
            </div>
        </footer>
          `;
  }
}
customElements.define("component-footer", FooterComponent);
