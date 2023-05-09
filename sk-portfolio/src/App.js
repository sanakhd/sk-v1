// import logo from './logo.svg';
// import './App.css';

import Landing from "./components/Landing";
import CustomNavbar from "./components/CustomNavbar";
import About from "./components/About";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <CustomNavbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
