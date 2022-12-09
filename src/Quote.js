fetch("https://zenquotes.io/api/quotes").then((data)=>{
    //console.log(data)
    return data.json();
}).then((quoteData)=>{
    console.log(quoteData[0].q);
    let tableData="";
    let id=1;
    quoteData.map((values)=>{
        tableData+=`<tr>
        <td>${id++} </td>
        <td>${values.q}</td>
        <td>${values.a}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((e)=>{
    console.log(e);
})