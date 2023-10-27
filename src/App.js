import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import { render } from '@testing-library/react';
import MonsterCard from './Component/Monster-CardList';
import Searchbox from './Component/Searchbox';


import React from 'react'
import { useEffect, useState } from 'react';

const App = () => {
  const [SearchQuery, SetsearchQuery] = useState(" ")
  const [Monsters, Setmosters] = useState([])
  const [FiteredMonster, SetfiteredMonster] = useState(Monsters)
  // console.log(SearchQuery)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => Setmosters(data))
  }, [])

  const handleSearchChange = (e) => {
    SetsearchQuery(e.target.value.toLowerCase());
  }

  useEffect(() => {
    const NewfilteredMonsters = Monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchQuery)
    );
    SetfiteredMonster(NewfilteredMonsters)
  }, [Monsters, SearchQuery])



  return (
    <>
      <div className='text-center mt-5'><h1>Appdde</h1></div>
      <div className='d-flex justify-content-center'>
        <Searchbox OnChange={handleSearchChange} placeholder="search monster" className="monster-search-box" />
      </div>
      <MonsterCard monsters={FiteredMonster} />
    </>
  )
}

export default App


// class App extends Component {
// constructor() {
//   super();
// this.state = {
//   fname: 'jignesh',
//   lname: 'vavadiya',
// };
// this.state = {
//   Monsters: [],
//   searchQuery: '',
// }
// }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         Monsters: data
//       })
//     })
// }

// handleSearchChange = (e) => {
//   this.setState({ searchQuery: e.target.value.toLowerCase() });
// }

// render() {

//   const { searchQuery, Monsters } = this.state;
//   const { handleSearchChange } = this;
//   const filteredMonsters = Monsters.filter(monster =>
//     monster.name.toLowerCase().includes(searchQuery)
//   );
//   return (

//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>
//             Hello {this.state.fname} {this.state.lname}
//           </p>
//           <button onClick={() => {
//             this.setState({
//               fname: 'Jignesh1',
//               lname: 'vavadiya1',
//             })
//           }}>Change Name</button> */}
//         <Searchbox OnChange={handleSearchChange} placeholder="search monster" className="monster-search-box" />
//         <MonsterCard monsters={filteredMonsters} />
//       </header>
//     </div>
//   );
// }
// }

// export default App;
