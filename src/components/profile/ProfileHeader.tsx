// src/components/Main/ProfileHeader.tsx
import { type Player } from "../../types/Player";
export default function ProfileHeader({ player }: { player: Player }) {

  return (
    <section className="bg-base-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
      <div className="avatar">
        <div className="w-36 rounded-full ring ring-primary/30 ring-offset-base-100">
          <div className="w-20 h-20 rounded-full bg-base-300" />
          {player.media && (
            <img src={player.media} alt="avatar" />
          )}
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-4">{player.name}</h1>
      <p className="text-base-content/70">{player.type}</p>

      <p className="text-sm text-base-content/60 mt-1">
        {player.team}
      </p>
    </section>
  );
}
