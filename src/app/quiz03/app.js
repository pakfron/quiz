const array1 = [
    { Code: 101, Name: "AAA" },
    { Code: 102, Name: "BBB" },
    { Code: 103, Name: "CCC" },
  ];

  const array2 = [
    { Code: 103, City: "Singapore" },
    { Code: 102, City: "Tokyo" },
    { Code: 101, City: "Bangkok" },
  ];


    let b = []
const array3 = array1.map((el1)=>{
    const combine = array2.find((el2)=>el1.Code==el2.Code)
    return {...el1,...combine}
})


console.log(array3)
