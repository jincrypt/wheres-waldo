import ODLAW from './img/characters/odlaw.jpg';
import WALDO from './img/characters/waldo.jpg';
import WENDA from './img/characters/wenda.jpg';
import WIZARD from './img/characters/wizard.jpg';

const CharacterDropdownField = (props) => {
    return (
        <div>
            <img
                style={{width: "48px"}}                 
                src={props.image}    
                alt={props.name}
            />
        </div>
    )
}

const CharacterDropdownFields = () => {
    return (
        <div background="white">
            <CharacterDropdownField image={ODLAW} name="Odlaw" />
            <CharacterDropdownField image={WALDO} name="Waldo" />
            <CharacterDropdownField image={WENDA} name="Wenda" />
        </div>
    )
}

export default CharacterDropdownFields