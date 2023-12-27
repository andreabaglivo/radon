import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'ae-tour-virtuale',
  templateUrl: './tour-virtuale.component.html',
  styleUrls: ['./tour-virtuale.component.scss'],
})
export class TourVirtualeComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer', { static: false }) rendererContainer!: ElementRef;

  
  private textureLoader = new THREE.TextureLoader();
  private scene = new THREE.Scene();
  private map: any;
  private material: any;
  private mesh: any;
  private geometry: any = new THREE.SphereGeometry(30, 90, 90);
  private sizes: any = {};
  private camera: any;
  private renderer: any;
  private controls: any;

  private container: any;


  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {

    this.container = this.rendererContainer.nativeElement;


    const srcMap: string = '../../assets/img/poly_haven_studio.jpeg';
  
	this.setScene(srcMap); 
    this.setSizes();
    this.setCamera();
    this.setRender();
    this.serOrbitControls();
    this.tic();

    requestAnimationFrame(() => this.tic());

    window.addEventListener('resize', this.handleResize);

    this.handleResize();
    
  }

  handleResize(): void {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    this.sizes.width = 800;
    this.sizes.height = 500;

    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);

    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(pixelRatio);
  }

  setCamera(): void {
    const fov = 60;

    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.sizes.width / this.sizes.height,
      0.1,
    );
    this.camera.position.set(0, 0, 1);
    this.camera.lookAt(new THREE.Vector3(0, 2.5, 0));
  }

  setMap(srcMap: string): void {
    this.map = this.textureLoader.load(srcMap);
    this.map.repeat.x = -1;
    this.map.wrapS = THREE.RepeatWrapping;

    this.setMaterial();
  }

  setMaterial(): void {
    this.material = new THREE.MeshBasicMaterial({
      map: this.map,
      side: THREE.BackSide,
    });
  }

  setMesh(): void {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  serOrbitControls(): void {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  setRender(): void {
    this.renderer = new THREE.WebGLRenderer({
      antialias: window.devicePixelRatio < 2,
      logarithmicDepthBuffer: true,
    });

    this.container.appendChild(this.renderer.domElement);

    this.handleResize();
  }

  setScene(srcMap: string): void {
	this.setMap(srcMap);
    this.setMesh();

    this.scene.add(this.mesh);
  }

  setSizes(): void {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  tic(): void {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => this.tic());
  }
}
