import React, { useRef } from 'react';
import { useEffect } from 'react';

export const Wheel = props => {
   const { slices, optionlist } = props
   const canvasRef = useRef(null);
   const colors = ['#EFBCD5',
                  '#3185FC',
                  '#F9DC5C',
                  '#aaee95',
                  '#E84855',
                  '#393843',
                  '#f8c1dc',
                  '#a77ece',
                  '#d8e68e',
                  '#fcc45e',
                  '#a53942',
                  '#3c2fce',
                  '#6ebb9b'
                  ];
   
   const friction = 0.995;
   const random = () => Math.random() * (0.45 - 0.25) + 0.25;
   let angSpd = 0;
   let ang = 0;

   const getIndex = () => Math.floor(slices - ang / (2 * Math.PI) * slices) % slices;

   const draw = (ctx, n=1) => {
      const centerX = ctx.canvas.width / 2;
      const centerY = ctx.canvas.height / 2;
      const rad = ctx.canvas.width / 2 - 5;
      const slice = n === 0? Math.PI * 2:  Math.PI * 2/ n;
      for (let i = 0; i < n; i++) {
         ctx.save();
         //drawing each sector
         ctx.beginPath();
         ctx.fillStyle = n ? colors[i % 13]: 'white';
         ctx.moveTo(centerX,centerY);
         ctx.arc(centerX, centerY, rad, slice*i, slice + slice*i);
         ctx.lineTo(centerX,centerY);
         ctx.fill();
         // option name
         ctx.translate(centerX, centerY);
         ctx.rotate(slice*i + slice / 2);
         ctx.textAlign = "right";
         ctx.fillStyle = "#fff";
         const refracList = optionlist.map(({name}) => {
            if(name.length > 10) {
              return [name.slice(0, 10) + "..."]
            }
            return [name.slice(0, 10)]})
         ctx.font = "bold 26px sans-serif";
         ctx.fillText(optionlist[i] ? refracList[i]: "", rad - 10, 10);
         ctx.restore(); 
      }
   
   }   

   function spin() {
      const curSelection = optionlist[getIndex()];
      if (angSpd < 0.002) {
         const selection = document.querySelector(".winnerChoice");
         selection.innerHTML = curSelection.name;
         selection.style.display = "block";
         setTimeout(() => selection.style.display = "none", 2500);
      } // show the selection

      const EL_wheel = document.querySelector("#wheelCanvas")
      EL_wheel.style.transform = `rotate(${ang - Math.PI / 2}rad)`;
   }
   function frame() {
      if (!angSpd) return;
      angSpd *= friction; // Decrement velocity by friction
      if (angSpd < 0.002) {
         angSpd = 0;
         const optionButton = document.querySelectorAll('.option-btn');
         optionButton.forEach(button => {
            button.removeAttribute("disabled");
         });
      }; // Bring to stop
      ang += angSpd; // Update angle
      ang %= (2 * Math.PI); // Normalize angle
      spin();
   }

   function engine() {
      frame();
      requestAnimationFrame(engine)
   }

   function handleSpinClick() {
      if (!angSpd) {
         angSpd = random(); // choose random speed between 0.25 and 0.45
         const optionButton = document.querySelectorAll('.option-btn');
         optionButton.forEach(button => {
            button.setAttribute("disabled", "true");
         }); // disable the remove button while spinning

      }
   }

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      // drawing circle
      draw(ctx, slices ? slices : 1)
      engine();
   }, [draw])


   return (<>
            <div className='selection'></div>
            <div className='winnerChoice'></div>
            <canvas id='wheelCanvas' ref={canvasRef} {...props}/>
            <div className='btn-container'>
               <button className="btn btn-gradient btn-rounded" type="button" onClick={handleSpinClick}> Spin </button>
            </div>
            
         </>)
}

export default Wheel;