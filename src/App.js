import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Counter2 from "./component/Counter2";
import Clock from "./component/Clock";

function App() {
  return (
    <>
      {/* start Navbar */}
      <Navbar title={"TextUtils"} />

      {/* start Textform */}
      <div className="container mt-2">
        <TextForm heading={"Enter the text to analyze bellow"} />
      </div>

      {/* <Counter2 /> */}
      {/* <Clock /> */}
    </>
  );
}

export default App;
