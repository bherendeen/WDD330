(function() {
    let tableCont = [
        {
            label: "Week1 notes",
            url: "week1/index.html"
        },
        {
            label: "Week2 notes",
            url: "week2/index.html"
        }
    ];

    let parentTag = "<ol>";
    
    tableCont.forEach(myFunction);
    parentTag += "</ol>";
    document.getElementById("contDisp").innerHTML = parentTag;
    
    function myFunction(tableCont) {
        parentTag += `<li> ${tableCont.label} | <a href="${tableCont.url}" target="_blank">${tableCont.url}</a> </li>`;
}
}());