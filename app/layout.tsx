import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>알랜드에 오신 것을 환영합니다.</title>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/newtil-css@0.2.13/dist/style.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/header.css" type="text/css" />
        <link rel="stylesheet" href="/css/footer.css" type="text/css" />
        <link rel="stylesheet" href="/css/index/style.css" type="text/css" />
      </head>
      <body>
        <div>
          {/* ================ header ======================= */}
          <Header />
          <main>
            {/* ---- greeting --------------------------------------------------- */}
            <div className="greeting-box">
              <section className="greeting">
                <header>
                  <h1>알랜드에 오신 것을 환영합니다.</h1>
                  <h2>부안에 오면 꼭 들리는 카페</h2>
                  <div>
                    <a
                      href="/menu/list.html"
                      className="n-btn n-btn-color:main"
                    >
                      주문하기
                    </a>
                  </div>
                </header>
                <div>
                  <img
                    src="/image/assets/main-top.png"
                    alt="알랜드 환영이미지"
                  />
                </div>
                <footer>
                  <h2>Rland Coffee</h2>
                  <div>
                    <img
                      src="/image/assets/logo-badge.svg"
                      alt="알랜드 badge"
                    />
                  </div>
                </footer>
              </section>
            </div>
            {/* --- features ----------------------------------------------------- */}
            <section className="features-box">
              <h1 className="title">알랜드만의 특별함</h1>
              <div className="features">
                <a href="menu/detail?c=3">
                  <section className="feature">
                    <img
                      src="/image/assets/main-fruit.png"
                      alt="과일청"
                      className="feature-image"
                    />
                    <div>
                      <h1 className="feature-title">
                        <span className="feature-highlight">직접 만든</span>{" "}
                        과일청을 맛보세요. 깔끔하고 달콤함을 즐길 수 있습니다.
                      </h1>
                      <p className="feature-description">
                        신선한 과일과 알랜드만의 레시피로 과일향의 풍미를 충분히
                        느낄 수 있는 수제청을 드셔보세요.
                      </p>
                    </div>
                  </section>
                </a>
                <a href="menu/detail?c=2">
                  <section className="feature">
                    <img
                      src="/image/assets/main-cookie.png"
                      alt="쿠키"
                      className="feature-image"
                    />
                    <div>
                      <h1 className="feature-title">
                        <span className="feature-highlight">우리가 구운</span>{" "}
                        수제 쿠키를 만나보세요.
                      </h1>
                      <p className="feature-description">
                        신선한 버터 그리고 견과류를 이용하여 바삭함을 더해
                        매일마다 직접 구운 맛난 쿠키를 만나보세요.
                      </p>
                    </div>
                  </section>
                </a>
                <a href="menu/detail?c=1">
                  <section className="feature">
                    <img
                      src="/image/assets/main-roasting.png"
                      alt="로스팅"
                      className="feature-image"
                    />
                    <div>
                      <h1 className="feature-title">
                        <span className="feature-highlight">
                          다양한 로스팅으로
                        </span>
                        다채로운 맛을 느껴보세요.
                      </h1>
                      <p className="feature-description">
                        신선한 버터 그리고 견과류를 이용하여 바삭함을 더해
                        매일마다 직접 구운 맛난 쿠키를 만나보세요.
                      </p>
                    </div>
                  </section>
                </a>
              </div>
            </section>
          </main>
          {/* ================ footer ======================== */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
