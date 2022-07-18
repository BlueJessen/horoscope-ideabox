
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
      horoscope: null,
      error: ''
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
    if(!this.state.userZodiac || !this.state.userName) {
      this.setState({
        error: 'Please fill out all fields'
      })
      return
    }
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.userZodiac}&day=today`;
    fetch(URL, {
      method: 'POST'
    }).then(response => response.json())
      .then(data => this.setState({
      horoscope: data,
      error: ''
    }))
  }

  resetHome = (event) => {
    this.setState({
      userName: '',
      userZodiac: '',
      horoscope: null
    })
  }

  render() {
  return (
    <>
      <header> Welcome {this.state.userName}!</header>
      {this.state.error && <h1>{this.state.error}</h1>}
      {!this.state.horoscope ? <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} userName={this.state.userName} userZodiac={this.state.userZodiac}/> :
      <HoroscopeContainer resetHome={this.resetHome} userName={this.state.userName} userZodiac= {this.state.userZodiac} horoscope={this.state.horoscope} />}

    </>
  )
}
}

export default App;
