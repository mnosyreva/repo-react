import React from 'react';
import {GetGroupById} from '../components/Groups'
import {NavLink} from 'react-router-dom'

export class GetListOfStudentsByGroup extends React.Component {
  render() {
    return <div>
            <h2>{
        this.props.groups.find(x => x.id === parseInt(this.props.id)).direction} 
      {
        this.props.groups.find(x => x.id === parseInt(this.props.id)).course
        }</h2>
            <GetGroupById id={this.props.id} groups={this.props.groups}/>
            <button type="button" className="btn btn-light">
        <NavLink className="nav-link link" to="/addStudent">Добавить студента</NavLink>
      </button>
    </div>
    
  }
}

