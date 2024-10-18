"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeriesTable = createSeriesTable;
exports.createSerieCard = createSerieCard;
function createSeriesTable(series) {
    const tableHeader = `
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Channel</th>
          <th>Seasons</th>
        </tr>
      </thead>
      <tbody>
  `;
    const tableBody = series
        .map((serie) => `
        <tr onclick="selectSerie(${serie.id})">
          <td>${serie.id}</td>
          <td>${serie.name}</td>
          <td>${serie.channel}</td>
          <td>${serie.seasons}</td>
        </tr>
      `)
        .join("");
    const averageSeasons = (series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length).toFixed(1);
    const tableFooter = `</tbody></table>
    <p>Seasons average: ${averageSeasons}</p>`;
    return `${tableHeader}${tableBody}${tableFooter}`;
}
function createSerieCard(serie) {
    return `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" class="btn btn-primary" target="_blank">More info</a>
      </div>
    </div>
  `;
}
