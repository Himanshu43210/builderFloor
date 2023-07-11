import React  from "react";
import * as THREE from "three";
import {  useThree } from "@react-three/fiber";

const Para = (props) => {
  const three = useThree();
  React.useEffect(() => {
    // console.log(three);
    const scene = three.scene;
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const texture = new THREE.TextureLoader().load(
    //   "./assets/imgs/textures/one-2.jpeg"
    props.image
    );

    texture.encoding = THREE.sRGBEncoding;
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = "Sphere1";
    scene.add(mesh);
    // let selected = null;
    // const onMove = (e) => {
    //   const mouse = {};
    //   const rect = document.getElementById("canvas").getBoundingClientRect();
    //   mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    //   mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    //   const camera = three.camera;
    //   const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    //   vector.unproject(camera);
    //   const raycaster = three.raycaster;
    //   raycaster.setFromCamera(mouse, camera);
    //   const fArr =[];
    //   for(let j =0;j<props.images.length;j++){
    //       const curr = scene.getObjectByName(`f${j+1}`);
    //       fArr.push(curr);
    //   }
    //   // console.log(fArr);
    //   const intersects = raycaster.intersectObjects(fArr);
    //   if (intersects.length > 0) {
    //     if (selected === null) {
    //       const curr = intersects[0].object;
    //       const n1 = curr.name.slice(0, 2);
    //       const g1 = scene.getObjectByName(n1);
    //       // console.log(g1);
    //       document.body.style.cursor = "pointer";
    //       selected = g1;
    //       g1.scale.x = 1.1;
    //       g1.scale.y = 1.1;
    //       g1.scale.z = 1.1;
    //     }
    //   } else {
    //     if (selected) {
    //       selected = null;
    //       document.body.style.cursor = null;
    //       console.log(fArr);
    //       for(let j =0;j<fArr.length;j++){
    //         console.log(fArr[j]);
    //         fArr[j].scale.x=1;
    //         fArr[j].scale.y=1;
    //         fArr[j].scale.z=1;
    //       }
    //     }
    //   }
    // };

    // const onDown = () => {
    //   if (selected) {
    //     const el = document.getElementById("checkkked");
    //     if (!el) {
    //       console.log(selected.name.slice(1,2));
    //       const Item = props.images[Number(selected.name.slice(1,2))-1];
    //       const texture = new THREE.TextureLoader().load(Item.src);
    //       texture.encoding = THREE.sRGBEncoding;
    //       material.map = texture;
    //       material.map.needsUpdate = true;
    //     }
    //   }
    // };

    // document.addEventListener("pointermove", onMove, false);
    // document.addEventListener("pointerdown", onDown, false);
    // return () => {
    //   document.removeEventListener("pointerdown", onDown, false);
    //   document.removeEventListener("pointermove", onMove, false);
    // };



    // console.log("fire one");
    // const buttonListerners = (e) => {
    //   const id = e.target.id.slice(11, 12);
    //   const btn = document.getElementById("360-viewer");
    //   const child = btn.children;
    //   // child[id].style.backgroundColor="#fff";
    //   for (let j = 0; j < props.images.length; j++) {
    //     if (j === id - 1) {
    //       const Texture = new THREE.TextureLoader().load(props.images[j].src);
    //       material.map = Texture;
    //       material.map.needsUpdate = true;
    //       child[j].style.backgroundColor = "#fff";
    //       child[j].style.color = "#000";
    //     } else {
    //       child[j].style.backgroundColor = "#000";
    //       child[j].style.color = "#fff";
    //     }
    //   }
    // };
    // const removeButtonListeners = () => {};
    // const btn = document.getElementById("360-viewer");
    // const child = btn.children;
    // for (let j = 0; j < props.images.length; j++) {
    //   child[j].addEventListener("pointerdown", buttonListerners, false);
    // }

    // return () => {
    //   removeButtonListeners();
    // };
  });
  
//   {props.images.map((item,i) => {
//       return <Ring position={item.position} id={i} key={i} name={`f${i+1}`} />;
//     })}
  return (
    <>
    </>
  );
};

export default Para;