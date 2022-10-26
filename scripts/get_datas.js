let text_version;
let text_database;
let item_version;
let item_database;

window.onload = function() {
    showLoadingPage(false);
    getItemsVersion();
}

function getItemsVersion() {
    $.ajax({
        type: "GET",
        url: "https://sheltered-everglades-24913.herokuapp.com/https://empire-html5.goodgamestudios.com/default/items/ItemsVersion.properties",
        dataType: "text",
        success: function(response) {
            item_version = response.split("=")[1];
            getItems();
        }
    });
}

function getItems() {
    $.getJSON(`https://sheltered-everglades-24913.herokuapp.com/https://empire-html5.goodgamestudios.com/default/items/items_v${item_version}.json`, function(response) {
        item_database = response;
        addOptions();
        getTextVersion();
    });
}

function getTextVersion() {
    $.getJSON("https://sheltered-everglades-24913.herokuapp.com/https://empire-html5.goodgamestudios.com/config/languages/version.json", function(response) {
        text_version = response;
        addLanguages();
        getText("en");
    });
}

function getText(language) {
    $.getJSON(`https://sheltered-everglades-24913.herokuapp.com/https://langserv.public.ggs-ep.com/12@${text_version.languages[language]}"/${language}/*`, function(response) {
        text_database = response;
        loadText();
        hideLoadingPage();
    });
}