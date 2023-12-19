import "./App.css";
import { buttonNames } from "./constant";

function App() {
  const onDesktopBtnClick = (value, color) => {
    console.log(value, color);
    if (value === "Button1") {
      console.log(`You  clicked the  ${color} color button`);
    } else if (value === "Button2") {
      console.log(`You  clicked the  ${color} color button`);
    } else {
      console.log(`You  clicked the  ${color} color button`);
    }
  };
  const onMobileBtnClick = () => {
    console.log("you clicked the mobile button");
  };

  return (
    <div className="root">
      <button
        className="desktopView"
        onClick={() => onDesktopBtnClick("Button1", "green")}
      >
        {buttonNames[0]}
      </button>
      <button
        className="desktopView1"
        onClick={() => onDesktopBtnClick("Button2", "pink")}
      >
        {buttonNames[1]}
      </button>
      <button
        className="desktopView1"
        onClick={() => onDesktopBtnClick("Btn3", "black")}
      >
        {buttonNames[2]}
      </button>
      <button className="mobileView" onClick={onMobileBtnClick}>
        MobileView
      </button>
    </div>
  );
}

export default App;
