$(document).ready(function showNews() {
    $.getJSON("news/news.json", function (data) {
        let res = "<div class='news-table'>";
        $.each(data, function (key, value) {
            res += "<a href='" + value["link"] + "' target='_blank'>";
            res += "<li class='table-row'>";
            res += "<div class='col-8'>" + value["titel"] + "</div>";
            res += "<div class='col-2'>" + value["datum"] + "</div>";
            res += "<div class='col-2'>" + value["krant"] + "</div>";
            res += "</li>";
            res += "</a>";
        });
        res += "</div>";
        document.getElementById("newsTable").innerHTML = res;
        console.log(res);
    });
});

