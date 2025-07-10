import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";


const Header = styled.header`
  position: fixed;
  z-index: 3;
  width: 100%;
  background: var(--White-01);
  height: 70px;
  display: flex;
  justify-content: center;
  gap: 20px;
  transition: all 0.4s;
  border-bottom: solid 1px var(--Grey-03);

  &.on {
    height: 370px;
  }

  .menu {
    display: none;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .logo {
    width: 210px;
  }

  &.gnb ul {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  &.gnb ul li {
    line-height: 70px;
  }

  &.gnb ul li a {
    padding: 20px;
  }

  &.gnb ul li ul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &.gnb ul li.main-1,
  &.gnb ul li.main-2,
  &.gnb ul li.main-3,
  &.gnb ul li.main-4,
  &.gnb ul li.main-5 {
    width: 150px;
  }

  &.gnb li .sub-menu {
    text-align: center;
    opacity: 0;
    font-size: 1.6rem;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease;
    width: 100%;
    display: flex;
    justify-content: center;
    height: auto;
    margin: 0 auto;
  }

  &.gnb li .sub-menu.on {
    max-height: 400px;
    opacity: 1;
    display: block;
    height: auto;
  }

  &.gnb li .sub-menu li {
    padding: 4px 0;
    line-height: 30px;
  }

  &.gnb .sub-menu a {
    color: var(--Grey-02);
    font-weight: 500;
    transition: all 0.4s;
  }

  &.gnb .sub-menu a:hover {
    color: var(--Grey-01);
    font-weight: 500;
  }

  &.gnb .obj {
    width: 200px;
    margin-top: 80px;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 100;

  .bar {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #333;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  &.active {
    .bar:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }
  }
`;

const MobileMenu = styled.div`
  padding: 20px 15px;
  position: fixed;
  right: 0;
  z-index: 2000;
  height: 100%;
  width: 250px;
  background: var(--Black-02);
  transform: translateX(300px);
  transition: all 0.4s;
  &.on {
    transform: translateX(0);
  }

  a {
    display: inline-block;
    padding: 10px 0;
    color: var(--Grey-01);
    font-size: 2.5rem;
    transition: all 0.3s;
  }
  a:hover {
    color: var(--main-color);
  }

  .img {
    margin-top: 20px;
  }
`;

const MobileDim = styled.div`
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  background: var(--Black-01);
  opacity: 0;
  z-index: 1900;
  position: fixed;
  transition: all 0.4s;
  &.on {
    visibility: visible;
    opacity: 0.5;
  }
`;


function HeaderComponent() {
  const [headerOn, setHeaderOn] = useState(false);
  const [subMenuOn, setSubMenuOn] = useState(false);
  const [subBannerOn, setSubBannerOn] = useState(false);
  const [mobileMenuOn, setMobileMenuOn] = useState(false);

  // 마우스 오버/아웃 핸들러들
  const handleMenuMouseEnter = () => {
    setHeaderOn(true);
    setSubMenuOn(true);
    setSubBannerOn(true);
  };

  const handleMenuMouseLeave = () => {
    setHeaderOn(false);
    setSubMenuOn(false);
    setSubBannerOn(false);
  };

  // 모바일 메뉴 열고 닫기
  const toggleMobileMenu = () => {
    setMobileMenuOn(!mobileMenuOn);
  };

  const closeMobileMenu = () => {
    setMobileMenuOn(false);
  };

  // ESC 키 눌렀을 때 모바일 메뉴 닫기
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Header className={`gnb ${headerOn ? "on" : ""}`}>
        <div className="logo">
          <a href="#">
            <img src="assets/images/icon/main_logo.png" alt="main logo" />
          </a>
        </div>

        <div
          className="gnb"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <ul>
            <li className="main-1">
              <a href="#">부평문화시장</a>
              <ul className={`sub-menu ${subMenuOn ? "on" : ""}`}>
                <li>
                  <a href="#">시장소개</a>
                </li>
                <li>
                  <a href="#">BI소개</a>
                </li>
                <li>
                  <a href="#">오시는 길</a>
                </li>
              </ul>
            </li>
            <li className="main-2">
              <a href="assets/pages/market.html">살거리</a>
              <ul className={`sub-menu ${subMenuOn ? "on" : ""}`}>
                <li>
                  <a href="#">의류·패션잡화</a>
                </li>
                <li>
                  <a href="#">액세서리·기타</a>
                </li>
                <li>
                  <a href="#">아동복</a>
                </li>
                <li>
                  <a href="#">훈수·주방·그릇</a>
                </li>
                <li>
                  <a href="#">수입품·식품·문구</a>
                </li>
                <li>
                  <a href="#">농·수산물·인삼</a>
                </li>
                <li>
                  <a href="#">꽃·공예품</a>
                </li>
              </ul>
            </li>
            <li className="main-3">
              <a href="assets/pages/map.html">시장안내</a>
              <ul className={`sub-menu ${subMenuOn ? "on" : ""}`}>
                <li>
                  <a href="#">편의시설</a>
                </li>
                <li>
                  <a href="#">시장점포</a>
                </li>
                <li>
                  <a href="#">시장지도</a>
                </li>
              </ul>
            </li>
            <li className="main-4">
              <a href="assets/pages/near.html">주변관광지</a>
              <ul className={`sub-menu ${subMenuOn ? "on" : ""}`}>
                <li>
                  <a href="#">행사·이벤트</a>
                </li>
                <li>
                  <a href="#">문화교실</a>
                </li>
                <li>
                  <a href="#">행사·이벤트</a>
                </li>
              </ul>
            </li>
            <li className="main-5">
              <a href="assets/pages/notice_list.html">커뮤니티</a>
              <ul className={`sub-menu ${subMenuOn ? "on" : ""}`}>
                <li>
                  <a href="#">시장 SNS</a>
                </li>
                <li>
                  <a href="#">공지사항</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <MenuToggle
          className={mobileMenuOn ? "active" : ""}
          aria-label="메뉴 토글"
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </MenuToggle>
      </Header>

      <MobileMenu className={mobileMenuOn ? "on" : ""}>
        <ul>
          <li>
            <a href="#">부평문화시장</a>
          </li>
          <li>
            <a href="assets/pages/market.html">살거리</a>
          </li>
          <li>
            <a href="assets/pages/map.html">시장안내</a>
          </li>
          <li>
            <a href="assets/pages/near.html">주변관광지</a>
          </li>
          <li>
            <a href="assets/pages/notice_list.html">커뮤니티</a>
          </li>
          <div className="img">
            <img src="assets/images/gnb_banner.png" alt="gnb banner" />
          </div>
        </ul>
      </MobileMenu>

      <MobileDim className={mobileMenuOn ? "on" : ""} onClick={closeMobileMenu} />
    </>
  );
}

export default HeaderComponent;

