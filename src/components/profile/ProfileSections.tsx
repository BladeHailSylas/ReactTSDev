// src/components/Main/ProfileSections.tsx
import {type Player} from "../../types/Player"
export default function ProfileSections({player}: {player : Player}) {
  return (
    <section className="space-y-6">

      <div className="bg-base-200 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold">기본 정보</h2>
        <div className="divider my-4"></div>
        <p className="text-base-content/70 mt-2">{player.body}</p>
        <p className="text-base-content/70">{player.team}</p>
      </div>

      <div className="bg-base-200 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold">수상 경력</h2>
        <div className="divider my-4"></div>
        <ul className="list-disc ml-6 mt-2">
          {player.awards?.map((award, idx) => (
            <li key={idx}>{award}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}
