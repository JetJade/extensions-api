// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  $(document).ready(function () {
    // The only difference between an extension in a dashboard and an extension
    // running in a popup is that the popup extension must use the method
    // initializeDialogAsync instead of initializeAsync for initialization.
    // This has no affect on the development of the extension but is used internally.
    tableau.extensions.initializeDialogAsync().then(function (openPayload) {
      $('#closeButton').click(closeDialog);

      var settings = tableau.extensions.settings.getAll();

      $('#pageType').val(settings.pageType ?? 'A4');
      $('#pageOrientation').val(settings.pageOrientation ?? 'Portrait');
      $('#footerLeftText').val(settings.footerLeftText ?? "{date} {time}");
      $('#footerCenterText').val(settings.footerCenterText ?? "{page} / {total-pages}");
      $('#footerRightText').val(settings.footerRightText ?? "{user-fullname} ({user})");
      $('#overlayPdfUrl').val(settings.overlayPdfUrl);
      $('#dashboardUrl').val(settings.dashboardUrl);
      $('#worksheetName').val(settings.worksheetName);
    });
  });

  /**
   * Stores the selected datasource IDs in the extension settings,
   * closes the dialog, and sends a payload back to the parent.
   */
  function closeDialog () {
    tableau.extensions.settings.set('pageType', $('#pageType').val());
    tableau.extensions.settings.set('pageOrientation', $('#pageOrientation').val());
    tableau.extensions.settings.set('footerLeftText', $('#footerLeftText').val());
    tableau.extensions.settings.set('footerCenterText', $('#footerCenterText').val());
    tableau.extensions.settings.set('footerRightText', $('#footerRightText').val());    
    tableau.extensions.settings.set('overlayPdfUrl', $('#overlayPdfUrl').val());
    tableau.extensions.settings.set('dashboardUrl', $('#dashboardUrl').val());
    tableau.extensions.settings.set('worksheetName', $('#worksheetName').val());

    tableau.extensions.settings.saveAsync().then((newSavedSettings) => {
      tableau.extensions.ui.closeDialog();
    });
  }
})();
