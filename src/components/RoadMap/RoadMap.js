import { useEffect, useState } from "react";
import "../RoadMap/RoadMap.css";

function RoadMap({ correct, selected }) {
  const [currentDot, setCurrentDot] = useState(1);
  const [dot1, setDot1] = useState("");
  const [dot2, setDot2] = useState("");
  const [dot3, setDot3] = useState("");
  const [dot4, setDot4] = useState("");
  const [dot5, setDot5] = useState("");
  const [dot6, setDot6] = useState("");
  const [dot7, setDot7] = useState("");
  const [dot8, setDot8] = useState("");
  const [dot9, setDot9] = useState("");
  const [dot10, setDot10] = useState("");
  /*  */
  useEffect(() => {
    if (selected && currentDot === 1 && selected === correct) {
      setDot1("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 1 && selected !== correct) {
      setDot1("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 2 && selected === correct) {
      setDot2("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 2 && selected !== correct) {
      setDot2("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 3 && selected === correct) {
      setDot3("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 3 && selected !== correct) {
      setDot3("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 4 && selected === correct) {
      setDot4("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 4 && selected !== correct) {
      setDot4("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 5 && selected === correct) {
      setDot5("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 5 && selected !== correct) {
      setDot5("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 6 && selected === correct) {
      setDot6("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 6 && selected !== correct) {
      setDot6("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 7 && selected === correct) {
      setDot7("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 7 && selected !== correct) {
      setDot7("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 8 && selected === correct) {
      setDot8("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 8 && selected !== correct) {
      setDot8("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 9 && selected === correct) {
      setDot9("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 9 && selected !== correct) {
      setDot9("redDot");
      setCurrentDot(currentDot + 1);
    }
    if (selected && currentDot === 10 && selected === correct) {
      setDot10("greenDot");
      setCurrentDot(currentDot + 1);
    } else if (selected && currentDot === 10 && selected !== correct) {
      setDot10("redDot");
      setCurrentDot(currentDot + 1);
    }
  }, [selected, correct]);
  return (
    <div className="roadMap">
      <div className="dots-lines">
        <span className={`dots ${dot1}`}>1</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot2}`}>2</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot3}`}>3</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot4}`}>4</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot5}`}>5</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot6}`}>6</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot7}`}>7</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot8}`}>8</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot9}`}>9</span>
        <span className={`lines`}></span>
        <span className={`dots ${dot10}`}>10</span>
      </div>
    </div> 
  );
}
export default RoadMap;
