import Banner from "./Components/Banner";
import Section from "./Components/Section";
import Form from "./Components/Form";
import News from "./Components/News";
import Card from "./Components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="section_wrapper">
        <Section />
        <Form />
      </div>
      <News />
    </div>
  );
}

export default App;
