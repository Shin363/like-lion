import React from "react";
import styles from "./Header.module.css";

const {
  header,
  ["top-mobile-menu"]: topMobileMenu,
  ["top-menu"]: topMenu,
} = styles;

const Header = () => {
  return (
    <header className={header}>
      <h1>
        <a href="/">Rland</a>
      </h1>
      <div className={topMobileMenu}>
        <a className="n-icon n-icon:menu n-icon-color:base-1" href="top-menu=1">
          숨김버튼
        </a>
      </div>
      <div className={topMenu}>
        <nav>
          <h1 className="d:none">상단메뉴</h1>
          <ul>
            <li>
              <a className="n-icon n-icon:home n-icon-color:base-1" href="/">
                홈
              </a>
            </li>
            <li>
              <a
                className="n-icon n-icon:dashboard n-icon-color:base-1"
                href="/admin/index.html"
              >
                대시보드
              </a>
            </li>
            <li>
              <a
                href="/signin.html"
                className="n-icon n-icon:login n-icon-color:base-1"
              >
                로그인
              </a>
            </li>
          </ul>
        </nav>
        {/* 
            <section>
                <h1 className="d:none">로그아웃 폼</h1>
                <form>
                    <input type="hidden" />
                    <button className="n-icon n-icon:sign_out n-icon-color:base-1">
                        로그아웃
                    </button>
                </form>
            </section>
            */}
      </div>
    </header>
  );
};

export default Header;
