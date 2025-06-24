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
        {/* admin/anomynous 페이지 병렬 레이아웃을 위해 layout파일 최소화*/}
        {children}
      </body>
    </html>
  );
}
