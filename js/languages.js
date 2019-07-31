const languages = {
    en:{
        'history': 'history',
        'information': 'information',
        'activities': 'activities ',
        'organisation': 'organisation',
        'interested': 'interested?',
        'pictures': 'pictures',
        'newsfeed': 'newsfeed',
        'contact': 'contact '},
    de: {
        'history': 'GESCHICHTE',
        'information': 'INFORMATION',
        'activities': 'AKTIVITÄTEN ',
        'organisation': 'ORGANISATION',
        'interested': 'INTERESSIERT?',
        'pictures': 'FOTO’S',
        'newsfeed': 'Nachrichtenüberblick',
        'contact': 'KONTAKT '
    },
    es: {},
    fr: {},
    it: {},
    nl: {},
    no: {},
}

function loadLanguage(lang) {
    $('.lang').each(function (index, element) {
        $(this).text(languages[lang][$(this).attr('key')]);
    })
}