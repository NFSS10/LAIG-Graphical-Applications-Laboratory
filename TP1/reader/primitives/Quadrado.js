
 function Quadrado(scene,minS, maxS, minT, maxT) {
 	CGFobject.call(this,scene);

    this.minS=minS || 0; //valor ou valor predefenido 0
    this.minT=minT || 0; //...
    this.maxS=maxS || 1;
    this.maxT=maxT || 1;

 	this.initBuffers();
 };

 Quadrado.prototype = Object.create(CGFobject.prototype);
 Quadrado.prototype.constructor = Quadrado;

 Quadrado.prototype.initBuffers = function() {
 	this.vertices = [
 	-0.5, -0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0
 	];

 	this.indices = [
 	0, 1, 2, 
 	3, 2, 1
 	];

this.texCoords = [
 	this.minS,this.maxT,
 	this.maxS, this.maxT,
 	this.minS, this.minT,
 	this.maxS, this.minT
 	];

 	
 this.primitiveType = this.scene.gl.TRIANGLES;

 this.normals=[
 	0,0,1,
 	0,0,1,
 	0,0,1,
 	0,0,1
 	];

 this.initGLBuffers();
 	
 	
 };