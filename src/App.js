
import './App.css';
import { Component, SetState } from 'react'
import Form from './components/Form'
import HoroscopeContainer from './components/HoroscopeContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userZodiac: '',
      horoscope: null
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.userZodiac}&day=today`;
    fetch(URL, {
      method: 'POST'
    }).then(response => response.json())
      .then(data => this.setState({
      horoscope: data
    }))
  }


  render() {
  return (
    <>
      <header> Welcome {this.state.userName}!</header>
      {!this.state.horoscope ? <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} userName={this.state.userName} userZodiac={this.state.userZodiac}/> :
      <HoroscopeContainer horoscope={this.state.horoscope} />}

    </>
  )
}
}

export default App;
