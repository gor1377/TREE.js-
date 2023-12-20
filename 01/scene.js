import * as THREE from './three.module.min.js'


export class Scene{
    constructor(){  
        this.createRenderer();      
        this.createCamera();
        this.createScene();
        this.appendToDOM();        
    }

    createRenderer(){
        // создаём обьект отрисовщик(это холст для нашей сцены)
        this.renderer = new THREE.WebGLRenderer();
        // устанвливаем размер равынй ширине и высте окна браузера
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // устанавливаем фон черного цвета
        this.renderer.setClearColor(0x100000)
    } 

    createCamera(){
        // создаём обьект камеры с углам обзора 65 градусов
        this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 600;
    }

    createScene(){
        // создаём обьект сцены
        this.scene = new THREE.Scene();
    }
        
    appendToDOM(){
        // добавляем отрисовщик как эмелент DOM
        document.body.appendChild(this.renderer.domElement);
    }

    addToScene(item){
        // добавляем обьект на сцену
        this.scene.add(item);
    }

    render(){
        // запускаем отрисовщик
        this.renderer.render(this.scene, this.camera);
    }
}