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
        },
        {
            label: "Week04",
            url: "week04/"
        },
        {
            label: "Week05",
            url: "week05/"
        },
        {
            label: "Week06",
            url: "week06/"
        } {
            label: "Week07",
            url: "week07/"
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