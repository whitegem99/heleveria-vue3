<script setup>
import Instragram from "@/components/icons/Instagram.vue";
import Youtube from "@/components/icons/Youtube.vue";
import Tiktok from "@/components/icons/Tiktok.vue";
import Hamburger from "@/components/icons/Hamburger.vue";
import { ref } from "vue";
const showMobileMenu = ref(false);


</script>

<template>
  <div class="z-30 fixed top-0 w-full text-white bg-primary">
    <div
      class="relative h-auto sm:h-[100px] pt-3 sm:pt-5 pr-4 w-full max-w-7xl flex justify-between items-center mx-auto">
      <div v-if="showMobileMenu" id="mobileMenu"
        class="text-white absolute left-0 w-full bg-primary py-16 top-[57px] h-auto md:h-[150px]  z-50">
        <div class="flex flex-col items-center">
          <a class="w-full text-center" href="#">ГОЛОВНА </a>
          <a class="w-full text-center" href="#">КОНТАКТИ</a>
          <a class="w-full text-center" href="#">ПРО МЕНЕ</a>
        </div>
      </div>
      <div @click="showMobileMenu = !showMobileMenu" class="block md:hidden p-3">
        <Hamburger />
      </div>
      <div>
        <img class="hidden md:block" src="/logo.png" width="80" alt="" />
      </div>
      <div class="md:flex gap-x-[60px] hidden">
        <a href="#">ГОЛОВНА</a>
        <a href="#">КОНТАКТИ</a>
        <a href="#">ПРО МЕНЕ</a>
      </div>
      <div class="flex gap-x-4">
        <a target="_blank" href="https://instagram.com/maximheleveria?igshid=OGQ5ZDc2ODk2ZA=="
          class="w-8 h-8 !p-0 bg-white hover:!bg-white flex justify-center items-center !rounded-full">
          <Instragram />
        </a>
        <a target="_blank" href="https://youtube.com/@Maximgeleverya?si=2r7xDKUddqcMY0Bh"
          class="w-8 h-8 !p-0 bg-white hover:!bg-white flex justify-center items-center !rounded-full">
          <Youtube />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@gelevan01?_t=8hp0ZZNfOTO&_r=1"
          class="w-8 h-8 !p-0 bg-white hover:!bg-white flex justify-center items-center !rounded-full">
          <Tiktok />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
a {
  @apply hover:bg-slate-800 hover:text-white px-5 py-3 rounded-md;
}
</style>
