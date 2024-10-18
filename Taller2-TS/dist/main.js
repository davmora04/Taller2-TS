"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const createSeriesTable_1 = require("./createSeriesTable");
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("series-container");
    const detailContainer = document.getElementById("series-detail");
    function selectSerie(id) {
        console.log("Serie seleccionada con ID:", id);
        const selectedSerie = data_1.series.find((serie) => serie.id === id);
        if (selectedSerie && detailContainer) {
            console.log("Serie encontrada:", selectedSerie);
            detailContainer.innerHTML = (0, createSeriesTable_1.createSerieCard)(selectedSerie);
        }
    }
    window.selectSerie = selectSerie;
    if (container) {
        container.innerHTML = (0, createSeriesTable_1.createSeriesTable)(data_1.series);
    }
});
