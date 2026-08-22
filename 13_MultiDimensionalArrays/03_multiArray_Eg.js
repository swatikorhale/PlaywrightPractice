let matrix=[
    ["login","pass","200"],
    ["checkout","fail","400"],
    ["search","pass","201"]
];

    for (let i=0;i<matrix.length;i++)
    {
        console.log(matrix[i].length);
       for(let j=0;j<matrix[i].length;j++)
       {
         process.stdout.write(matrix[i][j]+" ");
       }
       console.log("");
    }
