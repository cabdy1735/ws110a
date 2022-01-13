var people = [
    { name: 'Peter', age: 10 },
    { name: 'Nina', age: 3 },
    { name: 'John', age: 15 },
    { name: 'Nina', age: 18 }
  ];
  
  //find object in list
  //var result = people.map(x => x.name).indexOf('Nina');
  var result = people.map(function(item, index, array){
    if (item.name == 'Nina') {
      return item;              
    }
  });
  
  console.log(result)
  var aa=result.filter(obj => obj != undefined);
  result; // 2
  console.log(aa)