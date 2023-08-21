//import { jsPDF } from "jspdf";
//import { saveAs } from 'file-saver';
import fileSaver from 'https://cdn.skypack.dev/file-saver';


'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  const unregisterHandlerFunctions = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      //fetchFilters();

      // Add button handlers for clearing filters.
      $('#print').click(printPage); //printPage
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

  $('#print').click(consoleOut,printPage);
  
 
})();
