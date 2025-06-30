<script setup></script>

<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-top: 3px solid teal;
  border-radius: 50%;
  animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  position: relative;
}

.spin::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-left: 3px solid rgba(0, 128, 128, 0.4);
  animation: spin-reverse 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    border-top-color: teal;
  }
  50% {
    transform: rotate(180deg);
    border-top-color: #008080aa;
  }
  100% {
    transform: rotate(360deg);
    border-top-color: teal;
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

/* .spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 3px solid teal;
  animation: spin 2s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
} */
</style>
