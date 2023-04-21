export default class HolbertonCourse {
    constructor(name,length,students){
        if(typeof name !== "string"){
            throw new TypeError("name should be a string");
        }
       else if(typeof length !== "number"){
            throw new TypeError("length should be integer")
        }
        else if(!Array.isArray(students)){
            throw new TypeError("students should be an array")
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name(){
        return this._name;
    }
    set name(name){
        if(typeof name !== "string"){
            throw new TypeError("name should be a string");
        }
        this._name = name
    }

    get length(){
        return this._length
    }

    set length(length){
        if(typeof length !== "number"){
            throw new TypeError("length should be integer")
        }
        this._length = length;
    }

    get students(){
        return this._student
    }

    set students(students){
        
       if(!Array.isArray(students)){
            throw new TypeError("students should be an array")
        }
        this._student = students

    }
}

