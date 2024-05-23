import { useState } from "react";
import Button from "../components/button/Button";

const Welcome = () => {
  const [render, setRender] = useState(0);
  const [buttonTitle, setButtonTitle] = useState("");

  const handleRenderChange = () => {
    setRender(render + 1);
  };

  return (
    <div>
      <h2>Welcome render count {render}</h2>
      <Button title={buttonTitle} />
      <button onClick={handleRenderChange}>reRender</button>
      <button
        onClick={() => {
          setButtonTitle("my button title");
        }}
      >
        Chagne button title
      </button>
    </div>
  );
};

export default Welcome;
