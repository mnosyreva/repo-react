import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Group from '../model/Group';


export class Groups extends Component {
  render(){
    return (
        <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Направление</th>
      <th scope="col">Тип обучения</th>
      <th scope="col">Курс обучения</th>
      <th scope="col">Количество студентов</th>
      <th scope="col">кномпочки</th>
    </tr>
  </thead>
  <tbody>
  {
    this.props.groups.map((group, index) => (
    <tr key={index}>
      <td><button className="btn btn-light"><Link to={`/groups/${group.id}`} className="link">{group.direction}</Link></button></td>
      <td>{group.typeEducation}</td>
      <td>{group.course}</td>
      <td>{ group.students.length ? group.students.length : 0}</td>
      <td><button type="button" className="btn btn-danger" onClick={() => this.props.deleteGroup(group.id)}>Удалить</button></td>
    </tr>
  ))}
  </tbody>
</table>
    )
}
}

export const GetGroupById = props => (
    <table className="table table-bordered">
    <thead>
        <tr>
            <th scope="col">ФИО</th>
            <th scope="col">Средний балл</th>
            <th scope="col">Вид обучения</th>
            <th scope="col">Возраст</th>
            <th scope="col">Задолжности</th>
            <th></th>
        </tr>
    </thead>
      <tbody>
        { 
          (
          props.groups[props.id].students.length > 1) ?

          props.groups[props.id].students.map(student => (
            <tr>
              <td>{student.fio}</td>
              <td>{student.avgScore}</td>
              <td>{student.typeEducation}</td>
              <td>{student.age}</td>
              <td>{student.hasDebt?'Присутствуют':'Отсутствуют'}</td>
              <td><button type="button" className="btn btn-danger" /*onClick={deleteStudent}*/>Удалить</button></td>
            </tr>
          )
        )
          : ''
        }
      </tbody>
      </table>
    )

export default Group;