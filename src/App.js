import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Store from './store'
import Header from './common/header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <Header/>
        </Provider>
      </div>
    )
  }
}
