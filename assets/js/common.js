

// 헤더

        const header = document.querySelector('header')
        const menu = document.querySelector('.gnb');
        const subMenus = document.querySelectorAll('ul.sub-menu');
        const subBanner = document.querySelector('.submenu-banner');

        menu.addEventListener('mouseenter', () => {
            header.classList.add('on')
        })
        menu.addEventListener('mouseleave', () => {
            header.classList.remove('on')
        })

        menu.addEventListener('mouseenter', () => {
            subBanner.classList.add('on')
        })
        menu.addEventListener('mouseleave', () => {
            subBanner.classList.remove('on')
        })

        menu.addEventListener('mouseenter', () => {
            subMenus.forEach(subMenu => {
                subMenu.classList.add('on');
            });
        });

        menu.addEventListener('mouseleave', () => {
            subMenus.forEach(subMenu => {
                subMenu.classList.remove('on');
            });
        });
const mobileMenuEl = document.querySelector('.mobile-menu');
const mobileDimEl = document.querySelector('.mobile-dim');
const menuToggleEl = document.querySelector('.menu-toggle');

function closeMenu() {
  menuToggleEl.classList.remove('active');
  mobileMenuEl.classList.remove('on');
  mobileDimEl.classList.remove('on');
}

menuToggleEl.addEventListener('click', function() {
  this.classList.toggle('active');
  mobileMenuEl.classList.toggle('on');
  mobileDimEl.classList.toggle('on');
});

// 모바일 메뉴 바깥 클릭 시 닫기
mobileDimEl.addEventListener('click', closeMenu);

// ESC 키 눌렀을 때 닫기
document.addEventListener('keydown', function(event) {
  if(event.key === "Escape") {
    closeMenu();
  }
});



gsap.registerPlugin(ScrollTrigger);


// 화면 크기 변수 저장 (리사이즈 대응용)
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


// main(green)

const ballAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom",
    scrub: 15,
    markers: false // 위치 확인용 (배포시 false로 변경)
  }
});
ballAnimation.to(".big-ball-1", {
  x: windowWidth / 4,
  y: windowHeight / 10,
})
.to(".big-ball-1", {
  x: windowWidth / 2,
  y: windowHeight / 5,
})
.to(".big-ball-1", {
  x: 0,
  y: 0,
});


// skyblue

const ballAnimation2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom", // ballAnimation1과 동일한 스크롤 범위 사용
    scrub: 10,
    markers: false,
  }
});

ballAnimation2.to(".big-ball-2", {
  x: -windowWidth / 5, // .big-ball-2의 첫 번째 목표 위치
  y: -windowHeight / 5,
})
.to(".big-ball-2", {
  x: -windowWidth / 3.5, // .big-ball-2의 두 번째 목표 위치
  y: windowHeight / 8,
})
.to(".big-ball-2", {
  x: 0,
  y: 0,
});

// green

const ballAnimation3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom", // ballAnimation1과 동일한 스크롤 범위 사용
    scrub: 10,
    markers: false,
  }
});

ballAnimation3.to(".big-ball-3", {
  x: -windowWidth / 3, // .big-ball-2의 첫 번째 목표 위치
  y: -windowHeight / 7,
})
.to(".big-ball-3", {
  x: -windowWidth / 6, // .big-ball-2의 두 번째 목표 위치
  y: windowHeight / 2,
})
.to(".big-ball-3", {
  x: 0,
  y: 0,
});

// blue

const ballAnimation4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom", // ballAnimation1과 동일한 스크롤 범위 사용
    scrub: 10,
    markers: false,
  }
});

ballAnimation4.to(".big-ball-4", {
  x: windowWidth / 5, // .big-ball-2의 첫 번째 목표 위치
  y: windowHeight / 4,
})
.to(".big-ball-4", {
  x: windowWidth / 8, // .big-ball-2의 두 번째 목표 위치
  y: windowHeight / 3,
})
.to(".big-ball-4", {
  x: 0,
  y: 0,
});

// purple

const ballAnimation5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom", // ballAnimation1과 동일한 스크롤 범위 사용
    scrub: 10,
    markers: false,
  }
});

ballAnimation5.to(".big-ball-5", {
  x: windowWidth / 2, // .big-ball-2의 첫 번째 목표 위치
  y:- windowHeight / 2,
})
.to(".big-ball-5", {
  x: windowWidth / 2, // .big-ball-2의 두 번째 목표 위치
  y: windowHeight / 7,
})
.to(".big-ball-5", {
  x: 0,
  y: 0,
});
