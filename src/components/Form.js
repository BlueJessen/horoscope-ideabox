import React from 'react';
import { useState } from 'react';

export const Form = () => {
    const [name, setName] = useState(false);
    const [sign, setSign] = useState('')
    const zodiacs = [
        'aquarius', 
        'aries', 
        'cancer', 
        'capricorn', 
        'gemini',
        'leo',
        'libra',
        'pisces',
        'sagittarius',
        'scorpio',
        'taurus',
        'virgo'
    ];

    const handleChange = (e, type) => {
        type === 'name' ? setName(e.target.value): setSign(e.target.value);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`;
        try {
            const response = await fetch(url)
            if(!response.ok) {
                throw new Error(`error: ${response.status}`);
            }
            let data = await response.json();
            console.log(data, 'data')
        } catch(error) {
            console.error(error.message)
        }
    } 

    return(
        <form>
            <select onChange={(e) => handleChange(e, 'zodiac')}>
                {zodiacs.map((sign) => {
                    return <option key={sign} value={sign}>{sign.toUpperCase()}</option>
                    })}
            </select>
            <label>
                Name: <input onChange={(e) => handleChange(e, 'name')} name="userName"/>
            </label>
            {name?<p>Welcome, {name}</p>:<></>}
            <button onClick={handleSubmit}>Get My Horoscope!</button>
        </form>
    )
}