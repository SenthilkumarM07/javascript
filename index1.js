//object keys

const user={

    name:"senthil",

    address:{city:'Arakkonam',state:"tamil namdu"},

    greet : function()
    {
        console.log("Hello this is "+this.name );
        
    }
}
    


//--------object keys and Entries
for (let key of Object.keys(user))
    {
        console.log(key);
    }
        
    for (let key of Object.entries(user))
    {
        console.log(key);
    }
    //to check values is exist or not
    if ('name' in user)
    {
        console.log("yes");
        
    }


//-----object clone or copying one object to another .
let users=user;
console.log(users);
//----------clone using loop
let user1={};
for (let key in user)
{
    user1[key]=user[key];
}
console.log(user1.greet);
//clone using object assign
let users1=Object.assign({age:21},user)
console.log(uses1);
//spread operator (...)

let user2={
    ...user
}
console.log(user2);

//---------inbuild functions
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));
console.log(Math.round(1.5));
let firstName='senthil';
console.log(firstName.at(0));

//----------------------------
//Array add(push,unshift ,splice)
//Array remove(pop,shift ,slice) -----split(split,join)
//araay sorting(sort,reverse)
//array (some ,every)
//array filtering  (filter,find,findIndex)
//array map  (Map)
//Array :(reduce,reduceright)
//----------------------------
let num=[2,4,6 ,8,10];
num[5]=12;
num[6]=14;
num.push(16); //---last
num.unshift(16); //---first 
num.splice(0,0,0,1);
//---finding element of array
console.log(num.indexOf(8));
console.log(num.sort()); //for ascending
let num=[8,3,1,4];
num.sort(function(a,b) //for decending
{
    return b-a;
});
//---------------array (some ,every)
console.log(num.reverse());
array (some ,every )
let age =[24,19,16,21,30,60];
let age_res= age.every(function(a)  //every 
{
    return a >=18 && a<60;
});
console.log("every"+age_res);
let age_res1= age.some(function(a) //some
{
    return a >=18 && a<60;
});
//------------------array filtering  (filter,find,findIndex)
console.log("some"+age_res1);
let age1 =[12,24,19,16,21,30,60];
let age_filter1=age.filter(function(age1)    //filter 
{
    return age>=18;
});
console.log(age_filter1);
let age_filter=age.find(function(age1)    //find 
{
    return age>=18;
});
console.log(age_filter);
//-------------array map  (Map)
let num =[1,2,3,4];
console.log(num);
let num1=num.map(function(val)    //map
{ 
    return val+1;
});
console.log(num1);
//------------Array :(reduce,reduceright)
let shopping=[
    {id:1,item:"milk",cost:40},
    {id:2,item:"sugar",cost:20},      //reduce and reduceRight  
    {id:3,item:"tea",cost:5},
    {id:4,item:"coffee",cost:10},
];
let bill=shopping.reduce((prev,curr) =>         //arrow function
{
    return prev + curr.cost;
},10);
console.log(bill);

//--------ERROR HANDLING USING TRY CATCH
try{
    const a=1;
    a=2;

}
catch(ex)
{
    alert(ex);
}
//------Immediate Invoked Function Expression
(function add()
{
    console.log(10+20);    
})();














































