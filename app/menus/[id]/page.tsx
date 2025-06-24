import Link from "next/link";

interface MenuDetailPageProps {
  params: {
    id: string;
  };
}

export default function MenuDetailPage({ params }: MenuDetailPageProps) {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>메뉴 {params.id} 상세</h1>
      <p>메뉴 ID: {params.id}</p>
      <p>이 메뉴의 상세 정보를 확인해보세요!</p>

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
              href="/menus"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              메뉴 목록으로 돌아가기
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
