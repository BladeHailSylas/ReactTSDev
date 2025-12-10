import { api } from "../api/axiosInstance";
import { useEffect, useState } from "react";
import type { UserDto } from "../types/UserDto";
import getName from "../utils/getName";
import type { MatchDto } from "../types/MatchDto";

export default function MyPage() {
    const [user, setUser] = useState<UserDto | null>(null);
    const [myPre, setMyPre] = useState<MatchDto[] | null>(null);
    const [loading, setLoading] = useState(true);
    const handleProvider = (provider: string ) => {
        switch(provider){
            case "GOOGLE":
                return "Google 유저";
                break;
            case "KAKAO":
                return "Kakao 유저";
                break;
            case "NAVER":
                return "Naver 유저";
                break;
            case "LOCAL":
                return "일반 유저";
                break;
            default:
                return "?";
                break;
        }
    }
  useEffect(() => {
    api.get("auth/my")
    .then((res) => {setUser(res.data)})
    .catch((e: any) => {console.error(e)});
    api.get("predictions/my")
    .then((res => {setMyPre(res.data)}))
    .catch((e: any) => console.error(e))
    .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-6">불러오는 중...</div>;
  }
  if(user === null) {
    return <div>올바르지 않은 유저 정보</div>;
  }
  return (
    <main className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
            <h1 className="text-2xl font-bold mt-4">{getName(user.email, user.username)}님</h1>
            <p className="text-base-content/70">{user.email}</p>
            <p className="text-base-content/50">{handleProvider(user.provider)}</p>
            <p className="text-sm text-base-content/60 mt-1">
              {myPre !== null ? myPre[0].yourPrevResult : "없음"}
            </p>
    </main>
  );
}
