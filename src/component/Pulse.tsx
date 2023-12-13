export default function Pulse() {
  return (
    <div
      className="relative"
      style={{
        width: "150px",
        height: "150px",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "solid",
          borderWidth: "2px",
          borderRadius: "50%",
        }}
        className="pulse"
      ></div>
      {/* <div
          style={{
            width: "150px",
            height: "150px",
          }}
        >
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] bg-black rounded-full"></div>
        </div> */}
    </div>
  );
}
