$(document).ready(function showMap() {
    let map = AmCharts.makeChart("mapdiv", {
        type: "map",
        theme: "dark",
        projection: "miller",
        panEventsEnabled: true,
        backgroundColor: "#f8f9fa",
        backgroundAlpha: 1,
        zoomControl: {
            zoomControlEnabled: true
        },
        dataProvider: {
            map: "worldHigh",
            getAreasFromMap: true,
            areas:
                [
                    {
                        "id": "AT",
                        "showAsSelected": true
                    },
                    {
                        "id": "BE",
                        "showAsSelected": true
                    },
                    {
                        "id": "CA",
                        "showAsSelected": true
                    },
                    {
                        "id": "ES",
                        "showAsSelected": true
                    },
                    {
                        "id": "UA",
                        "showAsSelected": true
                    },
                    {
                        "id": "UY",
                        "showAsSelected": true
                    },
                    {
                        "id": "SE",
                        "showAsSelected": true
                    },
                    {
                        "id": "FI",
                        "showAsSelected": true
                    },
                    {
                        "id": "HK",
                        "showAsSelected": true
                    },
                    {
                        "id": "NL",
                        "showAsSelected": true
                    },
                    {
                        "id": "IL",
                        "showAsSelected": true
                    },
                    {
                        "id": "DZ",
                        "showAsSelected": true
                    },
                    {
                        "id": "TZ",
                        "showAsSelected": true
                    },
                    {
                        "id": "UA",
                        "showAsSelected": true
                    },
                ]
        },
        areasSettings: {
            autoZoom: true,
            color: "#d9d9d9",
            colorSolid: "#d9d9d9",
            selectedColor: "#558b2f",
            outlineColor: "#666666",
            rollOverColor: "#d9d9d9",
            rollOverOutlineColor: "#558b2f"
        }
    });

    document.getElementById("mapdiv").innerHTML = map;
});

//site voor landcodes: https://www.amcharts.com/visited_countries/#BE,CA,UY,HK