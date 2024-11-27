
//var - bind with window object
//let- created in reference(out in windows)
//const- reasingn value
        //java script  Single -line command
        /*
        Multi line cimmand
        */
    
       let course="java script";
       course="Java Script"
       const name1="Senthil"
       //name="se";
       let msg="Hello this is "+course+" course "+name1;
        //alert(msg);
        console.log(msg);
        console.log(typeof(msg));

        let id;
        let name;
        let age;
        let dept;

        //object {}
        let student={
            //key:value
            id:101,name:"senthil",age:21,dept:"cse",
            skill:{s1:"java",s2:'Dotnet'}
        }
        student.id=100;
        //dot notation
        console.log(student.name);
        console.log(student.skill.s1);
        //bracket notation
        console.log(student['dept']);
        
        //array []
        let city=['chennai','salem'];
        city[2]='madurai';
        console.log(city);
        console.log(city[0]);

        //function 

        function message(fn,ln)
        {
            let greet='hello  this is '+fn+' '+ln+' lerning javascript';
            console.log(greet);
            
        }

        message();
        message('senthil','kumar');//argumet passing
        
        
            // operator
            // =>arithmetic operator(+,-,*,%,/)
            // =>assignment operator(=,+=,-=,*=,%=,/=)
            // =>comparision operator(<=,>=,==,===,!=,!==,<,>)    console.log(1===1);  console.log('1'==1);
            // =>equality operator  (same datatype=== same value)
            // =>ternary operator (?)   let type=a>=18?'eligible to vote':' not eligible to vote';
            // =>logical opertor (&&,||,!) and ,or ,not
            // =>bitwise(&,|)
       
            let a=18;
            let type=a>=18?'eligible to vote':' not eligible to vote';
            console.log(type)
    //if else,else if
    //switch
    let grade=4;
    switch(grade)
    {
        case 1:
            console.log('too bad');
            break;
        case 2:
                console.log('not bad');
                break;
        case 3:
            console.log('Average'); 
            break;
        case 4:
            console.log('good');
            break;
        case 5:
            console.log('Avesome');
            break;
        default:
            console.log("you not entered any values");
            
    }
             

    //loops i  js => for ,while ,do while,for-in,for-of
    console.log('-----for------');
    for(let i=1;i<5;i++)
    {
        console.log(i);
    }
    console.log('-----while------');

    let i=1;
    while (i<5)
    {
        console.log(i)
        i++;
    }
    console.log('----do while-------');
    let j=0;
    do
    {
        console.log(j);
        j++;
    }
    while(j<5);
    console.log('------For In -----');
    
    let arr=['red','blue','green','yellow','orange']
    
    for (let x in arr)
    {
        console.log(arr[x]);
        
    }

    let students={
        //key:value
        id:101,name:"senthil",age:21,dept:"cse",
    }
    
    for (let x in students)
    {
        console.log(x+":",students[x]);
        
    }

    console.log('------For Of -----');

    //only values , it not support key
    for (let x of arr)
        {
            console.log(x);
                
        }
    
        //oops
        
        let s_name='senthil';
        let s_dept='cse';
        let s_course='dotnet';
    
    
    function createperson(){
        console.log("hello my name :"+s_name+" for depertment of"+s_dept+"my course is "+s_course);
        //console.log(`hello my name is ${s_name} for depertment of ${s_dept} my course is  ${s_course}');
    }
    createperson();

    console.log('-------------------------------');

    //oops
    
    let person={

        s_name:'Senthil',
        s_dept:'CSE',
        s_course:'.NET',
        createperson: function()
        {
            console.log("hello my name :"+this.s_name+" for depertment of"+this.s_dept+"my course is "+this.s_course);
        }
    };

    person.createperson();


console.log('-------------------------------'); 
//factory function
    // Function creating new objects 
// without use of 'new' keyword
function createRobot(name) {
	return {
		name: name,
		talk: function () {
			console.log('My name is '
				+ name + ', the robot.');
		}
	};
}

//Create a robot with name Chitti
const robo1 = createRobot('Chitti');
robo1.talk();
// Create a robot with name Chitti 2.O Upgraded
const robo2 = createRobot('Chitti 2.O Upgraded');
robo2.talk();

function f1(){}
function f(fname)
{
    return{
        a:fname,
        
        f1()
        {
            console.log("hello this is "+fname);
            
        }

    };
}

let s=f('senthil');
let n=f('prasath');
s.f1();
n.f1();

//constructor function-----new keyword,this,pascal case

function People(pname)
{
    pname,
    this.f1= function()
    {
        console.log('i am '+pname);
    };
}
    
let senthil= new People("SENTHIL");
senthil.f1();
//dynamic object 
const p={
    id:1,
};
p.Name="senthil";
p.age=21;

delete p.id;
console.log(p);



//object keys




    
        
    

