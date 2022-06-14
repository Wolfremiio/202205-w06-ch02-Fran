import { SyntheticEvent, useState } from 'react';
import { Character } from '../models/character';

export function FormPage() {
    const initialState = {
        charName: '',
        charYear: '',
        charFamily: '',
        characters: '',
        charKindomYears: '',
        charWeapon: '',
        charSubmision:''

    };
    const user = ['King', 'Knight', 'Squire', 'Counselor'];
    const [formData, setFormData] = useState(initialState);

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    return (
        <>
            <h1>Formulario</h1>
            <h2>Nuevos Personajes</h2>
            <form>
                <select
                    name="characters"
                    id=""
                    value={formData.characters}
                    onChange={handleChange}
                >
                    <option></option>
                    {user.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>

                <input
                    type="text"
                    name="charName"
                    value={formData.charName}
                    placeholder="Introduce el nombre"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="charYear"
                    value={formData.charYear}
                    placeholder="Introduce los años "
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="charfamily"
                    value={formData.charFamily}
                    placeholder="Familia a la que pertenece"
                    onChange={handleChange}
                />

                <button>Enviar</button>
                
                { if(user === "king" ){
                  <input
                  type="text"
                  name="charKindomYears"
                  value={formData.charKindomYears}
                  placeholder="Años de reinado"
                  onChange={handleChange} }
              />}
                
                if (user === "knight") {
                    <input
                    type="text"
                    name="charWeapon"
                    value={formData.charWeapon}
                    placeholder="Arma"
                    onChange={handleChange}
                    />}

                <input
                type="text"
                name="charSkill"
                value={formData.charSkill}
                placeholder="Habilidad"
                onChange={handleChange}
            />
            
                
                    
                }
                if(user === "squire"){
                <input
                type="text"
                name="charSubmision"
                value={formData.charSubmision}
                placeholder="Habilidad"
                onChange={handleChange}
            />
            
                }
                if(user === "counselor"){

                }
             }
            </form>
        </>
    );
}
