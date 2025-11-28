// src/components/Side/SideContainer.tsx
export default function SideContainer() {
  return (
    <aside className="hidden lg:flex bg-base-200 flex-col w-80 space-y-4 rounded-xl">

      {/* TODO: 아래 Side 요소를 전부 component로 관리하기*/}
      <div className="bg-base-100 shadow rounded-xl p-4 h-min-40 flex items-center justify-center text-base-content/60 mx-4 mt-4">
        {/* Empty state placeholder */}
        [라이브🔴] 2026 밀라노 동계올림픽 실시간 생중계
      </div>
        <div className="bg-base-100 shadow rounded-xl p-4 h-min-40 flex items-center justify-center text-base-content/60 mx-4 mt-4">
        {/* Empty state placeholder */}
        [속보⚠] 홍길동 선수, 쇼트트랙 500m 금메달 수상... "과분한 영광" 
      </div>
    </aside>
  );
}