import React from 'react';
import { useState } from 'react';

export const Form = () => {
    const [name, setName] = useState(false);
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

    const handleChange = (e) => {
        setName(e.target.value);
    }
    return(
        <form>
            <select>
                {zodiacs.map((sign) => {
                    return <option key={sign} value={sign}>{sign.toUpperCase()}</option>
                    })}
            </select>
            <label>
                Name: <input onChange={handleChange} name="userName"/>
            </label>
            {name?<p>Welcome, {name}</p>:<></>}
            <button onClick={() => console.log(e)}>Get My Horoscope!</button>
        </form>
    )
}