import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import SideContainer from "./SideContainer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 상단 네비게이션 */}
      <Navbar />

      {/* 본문 + 우측 사이드 */}
      <div className="flex flex-1 px-4 lg:px-8 gap-6 mt-4">

        {/* 페이지 내용(왼쪽) */}
        <div className="flex-1">
          <Outlet />
        </div>

        {/* 고정 사이드 (lg 이상에서만 등장) */}
        <SideContainer />
      </div>
    </div>
  );
}
