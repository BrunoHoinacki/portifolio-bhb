<template>
    <div id="canvasContainer" ref="canvasContainer"></div>
</template>

<script>
import * as THREE from 'three';

export default {
    mounted() {
        let mouseX = 0;
        let mouseY = 0;
        let windowHalfX = window.innerWidth;
        let windowHalfY = window.innerHeight;
        let cube;
        let isTouching = false;

        // Criar cena
        const scene = new THREE.Scene();

        // Criar câmera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, -1, 5);

        // Criar renderizador
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff);
        this.$refs.canvasContainer.appendChild(renderer.domElement);

        // Atualizar renderizador com o redimensionamento da janela
        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', onWindowResize, false);

        // Adicionar cubo à cena
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: '#6DFAFB' });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Adicionar evento de movimento do mouse
        function onMouseMove(event) {
            if (!isTouching) {
                mouseX = (event.clientX - windowHalfX) * 0.010;
                mouseY = (event.clientY - windowHalfY) * 0.010;
            }
        }
        document.addEventListener('mousemove', onMouseMove, false);

        // Adicionar eventos de toque
        function onTouchStart(event) {
            event.preventDefault();
            isTouching = true;
        }

        function onTouchMove(event) {
            if (event.touches.length == 1 && isTouching) {
                event.preventDefault();
                mouseX = (event.touches[0].clientX - windowHalfX) * 0.020;
                mouseY = (event.touches[0].clientY - windowHalfY) * 0.020;
            }
        }

        function onTouchEnd() {
            isTouching = false;
        }

        this.$refs.canvasContainer.addEventListener('touchstart', onTouchStart, { passive: false });
        this.$refs.canvasContainer.addEventListener('touchmove', onTouchMove, { passive: false });
        this.$refs.canvasContainer.addEventListener('touchend', onTouchEnd);

        // Animação de rotação com interação do mouse
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += (mouseY - cube.rotation.x) * 0.025;
            cube.rotation.y += (mouseX - cube.rotation.y) * 0.025;
            renderer.render(scene, camera);
        }
        animate();
    }
};
</script>


<style scoped>
#canvasContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;
    transform: translateY(-2%); 
    top: 50%;
    @media screen and (max-width: 768px) {
        transform: translateY(-12%);
    }
}

canvas {
    display: block;
    margin: auto;
}
</style>
