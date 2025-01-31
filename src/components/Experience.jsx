import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Table } from "./Table";

export const Experience = () => {
  const { legs } = useConfigurator(); // Force rerender the stage & shadows
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#000000",
          colorBlend: 2,
          opacity: 0.6,
        }}
        adjustCamera={2}
      >
        <Table />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
