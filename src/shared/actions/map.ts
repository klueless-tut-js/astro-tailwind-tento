export function setMap(
  mapElement: HTMLElement,
  {
    latitude,
    longitude,
    zoom,
    markerMarkup = '',
  }: { latitude: number; longitude: number; zoom: number; markerMarkup?: string },
) {
  (async () => {
    const {
      icon: leafletIcon,
      map: leafletMap,
      marker: leafletMarker,
      tileLayer,
    } = await import('leaflet');

    const map = leafletMap(mapElement).setView([latitude, longitude], zoom);
    tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}',
      {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 19,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia2x1ZWxlc3MiLCJhIjoiY2w3Y3I0Y2NyMHV5dDN2cGFlZWJrbGJsciJ9.qKjFhj3AQbMOHDD0FbLGSQ',
        detectRetina: true,
      },
    ).addTo(map);

    if (markerMarkup !== '') {
      leafletMarker([latitude, longitude]).bindPopup(markerMarkup).addTo(map);
    } else {
      leafletMarker([latitude, longitude]).addTo(map);
    }
  })();
}