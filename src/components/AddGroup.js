import React, {Component} from 'react'

export class AddGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          direction:'',
          typeEducation: 'очная',
          course:'1'
        };
        this.handleDirectionChange = this.handleDirectionChange.bind(this);
this.handleTypeChange = this.handleTypeChange.bind(this);
this.handleCourseChange = this.handleCourseChange.bind(this);

      }


    handleDirectionChange(event){
        console.log(event.target.value)
        this.setState({direction: event.target.value});
    }

    handleTypeChange(event){
        console.log(event.target.value)
        this.setState({typeEducation: event.target.value});
    }

    handleCourseChange(event){
        console.log(event.target.value)
        this.setState({course: event.target.value});
    }

    render() {
        return (
            <form onSubmit ={() => this.props.addGroup(this.state.direction, this.state.typeEducation, this.state.course)}>
                <div className="form-group form">
                    <input type="text" 
                    className="form-control"
                    placeholder="Введите направление обучения"
                value = {this.state.direction}
                onChange={this.handleDirectionChange} 
                />
                <br/>Выберите форму обучения
                <select className="form-control" id="typeEducation" name="typeEducation" onChange={this.handleTypeChange}>
            <option>очная</option>
            <option>заочная</option>
        </select>
        <br/>Выберите курс обучения
        <select className="form-control" id="course" name="course" onChange={this.handleCourseChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <br/>
        <button className="btn btn-dark" >Добавить</button>
                </div>
            </form>
        )
    }
}

