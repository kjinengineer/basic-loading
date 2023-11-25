import Canvas from "./lib/Canvas";
import Plane from "./lib/Plane";

function App() {
  const option = {
    width: "100px",
    height: "100px",
    borderRadius: "20px",
    backgroundColor: "#000000",
  };
  return (
    <Canvas>
      <Plane option={option} />
    </Canvas>
  );
}

export default App;
