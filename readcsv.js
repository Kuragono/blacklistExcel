const readFile = document.querySelector('#dm_csvreader');
readFile.addEventListener('change', getData, false);

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
        reader.onload = readText;
        reader.readAsText(file);
        
        function readText() {
            let keywordsArray = reader.result.split('\r\n');
            let smallarray = [];
            for (let i = 0; i < keywordsArray.length; i++) {
                smallarray.push(keywordsArray[i].split(";"));
            }
            createTable(smallarray);
            createCounting(smallarray);
        }

        
    }
}

function createTable(csv) {
    var body = document.querySelector('body');
    var table = document.createElement('table');
    table.cellSpacing = 0;
    body.appendChild(table);
    for (let row of csv) {
        let th = table.insertRow();
        for (let col of row) {
          let td = th.insertCell();
          td.innerHTML = col;
        }
    }
}

function createCounting(csv) {
    let keyword = '';
    let keywordlist = {};
    let bigkeywordlist = {};
    for (let i = 1; i < csv.length; i++) {
        indexList = [];
        for (let j = 0; j < csv[i].length; j++) {
            if (keyword != csv[i][j]) {
                keyword = csv[i][j];
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
    console.log(keywordlist);
}