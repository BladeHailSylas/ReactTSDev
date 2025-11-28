import { type MatchDto } from "../../types/MatchDto";
import { api } from "../../api/axiosInstance"; 
import { useState } from "react";

export default function PredictionCard({ match }: { match: MatchDto }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(match.alreadyPredicted);

  const handlePredict = async ( result : "HOME_WIN" | "AWAY_WIN") => {
    if (loading) return;
    setLoading(true);
    try {
      await api.post("/predictions", {
      matchId: match.id,
      predictedResult: result,
    });
      setDone(true);
    } catch (e : any) {
      console.error(e);
      alert("예측 실패: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-lg p-5 border border-base-300 mt-4">
      <h1 className="text-2xl font-bold">{match.teamA} vs. {match.teamB}</h1>
      <p className="text-base-content/60 text-sm mt-1">
        경기 날짜: {new Date(match.matchDate).toLocaleString()}
        <h2 className="text-2xl font-bold mb-4">{match.description ?? "Fight!"}</h2>
      </p>

      {done ? (
        <p className="text-green-500 font-semibold mt-3">
          ✔ 이미 예측한 경기입니다.
        </p>
      ) : !match.predictionOpen ? (
        <p className="text-red-500 font-semibold mt-3">
          ❌ 예측이 마감되었습니다.
        </p>
      ) : (
        <div>
          {loading ? <div className="text-center w-full">처리 중...</div> : 
            <div className="grid grid-cols-2 gap-4">
              <button
                className="btn btn-primary bg-base-200 btn-outline w-full"
                disabled={loading}
                onClick={() => handlePredict("HOME_WIN")}
              >
                홈팀 승리
              </button>
              <button
                className="btn btn-primary bg-base-200 btn-outline w-full"
                disabled={loading}
                onClick={() => handlePredict("AWAY_WIN")}
              >
                어웨이 승리
              </button>
            </div>
          }
        </div>
        /*<button
          onClick={handlePredict}
          className="btn btn-primary mt-4 w-full"
          disabled={loading}
        >
          {loading ? "처리 중..." : "승부예측 하기"}
        </button>*/
      )}
    </div>
  );
}
