import Config from './data/config';
import Detector from './utils/detector';
import Main from './app/main';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

import gsap from 'gsap'

// Styles
import './../css/app.scss';

// Check environment and set the Config helper
if(__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! -----');

  Config.isDev = true;
}

function init() {
  // Check for webGL capabilities
  if(!Detector.webgl) {
    Detector.addGetWebGLMessage();
  } else {
    // Old
    // const container = document.getElementById('webgl');
    // new Main(container);


  }
}

init();
