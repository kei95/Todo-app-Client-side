import React from 'react';
import './App.css';
import Topbar from '../../component/topBar/topbar'
import Card from '../../component/card/card'
import axios from 'axios';

export default class App extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount = async() => {
    await this.getTodos();
  }

  getTodos = async () => {
    const res = await axios.get('http://localhost:3000/tasks')
    this.setState({tasks: res.data})
  }

  
  render(){
    const card = this.state.tasks.map(data =><div id={data.id}><Card title={data.title} text={data.text}/></div>)
    console.log(this.state)
    return (
      <div className="App">
        <Topbar />
        <div className='body'>
          <div className="cardsWrapper">
            {card}
          </div>
        </div>
      </div>
    );
  }
}

const data = [
  {
    title: 'learn react',
    text: 'you have to do this to get better job',
    id: 1
  },
  {
    title: 'learn sql',
    text: 'you have to do this to be a fullstuck developer',
    id: 2
  },
  {
    title: 'asdjfdspafhuihjafljsdhhfiy8978954375892758943jifdsafjpdsi',
    text: 'you have to do this to be a fullstuck developer',
    id: 3
  },
]