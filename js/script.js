/** INTERACTIVE VISUALIZATION CODE */
function showGroupbyMenu() {
    const metricVar = document.getElementById("metric-var");
    const groupbyDiv = document.getElementById("groupby-container");

    if (metricVar == "acpt-mod") 
        groupbyDiv.classList.remove("d-none");  // show div
    else
        groupbyDiv.classList.add("d-none");     // hide div
}

metricVar.addEventListener(
    "change", 
    showGroupbyMenu  // listen for metric select
); 

showGroupbyMenu();   // run on page load
