(function() {
    let tableCont = [
        {
            label: "Week01 notes",
            url: "week01/index.html"
        },
        {
            label: "Week02 notes",
            url: "week02/index.html"
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