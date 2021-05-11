import "./App.css";
import myimg from "./images/JSX-vs-HTML.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 class="title red">syrine mabrouk </h1>

        <br />
        <img src={myimg} alt="jsx 2" />


        <br />
        <img src="./jsx.png" alt="jsx" />

      </div>

      <iframe width="800" height="315" src="https://www.youtube.com/embed/vf5KrZR-Vv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
    </div>
  );
}

export default App;
