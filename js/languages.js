function loadLanguage(lang) {
    $('.lang').each(function (index, element) {
        $(this).text(languages[lang][$(this).attr('key')]);
    })
}

const languages = {
    en: {
        'history': 'history',
        'information': 'information',
        'activities': 'activities ',
        'organisation': 'organisation',
        'interested': 'interested?',
        'pictures': 'pictures',
        'newsfeed': 'newsfeed',
        'contact': 'contact '
    },
    de: {
        'history': 'GESCHICHTE',
        'information': 'INFORMATION',
        'activities': 'AKTIVITÄTEN ',
        'organisation': 'ORGANISATION',
        'interested': 'INTERESSIERT?',
        'pictures': 'FOTO’S',
        'newsfeed': 'Nachrichtenüberblick',
        'contact': 'KONTAKT ',
    },
    es: {
        'history': '',
        'information': '',
        'activities': ' ',
        'organisation': '',
        'interested': '',
        'pictures': '',
        'newsfeed': '',
        'contact': '',
    },
    fr: {
        'history': '',
        'information': '',
        'activities': ' ',
        'organisation': '',
        'interested': '',
        'pictures': '',
        'newsfeed': '',
        'contact': '',
    },
    it: {
        'history': 'STORIA',
        'information': 'INFORMAZIONE',
        'activities': 'ATTIVITÀ ',
        'organisation': 'L’ORGANIZZAZIONNE',
        'interested': 'INTERESSATO?',
        'pictures': 'IMMAGINI',
        'newsfeed': 'NOTIZIE',
        'contact': 'CONTATTACI',
    },
    nl: {
        'history': 'Geschiedenis',
        'information': 'Informatie',
        'activities': 'Activiteiten',
        'organisation': 'organisatie',
        'interested': 'Interesse?',
        'pictures': 'FOTO’S',
        'newsfeed': 'Nieuwsoverzicht',
        'contact': 'Contact',
    },
    no: {
        'history': '',
        'information': '',
        'activities': ' ',
        'organisation': '',
        'interested': '',
        'pictures': '',
        'newsfeed': '',
        'contact': '',
    },
};

