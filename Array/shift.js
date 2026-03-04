// shift in array method javascript 
/**
 in javascript shift() method remove the first element of an array 
 it's modify original array and returns the removed elements
 in this array no elemnet is found it returns the undefined 
 */

 //ex:1
  const myfish=['angel','clown','mandrian','surgeon'];
  console.log(myfish);
  console.log(myfish.shift());
  console.log(myfish);
  
  //ex:2

  const taskqueue=['Email client','Update Database','Generate Report'];

  while (taskqueue.length>0) {
    const currentask=taskqueue.shift();
    console.log(currentask);
    
  }

  console.log(taskqueue.length);
  
  //ex:3
  const matrix=[[1,2],[3,4],[5,6]];
  const firstrow=matrix.shift();
  console.log(firstrow);
  console.log(matrix);
  
  