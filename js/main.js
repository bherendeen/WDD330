(function () {
    let tableCont = [{
            label: "Week01",
            url: "week01/"
        },
        {
            label: "Week02",
            url: "week02/"
        },
        {
            label: "Week03",
            url: "week03/"
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