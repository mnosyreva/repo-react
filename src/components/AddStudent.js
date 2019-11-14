import React, {Component} from 'react'
//import Student from '../model/Student';

export class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fio:'',
          avgScore: '',
          typeEducation:'',
          age:'',
          hasDebt:''
        };
        this.handleFIOChange = this.handleFIOChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleTypeChange = this.handleTypeChange.bind(this);
this.handleAVGChange = this.handleAVGChange.bind(this);
this.handleHasDebtChange = this.handleHasDebtChange.bind(this);
this.handleAgeChange = this.handleAgeChange.bind(this);
      }
        
    handleSubmit(event){
        event.preventDefault();

        //listOfGroup.push(new Student(1,this.state.fio,this.state.avgScore, this.state.typeEducation, this.state.age, this.state.hasDebt));
    }

    handleFIOChange(event){
        console.log(event.target.value)
        this.setState({fio: event.target.value});
    }

    handleAVGChange(event){
        console.log(event.target.value)
        this.setState({avgScore: event.target.value});
    }

    handleTypeChange(event){
        console.log(event.target.value)
        this.setState({typeEducation: event.target.value});
    }

    handleAgeChange(event){
        console.log(event.target.value)
        this.setState({age: event.target.value});
    }

    handleHasDebtChange(event){
        console.log(event.target.value)
        this.setState({hasDebt: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group form">
                    ФИО<input type="text" 
                    className="form-control"
                value = {this.state.fio}
                onChange={this.handleFIOChange} 
                />

                <br/>
                    Средний балл<input type="number" 
                    className="form-control"
                value = {this.state.avgScore}
                onChange={this.handleAVGChange} 
                />
                
                <br/>Тип обучения
                <select className="form-control" id="typeEducation" name="typeEducation" onChange={this.handleTypeChange}>
            <option>бюджет</option>
            <option>коммерция</option>
        </select>

        <br/>
                    Возраст<input type="number" 
                    className="form-control"
                value = {this.state.age}
                onChange={this.handleAgeChange} 
                />

        <br/>Наличие академических задолжностей
        <select className="form-control" id="course" name="course" onChange={this.handleHasDebtChange}>
            <option>Присутствуют</option>
            <option>Отсутствуют</option>
        </select>
        <br/>
        <button className="btn btn-dark">Отправить</button>
                </div>
            </form>
        )
    }
}