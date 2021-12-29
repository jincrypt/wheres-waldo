import imageURL from './img/easy.jpg';
import './App.css';
import BOX from './box';
import { useEffect, useState } from 'react';
import { db } from "./firebase-config.js"
import {  collection, getDocs } from 'firebase/firestore/lite';
import { GetCoordinates } from "./helper/ImageLocation";

function App() {
// successfully pulls from DB, but what?
async function getLevel(test2) {
    const test = await getDocs(collection(test2, "level/easy/characters"));
    test.forEach((snap) => {
      console.log(`${snap.id} ${JSON.stringify(snap.data())}`)
    })
}

  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState([0,0]);
  const [menuOpened, setMenuOpened] = useState(false);
  const [characters, setCharacters] = useState();

// Run once initially
useEffect(() => {
      async function retrieveCharactersFromDatabase() {
          let result = {};
          let getCharacters = await getDocs(collection(db, "level/easy/characters"));
          getCharacters.forEach(
              (snap) => {
                  if (snap.data().exist) result[snap.id.toUpperCase()] = true;                
              })
          console.log("Queried Database for Characters")
          return setCharacters(result)
      }
      retrieveCharactersFromDatabase();
    }, []);

  useEffect(() => {
    if (isClicked) {
      console.log(true)
      // console.log(clickPosition)
      // console.log(getLevel(db));
    } else {
      console.log(false)
    }
  })

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(GetCoordinates(e));

    // Logic: Open menu when clicked. If clicked elsewhere, close menu.
    if (menuOpened) {
      setMenuOpened(!menuOpened);
      setIsClicked(false);
    } else {
      setMenuOpened(!menuOpened);
      setIsClicked(true);
      setClickPosition([e.pageX, e.pageY])
    }
  }


  return (
    <>
    <div onClick={handleClick}>
      <img src={ imageURL } id="WaldoMap"/>
    </div>
    {(menuOpened && characters) ? <BOX characters={characters} x={clickPosition[0]} y={clickPosition[1]} /> : null}
    </>
  );
}

export default App;

