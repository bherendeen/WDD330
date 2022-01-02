(function () {
    let tableCont = [
        {
            label: "Week01",
            url: "week01/"
        }
    ];

    let parentTag = "<ol>";
    
    tableCont.forEach(myFunction);
    parentTag += "</ol>";
    document.getElementById("contDisp").innerHTML = parentTag;
    
    function myFunction(tableCont) {
        parentTag += `<li><a href="${tableCont.url}">${tableCont.label}</a></li>`;
    }
}());