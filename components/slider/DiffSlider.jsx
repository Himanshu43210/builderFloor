// import React, { useState } from "react";
// import { OrbitControls, useTexture } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useEffect } from "react";
// import * as THREE from "three";
// import Image from "next/image";
// const Loader = () => {
//   return (
//     <div
//       role="status"
//       className="w-[100%] h-[500px] flex items-center justify-center absolute z-10"
//     >
//       <svg
//         aria-hidden="true"
//         className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//         viewBox="0 0 100 101"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//           fill="#ccc"
//         />
//         <path
//           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//           fill="#006d77"
//         />
//       </svg>
//     </div>
//   );
// };

// const Scene = ({ src }) => {
//   const texture = useTexture(src);

//   return (
//     <>
//       <mesh position={[0, 0, 0]}>
//         <sphereGeometry args={[20, 100, 100]} />
//         <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
//       </mesh>
//       <OrbitControls />
//     </>
//   );
// };

// export const Item = ({ src, images, image360 }) => {
//   const [show, setShow] = useState(true);
//   const [err, setErr] = useState(false);

//   async function isImageURL(url, id) {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         setErr(false);
//         setShow(false);
//         if (id) {
//           setCurr(id - 1);
//         }
//       } else {
//         setErr(true);
//         setShow(false);
//         console.log(url, "these are the ones who dont work");
//       }
//     } catch (error) {
//       setErr(true);
//       setShow(false);
//       console.log(url, "these are the ones who dont work");
//     }
//   }
//   const [curr, setCurr] = useState(0);

//   useEffect(() => {
//     isImageURL(src);
//   });
//   return (
//     <>
//       <>
//         <h1 className="text-[30px] text-center w-[100%] flex justify-center font-bold f1 mb-[10px] md:text-[20px] flex">
//           {/* Virtual Tour */}
//         </h1>

//         <div className="flex h-[582px] md:h-[350px]">
//           {show ? (
//             <Loader />
//           ) : err ? (
//             <div className="w-[100%] h-[500px] flex items-center justify-center bg-[#ccc] rounded-[20px]">
//               <p className="text-[20px] font-bold capitalize">
//                 Image Failed to load!
//               </p>
//             </div>
//           ) : (
//             <div className="w-[75%] md:w-full  relative">
//               <div className="w-[40px] h-[100%] absolute z-50 left-0 flex items-center justify-center ">
//                 <Image
//                   src={"/assets/imgs/textures/dropdown-w.svg"}
//                   alt=""
//                   className=" cursor-pointer ml-[10px] translate-y-[0px] rotate-90"
//                   width={15}
//                   onClick={() => {
//                     if (curr !== 0) {
//                       isImageURL(
//                         `https://testerp1apis.nextsolutions.in/${images[curr - 1]
//                         }`,
//                         curr + 1 - 1
//                       );
//                     }
//                   }}
//                   height={15}
//                 />

//               </div>
//               <div className="w-[40px] h-[100%] absolute z-50 right-0 flex items-center justify-center ">
//                 <Image
//                   src={"/assets/imgs/textures/dropdown-w.svg"}
//                   alt=""
//                   className="cursor-pointer ml-[10px] translate-y-[0px] -rotate-90"
//                   width={15}
//                   height={15}
//                   onClick={() => {
//                     if (curr !== images.length) {
//                       isImageURL(
//                         `https://testerp1apis.nextsolutions.in/${images[curr + 1]
//                         }`,
//                         curr + 1 + 1
//                       );
//                     }
//                   }}
//                 />
//               </div>
//               {
//                 image360 && (
//                   <div className="absolute z-20 top-8 right-8 md:top-4 md:right-4 ">
//                     <img
//                       src="/assets/imgs/icons/360-degrees.png"
//                       alt="360-degrees icon"
//                       className="w-[40px] h-[40px]"
//                     />
//                   </div>
//                 )
//               }
//               <Canvas
//                 camera={{ position: [0.1, 0, 0], fov: 65 }}
//                 gl={{ antialias: false }}
//                 className="h-[500px]"
//                 style={{
//                   width: "100%",
//                   zIndex: 1,
//                 }}
//                 onCreated={({ gl }) => {
//                   gl.toneMapping = THREE.ACESFilmicToneMapping;
//                   gl.outputEncoding = THREE.sRGBEncoding;
//                 }}
//               >
//                 <pointLight
//                   position={[0, 4, 0]}
//                   intensity={0.4}
//                   color="white"
//                 />
//                 <Scene
//                   src={`https://testerp1apis.nextsolutions.in/${images[curr]}`}
//                 />
//                 <ambientLight intensity={0.7} />
//               </Canvas>
//             </div>
//           )}
//           <div className="w-[25%] h-[100%] flex flex-col md:hidden">
//             <div className="overflow-y-scroll">
//               {
//                 images && images.map((img, idx) => {
//                   return (
//                     <div className="relative" key={idx}>
//                       <img
//                         src={`https://testerp1apis.nextsolutions.in/${img}`}
//                         alt=""
//                         onClick={() => {
//                           isImageURL(
//                             `https://testerp1apis.nextsolutions.in/${img}`,
//                             idx + 1
//                           );
//                         }}
//                         style={{
//                           borderTop: "0",
//                           border: "2px solid #ccc",
//                         }}
//                         className="w-[100%] h-[194px] cursor-pointer"
//                       />
//                       {
//                         image360 && (
//                           <div className="absolute z-20 top-4 right-4  ">
//                             <img
//                               src="/assets/imgs/icons/360-degrees.png"
//                               alt="360-degrees icon"
//                               className="w-[40px] h-[40px]"
//                             />
//                           </div>
//                         )
//                       }
//                     </div>
//                   );
//                 })
//               }
//             </div>
//           </div>
//         </div>
//       </>
//     </>
//   );
// };

// const DiffSlider = ({ images, image360 }) => {
//   // console.log(images);
//   return (
//     <div className="w-[100%] h-[600px] md:h-[400px] pt-[20px] ">
//       <Item
//         src={`https://testerp1apis.nextsolutions.in/${images[0]}`}
//         images={images}
//         image360={image360}
//       />
//     </div>
//   );
// };

// export default DiffSlider;

import React, { useState } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import Image from "next/image";
const Loader = () => {
  return (
    <div
      role="status"
      className="w-[100%] h-[500px] flex items-center justify-center absolute z-10"
    >
      <svg
        aria-hidden="true"
        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#ccc"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="#006d77"
        />
      </svg>
    </div>
  );
};

const Scene = ({ src, dragging, setDragging }) => {
  console.log(src);
  // const texture = useTexture(src);
  const [rotation, setRotation] = useState(0);

  const rotationIncrement = 0.003;
  useFrame(() => {
    if (!dragging) {
      setRotation((prevRotation) => prevRotation + rotationIncrement);
    }
  });

  const handleDrag = () => {
    setDragging(true);
  };

  const [textur, setTexture] = useState();

  useEffect(() => {
    // const loader = new THREE.TextureLoader();
    const loader = new THREE.ImageLoader();
    // loader.setCrossOrigin("anonymous");

    loader.load(
      src, // Path to your image
      function (texture) {
        console.log(texture, "please have a look at it");
        // Function to handle what you want to do with the texture
        setTexture(texture);
      }
    );
  });
  return (
    <>
      <mesh
        position={[0, 0, 0]}
        rotation={[0, rotation, 0]}
        onPointerDown={(e) => handleDrag()}
      >
        <sphereGeometry args={[20, 100, 100]} />
        <meshBasicMaterial map={textur} side={THREE.DoubleSide} />
      </mesh>
      <OrbitControls />
    </>
  );
};

export const Item = ({ src, images, image360, normal }) => {
  const [show, setShow] = useState(true);
  const [err, setErr] = useState(false);
  const [dragging, setDragging] = useState(false);

  async function isImageURL(url, id) {
    console.log(url);
    try {
      const response = await fetch(url);
      if (response.ok) {
        setErr(false);
        setShow(false);
        if (id) {
          setCurr(id - 1);
        }
      } else {
        setErr(false);
        setShow(false);
        console.log(url, "these are the ones who dont work");
        if (id) {
          setCurr(id - 1);
        }
      }
    } catch (error) {
      console.log(error);
      if (id) {
        setCurr(id - 1);
      }
      setErr(false);
      setShow(false);
      console.log(url, "these are the ones who dont work");
    }
  }

  const [curr, setCurr] = useState(0);

  useEffect(() => {
    isImageURL(src);
  });

  console.log(curr, images[curr], "please have a look at it");

  return (
    <>
      <>
        <h1 className="text-[30px] text-center w-[100%] flex justify-center font-bold f1 mb-[10px] md:text-[20px] flex">
          {/* Virtual Tour */}
        </h1>

        <div className="flex h-[582px] md:h-[350px]">
          {show ? (
            <Loader />
          ) : err ? (
            <div className="w-[100%] h-[100%] flex items-center justify-center bg-[#ccc] ">
              <p className="text-[20px] font-bold capitalize">
                Image Failed to load!
              </p>
            </div>
          ) : (
            <div className="w-[75%] md:w-full  relative">
              <div className="w-[40px] h-[100%] absolute z-50 left-0 flex items-center justify-center ">
                <Image
                  src={"/assets/imgs/textures/dropdown-w.svg"}
                  alt=""
                  className=" cursor-pointer ml-[10px] translate-y-[0px] rotate-90"
                  width={15}
                  onClick={() => {
                    if (curr !== 0) {
                      // isImageURL(
                      //   // `https://testerp1apis.nextsolutions.in/${images[curr - 1]}`,
                      //   images[curr - 1],
                      //   curr + 1 - 1
                      // );
                      setShow(false);
                      setCurr(curr - 1);
                      setShow(true);
                    }
                  }}
                  height={15}
                />
              </div>
              <div className="w-[40px] h-[100%] absolute z-50 right-0 flex items-center justify-center ">
                <Image
                  src={"/assets/imgs/textures/dropdown-w.svg"}
                  alt=""
                  className="cursor-pointer ml-[10px] translate-y-[0px] -rotate-90"
                  width={15}
                  height={15}
                  onClick={() => {
                    if (curr !== images.length - 1) {
                      // isImageURL(
                      //   // `https://testerp1apis.nextsolutions.in/${images[curr + 1]}`,
                      //   images[curr + 1],
                      //   curr + 1 + 1
                      // );
                      setShow(false);
                      setCurr(curr + 1);
                      setShow(true);
                    }
                  }}
                />
              </div>
              {curr >= images.length ? (
                <></>
              ) : (
                <div className="absolute z-20 top-8 right-8 md:top-4 md:right-4 ">
                  <img
                    src="/assets/imgs/icons/360-degrees.png"
                    alt="360-degrees icon"
                    className="w-[40px] h-[40px]"
                  />
                </div>
              )}
              {/* <Canvas
                camera={{ position: [0.1, 0, 0], fov: 65 }}
                gl={{ antialias: false }}
                className="h-[500px]"
                style={{
                  width: "100%",
                  zIndex: 1,
                }}
                onCreated={({ gl }) => {
                  gl.toneMapping = THREE.ACESFilmicToneMapping;
                  gl.outputEncoding = THREE.sRGBEncoding;
                }}
              >
                <pointLight
                  position={[0, 4, 0]}
                  intensity={0.4}
                  color="white"
                />
                <Scene
                  // src={`https://testerp1apis.nextsolutions.in/${images[curr]}`}
                  src={images[curr]}
                  dragging={dragging}
                  setDragging={setDragging}
                />
                <ambientLight intensity={0.7} />
              </Canvas> */}
              {curr >= images.length ? (
                <img
                  src={normal[curr - images.length]}
                  className="w-[100%] h-[100%]"
                  alt=""
                />
              ) : (
                <iframe
                  // src={`https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${images[curr]}&autoLoad=true&autoRotate=-2&hfov=200`}
                  // src={`https://builder-floor-images.vercel.app/uploads/${images[curr]}`}
                  src={`https://fascinating-queijadas-53a09a.netlify.app/?image=${images[curr]}`}
                  className="w-[100%] h-[100%]"
                  frameBorder="0"
                ></iframe>
              )}
            </div>
          )}
          <div className="w-[25%] h-[100%] flex flex-col md:hidden">
            <div className="overflow-y-scroll">
              {images &&
                images.map((img, idx) => {
                  return (
                    <div className="relative" key={idx}>
                      <img
                        // src={`https://testerp1apis.nextsolutions.in/${img}`}
                        src={img}
                        alt=""
                        onClick={() => {
                          // isImageURL(
                          //   // `https://testerp1apis.nextsolutions.in/${img}`,
                          //   img,
                          //   idx + 1
                          // );
                          setShow(false);
                          setCurr(idx);
                          setShow(true);
                          setDragging(false);
                        }}
                        style={{
                          borderTop: "0",
                          border: "2px solid #ccc",
                        }}
                        className="w-[100%] h-[194px] cursor-pointer"
                      />
                      {image360 && (
                        <div className="absolute z-20 top-4 right-4  ">
                          <img
                            src="/assets/imgs/icons/360-degrees.png"
                            alt="360-degrees icon"
                            className="w-[40px] h-[40px]"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              {normal ? (
                normal.map((item, idx) => {
                  return (
                    <div className="relative" key={idx}>
                      <img
                        // src={`https://testerp1apis.nextsolutions.in/${img}`}
                        src={item}
                        alt=""
                        onClick={() => {
                          // isImageURL(
                          //   // `https://testerp1apis.nextsolutions.in/${img}`,
                          //   img,
                          //   idx + 1
                          // );
                          setShow(false);
                          setCurr(images.length + idx);
                          setShow(true);
                          setDragging(false);
                        }}
                        style={{
                          borderTop: "0",
                          border: "2px solid #ccc",
                        }}
                        className="w-[100%] h-[194px] cursor-pointer"
                      />
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

const DiffSlider = ({ images, image360, normal }) => {
  // console.log(images);
  return (
    <div className="w-[100%] h-[600px] md:h-[400px] pt-[20px] ">
      <Item
        // src={`https://testerp1apis.nextsolutions.in/${images[0]}`}
        src={images[0]}
        images={images}
        image360={image360}
        normal={normal}
      />
    </div>
  );
};

export default DiffSlider;
