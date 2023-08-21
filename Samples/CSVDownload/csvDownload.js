// Event-Listener für den Button
document.getElementById("exportButton").addEventListener("click", async () => {
    try {
        const dashboard = tableau.extensions.dashboardContent.dashboard;
        const activeSheet = dashboard.worksheets[0];

        const dataTable = await activeSheet.getSummaryDataAsync();

        const csvData = convertToCSV(dataTable);

        downloadCSV(csvData, "dashboard_data.csv");
    } catch (error) {
        console.error("Fehler beim Exportieren der Daten:", error);
    }
});

function convertToCSV(dataTable) {
    const data = dataTable.data;
    const columns = dataTable.columns.map(column => column.fieldName);

    const csvHeader = columns.join(",") + "\n";
    const csvRows = data.map(row => columns.map(column => row[column.fieldName].formattedValue).join(","));
    const csvData = csvHeader + csvRows.join("\n");

    return csvData;
}

function downloadCSV(csvContent, fileName) {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
