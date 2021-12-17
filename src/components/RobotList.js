import React from 'react';
import Robot from './robot'

const RobotList = ({robots})=>{
    return(
        <div>
            {
                robots.map((user,i)=>{
                   return (<Robot
                       key = {i}
                       id = {user.id}
                       name = {user.name}
                       email = {user.email}
                   />);
            })
            }
        </div>
    );
};
export default RobotList;