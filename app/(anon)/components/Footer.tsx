import React from "react";

const Footer: React.FC = () => (
  <div className="footer-box">
    <footer className="footer">
      <h1>
        <a href="">홈페이지 이용약관</a>
      </h1>
      <dl>
        <div>
          <dt>사업자 등록번호</dt>
          <dd>123-45-6789</dd>
        </div>
        <div>
          <dt>저작권</dt>
          <dd>Ⓒ 2023 Newlecture All Rights Reserved</dd>
        </div>
      </dl>
    </footer>
  </div>
);

export default Footer;
