import { series } from "./data";
import { createSeriesTable, createSerieCard } from "./createSeriesTable";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("series-container");
  const detailContainer = document.getElementById("series-detail");

  function selectSerie(id: number) {
    console.log("Serie seleccionada con ID:", id);
    const selectedSerie = series.find((serie) => serie.id === id);
    if (selectedSerie && detailContainer) {
      console.log("Serie encontrada:", selectedSerie);
      detailContainer.innerHTML = createSerieCard(selectedSerie);
    }
  }
  

  (window as any).selectSerie = selectSerie;

  if (container) {
    container.innerHTML = createSeriesTable(series);
  }
});
