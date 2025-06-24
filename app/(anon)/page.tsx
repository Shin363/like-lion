import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      {/* ---- greeting --------------------------------------------------- */}
      <div className="greeting-box">
        <section className="greeting">
          <header>
            <h1>알랜드에 오신 것을 환영합니다.</h1>
            <h2>부안에 오면 꼭 들리는 카페</h2>
            <div>
              <Link href="/menu/list.html" className="n-btn n-btn-color:main">
                주문하기
              </Link>
            </div>
          </header>
          <div>
            <img src="/image/assets/main-top.png" alt="알랜드 환영이미지" />
          </div>
          <footer>
            <h2>Rland Coffee</h2>
            <div>
              <img src="/image/assets/logo-badge.svg" alt="알랜드 badge" />
            </div>
          </footer>
        </section>
      </div>

      {/* --- features ----------------------------------------------------- */}
      <section className="features-box">
        <h1 className="title">알랜드만의 특별함</h1>
        <div className="features">
          <Link href="menu/detail?c=3" className="">
            <section className="feature">
              <img
                src="/image/assets/main-fruit.png"
                alt="과일청"
                className="feature-image"
              />
              <div>
                <h1 className="feature-title">
                  <span className="feature-highlight">직접 만든</span> 과일청을
                  맛보세요. 깔끔하고 달콤함을 즐길 수 있습니다.
                </h1>
                <p className="feature-description">
                  신선한 과일과 알랜드만의 레시피로 과일향의 풍미를 충분히 느낄
                  수 있는 수제청을 드셔보세요.
                </p>
              </div>
            </section>
          </Link>
          <Link href="menu/detail?c=2" className="">
            <section className="feature">
              <img
                src="/image/assets/main-cookie.png"
                alt="쿠키"
                className="feature-image"
              />
              <div>
                <h1 className="feature-title">
                  <span className="feature-highlight">우리가 구운</span> 수제
                  쿠키를 만나보세요.
                </h1>
                <p className="feature-description">
                  신선한 버터 그리고 견과류를 이용하여 바삭함을 더해 매일마다
                  직접 구운 맛난 쿠키를 만나보세요.
                </p>
              </div>
            </section>
          </Link>
          <Link href="menu/detail?c=1" className="">
            <section className="feature">
              <img
                src="/image/assets/main-roasting.png"
                alt="로스팅"
                className="feature-image"
              />
              <div>
                <h1 className="feature-title">
                  <span className="feature-highlight">다양한 로스팅으로</span>
                  다채로운 맛을 느껴보세요.
                </h1>
                <p className="feature-description">
                  신선한 버터 그리고 견과류를 이용하여 바삭함을 더해 매일마다
                  직접 구운 맛난 쿠키를 만나보세요.
                </p>
              </div>
            </section>
          </Link>
        </div>
      </section>
    </main>
  );
};
export default HomePage;
