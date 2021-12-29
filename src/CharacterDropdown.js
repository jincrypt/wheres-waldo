import ODLAW from './img/characters/odlaw.jpg';
import WALDO from './img/characters/waldo.jpg';
import WENDA from './img/characters/wenda.jpg';
import WIZARD from './img/characters/wizard.jpg';

const CharacterDropdownField = (props) => {
    const characterMap = {
        "ODLAW": ODLAW,
        "WALDO": WALDO,
        "WENDA": WENDA,
        "WIZARD": WIZARD
    }

    return (
        <div>
            <img
                style={{width: "48px"}}                 
                src={characterMap[props.name]}
                alt={props.name}
            />
        </div>
    )
}


const CharacterDropdownFields = (props) => {
    let createFields = () => {
        let fields = []

        for (const character in props.characters) {            
            fields.push(<CharacterDropdownField name={character} />)
        }

        return fields;
    }

    return (
        <div background="white">
            {createFields()}
        </div>
    )
}

export default CharacterDropdownFields