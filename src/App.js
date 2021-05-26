import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// const nayoks = ['Salman Shah', 'Shah-Rukh Khan', 'Amir Khan', 'Pappu', 'Amjad']
// const nayoks1 = [{name: 'Shamim', age: 20}, {name: 'Nahid', age: 23}, {name: 'Dipjol', age: 50}, {name: 'Alamgir', age: 40}];
function App() {

  const [nayoks, setNayoks] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data =>setNayoks(data))
  }, []);

  return (
    <div className="App">
      <MoviesCounter></MoviesCounter>
      {
        nayoks.map(nk => <Nayok key= {nk.id} name={nk.name} age = {nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '10px'
  }
  return (
    <div style = {nayokStyle}>
      <h2>Ami Nayok- {props.name}</h2>
      <h4>I have seen 20 movies in {props.age || 46} years</h4>
    </div>
  );
}
function MoviesCounter() {
  const [count, setCount] = useState(1);
  const handleClick = () => setCount(count+1);
  return (
    <div>
      <h2>Number of movies: {count}</h2>
      <MoviesDisplay moviesCount = {count}></MoviesDisplay>
      <MoviesDisplay moviesCount = {count}></MoviesDisplay>
      <MoviesDisplay moviesCount = {count-2}></MoviesDisplay>
      <button onClick={handleClick}>Add Movies</button>
    </div>
  )
}
function MoviesDisplay(props) {
  return (
    <h4>{props.moviesCount} Number of Movies I have actted</h4>
  )
}

export default App;
