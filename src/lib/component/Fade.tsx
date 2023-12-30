interface Datatype {
  option: {
    speed: number;
  };

  children?: React.ReactNode;
}

export default function Fade({ option, children }: Datatype) {
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
          animation: `fade ${option.speed || 1.5}s ease-in-out infinite`,
        }}
      >
        {children}
      </div>
    </>
  );
}
