import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';

function App() {
  
  const [data, setData] = useState([]);

  
  useEffect(()=> {
    (async()=> {
      try {
        const response = await axios.get('https://api.sampleapis.com/beers/ale');
        if(response.status == 200) {
          setData(response.data);
        }
      
      } catch (error) {
        console.log("Error",error);
      }
      
    })()
  },[]);

  return (
    <div className='d-flex justify-content-evenly align-items-center flex-wrap mt-5'>
      {data.map((d)=> {
        return (
        
          <Card data={d} key={d.id}/>
          
        )
      })}
    </div>
  )
}

export default App
