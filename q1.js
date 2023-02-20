/* JavaScript program to compare two objects 
to determine if the first one contains equivalent property values to the second one */



function compareObjects(obj1, obj2){
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length) return false;
    for(key of keys1){
        if(!obj2.hasOwnProperty(key)) return false;
        if(typeof(obj2[key]) === 'object') {
            let bool = compareObjects(obj1[key],obj2[key]);
            if(bool === false) return false;
        }
        if(obj2[key]!==obj1[key]) return false;
    }
    return true;
}



// Objects for test cases

const Emp1 = {
    name : 'Pranav', 
    age: 22,
    salary: 4300  
}

const Emp2 = {
    name: 'Mohan',
    age: 34,
    salary: 28899,
    department: 'web development'
}

const Emp3 = {
    name: 'Mohan',
    age: 34,
    salary: 28899,
    department: 'web development'
}

const Emp4 = {
    name: 'Mohan',
    age: 34,
    salary: 28899,
    work: 'web development'
}

const Emp5 = {
    name: 'Mohan',
    age: 34,
    salary: 2889,
    work: 'web development' 
}

const Emp6 = {
    name: 'Mohan',
    age: 34,
    salary: 2889,
    work: ['web development', 'data science'] 
}

const Emp7 = {
    name: 'Mohan',
    age: 34,
    salary: 2889,
    work: ['web development', 'data science'] 
}
const Emp8 = {
    name: 'Mohan',
    age: 34,
    salary: 2889,
    work: ['web development', 'data science','AI',{role:"intern"}] ,
    
}
const Emp9 = {
    name: 'Mohan',
    age: 34,
    salary: 2889,
    work: ['web development', 'data science','AI',{role:"senior developer"}] ,
    
}





// console.log(compareObjects(Emp1,Emp2));
// console.log(compareObjects(Emp2,Emp3));
// console.log(compareObjects(Emp3,Emp4));
// console.log(compareObjects(Emp4,Emp5));
// console.log(compareObjects(Emp5,Emp6));
// console.log(compareObjects(Emp6,Emp7));
// console.log(compareObjects(Emp7,Emp8));
//console.log(compareObjects(Emp8,Emp9));



// let a = ['web development', 'data science'];
// let b = ['web development', 'data science'];
// console.log(a);
// console.log(b);
// console.log(a == b);
// console.log(typeof(a));
// console.log(a==b);
// console.log(a===b);
// console.log(compareObjects(a,b));