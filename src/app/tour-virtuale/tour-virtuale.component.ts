import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
// import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import * as dat from 'lil-gui'

@Component({
  selector: 'ae-tour-virtuale',
  templateUrl: './tour-virtuale.component.html',
  styleUrls: ['./tour-virtuale.component.scss'],
})
export class TourVirtualeComponent implements OnInit {
  ngOnInit(): void {
    const textureLoader = new THREE.TextureLoader();
    const scene = new THREE.Scene();
    const srcMap: string = '../../assets/img/poly_haven_studio.jpeg';
    const map = textureLoader.load(srcMap);
    map.repeat.x = -1;
    map.wrapS = THREE.RepeatWrapping;

    const material = new THREE.MeshBasicMaterial({
      map: map,
      side: THREE.BackSide,
    });

    const geometry = new THREE.SphereGeometry(30, 90, 90);

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /**
     * render sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    /**
     * Camera
     */
    const fov = 60;
    const camera = new THREE.PerspectiveCamera(
      fov,
      sizes.width / sizes.height,
      0.1
    );
    camera.position.set(0, 0, 1);
    camera.lookAt(new THREE.Vector3(0, 2.5, 0));

    /**
     * renderer
     */
    const renderer = new THREE.WebGLRenderer({
      antialias: window.devicePixelRatio < 2,
      logarithmicDepthBuffer: true,
    });
    document.body.appendChild(renderer.domElement);
    handleResize();

    /**
     * OrbitControls
     */
    const controls = new OrbitControls(camera, renderer.domElement);

    /**
     * Three js Clock
     */
    // const clock = new THREE.Clock()

    /**
     * frame loop
     */
    function tic() {
      /**
       * tempo trascorso dal frame precedente
       */
      // const deltaTime = clock.getDelta()
      /**
       * tempo totale trascorso dall'inizio
       */
      // const time = clock.getElapsedTime()

      controls.update();

      renderer.render(scene, camera);

      requestAnimationFrame(tic);
    }

    requestAnimationFrame(tic);

    window.addEventListener('resize', handleResize);

    function handleResize() {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);

      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      renderer.setPixelRatio(pixelRatio);
    }
  }
}
