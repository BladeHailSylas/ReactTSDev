import { useNavigate } from "react-router-dom";

interface PlayerCardProps {
  id: number;
  name: string;
  desc: string;
  media: string | null;
}

export default function PlayerCard({ id, name, desc, media }: PlayerCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="card bg-base-200 shadow-xl p-6 cursor-pointer hover:shadow-2xl transition"
      onClick={() => navigate(`/players/${id}`)}
    >
      <div className="avatar mx-auto">
        <div className="w-20 h-20 rounded-full bg-base-300" />
        {media && (
            <img src={media} alt="avatar" />
        )}
      </div>

      <h2 className="text-center text-lg font-semibold mt-4">
        {name}
      </h2>

      <div className="divider my-2"></div>

      <p className="text-center text-base-content/60">
        {desc}
      </p>
    </div>
  );
}
