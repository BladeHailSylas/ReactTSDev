export default function YtPlayer({ videoId }: { videoId: string }) {
  return (
    <div className="flex justify-center w-full rounded-xl bg-base-100">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
