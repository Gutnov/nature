import geojson2h3 from 'geojson2h3'
import geoData from './server.json'
import L from 'leaflet'

const paintMap = () => {
  const map = L.map('map').setView([54.4297765243137, 40.81586297018568], 6)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3
  }).addTo(map)
  return map
}

const addPoligons = (map) => {
  geoData.geo.forEach((item) => {
    const style = () => {
      return { color: '#000000', fillColor: item.color, fillOpacity: 0.3, weight: 0.3 }
    }
    const hexagone = L.geoJSON(null, {
      style
    })
    const hexagoneVertices = geojson2h3.h3ToFeature(item.h3)

    hexagone.addData(hexagoneVertices).addTo(map)
  })
}

export const initMap = () => {
  const map = paintMap()
  addPoligons(map)
}
