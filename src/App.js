import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom' 
import {Home} from './pages/Home'
import {About} from './pages/About'
import {GetListOfStudentsByGroup} from './pages/ListOfStudents';
import {Navbar} from './components/Navbar'
import { Alert } from './components/Alert';
import {AlertState} from './context/alert/alertState'
import { AddGroup } from './components/AddGroup';
import { AddStudent } from './components/AddStudent';
import Group from './model/Group'
import Student from './model/Student'


export class App extends Component {
  constructor(){
    super();
    this.state = {
      listOfGroup: [
        new Group(1,'ИФСТ','очная', 2, [new Student(1,'Павленко Евсей Петрович', 4.5, 'очная', 21, false), new Student(2,'Иваненко Устин Юхимович', 4.0, 'очная', 20, false), new Student(3,'Скляренко Харитон Львович', 3.0, 'очная', 21, true)]),
        new Group(2,'ИФСТ','очная', 3, [new Student(1,'Чернов Жигер Александрович', 4.0, 'очная', 20, false), new Student(2,'Миронов Григорий Анатолиевич', 4.0, 'очная', 22, true), new Student(3,'Жданов Кристиан Романович', 5.0, 'очная', 21, true)]),    
        new Group(3,'ИФСТ','очная', 4, [new Student(1,'Гайчук Елена Ивановна', 4.0, 'очная', 20, false), new Student(2,'Терещенко Зураб Данилович', 4.0, 'очная', 22, true), new Student(3,'Кравченко Устин Максимович', 5.0, 'очная', 21, true)]),
        new Group(4,'ПИНЖ','заочная', 1, [new Student(1,'Майборода Оскар Иванович', 4.5, 'очная', 21, false), new Student(2,'Многогрешный Добрыня Дмитриевич', 4.0, 'заочная', 20, true), new Student(3,'Худобяк Владимир Артёмович', 5.0, 'заочная', 19, false)]),
        new Group(5,'ПИНФ','заочная', 4, [new Student(1,'Кулаков Оливер Станиславович', 3.5, 'очная', 18, false), new Student(2,'Петрив Сава Борисович', 4.0, 'очная', 22, true), new Student(3,'Сыпченко Ленар Сергеевич', 5.0, 'очная', 21, true)]),
        new Group(6,'ПИНЖ','очная', 3, [new Student(1,'Сусаренко Таисия Фёдоровна', 4.5, 'очная', 20, false), new Student(2,'Кобзар Степан Вадимович', 4.0, 'очная', 22, true), new Student(3,'Воронцов Абрам Львович', 5.0, 'очная', 21, true)]), 
        new Group(7,'ПИНФ','заочная', 2, [new Student(1,'Гончар Наталья Сергеевна', 5.0, 'очная', 21, false), new Student(2,'Трясило Ян Валерьевич', 4.0, 'очная', 22, true), new Student(3,'Милославский Савва Романович', 5.0, 'очная', 21, true)]),    
        new Group(8,'ИВЧТ','очная', 3, [new Student(1,'Чикольба Прохор Юхимович', 3.0, 'очная', 19, false), new Student(2,'Борисенко Жигер Викторович', 4.0, 'очная', 22, true), new Student(3,'Ершов Остин Григорьевич', 5.0, 'очная', 21, true)]),   
        new Group(9,'ИВЧТ','очная', 2, [new Student(1,'Овчинникова Галина Сергеевна', 4.5, 'очная', 20, false), new Student(2,'Тимофеев Адам Иванович', 4.0, 'очная', 22, true), new Student(3,'Петрив Юлиан Платонович', 5.0, 'очная', 21, true)])
      ]};
      this.handleDeleteGroup = this.handleDeleteGroup.bind(this);
      this.handleAddGroup = this.handleAddGroup.bind(this);
  }

  handleDeleteGroup(id) {
    let group = this.state.listOfGroup.find(item => item.id === id);
    let result = window.confirm("Удалить группу " + group.direction + group.course);
    if (result) {
    var array = this.state.listOfGroup.filter(item => item.id !== id);
    this.setState({listOfGroup: array});
    }
  }
    
handleAddGroup(direction,typeEducation,course){
  console.log(this.state.listOfGroup + " 123 ") 
  /*if (direction.trim()!==''){
    var array = this.state.listOfGroup
    array.push(
        new Group(this.state.listOfGroup.length+1,direction,typeEducation,course,0)
        );
        this.setState({listOfGroup: array})
        console.log(this.state.listOfGroup + "1369763" + array)
    }*/
  }
  
  render(){
    console.log(this.state.listOfGroup + "1111")
    return (
    <AlertState>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Alert/>
      <Switch>
        <Route path={'/'} exact render = { () => <Home groups={this.state.listOfGroup} deleteGroup={this.handleDeleteGroup}/>}/>
        <Route path={'/about'} component={About}/>

        <Route render={ ({match}) => <GetListOfStudentsByGroup id={match.params.id} groups={this.state.listOfGroup}/>} path='/groups/:id'/>

        <Route path={'/addGroup'} render = { () => <AddGroup addGroup={this.handleAddGroup}/>}/>
        <Route path={'/addStudent'} component={AddStudent}/>   
      </Switch>
    </div>
    </BrowserRouter>
    </AlertState>
  );
    }
}



export default App;
