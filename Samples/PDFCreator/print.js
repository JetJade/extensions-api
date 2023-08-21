'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  const unregisterHandlerFunctions = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      fetchFilters();

      // Add button handlers for clearing filters.
      $('#print').click(printPage); //printPage
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });
  });

  // This function removes all filters from a dashboard.
  function printPage () {
    // While performing async task, show loading message to user.
    var doc = new jspdf()

    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
  }

  // This helper updates the UI depending on whether or not there are filters
  // that exist in the dashboard.  Accepts a boolean.
 
})();
