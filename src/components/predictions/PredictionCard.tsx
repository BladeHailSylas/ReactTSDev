import { type MatchDto } from "../../types/MatchDto";
import { api } from "../../api/axiosInstance"; 
import { useState } from "react";

export default function PredictionCard({ match }: { match: MatchDto }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(match.alreadyPredicted);
  const [prev, setPrev] = useState(match.yourPrevResult);
  const [home, setHome] = useState(match.homePercent);
  const [away, setAway] = useState(match.awayPercent);
  const handlePredict = async ( result : "HOME_WIN" | "AWAY_WIN") => {
    if (loading || result === prev) return;
    setLoading(true);
    try {
      await api.post("/predictions", {
      matchId: match.id,
      predictedResult: result,
    });
      setDone(true);
      setPrev(result);
      switch(result) {
        case "HOME_WIN":
          setHome(Math.min(match.homePercent + 4, 100));
          setAway(Math.max(match.awayPercent - 4, 0));
          break;
        case "AWAY_WIN":
          setAway(Math.min(match.awayPercent + 4, 100));
          setHome(Math.max(match.homePercent - 4, 0));
      }
    } catch (e : any) {
      console.error(e);
      alert("예측 실패: " + e.message);
    } finally {
      setLoading(false);
    }
  };
  const getPrevTeam = (raw : string) => {
    switch(raw) {
      case "HOME_WIN":
        return match.teamA;
        break;
      case "AWAY_WIN":
        return match.teamB;
        break;
      default:
        return "";
        break;
    }
  }
  return (
    <div className="card bg-base-100 shadow-lg p-5 border border-base-300 mt-4">
      <p className="text-base-content/60 text-xs text-center mt-1">{new Date(match.matchDate).toLocaleString()}</p>
      <h1 className="text-xl font-bold text-center">{match.teamA} vs. {match.teamB}</h1>
      <h2 className="text-sm font-bold text-center">{match.description ?? "Fight!"}</h2>
      <div className="flex w-full h-2 m-2 rounded overflow-hidden">
        <div className={match.homePercent >= match.awayPercent ? `bg-blue-700` : `bg-blue-400`} style={{ flexGrow: home }}></div>
        <div className={match.homePercent > match.awayPercent ? "bg-red-400" : "bg-red-700"} style={{ flexGrow: away }}></div>
      </div>
      {done ? (
        <p className="text-green-500 font-semibold m-3 text-center">
          ✔ 예측한 경기({getPrevTeam(prev)})
        </p>
      ) : 
      <p className="font-semibold m-3 text-center">
          &nbsp;
        </p>}
      {!match.predictionOpen ? (
        <p className="text-red-500 font-semibold mt-3">
          ❌ 예측 마감
        </p>
      ) : (
        <div>
          {loading ? <div className="text-center w-full">처리 중...</div> : 
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`btn btn-primary text-xs font-semibold bg-base-200 w-full`}
                disabled={loading}
                onClick={() => handlePredict("HOME_WIN")}
              >
                {match.teamA} 승리
              </button>
              <button
                className="btn btn-error text-xs font-semibold bg-base-200 w-full"
                disabled={loading}
                onClick={() => handlePredict("AWAY_WIN")}
              >
                {match.teamB} 승리
              </button>
            </div>
          }
        </div>
      )}
    </div>
  );
}
