import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    // center: [37.41, 8.82], // African coast
    // center: fromLonLat([-110.0, 40.0]), // Utah
    center: fromLonLat([-96.37, 30.67]), // Bryan
    zoom: 10
  })
});
