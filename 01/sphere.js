import * as THREE from './three.module.min.js'

export class Sphere{
    constructor(root){
        this.root = root
        // настройка геометрии - установка радиуса и кол-ва сегментов
        const geometry = new THREE.SphereGeometry(200, 12, 12);
        // настройка материала - установка цвета
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 , wireframe: true}); 
        // настраиваем меш, который будет отображать куб
        this.sphere = new THREE.Mesh(geometry, material);
        this.root.addObjectToScene(this.sphere);
    }
}