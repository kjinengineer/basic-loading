export default function ProgressBar() {
  const animation = `
      @keyframes progressbar {
        0% {
          width: 15%;
        }
        100% {
          width: 285px;
        }
      }
    `;
  return (
    <div>
      <style>{animation}</style>
      <div
        style={{ borderRadius: "30px", width: 300, height: 30 }}
        className="relative bg-[#e0e0e0]"
      >
        <div
          style={{
            borderRadius: "30px",
            width: 285,
            height: 20,
            animation: "progressbar 3s linear",
          }}
          className="absolute top-[50%] translate-y-[-50%] ml-[7.5px] bg-[#3b3b3b]"
        ></div>
      </div>
    </div>
  );
}
