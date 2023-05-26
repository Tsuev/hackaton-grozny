<template>
   <div class="modal-block" @click.self="$emit('close')">
      <div class="modal-container">
         <div class="modal-close" @click="$emit('close')">✕</div>
         <div>
            <slot />
         </div>
      </div>
   </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.modal-block {
   position: fixed;
   top: 0;
   left: 0;
   background: #000000a7;
   display: flex;
   height: 100vh;
   width: 100vw;
   justify-content: center;
   align-items: center;
   z-index: 100;
}

.modal-container {
   background-color: #fff;
   max-width: 1200px;
   border-radius: 10px;
   position: relative;
   padding: 30px;
}

.modal-close {
   position: absolute;
   top: 15px;
   right: 15px;
   cursor: pointer;
}
</style>