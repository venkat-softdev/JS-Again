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
  