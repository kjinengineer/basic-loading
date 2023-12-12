export default function Fade() {
  const animation = `
      @keyframes fade {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
    `;

  return (
    <>
      <style>{animation}</style>
      <div
        style={{
          animation: "fade 2s ease-in-out infinite",
        }}
      >
        LOADING
      </div>
    </>
  );
}
