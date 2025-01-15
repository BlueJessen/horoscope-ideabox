import React from 'react';
import { useState } from 'react';
import './App.css';

export const Form = () => {
    const [name, setName] = useState(false);
    const [sign, setSign] = useState('')
    const [message, setMessage] = useState(false);
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



    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Being a ${sign} means you should be weary of any caffeine tomorrow.`);
        //   const myHeaders = new Headers();
        //     myHeaders.append("Accept", "application/json");
        // let url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=aquarius&day=TODAY`;
        // try {
        //     const response = await fetch(url,{
        //         method: 'GET',
        //         headers: myHeaders,
        //         redirect:"follow"
        //     })

        //     if(!response.ok) {
        //         throw new Error(`error: ${response.status}`);
        //     }
        //     let data = await response.json();
        //     console.log(data, 'data')
        // } catch(error) {
        //     console.error(error.message)
        // }
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
            {message?<p>{message}</p> : <></>}
            <button onClick={handleSubmit}>Get My Horoscope!</button>
        </form>
    )
}