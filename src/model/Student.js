class Student {
    constructor(id,fio, avgScore, typeEducation, age, hasDebt){
        this.id=id;
        this.fio=fio;
        this.avgScore=avgScore;
        this.typeEducation=typeEducation;
        this.age=age;
        this.hasDebt=hasDebt;
    }

    getFio(){
        return this.fio;
    }
    getAvgScrore(){
        return this.avgScore;
    }
    getTypeEducation(){
        return this.typeEducation;
    }
    getAge(){
        return this.age;
    }
    getHasDebt(){
        return this.hasDebt;
    }
}
export default Student;