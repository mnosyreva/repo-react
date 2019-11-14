class Group {
    constructor(id,direction, typeEducation, course, students){
        this.id=id;
        this.direction=direction;
        this.typeEducation=typeEducation;
        this.course=course;
        this.students=students;
    }
    getDirection(){
        return this.fio;
    }
    getTypeEducation(){
        return this.typeEducation;
    }
    getCourse(){
        return this.course;
    }
    getStudents(){
        return this.students;
    }
}
export default Group;