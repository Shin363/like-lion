import React from "react";

export default function AdminPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <main>
      <section>
        <header className="n-bar">
          <h1 className="n-heading:5">관리자 / 대시보드</h1>
        </header>
        <section className="n-panel n-panel:card-grid">
          <h1 className="d:none">통계 자료</h1>
          <div>
            <section className="n-frame:rounded-shadow">
              <h1>사용자 가입</h1>
              <div className="n-panel">
                <canvas
                  className="user-chart w:100p"
                  width={500}
                  height={300}
                />
              </div>
            </section>
            <section className="n-frame:rounded-shadow">
              <h1>방문자 빈도</h1>
              <div>
                <canvas className="hit-chart" />
              </div>
            </section>
            <section className="n-frame:rounded-shadow">
              <h1>주문빈도</h1>
              <div>
                <canvas className="order-chart" />
              </div>
            </section>
          </div>
        </section>
        {children}
      </section>
    </main>
  );
}
