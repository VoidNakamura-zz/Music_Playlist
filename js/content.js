var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log("You just visited " + "  " + firstHref);

