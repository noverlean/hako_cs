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
const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Направленный свет
directionalLight.position.set(-5, -2, 1).normalize();
scene.add(directionalLight);

document.addEventListener('mousemove', (e) => {
    let xPos = (e.clientX - window.innerWidth / 2) / window.innerWidth / 2;
    let yPos = (e.clientY - window.innerHeight / 2) / window.innerWidth / 2;

    directionalLight.position.set(5 * xPos, -5 * yPos, 0.4);
});

// const pointLight = new THREE.PointLight(0xffffff, 2, 100); // Точечный свет
// // pointLight.position.set(-2, -2, 5);
// pointLight.position.set(0, 0, 2);
// scene.add(pointLight);

const loader = new THREE.GLTFLoader();
loader.load('../reference/3D_Models/ak47_counter_strike_2.glb', function (gltf) {
    const model = gltf.scene;

    // Устанавливаем материал модели с использованием MeshStandardMaterial
    // model.traverse((child) => {
    //     if (child.isMesh) {
    //         const originalPosition = child.position.clone();
    //         const originalRotation = child.rotation.clone();
            
    //         child.material = new THREE.MeshStandardMaterial({
    //             color: 0x555555, // Основной цвет объекта (можете изменить)
    //             roughness: 0.5, // Шероховатость (значение по умолчанию)
    //             metalness: 0.5, // Металличность (значение по умолчанию)
    //             emissive: 0x000000, // Эмиссия (черный цвет)
    //         });

    //         child.position.copy(originalPosition);
    //         child.rotation.copy(originalRotation);
    //     }
    // });

    scene.add(model);

    model.rotation.order = 'YXZ';
    model.rotation.set(THREE.Math.degToRad(43), THREE.Math.degToRad(-90), THREE.Math.degToRad(-10));

    model.position.set(0.55, 0.42, 0);
    model.scale.set(2.7, 2.7, 2.7);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        gsap.to(model.position, { duration: 0, y: scrollY * -0.001 });
    });

    // animate();
}, undefined, function (error) {
    console.error('An error occurred:', error);
});

// Обновление размера рендера при изменении размера окна
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();