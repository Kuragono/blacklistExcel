const readFile = document.querySelector('#dm_csvreader');
readFile.addEventListener('change', getData, false);

function getData() {
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    console.log('The File APIs are not fully supported in this browser.');
    return;
  }

  if (!readFile.files) {
    console.log("This browser doesn't support the `files` property of file inputs.");
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
            for (let i = 0; i <= keywordsArray.length - 1; i++) {
                smallarray.push(keywordsArray[i].split(";"));
            }
            console.log(smallarray);
            createTable(smallarray);
        }

        
    }
}

function createTable(csv) {
    var body = document.querySelector('body');
    var table = document.createElement('table');
    body.appendChild(table);
    for (let row of csv) {
        let tr = table.insertRow();
        for (let col of row) {
          let td = tr.insertCell();
          td.innerHTML = col;
        }
    }
}