class Employees{
    //data members
    protected fname:string;
    lname:string;
    employeeId:number;
    contact:number;

    constructor(_fname:string,_lname:string){
        this.fname=_fname;
        this.lname=_lname;
    }

    getFname():string{
        return this.fname;
    }
    //member functions
    getFullName():string{
        return this.fname+" "+this.lname;
    }
}

class Managers extends Employees{

    noOfEmployees:number;

    getMeFirstName():string{
        return this.fname
    }   

   //member functions
   getFullName():string{
    return "Mr "+this.fname+" "+this.lname;
    }   

}

var obj= new Managers("Harry","Potter");
console.log(obj.getFullName());
console.log(obj.getMeFirstName());

var obj1= new Employees("Peter","John");
console.log(obj1.getFullName());
