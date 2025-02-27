class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <!-- skipnav -->
      <div class="skipNav">
        <ul>
          <li><a href="#header">상단 정보로 이동</a></li>
          <li><a href="#content">본문으로 이동</a></li>
          <li><a href="#footer">하단 정보로 이동</a></li>
        </ul>
      </div>
                <header id="header">
            <nav>
                <div class="inner">
                    <div class="mo_top-header">
                        <h1 class="logo"><a href="index.html"><img src="img/logo.png" alt=""></a></h1>
                        <button class="open_menu-btn"></button>
                    </div>
                    <div class="mo_menu">
                        <div class="top">
                            <button class="close_menu-btn"></button>
                        </div>
                        <ul class="menu-list">
                            <li class="menu_sns">
                                <ul>
                                    <li class="sns-youtube"><a href="https://www.youtube.com/SHOWBOXmovie" target="_blank"></a></li>
                                    <li class="sns-instagram"><a href="https://www.instagram.com/showbox.movie/" target="_blank"></a></li>
                                    <li class="sns-facebook"><a href="https://www.facebook.com/Showbox.Movie" target="_blank"></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="title">SHOWBOX MOVIE</a>
                                <ul class="sub-menu">
                                    <li><a href="lineup.html">LINE-UP</a></li>
                                    <li><a href="now.html">NOW IN THEATERS</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="title">COMPANY</a>
                                <ul class="sub-menu">
                                    <li><a href="company.html">SHOWBOX</a></li>
                                    <li><a href="history.html">HISTORY</a></li>
                                    <li><a href="map.html">MAP</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="title">IR</a>
                                <ul class="sub-menu">
                                    <li><a href="notice.html">NOTICE</a></li>
                                    <li><a href="recruit.html">RECRUIT</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="dt_menu">
                        <ul>
                            <li><a href="lineup.html">SHOWBOX MOVIE</a></li>
                            <li><a href="company.html">COMPANY</a></li>
                            <li><a href="notice.html">IR</a></li>
                        </ul>
                        <div class="sub-menu">
                            <ul>
                                <li>
                                    <a href="lineup.html" class="title">SHOWBOX MOVIE</a>
                                    <ul>
                                        <li><a href="lineup.html">LINE-UP</a></li>
                                        <li><a href="now.html">NOW IN THEATERS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="company.html" class="title">COMPANY</a>
                                    <ul>
                                        <li><a href="company.html">SHOWBOX</a></li>
                                        <li><a href="history.html">HISTORY</a></li>
                                        <li><a href="map.html">MAP</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="notice.html" class="title">IR</a>
                                    <ul>
                                        <li><a href="notice.html">NOTICE</a></li>
                                        <li><a href="recruit.html">RECRUIT</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `;
  }
}
customElements.define("component-header", HeaderComponent);
