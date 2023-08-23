//import { jsPDF } from "jspdf";
//import { saveAs } from 'file-saver';
//import fileSaver from 'https://cdn.skypack.dev/file-saver';
//import jsPDF from 'https://cdn.skypack.dev/jspdf';


'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  const unregisterHandlerFunctions = [];

  // $(document).ready(function () {
  //   tableau.extensions.initializeAsync().then(function () {
  //     //fetchFilters();

  //     // Add button handlers for clearing filters.
  //     $('#print').click(test); //printPage
  //   }, function (err) {
  //     // Something went wrong in initialization.
  //     console.log('Error while Initializing: ' + err.toString());
  //   });
  // });

  function printPage () {
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    fileSaver.saveAs(blob, "hello world.txt");
  }

  function consoleOut () {
    console.log("Das sieht gut aus");
  }

  function printPDF () {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  }

  function tableauLogin () {
    // WARNING: For POST requests, body is set to null by browsers.
    var data = "<tsRequest>\r\n	<credentials name=\"kamipat\" password=\"P@ssw0rd\">\r\n		<site contentUrl=\"bnt-extension-poc\" />\r\n	</credentials>\r\n</tsRequest>";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "http://tableau.demo.sgc.corp/api/3.19/auth/signin");
    xhr.setRequestHeader("Content-Type", "text/plain");
    console.log('kurz vom send')
    console.log(xhr.responseXML)
    xhr.send(data);


  }


  function createPDF () {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", "http://tableau.demo.sgc.corp/api/3.19/sites/a8d1fafd-0bd8-410c-bcb0-afe8cf6ad7bc/projects");
    //xhr.open("GET", "http://localhost:8765/Samples/PDFCreator/result.pdf");
    xhr.setRequestHeader("X-Tableau-Auth", "OXXDJbheQpCHMmyff3MF0Q|se48nNI61hGcnNOfWBjcoEXcepqUuH55|a8d1fafd-0bd8-410c-bcb0-afe8cf6ad7bc");
    //xhr.timeout=10000;
    xhr.responseType = 'blob';
    xhr.onprogress = e => console.log(`${parseInt((e.loaded/e.total)*100)}%`)
    //xhr.onload = e => save(xhr.response)

    xhr.onload = (e) => {
      // Request finished. Do processing here.
      console.log("Das sieht gut aus - onload");
      save(xhr.response)
    };

    xhr.ontimeout = (e) => {
      // XMLHttpRequest timed out. Do something here.
      console.log("Das sieht gut aus - Timeout");
    };
    console.log("Das sieht gut aus - send fehler");
    xhr.send();
    //console.log(xhr.responseType)

  }

//  ------------------------------------------------
// hier unten sind die Save sachen

  function test() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:8765/Samples/PDFCreator/result.pdf");
    req.responseType = 'blob';
    req.onprogress = e => console.log(`${parseInt((e.loaded/e.total)*100)}%`)
    req.onload = e => save(req.response)
    req.send();
  }

  function save(blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.pdf'; //filename
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    //alert('your file has downloaded!');
}
//  ------------------------------------------------

function renePrint (){
  var apiUrl = 'http://tableau.demo.sgc.corp/api/3.19/auth/signin'
  var params = "<tsRequest><credentials name='kamipat' password='P@ssw0rd' ><site contentUrl='bnt-extension-poc' /></credentials></tsRequest>";
  $.post({
    url: apiUrl,
    xhrFields: {
      withCredentials: true,
    },
    xhr: function (params) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 2) {
                if (xhr.status == 200) {
                    xhr.responseType = "blob";
                } else {
                    xhr.responseType = "text";
                }
            }
        };
        return xhr;
    },
  })
    // .done(function (data, textStatus, jqXHR) {
    //   saveAs(data, `${dashboard.name}_${moment().format('YYYY-MM-DD_HH-mm-ss')}.pdf`);
    // })
    // .fail(function (xhr) {
    //   console.error(xhr);

}

function jprint () {
  var settings = {
    "url": "http://tableau.demo.sgc.corp/api/3.19/auth/signin",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "<tsRequest>\r\n\t<credentials name=\"kamipat\" password=\"P@ssw0rd\">\r\n\t\t<site contentUrl=\"bnt-extension-poc\" />\r\n\t</credentials>\r\n</tsRequest>",
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

  $('#print').click(jprint); //printPage for testing local
  //$('#print').click(consoleOut,printPDF);
  //$('#print').click(consoleOut);
  //http://10.120.1.15:8765/Samples/PDFCreator/print.html
  //http://127.0.0.1:8765/Samples/PDFCreator/pingtest.html
  //http://127.0.0.1:8765/Samples/PDFCreator/print.html
  
 
})();
