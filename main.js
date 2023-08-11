import './style.css'
// import { setupCounter } from './counter.js'
import 'aframe'
import './play-all-model-animations.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a-scene inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js">
        <a-entity id="rig" position="0.11 -1.5 4.0">
            <a-camera id="camera"></a-camera>
        </a-entity>
    
        <a-assets>
            <a-asset-item id="dragon" src="./scene.gltf"></a-asset-item>
        </a-assets>
        <a-entity gltf-model="#dragon" play-all-model-animations></a-entity>
    </a-scene>
  </div>
`

// setupCounter(document.querySelector('#counter'))
