/* global THREE, dat .GUI */

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Define controlable box
var controls = {
  size: 1,
  color: '#433F81'
}

// Create a Cube Mesh with basic material
var cubegeom1 = new THREE.BoxGeometry( controls.size, controls.size, controls.size );
var cubemat1 = new THREE.MeshBasicMaterial( { color: controls.color } );
var cube1 = new THREE.Mesh( cubegeom1, cubemat1 );

// Add cube to Scene
scene.add( cube1 );

//Create second Cube
var cubegeom2 = new THREE.BoxGeometry( 1, 1, 1 );
var cubemat2 = new THREE.MeshBasicMaterial( { color: "#433F50" } );
var cube2= new THREE.Mesh( cubegeom2, cubemat2 );

scene.add( cube2 );

//Create animated X
var greenLongGeom = new THREE.BoxGeometry( 200, 0.1, 0.1 );
var greenLongMat = new THREE.MeshBasicMaterial( { color: "#42f4ad" } );
var greenLong = new THREE.Mesh(greenLongGeom, greenLongMat);

scene.add( greenLong );

//Create animated X
var whiteLongGeom = new THREE.BoxGeometry( 200, 0.1, 0.1 );
var whiteLongMat = new THREE.MeshBasicMaterial( { color: "white" } );
var whiteLong = new THREE.Mesh(whiteLongGeom, whiteLongMat);

scene.add( whiteLong );

// Create a Cube Mesh with basic material
var wiregeom1 = new THREE.BoxGeometry( 6, 6, 6 );
var wiremat1 = new THREE.MeshBasicMaterial( { color: "#433F81", wireframe: true } );
var wire1 = new THREE.Mesh( wiregeom1, wiremat1 );

// Add wire to Scene
scene.add( wire1 );

//Create second Cube
var wiregeom2 = new THREE.BoxGeometry( 6, 6, 6 );
var wiremat2 = new THREE.MeshBasicMaterial( { color: "#433F50", wireframe: true } );
var wire2= new THREE.Mesh( wiregeom2, wiremat2 );

scene.add( wire2 );

var planeGeom = new THREE.PlaneGeometry(2, 2)
var planeMat = new THREE.MeshBasicMaterial({ color: '#FFFFFF' });
var plane = new THREE.Mesh(planeGeom, planeMat);

scene.add(plane);

var gui = new dat.GUI();
var c_mesh_size = gui.add(controls, 'size', 0,2);
var c_mesh_color = gui.addColor(controls, 'color', 0,100);


c_mesh_size.onChange(function(){
  cube1.geometry = new THREE.OctahedronGeometry(controls.size, 0);
});

c_mesh_color.onChange(function(){
  cube1.material = new THREE.MeshBasicMaterial( { color: controls.color } );
});

var delta = 0

// Render Loop
var render = function () {
  requestAnimationFrame( render );
  
  delta += 0.01;
  planeGeom.vertices[3].x = 1 + Math.sin(delta) * 1;
  planeGeom.vertices[0].x = -1 + Math.sin(delta) * -1;
  planeGeom.verticesNeedUpdate = true;

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  
  cube2.rotation.x += -0.01;
  cube2.rotation.y += -0.01;
  
  greenLong.rotation.z += 0.01;
  whiteLong.rotation.z += -0.01;
  
  wire1.rotation.x += 0.01;
  wire1.rotation.y += 0.01;
  
  wire2.rotation.x += -0.01;
  wire2.rotation.y += -0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();