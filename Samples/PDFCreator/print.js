//import { jsPDF } from "jspdf";
//import { saveAs } from 'file-saver';
import fileSaver from 'https://cdn.skypack.dev/file-saver';
import jsPDF from 'https://cdn.skypack.dev/jspdf';


'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  const unregisterHandlerFunctions = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      //fetchFilters();

      // Add button handlers for clearing filters.
      $('#print').click(test); //printPage
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });
  });

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

  function createPDF () {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://tableau.demo.sgc.corp/api/3.4/sites/a8d1fafd-0bd8-410c-bcb0-afe8cf6ad7bc/views/6eb41826-3c38-448e-8b0f-92faf29e2a43/pdf");
    xhr.setRequestHeader("X-Tableau-Auth", "TAl_JaXQRxGjqf4dTR1bPQ|PVsCgWhtB9JysdUrobhpDxb5tq6ICTLc|a8d1fafd-0bd8-410c-bcb0-afe8cf6ad7bc");

    xhr.send();
    console.log(xhr.responseType)

  }

  function reqListener() {
    console.log(this.responseText);
  }

  function test() {
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "http://www.example.org/example.txt");
    req.send();
  }

  $('#print').click(test); //printPage for testing local
  //$('#print').click(consoleOut,printPDF);
  //http://localhost:8765/Samples/PDFCreator/print.html
  
 
})();
