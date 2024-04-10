
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
    const [ images, setImages ] = useState([]);
    const [ value, setValue ] = useState("Animal");
    const [ size, setSize ] = useState(15)
    const [ loader, setLoader ] = useState(true);

    const pixelURL = `https://api.pexels.com/v1/search?query=${value}&per_page=${size}`
    useEffect(() => {
      fetch(pixelURL, {
          headers: {
              Authorization: `YBL9PKQeJIa45vHNZzbdnDZnvRqimiI40mqS0v6h4hOcGIWbHeN6q77d`
          }
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Failed to fetch data from Pexels API');
          }
          return response.json();
      })
      .then(data => {
          setImages(data.photos) 
          setLoader(false)
      })
      .catch((error) => {
          console.error('Error fetching data:', error);
      });
  }, [value, size]);
  
  return (
    <>
      <Navbar setValue = {setValue}/>
      <Card images={images} setSize={setSize} loader={loader}/>
    </>
  )
}

export default App
