import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home페이지</h1>
      <ul>
        <li>
          <Link to="/kakao-map">카카오 지도 페이지</Link>
        </li>
        <li>
          <Link to="/social-login">소셜 로그인 페이지</Link>
        </li>
        <li>
          <Link to="/public-data">공공 데이터 페이지</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
