// object seal() method in javascript 
/**
  in javscript object.seal() is a method that prevents 
  adding and deletinga properties

  but they allow only modifying the existing objects .
 */

  //ex:1
  const sealobj=Object.seal(
    {name:'venkat',
        age:20
    }
  )
  sealobj.name="yuva"
  sealobj.gender="male"
  console.log(sealobj);
  
  //ex:2
  let user={
    name:'venkat',
    age:20
  }
  user.name="yuva"
  Object.seal(user)
  user.city='chennai'
  console.log(user);
  
  //ex:3 delete not allowed 

  let users={
    name:'yuva'
  }
  Object.seal(users)
  delete user.name;
  console.log(users);
  