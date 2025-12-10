import { useEffect, useState } from "react";
import { api } from "../api/axiosInstance";
import type { LiveDto } from "../types/LiveDto";
import YtPlayer from "../components/Stream/YtPlayer";

export default function LiveListPage() {
  const [onLive, setOnLive] = useState(false);
  const [videos, setVideos] = useState<LiveDto[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get("/live-status")
      .then((res) => {
        setOnLive(res.data.isLive);
        setVideos(res.data.videos ?? null);
        })
      .finally(() => setLoading(false));
  }, []);
  const openYouTube = (videoId : string) => {
    if(videoId === null || videoId === undefined) return;
    return (`https://www.youtube.com/watch?v=${videoId}`);
  };
  if (loading) return <div className="p-6">불러오는 중...</div>;

  return (
    <div className="w-full bg-base-200 max-w-5xl mx-auto p-4 space-y-4 rounded-xl">
      <h1 className="mx-2 text-2xl font-bold mb-4">라이브스트리밍</h1>
      {!onLive && (
        <p className="text-base-content/60">현재 진행 중인 생중계가 없습니다.</p>
      )}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {videos != undefined && videos.map(video => (
          <a className="card bg-base-100 shadow cursor-pointer m-4" href={openYouTube(video.videoId)} target="_blank" rel="noopener noreferrer">
            <div className="card-body p-4">
              <div className="flex">
                <YtPlayer videoId={video.videoId} />
              </div>
              <div className="divider my-2" />
              <h3 className="text-2xl text-center font-bold">{video.title}</h3>
              <p className="text-center">{video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}