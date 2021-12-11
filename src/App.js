import imageURL from './img/easy.jpeg';
import './App.css';
import BOX from './box';
import { useEffect, useState } from 'react';

function App() {

  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState([0,0]);


  useEffect(() => {
    if (isClicked) {
      console.log(true)
      console.log(clickPosition)
    } else {
      console.log(false)
    }
  })

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e)
    setIsClicked(!isClicked);
    setClickPosition([e.pageX, e.pageY])
  }


  return (
    <>
    <div onClick={handleClick}>
      <img src={ imageURL } />
    </div>
    
    <BOX x={clickPosition[0]} y={clickPosition[1]} />
    </>
  );
}

export default App;
