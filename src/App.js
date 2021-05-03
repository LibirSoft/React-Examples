import logo from './logo.svg';
import News from './components/News'
import './App.css';

function App() {
  const news = [
    {
      title: "title 1 ",
      description: "description 1",
    },
    {
      title: "title 2 ",
      description: "description 2",
    },
    {
      title: "title 3 ",
      description: "description 3",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <News news={news} />
      </header>
    </div>
  );
}

export default App;
