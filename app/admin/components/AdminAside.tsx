import Link from "next/link";
import React from "react";

const AdminAside: React.FC = () => (
  <aside>
    <header className="n-aside-menu">
      <h1 className="d:none">
        <Link href="">관리자 메뉴</Link>
      </h1>
      <ul>
        <li className="active">
          <Link
            className="n-icon n-icon:dashboard n-deco n-deco-pos:top lg:n-deco-pos:left"
            href="/admin/index.html"
          >
            대시보드
          </Link>
        </li>
      </ul>
    </header>
    <nav className="n-aside-menu">
      <h1>재품관리</h1>
      <ul>
        <li>
          <Link
            className="n-icon n-icon:local_cafe n-deco n-deco-pos:top lg:n-deco-pos:left"
            href="/admin/menu/list.html"
          >
            메뉴관리
          </Link>
        </li>
        <li>
          <Link
            className="n-icon n-icon:garage_home n-deco n-deco-pos:top lg:n-deco-pos:left"
            href="/admin/supplies/list.html"
          >
            비품관리
          </Link>
        </li>
      </ul>
    </nav>
    <nav className="n-aside-menu">
      <h1>고객관리</h1>
      <ul>
        <li>
          <Link
            className="n-icon n-icon:notifications n-deco n-deco-pos:top md:n-deco-post:left lg:n-deco-pos:left"
            href="/admin/notice/list.html"
          >
            공지관리
          </Link>
        </li>
        <li>
          <Link
            className="n-icon n-icon:group n-deco n-deco-pos:top md:n-deco-post:left lg:n-deco-pos:left"
            href="/admin/member/list.html"
          >
            회원관리
          </Link>
        </li>
      </ul>
    </nav>
    <nav className="n-aside-menu">
      <h1>통계관리</h1>
      <ul>
        <li>
          <Link
            className="n-icon n-icon:cardio_load n-deco n-deco-pos:top lg:n-deco-pos:left"
            href=""
          >
            좋아요
          </Link>
        </li>
        <li>
          <Link
            className="n-icon n-icon:bookmarks n-deco n-deco-pos:top lg:n-deco-pos:left"
            href=""
          >
            찜목록
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default AdminAside;
