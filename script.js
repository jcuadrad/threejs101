/* global THREE */

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

// Create a Cube Mesh with basic material
var cubegeom1 = new THREE.BoxGeometry( 1, 1, 1 );
var cubemat1 = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube1 = new THREE.Mesh( cubegeom1, cubemat1 );

// Add cube to Scene
scene.add( cube1 );

//Create second Cube
var cubegeom2 = new THREE.BoxGeometry( 1, 1, 1 );
var cubemat2 = new THREE.MeshBasicMaterial( { color: "#433F50" } );
var cube2= new THREE.Mesh( cubegeom2, cubemat2 );

scene.add( cube2 );

//Crate animated X
var greenLongGeom = new THREE.BoxGeometry( 200, 1, 1 );
var greenLongMat = new THREE.MeshBasicMaterial( { color: "white" } );
var greenLong = new THREE.Mesh(greenLongGeom, greenLongMat);

scene.add( greenLong )M


// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  
  cube2.rotation.x += -0.01;
  cube2.rotation.y += -0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();