
import './App.css';
import { Component } from 'react'
import Form from './components/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userZodiac: ''
    }
  }

  handleChange()  {

  }


  render() {
  return (
    <>
      <header> Welcome {this.state.userName}!</header>
      <Form userName={this.state.userName} userZodiac={this.state.userZodiac}/>

    </>
  )
}
}

export default App;
