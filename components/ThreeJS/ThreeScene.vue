<template>
    <div id="canvasContainer" ref="canvasContainer"></div>
</template>

<script>
import * as THREE from 'three';

export default {
    mounted() {
        let mouseX = 0;
        let mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        let cube;

        // Criar cena
        const scene = new THREE.Scene();

        // Criar câmera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

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
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: '#6DFAFB' });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Adicionar evento de movimento do mouse
        function onMouseMove(event) {
            // Normalizar coordenadas do mouse
            mouseX = (event.clientX - windowHalfX) * 0.025;
            mouseY = (event.clientY - windowHalfY) * 0.025;
        }
        document.addEventListener('mousemove', onMouseMove, false);

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
    display: flex; /* Usa Flexbox para alinhamento */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    height: 100vh; /* Usa 100% da altura da tela */
}

canvas {
    /* Mantém o canvas no bloco para evitar margens extras e alinha de acordo com as propriedades do flex */
    display: block; 
    margin: auto; /* Garante que qualquer tamanho de canvas será centralizado */
}
</style>
