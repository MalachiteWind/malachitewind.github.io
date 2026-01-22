const lastUpdated = new Date(document.lastModified);
document.getElementById("last-updated").textContent =
  lastUpdated.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
