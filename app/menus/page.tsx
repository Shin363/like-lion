import Link from "next/link";

export default function MenusPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>메뉴 목록</h1>
      <p>모든 메뉴를 확인해보세요!</p>

      <nav style={{ marginTop: "2rem" }}>
        <h2>페이지 링크:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "0.5rem 0" }}>
            <Link
              href="/"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              홈으로 돌아가기
            </Link>
          </li>
          <li style={{ margin: "0.5rem 0" }}>
            <Link
              href="/menus/1"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              메뉴 1 상세보기
            </Link>
          </li>
          <li style={{ margin: "0.5rem 0" }}>
            <Link
              href="/menus/2"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              메뉴 2 상세보기
            </Link>
          </li>
          <li style={{ margin: "0.5rem 0" }}>
            <Link
              href="/menus/3"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              메뉴 3 상세보기
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
