import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div>
          <div>
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
