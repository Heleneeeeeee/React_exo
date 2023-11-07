import logo from './logo.svg';
import './App.css';

const title = "Hello La Piscine"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>  
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit perspiciatis, cupiditate nesciunt veritatis, ex eaque sed corrupti sit distinctio, cum fugit dignissimos ratione. Voluptas veritatis, iste nesciunt aut porro vero!
        </p>
      </header>
    </div>
  );
}

export default App;
