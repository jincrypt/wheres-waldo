// On Game Start, create table to show which things exist?
import { db } from "./firebase-config";
import { collection, getDocs } from 'firebase/firestore/lite';

async function retrieveCharactersFromDatabase() {
    let result = {};
    let getCharacters = await getDocs(collection(db, "level/easy/characters"));
    getCharacters.forEach(
        (snap) => {
            if (snap.data().exist) result[snap.id.toUpperCase()] = true;                
        })
    console.log("queried database")
    return result;
}

function levelCharacters() {
    return retrieveCharactersFromDatabase();
}

export { levelCharacters };



