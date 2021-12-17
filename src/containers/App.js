import React from 'react';
import RobotList from "../components/RobotList";
import SearchBox from '../components/SearchBox';
import ScrollBox from "../components/ScrollBox";
import 'tachyons';
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            robots:[]
        }
    }

    onSearchChange = (event)=>{
        this.setState({searchField: event.target.value})
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>{this.setState({robots:users})});
    }


    render(){

        const filteredRobots = this.state.robots.filter((robot)=>
            robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return(
            <div className="tc">
                <h1 className='f1'>RoboFriends Community</h1>
                <SearchBox search = {this.onSearchChange}/>
                <ScrollBox>
                    <RobotList robots={filteredRobots}/>
                </ScrollBox>
            </div>
        );
    }
}

export default App;