import React from 'react'

const Form = (props) => {
  return <form onChange='hello'>
  <input type='text' name='userName' value={props.userName} placeholder='Please Enter Your Name'></input>
  <br/>
  <select name='userZodiac'>
    <option>----Please pick a sign-----</option>
    <option value='aries'>Aries</option>
    <option value='aquarius'>Aquarius</option>
    <option value='sagittarius'>Sagittarius</option>
    <option value='cancer'>Cancer</option>
    <option value='capricorn'>Capricorn</option>
    <option value='gemini'>Gemini</option>
    <option value='leo'>Leo</option>
    <option value='libra'>Libra</option>
    <option value='pisces'>Pisces</option>
    <option value='scorpio'>Scorpio</option>
    <option value='taurus'>Taurus</option>
    <option value='virgo'>Virgo</option>
  </select>
  <br/>
  <button>Submit</button>
  </form>
}

export default Form
