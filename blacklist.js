var selector = '#dm_conative_artikel';
var date = new Date();
var month = date.getMonth() + 1;

var keywords = {
'erste_hilfe':  [7,8,9],
'allergie':  [7],
'heuschnupfen':  [7,8,9,10],
'asthma':  [7,8,9,10],
'bronchitis_akut':  [7,8,9,10],
'makuladegeneration':  [7,8,9,10],
'arthrose':  [7,8],
'gelenkschmerzen':  [7,8],
'muskeln_und_baender':  [7,8,9],
'muskel_und_wadenkraempfe':  [7,8,9,10,11,12],
'rueckenschmerzen':  [8,9,10,11,12],
'diabetes':  [7,8],
'erkaeltung':  [10,11,12],
'hals':  [10,11,12],
'husten':  [10,11,12],
'schnupfen':  [10,11,12],
'betreuen_foerdern':  [7,8,9,10,11,12],
'genitalherpes':  [7,8],
'erkaeltung_kinder':  [10,11,12],
'abszess':  [7,8,9,10,11,12],
'akne':  [7,8,9,10,11,12],
'fusspilz':  [7,8,9,10,11,12],
'haarausfall':  [7,8,9,10,11,12],
'haut':  [7,8,9,10,11,12],
'kopflaeuse':  [7,8,9,10,11,12],
'lippenherpes':  [7,8],
'nagelpilz':  [7,8,9,10,11,12],
'neurodermitis':  [7,8,9,10,11,12],
'rosazea':  [7,8,9,10,11,12],
'sonnenbrand_sonnenallergie':  [7,8,9],
'trockene_haut':  [10,11,12],
'warzen':  [7,8,9],
'wundheilung':  [7,8,9],
'blasenentzuendung':  [7,8,9,10,11,12],
'inkontinenz':  [7,8],
'anaemie':  [7,8,9,10,11,12],
'bluthochdruck':  [7,8,9,10,11,12],
'eisenmangelanaemie':  [7,8,9,10,11,12],
'haemophilie':  [7,8,9,10,11,12],
'herzinfarkt':  [7,8,9,10,11,12],
'koronare_herzkrankheit':  [7,8,9,10,11,12],
'schwerhoerigkeit':  [7],
'immunsystem':  [7,8,9,10,11,12],
'itp':  [7,8,9,10,11,12],
'guertelrose':  [7,8,9],
'muedigkeit':  [7,8,9,10,11,12],
'schlafstoerungen':  [7,8,9,10,11,12],
'schlaf':  [7,8,9,10,11,12],
'burn_out':  [7,8,9,10,11,12],
'demenz':  [7,8,9,10,11,12],
'multiple_sklerose':  [7,8,9,10,11,12],
'polyneuropathie':  [7,8,9,10,11,12],
'stress':  [7,8,9,10,11,12],
'sucht':  [7,8,9,10,11,12],
'kopfschmerzen':  [7,8,9,10,11,12],
'sport':  [7,8,9],
'vitamin_d':  [7,8,9,10,11,12],
'darmentzuendung':  [7],
'durchfall':  [7,8,9,10,11,12]
    };

    var keywordFound = false;
    if(window.dm_ccc_kwl && window.dm_ccc_kwl.length) {
        for(var i = 0; i <= window.dm_ccc_kwl.length; i++) {
            if(keywords.hasOwnProperty(window.dm_ccc_kwl[i])) {
                console.log(keywords[window.dm_ccc_kwl[i]], month);
                console.log(keywords[window.dm_ccc_kwl[i]].indexOf(month));
                if(keywords[window.dm_ccc_kwl[i]].indexOf(month) > -1) {
                    console.log(keywords[window.dm_ccc_kwl[i]].indexOf(month));
                    keywordFound = true;
                    break;
                }
            }
        }
    }

    if(!keywordFound) {
        if(document.querySelector(selector)) {
            return document.querySelector(selector);
        }
        return false;
    }