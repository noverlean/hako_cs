// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';
// import { GLTFLoader } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/examples/jsm/loaders/GLTFLoader.min.js';

// Сцена
const scene = new THREE.Scene();
scene.background = null; // Светло-серый фон


// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1;

// Рендерер
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Установка прозрачного фона
document.getElementById('container').appendChild(renderer.domElement);

// // Свет
// const ambientLight = new THREE.AmbientLight(0x404040, 1); // Мягкий свет
// scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Направленный свет
directionalLight.position.set(0, 0, 5).normalize();
scene.add(directionalLight);

// const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Точечный свет
// pointLight.position.set(10, 10, 10);
// scene.add(pointLight);

// Загрузка модели
const loader = new THREE.GLTFLoader();
loader.load('../reference/3D_Models/ak47_counter_strike_2.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Анимация вращения модели
    // function animate() {
    //     requestAnimationFrame(animate);

    //     model.rotation.y += 0.01; // Вращение модели

    //     renderer.render(scene, camera);
    // }
    // animate();
    // const euler = new THREE.Euler().set(THREE.Math.degToRad(90), THREE.Math.degToRad(-90), THREE.Math.degToRad(90)); 
    // model.rotation.copy(euler);
    model.rotation.order = 'YXZ';
    model.rotation.set(THREE.Math.degToRad(43), THREE.Math.degToRad(-90), THREE.Math.degToRad(0));

    model.position.set(0.55, 0.42, 0);
    model.scale.set(2.7, 2.7, 2.7);
    
    renderer.render(scene, camera);
}, undefined, function (error) {
    console.error('An error occurred:', error);
});

// Настройка пост-обработки
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const grayscalePass = new ShaderPass(LuminosityShader);
composer.addPass(grayscalePass);

// Обновление размера рендера при изменении размера окна
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
