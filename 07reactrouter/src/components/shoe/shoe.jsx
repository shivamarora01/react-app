// import React, { useEffect } from 'react';
// import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
// import ScrollTrigger from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
// import Shery from 'https://unpkg.com/sheryjs/dist/Shery.js';
// import 'https://unpkg.com/sheryjs/dist/Shery.css';

// function Contact() {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     Shery.imageEffect("#back", {
//         style: 5,  config:{"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.2704507512520866},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.59,"range":[0,10]},"metaball":{"value":0.21,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.15,"range":[0,100]}},
//     debug:true
//     ,gooey:true,
//       // Add your Shery.js configurations here
//       // ...
//     });

//     const elems = document.querySelectorAll(".elem");
//     elems.forEach((elem) => {
//       const h1s = elem.querySelectorAll('h1');
//       let index = 0;
//       let animating = false;

//       document.querySelector("#main").addEventListener("click", () => {
//         if (!animating) {
//           animating = true;
//           gsap.to(h1s[index], {
//             top: "-=100%",
//             ease: Expo.easeInOut,
//             duration: 1,
//             onComplete: function () {
//               gsap.set(this._targets[0], { top: "100%" });
//               animating = false;
//             }
//           });
//           index === h1s.length - 1 ? (index = 0) : index++;
//           gsap.to(h1s[index], {
//             top: "-=100%",
//             ease: Expo.easeInOut,
//             duration: 1,
//           });
//         }
//       });
//     });
//   }, []);


  import React, { useEffect } from 'react';

  function shoe() {
    useEffect(() => {
      const loadExternalScript = async (url) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = url;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      };
  
      const initializeShery = async () => {
        await loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        await loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
        await loadExternalScript('https://unpkg.com/sheryjs/dist/Shery.js');
        // Add any other scripts you need to load
  
        gsap.registerPlugin(ScrollTrigger);
  
        Shery.imageEffect("#back", {
            style: 5,  config:{"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.2704507512520866},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.59,"range":[0,10]},"metaball":{"value":0.21,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":12.15,"range":[0,100]}},
        debug:true
        ,gooey:true,
          // Your SheryJS configurations here
        });
  
        // Rest of your GSAP and SheryJS logic
        // ...
  
        // For example:
        const elems = document.querySelectorAll(".elem");
        elems.forEach((elem) => {
          // Your logic for elements
          const h1s = elem.querySelectorAll('h1');
      let index = 0;
      let animating = false;

      document.querySelector("#main").addEventListener("click", () => {
        if (!animating) {
          animating = true;
          gsap.to(h1s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function () {
              gsap.set(this._targets[0], { top: "100%" });
              animating = false;
            }
          });
          index === h1s.length - 1 ? (index = 0) : index++;
          gsap.to(h1s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
          });
        }
      });
        });
      };
  
      initializeShery();
    }, []);  


  return (
    <div id="main" className="w-full h-screen">
      <div id="back" className="w-full h-screen">
      <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="" className="w-full h-full object-cover"/>
      <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="" className="w-full h-full object-cover" />
        {/* Your images can be added here */}
        {/* <img src="your-image.jpg" alt="" className="w-full h-full object-cover" /> */}
      </div>
      <div id="page2" className="flex">
        <div className="page12-lefter">
          <video src="production_id_4380323 (1080p).mp4" autoPlay loop muted className="h-full px-5 rounded-lg w-90 object-cover" />
        </div>
        <div className="page12-inner">
          <h1 className="text-5xl font-thin text-red-500">AIR JORDAN I <br /> TRACK RED</h1>
          <p className="text-base text-gray-900">The post-season saw a few impressive teams during the Michael Jordan era...</p>
        </div>
      </div>
    </div>
  );
}

export default shoe;
