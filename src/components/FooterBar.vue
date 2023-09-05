<template>
  <footer class="bg-white p-10 laptop:py-12">
    <div
      class="container px-0 flex flex-col items-start laptop:flex-row laptop:justify-between laptop:items-center"
    >
      <div class="footerTitle">
        <h2 class="text-[32px]/normal font-shrik">ALPHABOX+</h2>
        <p class="tracking-[2px] hidden laptop:block">Copyright © 2023 Hexschool.</p>
      </div>
      <span class="material-symbols-sharp my-2 laptop:my-0"> emergency </span>
      <div class="footerList flex flex-col gap-y-1 laptop:gap-y-0 laptop:flex-row laptop:gap-x-6">
        <RouterLink to="/About" class="hover:text-standard duration-200">關於我們</RouterLink>
        <a href="#" class="hover:text-standard duration-200">產品資訊</a
        ><a href="#" class="hover:text-standard duration-200">常見問題</a
        ><a href="#" class="hover:text-standard duration-200">隱私政策</a>
        <p class="tracking-[2px] laptop:hidden">Copyright © 2023 Hexschool.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
