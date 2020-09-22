//3 THINGS THAT WE NEED: Scene, Camera, and Renderer
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  



///GEOMETRY
//TABLE

let geometry1 = new THREE.BoxGeometry( 20, 1, 10);
let m1 = new THREE.MeshLambertMaterial( {color: "#9a8852"} );
let cube1 = new THREE.Mesh(geometry1, m1);
scene.add(cube1);

cube1.position.y = -8
cube1.position.x = 3

// leg 1 (radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength)
let geometry2 = new THREE.CylinderGeometry( 0.5, 0.5, 6, 32 );
let m2 = new THREE.MeshLambertMaterial( {color: "#9a8852"} );
let cylinder1 = new THREE.Mesh( geometry2, m2 );
scene.add( cylinder1 );

cylinder1.position.x = -5
cylinder1.position.y = -11

//leg 2
let geometry3 = new THREE.CylinderGeometry( 0.5, 0.5, 6, 32 );
let m3 = new THREE.MeshLambertMaterial( {color: "#9a8852"} );
let cylinder2 = new THREE.Mesh( geometry3, m3 );
scene.add( cylinder2 );

cylinder2.position.x = 11
cylinder2.position.y = -11

//leg 3
let geometry4 = new THREE.CylinderGeometry( 0.5, 0.5, 6, 32 );
let m4 = new THREE.MeshLambertMaterial( {color: "#9a8852"} );
let cylinder3 = new THREE.Mesh( geometry4, m4 );
scene.add( cylinder3 );

cylinder3.position.x = 11
cylinder3.position.y = -11
cylinder3.position.z = 4

//leg 4
let geometry5 = new THREE.CylinderGeometry( 0.5, 0.5, 6, 32 );
let m5 = new THREE.MeshLambertMaterial( {color: "#9a8852"} );
let cylinder4 = new THREE.Mesh( geometry5, m5 );
scene.add( cylinder4 );

cylinder4.position.x = -5
cylinder4.position.y = -11
cylinder4.position.z = 4

// LAMP
let lampGeometry = new THREE.CylinderGeometry( 0.1, 0.5, 2, 32 );
let m6 = new THREE.MeshLambertMaterial( {color: "#dcbaff"} );
let cylinder5 = new THREE.Mesh( lampGeometry, m6 );
scene.add( cylinder5 );

cylinder5.position.x = 9
cylinder5.position.y = -7

let geometry7 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
let m7 = new THREE.MeshLambertMaterial( {color: "#dcbaff"} );
let cylinder6 = new THREE.Mesh( geometry7, m7 );
scene.add( cylinder6 );

cylinder6.position.x = 9
cylinder6.position.y = -6

let geometry8 = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 );
let m8 = new THREE.MeshLambertMaterial( {color: "#b68ff4"} );
let cylinder7 = new THREE.Mesh( geometry8, m8 );
scene.add( cylinder7 );

cylinder7.position.x = 9
cylinder7.position.y = -3
cylinder7.rotation.z = 2

let geometry9 = new THREE.ConeGeometry( 1, 3, 32 );
let m9 = new THREE.MeshLambertMaterial( {color: "#dcbaff"} );
let cone1 = new THREE.Mesh( geometry9, m9 );
scene.add( cone1 );

cone1.position.x = 8.3
cone1.position.y = -3
cone1.rotation.z = 5

//LAMP LIGHTBALB
let bulbGeometry = new THREE.SphereGeometry( 0.8, 32, 32, );
let m10 = new THREE.MeshMatcapMaterial( {color: "#fdffd8"} );
let sphere1 = new THREE.Mesh( bulbGeometry, m10 );
scene.add( sphere1 );

sphere1.position.x = 7.2
sphere1.position.y = -3.3
sphere1.rotation.z = 5


//3 BOOKS
let geometry11 = new THREE.BoxGeometry( 3, 0.5, 3 );
let m11 = new THREE.MeshLambertMaterial( {color: "#d46060"} );
let cube2 = new THREE.Mesh( geometry11, m11 );
scene.add( cube2 );
cube2.position.set(-5,-7)

let geometry12 = new THREE.BoxGeometry( 3, 0.28, 2.6 );
let m12 = new THREE.MeshLambertMaterial( {color: "#e9e9e9"} );
let cube3 = new THREE.Mesh( geometry12, m12 );
scene.add( cube3 );
cube3.position.set(-5,-7,0.2)

let geometry13 = new THREE.BoxGeometry( 3, 0.5, 3 );
let m13 = new THREE.MeshLambertMaterial( {color: "#e7924b"} );
let cube4 = new THREE.Mesh( geometry13, m13 );
scene.add( cube4 );
cube4.position.set(-5,-6.5)

let geometry14 = new THREE.BoxGeometry( 3, 0.28, 2.6);
let m14 = new THREE.MeshLambertMaterial( {color: "#e9e9e9"} );
let cube5 = new THREE.Mesh( geometry14, m14 );
scene.add( cube5 );
cube5.position.set(-5,-6.5, 0.2)

let geometry15 = new THREE.BoxGeometry( 3, 0.5, 3 );
let m15 = new THREE.MeshLambertMaterial( {color: "#4b5ee7"} );
let cube6 = new THREE.Mesh( geometry15, m15 );
scene.add( cube6 );
cube6.position.set(-5,-6)

let geometry16 = new THREE.BoxGeometry( 3, 0.28, 2.6);
let m16 = new THREE.MeshLambertMaterial( {color: "#e9e9e9"} );
let cube7 = new THREE.Mesh( geometry16, m16 );
scene.add( cube7 );
cube7.position.set(-5,-6, 0.2)


// MONITOR
let geometry17 = new THREE.BoxBufferGeometry(9,6,1);
let m17 = new THREE.MeshPhongMaterial( {color: "#262626"} );
let cube8 = new THREE.Mesh(geometry17, m17);
scene.add(cube8);
cube8.position.set(-0.7,-1,2)

//SCREEN
let geometry18 = new THREE.BoxBufferGeometry(7.5,4.5,0.1);
let m18 = new THREE.MeshLambertMaterial( {color: "#e9e9e9"} );
let cube9 = new THREE.Mesh(geometry18, m18);
scene.add( cube9 );
cube9.position.set(-1.8,-0.8,3.9)

let geometry19 = new THREE.BoxBufferGeometry(2,3,1);
let m19 = new THREE.MeshPhongMaterial( {color: "#262626"} );
let cube10 = new THREE.Mesh(geometry19, m19);
scene.add(cube10);
cube10.position.set(0,-5,0)

let geometry20 = new THREE.BoxGeometry( 5.5, 0.4, 5 );
let m20 = new THREE.MeshPhongMaterial( {color: "#262626"} );
let cube11 = new THREE.Mesh( geometry20, m20 );
scene.add( cube11 );
cube11.position.set(1.3,-7)

//LIGHTING
let spotLight1 = new THREE.AmbientLight ( 0x404040 );
scene.add(spotLight1);

let spotLight2 = new THREE.PointLight ( 0xffff00, 1, 100 );
spotLight2.position.set(1.5,2.5,1);
scene.add(spotLight2)


//CAMERA & RENDER
camera.position.z= 40; //not included in the scene
camera.position.x = -20;
camera.rotation.y= -0.5;
renderer.render(scene, camera); //covers all

