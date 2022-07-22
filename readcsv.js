const readFile = document.querySelector('#dm_csvreader');
const SELECTOR1 = `#dm_conative_artikel`;
const URL1 = "https://cc.conative.de/#/adslots/1493/positioning/3155";
const SELECTOR2 = `#dm_conative_artikel_mobile`;
const URL2 = "https://cc.conative.de/#/adslots/1493/positioning/3156";
const SELECTOR3 = `#dm_conative_beipack`;
const URL3 = "https://cc.conative.de/#/adslots/1493/positioning/3157";
const SELECTOR4 = `#dm_conative_beipack_mobile`;
const URL4 = "https://cc.conative.de/#/adslots/1493/positioning/3158";

readFile.addEventListener('change', getData, false);            //listens to new data being chosen in the formfile

function getData() {
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    console.log('The File APIs are not fully supported in this browser.');
    return;
  }

  if (!readFile.files) {
    console.log("This browser doesn't support the chosen file.");
  } else if (!readFile.files[0]) {
    console.log("No file selected.");
  } else {
        let file = readFile.files[0];
        let reader = new FileReader();
        reader.onload = readData;                            
        reader.readAsText(file);
        
        function readData() {                                       //reads the data
            let keywordsArray = reader.result.split('\r\n');        //splits the data into more human readable data
            let tmpArray = [];                                      //creates a temporary array to work on
            for (let i = 0; i < keywordsArray.length; i++) {
                tmpArray.push(keywordsArray[i].split(";"));
            }
            globalThis.data = createObject(tmpArray);
            createTable(data);
        }
    }
}

function createObject(data) {                                        //transforms data into an Object for better accessability
    let keyword = '';
    let keywordlist = {};
    for (let i = 1; i < data.length; i++) {
        indexList = [];
        for (let j = 0; j < data[i].length; j++) {
            if (keyword != data[i][j]) {
                keyword = data[i][j];
                if (keyword != '') {
                    indexList.push(j+1);
                }
            } else {
                if (keyword != '') {
                    indexList.push(j+1);
                }
            }
            keywordlist[keyword] = indexList;
        }
    }
    delete keywordlist[""];                                            //deletes the "" key/value pair
    return (keywordlist);
}


function createTable(data) {
    let body = document.querySelector('body');
    let table = document.createElement('table');
    table.cellSpacing = 0;
    body.appendChild(table);
    for (const [key, value] of Object.entries(data)) { 
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0); 
        let cell2 = row.insertCell(1);
        cell1.textContent = key;
        cell2.textContent = value;
    }
}

function start(data, selector, url) {
    console.log(data);
    console.log(selector);
    function objToString(obj) {                                             //transform data into a string
        let str = "";
      
        for (const [p, val] of Object.entries(obj)) {
          str += `'${p}': [${val}],\n\t`;
        }

        return str;
    }

    let str = objToString(data);
    var jsSelectorText = `
    var selector = ${selector};
    var date = new Date();
    var month = date.getMonth() + 1;
    var keywords = {${str}};
    var keywordFound = false;
  
    if (window.dm_ccc_kwl && window.dm_ccc_kwl.length) {
        for (var i = 0; i <= window.dm_ccc_kwl.length; i++) {
            if (keywords.hasOwnProperty(window.dm_ccc_kwl[i])) {
                console.log(keywords[window.dm_ccc_kwl[i]], month);
                console.log(keywords[window.dm_ccc_kwl[i]].indexOf(month));
                if (keywords[window.dm_ccc_kwl[i]].indexOf(month) > -1) {
                    console.log(keywords[window.dm_ccc_kwl[i]].indexOf(month)); 
                    keywordFound = true;
                    break;
                }
            }
        }
    }
  
    if (!keywordFound) {
        if (document.querySelector(selector)) {
            return document.querySelector(selector);
        }
        return false;
    }`;

    window.open(url, '_blank').focus();

    //var jsSelector = document.querySelector("#adslot_admin_js_selector");
  
    //jsSelector.select();
  
    //document.execCommand("insertText", false, jsSelectorText);
}



document.getElementById('artikel').addEventListener('click', () => {
    start(data, SELECTOR1, URL1);
});
document.getElementById('artikel_mobile').addEventListener('click', () => {
    start(data, SELECTOR2, URL2);
});
document.getElementById('beipack').addEventListener('click', () => {
    start(data, SELECTOR3, URL3);
});
document.getElementById('beipack_mobile').addEventListener('click', () => {
    start(data, SELECTOR4, URL4);
});
