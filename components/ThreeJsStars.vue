<template>
  <canvas class="hidden dark:block fixed top-0 left-1/2 -translate-x-1/2" style="z-index:-1;" id="stars"></canvas>
</template>

<script setup>
import * as THREE from "three";
onMounted(() => {
  if (window.innerWidth >= 768) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: document.getElementById("stars"),

    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(ambientLight);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.11, 24, 24)
      const material = new THREE.MeshStandardMaterial({ color: 0x374151 })
      const star = new THREE.Mesh(geometry, material)
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
      star.position.set(x, y, z)
      scene.add(star)
    }

    if (window.innerWidth >= 1280) {
      Array(500).fill().forEach(addStar)
    } else if (window.innerWidth >= 1024) {
      Array(200).fill().forEach(addStar)
    } else {
      Array(100).fill().forEach(addStar)
    }


    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      camera.position.z = t * -0.02;
      //camera.position.x = t * -0.0002;
      camera.position.y = t * -0.005;
    }
    document.body.onscroll = moveCamera;

    function animate() {
      requestAnimationFrame(animate);
      camera.position.z += 0.005;
      //camera.position.x = t * -0.0002;
      camera.position.y += 0.003;
      renderer.render(scene, camera);
    }
    animate()
  }
})

</script>

<style>

</style>