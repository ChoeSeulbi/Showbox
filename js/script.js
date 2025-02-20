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

// 팝업 열기
function openPopup(popupId) {
  popupId.style.display = "block";
  body.style.overflow = "hidden";
  console.log(popupId.getAttribute("id"));
}
// 팝업 닫기
function closePopup(popupId) {
  if (popupId.getAttribute("id") === "signUpPopup") {
    body.style.overflow = "hidden";
    popupId.style.display = "none";
  } else {
    body.style.overflow = "auto";
    popupId.style.display = "none";
  }
}

//회원가입
function register() {
  let e = window.event;
  let userId = document.getElementById("userId").value;
  let userPw = document.getElementById("userPw").value;
  let userName = document.getElementById("userName");
  let userBirth = document.getElementById("userBirth").value;
  let errorTxt = document.createElement("p");

  // if (
  //   userName.length === 0 ||
  //   userId.length === 0 ||
  //   userPw.length === 0 ||
  //   userBirth.length === 0
  // ) {
  //   e.preventDefault();
  //   // alert("모든 입력창에 입력을 해주세요.");
  //   return;
  // }

  if (userName.value.length === 0) {
    e.preventDefault();
    console.log("X");
    userName.after(errorTxt);
    errorTxt.innerText = `이름을 입력해주세요.`;
    // return;
    // userName.after(errorTxt);
    // errorTxt.innerText = `아이디를 입력해주세요.`;
  }
  // else if (userName.value.length > 0 && userId.value.length === 0) {
  //   e.preventDefault();
  //   console.log("X");
  //   userId.after(errorTxt);
  //   errorTxt.innerText = `아이디를 입력해주세요.`;
  // }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((user) => user.userId === userId)) {
    e.preventDefault();
    // alert("이미 등록된 아이디입니다.");
    return;
  }
  let newUser = {
    userName: userName.value,
    userPw: userPw,
    userId: userId,
    userBirth: userBirth,
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("회원가입 완료!");
}
