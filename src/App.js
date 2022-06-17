import {useEffect, useState} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/searchBox/searchBox.component';



const App = () =>{
  const [searchField,setSearchField]=useState('');
  const [monsters,setMonsters] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((data)=>setMonsters(data))
  },[])
  
  const onSearchChange = (event)=>{
    const searchFieldString= event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const filterMonsters = monsters.filter((monster)=>{
          return monster.name.toLowerCase().includes(searchField);
        })
  
  return (
    <div className='App'>
       <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder={'Search Here'} />
       <CardList monsters={filterMonsters} />
    </div>
  )
}

export default App;
