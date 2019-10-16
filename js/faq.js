$(document).ready(function displayFAQ() {
    $.getJSON("json-data/faq.json", function (data) {
        let res = "<div class='container'>";

        console.log(data);

        res += "<div class='col'>";
        res += "<div class='faq-content'>";
        res += "<div class='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>";

        $.each(data, function (key, value) {
            res += "<div class='panel-default'>";
            res += "<div class='panel-heading' role='tab'>";
            res += "<div class='panel-title'>";
            res += "<a  role='button' data-toggle='collapse' data-parent='#accordion' class='collapsed' href= '#faq" + value["index"] + "'>";
            res += "<span>" + value["q"] + "</span></a></div></div>";
            res += "<div id='faq" + value["index"] + "' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'>";
            res += "<div class='panel-body'>" + value["a"] + "</div></div></div>";
        });
        res += "</div>";
        res += "</div>";
        res += "</div>";
        res += "</div>";
        res += "</div>";

        console.log(res);

        document.getElementById("faqView").innerHTML = res;
    });
});