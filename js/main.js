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
        parentTag += `<li><a href="${tableCont.url}" target="_blank" rel="noopener noreferrer">${tableCont.label}</a> ${tableCont.label}</li>`;
}
}());