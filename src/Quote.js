fetch("https://zenquotes.io/api/quotes/").then((res) => { return res.json();
})
      .then((objectData)=>{
    let tableData="";
    objectData.map((values)=>{
        tableData='<h1>${values.q}</h1>'
    })
})
