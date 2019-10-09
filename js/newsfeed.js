$(document).ready(function showNews() {
    $.getJSON("json-data/news.json", function (data) {
        let res = "<div>";
        $.each(data, function (key, value) {
            res += "<a href='" + value["link"] + "' target='_blank'>";
            res += "<li class='table-row' style='list-style: none'>";
            res += "<div class='col-7' style='font-style: italic'>" + value["titel"] + "</div>";
            res += "<div class='col'>" + value["datum"] + "</div>";
            res += "<div class='col'>" + value["krant"] + "</div>";
            res += "</li>";
            res += "</a>";
        });
        res += "</div>";
        document.getElementById("newsTable").innerHTML = res;
    });
});

