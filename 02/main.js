import {Scene} from './scene.js'
import {Sphere} from './sphere.js'


class App
{
	constructor()
	{
		this.scene = new Scene(this);        	
        this.sphere = new Sphere(this);        
        this.animate();
	}

    addObjectToScene(obj){
        this.scene.addToScene(obj);        
    }

    animate(){       
        requestAnimationFrame(() => { this.animate(); });
        this.scene.render();
    }
	
}

const app = new App();


