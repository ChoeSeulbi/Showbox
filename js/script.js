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

let signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = document.getElementById("userName").value;
  let userId = document.getElementById("userId").value;
  let userPw = document.getElementById("userPw").value;
  let userBirth = document.getElementById("userBirth").value;

  //유효성 검사
  let isValid = true;
  document.querySelectorAll(".error-text").forEach((error) => error.remove());

  //localStorage 사용하기 - 기존 유저 정보 가져오기
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let hasId = users.some((user) => user.userId === userId);
  //입력창 별 메세지
  let fields = [
    {id: "userName", message: "이름을 입력해주세요."},
    {id: "userId", message: "아이디를 입력해주세요."},
    {id: "userPw", message: "비밀번호를 입력해주세요."},
    {id: "userBirth", message: "생일을 선택해주세요."},
  ];

  fields.forEach((field) => {
    let input = document.getElementById(field.id);
    let existingError = input.nextElementSibling; // input 바로 아래 요소 체크

    // input에 입력값이 없을 때
    if (input.value.length === 0) {
      if (!existingError) {
        let errorTxt = document.createElement("p");
        let cuationImg = document.createElement("span");
        input.classList.add("error");
        input.after(errorTxt);
        input.nextElementSibling.after(cuationImg);
        errorTxt.innerHTML = field.message;
        cuationImg.classList.add("ic-caution");
      }
      isValid = false;
    }
    // input에 입력값이 있을 때
    else {
      if (existingError) {
        //input 다음 p 태그가 존재하면
        input.nextElementSibling.remove(); // 그 p태그를 삭제한다
        input.classList.remove("error"); // 해당 input의 클래스는 삭제한다
        if (existingError) {
          //span img 지우기
          input.nextElementSibling.remove();
          return;
        }
      } else if (hasId) {
        return;
      }
    }
  });

  if (hasId) {
    let userIdField = document.getElementById("userId");
    userIdField.classList.add("error");

    let errorTxt = document.createElement("p");
    let cuationImg = document.createElement("span");
    userIdField.after(errorTxt);
    userIdField.nextElementSibling.after(cuationImg);
    cuationImg.classList.add("ic-caution");
    errorTxt.innerHTML = `이미 존재하는 아이디입니다.`;
    return;
  }

  if (!isValid) return; //입력값이 부족하다면 회원가입 중지

  //새로운 유저 추가
  let newUser = {userName, userId, userPw, userBirth};
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("회원가입이 완료되었습니다!");
  signUpForm.reset();
  closePopup(signUpPopup);
});

//로그인
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let loginId = document.getElementById("loginId").value;
  let loginPw = document.getElementById("loginPw").value;
  //localStorage 사용하기 - 기존 유저 정보 가져오기
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let foundUser = users.find(
    (user) => user.userId === loginId && user.userPw === loginPw
  );

  localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

  if (foundUser) {
    alert(`${loginId}님, 환영합니다!`);
    loginForm.reset();
    closePopup(loginPopup);
    let loginBtn = document.querySelector(".login-btn");
    loginBtn.style.display = "none";
    setLoggedInState(foundUser.userName);
  } else {
    let inputPw = document.getElementById("loginPw");
    let inputId = document.getElementById("loginId");
    let errorTxt = document.createElement("p");
    let existingError = inputPw.nextElementSibling;

    inputId.classList.add("error");
    inputPw.classList.add("error");
    if (!existingError) {
      inputPw.after(errorTxt);
      errorTxt.innerHTML = `아이디와 비밀번호를 확인해주세요.`;
    }
  }
});

// 로그인 후 고정 p태그
let dashBoard = document.querySelector(".dash-board");
let dashBoardTxt = document.querySelector(".dash-board .text");
function setLoggedInState(name) {
  dashBoard.style.display = "flex";
  dashBoardTxt.innerText = `${name}님, 환영합니다!`;
}
let logoutBtn = document.querySelector(".dash-board .logout-btn");
let loginBtn = document.querySelector(".login-btn");
logoutBtn.addEventListener("click", logoutUser);
function logoutUser() {
  dashBoard.style.display = "none";
  loginBtn.style.display = "block";
}
