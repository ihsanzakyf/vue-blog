<script setup>
import { ref } from 'vue'

const date = new Date()
const year = ref(date.getFullYear())
</script>
<template>
  <div>
    <!-- Footer-->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/ihsanzakyf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="fa-stack fa-2xl">
                    <i class="fab fa-linkedin-in fa-stack-1x"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://ihsanzakyf.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <span class="fa-stack fa-2xl">
                    <i class="fa-solid fa-address-card fa-stack-1x"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/ihsanzakyf" target="_blank" rel="noopener noreferrer">
                  <span class="fa-stack fa-2xl">
                    <i class="fab fa-github fa-stack-1x"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="mailto:ihsanzaky155@gmail.com" target="_blank" rel="noopener noreferrer">
                  <span class="fa-stack fa-2xl">
                    <i class="fa-solid fa-envelope fa-stack-1x"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div class="small text-center text-muted fst-italic">ihsanzakyf | {{ year }}</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
