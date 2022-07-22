var keywords = {
    erste_hilfe: [7, 8, 9],
  };
  
  function objToString(obj) {
    let str = "";
  
    for (const [p, val] of Object.entries(obj)) {
      str += `'${p}': [${val}],\n\t`;
    }
  
    return str;
  }
  
  var selector1 = `#dm_conative_artikel`;
  var selector2 = `#dm_conative_artikel_mobile`;
  var selector3 = `#dm_conative_beipack`;
  var selector4 = `#dm_conative_beipack_mobile`;
  
  // if () {
  //     selector == selector1;
  // }
  
  var str = objToString(keywords);
  
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
  
  // if (keywords.sport.indexOf(10) == -1) {
  //   keywords.sport.push(10);
  // }
  
  var jsSelector = document.querySelector("#adslot_admin_js_selector");
  
  // var cssSelector = document.querySelector("#adSlotForm_query_selector");
  
  // cssSelector.select();
  
  // selector = document.execCommand("copy");
  
  jsSelector.select();
  
  // document.execCommand('copy');
  
  // jsSelector.blur();
  
  document.execCommand("insertText", false, jsSelectorText);
  