// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  let unregisterHandlerFunctions = [];
  let dashboard;
  let dashboardfilters = [];
  let dashboardparameters = [];
  let isDesktop;
  let isDisabled;

  // Use the jQuery document ready signal to know when everything has been initialized
  $(document).ready(function () {

    tableau.extensions.initializeAsync({ configure: configure }).then(function () {
      // To get further infos, first get the dashboard.
      dashboard = tableau.extensions.dashboardContent.dashboard;

      isDesktop = tableau.extensions.environment.context == "desktop";
      isDisabled = dashboard.worksheets.length === 0;

      console.log(tableau.extensions.environment);
      console.log("isDesktop:", isDesktop)
      console.log("isDisabled:", isDisabled)

      fetchFilters();
      fetchParameters();
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });


    $('#downloadButton').click(async () => {
      const settings = tableau.extensions.settings.getAll();

      let dashboardUrl = settings.dashboardUrl ? settings.dashboardUrl :
        (window.location.href != document.referrer ? document.referrer?.replace('/authoring/', '/views/') : null);

      if (!dashboardUrl)
      {
        alert('Dashboard url could not be determined, please configure in settings dialog');
        return;
      }
      console.log("joooo "+ dashboardUrl)
      var url = new URL(dashboardUrl);

      // let apiUrl = window.location.origin + '/api/download-extension/download' + 
      //   '?dashboardUrl=' + encodeURI(url.origin + url.pathname) +
      //   '&worksheetName=' + encodeURI(settings.worksheetName ? settings.worksheetName : dashboard.worksheets[0].name) +
      //   '&pageType=' + encodeURI(settings.pageType) +
      //   '&pageOrientation=' + encodeURI(settings.pageOrientation);
      let apiUrl = 'http://tableau.demo.sgc.corp/api/3.4/sites/a8d1fafd-0bd8-410c-bcb0-afe8cf6ad7bc/views/6eb41826-3c38-448e-8b0f-92faf29e2a43/pdf'
        // encodeURI(url.origin + url.pathname) +
        // '&worksheetName=' + encodeURI(settings.worksheetName ? settings.worksheetName : dashboard.worksheets[0].name) +
        // '&pageType=' + encodeURI(settings.pageType) +
        // '&pageOrientation=' + encodeURI(settings.pageOrientation);

      if (settings.footerLeftText) apiUrl += '&footerLeftText=' + encodeURI(settings.footerLeftText);
      if (settings.footerCenterText) apiUrl += '&footerCenterText=' + encodeURI(settings.footerCenterText);
      if (settings.footerRightText) apiUrl += '&footerRightText=' + encodeURI(settings.footerRightText);
      if (settings.overlayPdfUrl) apiUrl += '&overlayPdfUrl=' + encodeURI(settings.overlayPdfUrl);

      console.log("joooo "+ apiUrl)

      dashboardfilters.forEach(function (filter) {
        let filterValues = getFilterValues(filter);
        if (filterValues !== null)
        apiUrl += '&' + encodeURI(filter.fieldName) + '=' + encodeURI(filterValues);
      });
      // dashboardparameters.forEach(function (parameter) {
      //   if (parameter.currentValue && parameter.currentValue.value)
      //     apiUrl += '&' + encodeURI(parameter.name) + '=' + encodeURI(parameter.currentValue.value);
      // });

      if (apiUrl.length >= 2000)
      {
        alert('Sorry, you have too many filter values selected. Please adapt filter selection and retry.');
        return;
      }

      $('#downloadButton').prop('disabled', true);
      $('.spinner-border').removeClass('d-none');

      $.get({
        url: apiUrl,
        xhrFields: {
          withCredentials: true,
        },
        xhr: function () {
            var xhr = new XMLHttpRequest();
            xhr.setRequestHeader("X-Tableau-Auth", "TAl_JaXQRxGjqf4dTR1bPQ|PVsCgWhtB9JysdUrobhpDxb5tq6ICTLc|a8d1fafd-0bd8-410c-bcb0-afe8cf6ad7bc");
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
        .done(function (data, textStatus, jqXHR) {
          saveAs(data, `${dashboard.name}_${moment().format('YYYY-MM-DD_HH-mm-ss')}.pdf`);
        })
        .fail(function (xhr) {
          console.error(xhr);

          alert("Sorry, there was an error while processing your request. Please try again or contact support.\r\n" +
            "\r\n" +
            "Request Url: " + apiUrl + "\r\n" +
            "\r\n" +
            "Response: " + xhr.status + " - " + xhr.statusText + (xhr.responseText ? ' - ' + xhr.responseText : ''));
        })
        .always(function () {
          $('#downloadButton').prop('disabled', false);
          $('.spinner-border').addClass('d-none');
        });
    });
  });

  function configure() {
    tableau.extensions.ui
      .displayDialogAsync("DownloadDialog.html", null, { height: 550, width: 700 })
      .then((closePayload) => {
        // The promise is resolved when the dialog has been expectedly closed, meaning that
        // the popup extension has called tableau.extensions.ui.closeDialog.
        // The close payload is returned from the popup extension via the closeDialog method.
      })
      .catch((error) => {
        // One expected error condition is when the popup is closed by the user (meaning the user
        // clicks the 'X' in the top right of the dialog).  This can be checked for like so:
        switch (error.errorCode) {
          case tableau.ErrorCodes.DialogClosedByUser:
            console.log('Dialog was closed by user');
            break;
          default:
            console.error(error.message);
        }
      });
  }

  // This returns a string representation of the values a filter is set to.
  // Depending on the type of filter, this string will take a different form.
  function getFilterValues(filter) {
    let filterValues = '';

    switch (filter.filterType) {
      case 'categorical':
        filter.appliedValues.forEach(function (value) {
          filterValues += value.formattedValue + ',';
        });
        break;
      case 'range':
      case 'relative-date':
      default:
    }

    // Pass null, when all values are selected
    if (filterValues === '' && filter.isAllSelected === true)
      return null;
    else
      return filterValues.slice(0, -1); // Cut off the trailing ","
  }

  function fetchFilters() {
    // While performing async task, show loading message to user.
    $('#downloadButton').prop('disabled', true);

    // Whenever we restore the filters table, remove all save handling functions,
    // since we add them back later in this function.
    unregisterHandlerFunctions.forEach(function (unregisterHandlerFunction) {
      unregisterHandlerFunction();
    });

    // Since filter info is attached to the worksheet, we will perform
    // one async call per worksheet to get every filter used in this
    // dashboard.  This demonstrates the use of Promise.all to combine
    // promises together and wait for each of them to resolve.
    let filterFetchPromises = [];

    dashboardfilters = [];

    // Then loop through each worksheet and get its filters, save promise for later.
    dashboard.worksheets.forEach(function (worksheet) {
      filterFetchPromises.push(worksheet.getFiltersAsync());

      // Add filter event to each worksheet.  AddEventListener returns a function that will
      // remove the event listener when called.
      let unregisterHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.FilterChanged, filterChangedHandler);
      unregisterHandlerFunctions.push(unregisterHandlerFunction);
    });

    // Now, we call every filter fetch promise, and wait for all the results
    // to finish before displaying the results to the user.
    Promise.all(filterFetchPromises).then(function (fetchResults) {
      fetchResults.forEach(function (filtersForWorksheet) {
        filtersForWorksheet.forEach(function (filter) {
          dashboardfilters.push(filter);
        });
      });

      $('#downloadButton').prop('disabled', isDisabled);
    });
  }

  // This is a handling function that is called anytime a filter is changed in Tableau.
  function filterChangedHandler(filterEvent) {
    // Just reconstruct the filters table whenever a filter changes.
    // This could be optimized to add/remove only the different filters.
    fetchFilters();
  }

  function fetchParameters() {
    tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(function (parameters) {
      dashboardparameters = [];

      parameters.forEach(function (p) {
        p.addEventListener(tableau.TableauEventType.ParameterChanged, onParameterChange);
        dashboardparameters.push(p);
      });
    });
  }

  // When the parameter is changed, we recreate the row with the updated values.  This keeps the code
  // clean, and emulates the approach that something like React does where it "rerenders" the UI with
  // the updated data.
  //
  // To avoid multiple layout processing in the browser, we build the new row unattached to the DOM,
  // and then attach it at the very end.  This helps avoid jank.
  function onParameterChange(parameterChangeEvent) {
    parameterChangeEvent.getParameterAsync().then(function (param) {
      let oldIndex = dashboardparameters.findIndex(function (p) { return p.id === param.id });
      dashboardparameters.splice(oldIndex, 1, param);
    });
  }
})();
