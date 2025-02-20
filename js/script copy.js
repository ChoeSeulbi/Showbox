//모바일에서의 100vh 크기 잡기
function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setScreenSize();

//스크롤 시, header 변경 사항
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 1) {
    $("#wrap").addClass("scroll");
  } else if (scroll == 0) {
    $("#wrap").removeClass("scroll");
  }
});

//데스크탑 시, 헤더 메뉴에 hover 할 때 백그라운드 색상 변함
$(".dt_menu").hover(
  function () {
    $("header").addClass("hover");
  },
  function () {
    $("header").removeClass("hover");
  }
);
$(function () {
  $(".open_menu-btn").click(function () {
    $("body").addClass("hidden");
    $(".mo_menu").addClass("active");
    $(".mo_menu").show();
  });
  $(".close_menu-btn").click(function () {
    $("body").removeClass("hidden");
    $(".mo_menu").hide();
    $(".mo_menu").removeClass("active");
  });
});

//맨 위로
$(".scroll-top").click(function () {
  $("html,body").animate({scrollTop: 0}, "500");
  return false;
});

// 로그인 버튼 클릭 시
let body = document.querySelector("body");
let openLoginBtn = document.getElementById("openLoginBtn");
let popupCloseBtn = document.querySelector(".popup-overlay .close-btn");
let popup = document.querySelector(".popup-overlay");

openLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("클릭함");
  body.classList.add("popup-show");
  body.style.overflow = "hidden";
});
popupCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.remove("popup-show");
  body.style.overflow = "auto";
});

//회원가입
function register() {
  let userId = document.getElementById("userId").value;
  let userPw = document.getElementById("userPw").value;
  let userName = document.getElementById("userName").value;
  let userBirth = document.getElementById("userBirth").value;

  if (
    userName.length === 0 ||
    userId.length === 0 ||
    userPw.length === 0 ||
    userBirth.length === 0
  ) {
    alert("모든 입력창에 입력을 해주세요.");
    return;
  }
}

//로그인 Form
let loginForm = document.getElementById("loginForm");
let loginId = document.getElementById("loginId");
let loginPw = document.getElementById("loginPw");
let errorTxt = document.createElement("p");

//회원가입 Form
let signUpForm = document.getElementById("signUpForm");

// class 객체 생성
class List {
  constructor(idStr, pwStr) {
    this.Id = idStr;
    this.Pw = pwStr;
  }
  set Id(value) {
    if (value.length === 0) throw new Error("아이디를 입력해주세요.");
    this.userIdValue = value;
  }
  set Pw(value) {
    if (value.length === 0) throw new Error("비밀번호를 입력해주세요.");
    this.userPwValue = value;
  }
}

let userList = localStorage.getItem("userlist");

if (userList === null) {
  const listObj = JSON.stringify([]);
  localStorage.setItem("userlist", listObj);
  userList = listObj;
}

let loginSubmitHandler = (e) => {
  e.preventDefault();
  let userIdValue = e.target.userId.value;
  let userPwValue = e.target.userPw.value;

  try {
    //userlist 가져오기
    let userListObj = JSON.parse(localStorage.getItem("userlist"));
    console.log(userListObj);
    //객체 추가
    let instance = new List(userIdValue, userPwValue);
    userListObj.push(instance);
    //저장
    let listStr = JSON.stringify(userListObj);
    localStorage.setItem("userlist", listStr);
  } catch (e) {
    alert(e.message);
    console.error(e);
  }

  if (userIdValue.length === 0) {
    userId.after(errorTxt);
    errorTxt.innerHTML = "아이디를 입력해주세요.";
  } else if (userPwValue.length === 0 && userIdValue.length > 0) {
    userPw.after(errorTxt);
    errorTxt.innerHTML = "비밀번호를 입력해주세요.";
  }
};

loginForm.addEventListener("submit", loginSubmitHandler);
