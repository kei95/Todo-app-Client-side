import React from 'react';
import axios from 'axios';

import './App.css';
import Topbar from '../../component/topBar/topbar'
import Card from '../../component/card/card'
import SideBar from '../../component/sideBar/sideBar'

export default class App extends React.Component {
  state = {
    tasks: [],
    isSlideBarOpen: false
  }

  componentDidMount = async() => {
    await this.getTodos();
  }

  getTodos = async () => {
    const res = await axios.get('http://localhost:3000/tasks')
    this.setState({tasks: res.data})
  }

  onSideBarClick = () => {
    this.setState({isSlideBarOpen: !this.state.isSlideBarOpen})
  }
  
  render(){
    const card = this.state.tasks.map(data =>(
    <div key={data.id}><Card title={data.title} text={data.text}/></div>))
    console.log(window.innerWidth)
    return (
      <div className="App">
        <SideBar onClick={this.onSideBarClick} isSlideBarOpen={this.state.isSlideBarOpen} />
        <Topbar onClick={this.onSideBarClick} />
        <div className='body'>
          {
            !card ?
            <div className="noTaskWrapper">
              <p>You have no task yet!</p>
            </div>
            : 
          <div className="cardsWrapper">
            {card}
          </div>
          }
        </div>
      </div>
    );
  }
}