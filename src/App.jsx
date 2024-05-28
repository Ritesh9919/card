import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {
  
  const [beers, setBeeres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(()=> {
    (async()=> {
      try {
        const response = await axios.get('https://api.sampleapis.com/beers/ale');
        if(response.status == 200) {
          setBeeres(response.data);
        }
      
      } catch (error) {
        console.log("Error",error);
      }
      
    })()
  },[]);


  const handleSearch = (e)=> {
    setSearchTerm(e.target.value);
  }

  const filterBeers = beers.filter((beer)=> {
    return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <>
    <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
    <div className='d-flex justify-content-evenly align-items-center flex-wrap mt-5'>
      
      {filterBeers.map((beer)=> {
        return (
        
          <Card beer={beer} key={beer.id}/>
          
        )
      })}
    </div>
    </>
  )
}

export default App
