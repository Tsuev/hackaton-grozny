<template>
   <div class="container">
      <div class="card">
         <div class="card-inner">
            <div class="front">
               <img src="https://i.ibb.co/PYss3yv/map.png" class="map-img">
               <div class="row">
                  <img src="https://i.ibb.co/G9pDnYJ/chip.png" class="w-[60px]">
                  <svg width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 780 500" xml:space="preserve" fill="#000000">

                     <g id="SVGRepo_bgCarrier" stroke-width="0" />

                     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                     <g id="SVGRepo_iconCarrier">
                        <path class=" fill-transparent"
                           d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z" />
                        <g id="Page-1">
                           <g id="Artboard" transform="translate(-91.000000, -154.000000)">
                              <g id="Group" transform="translate(91.000000, 154.000000)">
                                 <path id="Combined-Shape" class="fill-white"
                                    d="M544.1,240.5v108h60v-64h68c28.6-0.2,52.9-18.5,62.1-44H544.1z" />
                                 <linearGradient id="Combined-Shape_4_" gradientUnits="userSpaceOnUse" x1="362.4047"
                                    y1="275.4307" x2="363.4047" y2="275.4307"
                                    gradientTransform="matrix(201.7633 0 0 -79 -72583.8438 21950.0254)">
                                    <stop offset="0" style="stop-color:#00A0E5" />
                                    <stop offset="1" style="stop-color:#0077C3" />
                                 </linearGradient>
                                 <path id="Combined-Shape_1_" class="fill-white"
                                    d="M536.1,151.5c3.5,44.1,45.3,79,96.3,79c0.2,0,104.3,0,104.3,0 c0.8-4,1.2-8.2,1.2-12.5c0-36.6-29.5-66.2-66-66.5L536.1,151.5z" />
                                 <path id="Combined-Shape_2_" class="fill-white"
                                    d="M447.3,229.4l0-0.1L447.3,229.4c0.7-1.2,1.8-1.9,3.2-1.9c2,0,3.5,1.6,3.6,3.5l0,0 v116.5h60v-196h-60c-7.6,0.3-16.2,5.8-19.4,12.7L387,266.6c-0.1,0.4-0.3,0.8-0.5,1.2l0,0l0,0c-0.7,1-1.9,1.7-3.3,1.7 c-2.2,0-4-1.8-4-4v-114h-60v196h60v0c7.5-0.4,15.9-5.9,19.1-12.7l49-105.1C447.2,229.6,447.3,229.5,447.3,229.4L447.3,229.4z" />
                                 <path id="Combined-Shape_3_" class="fill-white"
                                    d="M223.3,232.8l-35.1,114.7H145L110,232.7c-0.3-1.8-1.9-3.2-3.9-3.2 c-2.2,0-3.9,1.8-3.9,3.9c0,0,0,0,0,0l0,114h-60v-196h51.5H109c11,0,22.6,8.6,25.8,19.1l29.2,95.5c1.5,4.8,3.8,4.7,5.3,0 l29.2-95.5c3.2-10.6,14.8-19.1,25.8-19.1h15.3h51.5v196h-60v-114c0,0,0,0,0-0.1c0-2.2-1.8-3.9-3.9-3.9 C225.2,229.5,223.6,230.9,223.3,232.8L223.3,232.8z" />
                              </g>
                           </g>
                        </g>
                     </g>

                  </svg>
               </div>
               <div class="row card-no">
                  <p v-for="i in cardObj.number.split(' ')" :key="i">{{ i }}</p>
               </div>
               <div class="row card-holder">
                  <p>CARD HPLDER</p>
                  <p>VALID TILL</p>
               </div>
               <div class="row name">
                  <p>JOE ALISON</p>
                  <p>10 / 25</p>
               </div>
            </div>
            <div class="back">
               <img src="https://i.ibb.co/PYss3yv/map.png" class="map-img">
               <div class="bar"></div>
               <div class="row card-cvv">
                  <div>
                     <img src="https://i.ibb.co/S6JG8px/pattern.png">
                  </div>
                  <p>824</p>
               </div>
               <div class="row card-text">
                  <p>this is a virtual card design using HTML and CSS. You can aslo design something like this.</p>
               </div>
               <div class="row signature">
                  <p>CUSTOMER SIGNATURE</p>
                  <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="80px">
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
const props = defineProps({
   cardObj: Object
})
</script>
<style scoped>
.container {
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
}

.card {
   width: 500px;
   height: 300px;
   color: #fff;
   cursor: pointer;
   perspective: 1000px;
}

.card-inner {
   width: 100%;
   height: 100%;
   position: relative;
   transition: transform 1s;
   transform-style: preserve-3d;
}

.front,
.back {
   width: 100%;
   height: 100%;
   background-image: linear-gradient(45deg, #0045c7, #ff2c7d);
   position: absolute;
   top: 0;
   left: 0;
   padding: 20px 30px;
   border-radius: 15px;
   overflow: hidden;
   z-index: 1;
   backface-visibility: hidden;
}

.row {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.map-img {
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   opacity: 0.3;
   z-index: -1;
}

.card-no {
   font-size: 35px;
   margin-top: 30px;
}

.card-holder {
   font-size: 12px;
   margin-top: 40px;
}

.name {
   font-size: 22px;
   margin-top: 20px;
}

.bar {
   background: #222;
   margin-left: -30px;
   margin-right: -30px;
   height: 60px;
   margin-top: 10px;
}

.card-cvv {
   margin-top: 20px;
}

.card-cvv div {
   flex: 1;
}

.card-cvv img {
   width: 100%;
   display: block;
   line-height: 0;
}

.card-cvv p {
   background: #fff;
   color: #000;
   font-size: 22px;
   padding: 10px 20px;
}

.card-text {
   margin-top: 30px;
   font-size: 14px;
}

.signature {
   margin-top: 30px;
}

.back {
   transform: rotateY(180deg);
}

.card:hover .card-inner {
   transform: rotateY(-180deg);
}
</style>