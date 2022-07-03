

    // // Array
    const arry = [3,4,5,6,7,7,31231,1312,3123,123,123123,12,312,3,123,12,312,312,3,12,312,3,123,12,3,12,312,3,12,312,3,12,312,3,12312,31,4,23,5345,64,57,568,76,896,77,677,8,90,457,124,890,1234,879,1432,6789,123,70,234,67,23,45,7809,13,456,789,875,32,6809876,43876,45678,3487654,67890987,3455,12,22223,454,565,6,6,56,56,78,909876567876543,4567,654,34567,898,7654,56789,87,654,56,7890,987654,45678,90,9,8765,6,7890,987,654];
 
    // // function findnumber(number){
    // //   let count =0
    // //   arry.map(function(data,index){
    // //     if (data == number){
    // //       console.log("index" + index +  ":"+number);
    // //       count++;
    // //     }
    // //   });
    // //   console.log("repeated number of arry is =" + count);
    // // }
    // // findnumber(7);

    // let newArray = (arry.slice(25 ,-25));
    // let sum = 0;
    // newArray.map(function (data){
    //   sum = sum + data;

    // })
    // console.log("total sum of arry =" + sum);

    arry.sort(function(a, b){return a - b});
    console.log(arry);
