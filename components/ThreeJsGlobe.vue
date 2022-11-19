<template>
  <div class="flex items-center justify-center">
    <canvas id="globe" class="max-w-full max-h-full"></canvas>
  </div>
</template>

<script setup>
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

onMounted(() => {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.getElementById("globe"),

  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(300, 300);
  camera.position.setZ(30);

  const moonTexture = new THREE.TextureLoader().load('/img/moon.jpg');
  //const normalTexture = new THREE.TextureLoader().load('/img/normal.jpg');
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(17, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      // normalMap: normalTexture
    })
  )
  scene.add(moon)

  //const ambientLight = new THREE.AmbientLight(0xffffff);
  const pointLight = new THREE.PointLight(0x0ea5e9)
  pointLight.position.set(50, 50, 50)
  scene.add(pointLight);

  const pointLight2 = new THREE.PointLight(0xffa5e9)
  pointLight2.position.set(-50, -50, -50)
  scene.add(pointLight2);
  
  const pointLight3 = new THREE.PointLight(0xffa5e9)
  pointLight3.position.set(50, -50, 50)
  scene.add(pointLight3);

  const pointLight4 = new THREE.PointLight(0x0ea5e9)
  pointLight4.position.set(-50, 50, 50)
  scene.add(pointLight4);

  const pointLight5 = new THREE.PointLight(0xffa5e9)
  pointLight5.position.set(50, 50, -50)
  scene.add(pointLight5);

  const controls = new OrbitControls(camera, document.getElementById("globe"));
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  controls.enableZoom = false;
  controls.enableDamping = true;

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate()
})
</script>

<style>

</style>