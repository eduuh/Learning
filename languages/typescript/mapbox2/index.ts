var MapboxDirections = require("@mapbox/mapbox-gl-directions");
var kiambu = require("./Kiambu_county");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVubnl0cm92YXRvIiwiYSI6ImNrZDcwdTVwbTE4amEyem8yZWdkNHN3ZmoifQ.r3Llqtnwfqqju2zfzE-fvA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [36.833189, -1.173603],
  zoom: 15,
  maxZoom: 15,
  pitch: 0,
  bearing: 21,
  antialias: true,
});

var rootElement = document.createElement("div");
rootElement.classList.add("route-marker");
var positionMarker = new mapboxgl.Marker({ element: rootElement });

const geolocateControl = new mapboxgl.GeolocateControl({
  showAccuracyCircle: false,
});

map.addControl(geolocateControl);

geolocateControl.on("geolocate", function ({ coords }) {
  console.log(e);
  let { latitude, longitude } = e.coords;
  console.log(latitude, longitude);
});

// Direction control
var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving",
});

map.addControl(directions, "top-left");

map.on("load", function () {
  map.addSource("kiambu", {
    type: "geojson",
    data: kiambu,
  });

  map.addLayer({
    id: "kiambu",
    type: "fill",
    source: "kiambu",
    layout: {},
    paint: {
      "fill-color": "#088",
      "fill-opacity": 0.8,
    },
  });
});

// todo is load shape files for the tourist site

console.log(rootElement);
