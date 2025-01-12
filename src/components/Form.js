import React from 'react';
import { useState } from 'react';

export const Form = () => {
    const [name, setName] = useState('');
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
    return(
        <form>
            <select>
                {zodiacs.map((sign) => {
                    return <option key={sign} value={sign}>{sign.toUpperCase()}</option>
                    })}
            </select>
            <input type="text"></input>
        </form>
    )
}