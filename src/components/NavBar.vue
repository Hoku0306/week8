<template>
  <!-- positionBorder -->
  <section class="navbar bg-standard py-4 text-white">
    <div class="">
      <div class="container relative flex laptop:justify-between items-center">
        <RouterLink to="/"
          ><h1 class="text-2xl/normal tablet:text-[32px]/normal font-shrik">
            ALPHABOX+
          </h1></RouterLink
        >
        <!-- laptop nav list -->
        <ul class="hidden desktop:flex space-x-10">
          <li><a href="#" class="hover:text-lg duration-500">產品</a></li>
          <li><RouterLink to="/About">關於我們</RouterLink></li>
          <li><a href="#" class="hover:text-lg duration-500">最新消息</a></li>
          <li><a href="#" class="hover:text-lg duration-500">FAQ</a></li>
          <li><a href="#" class="hover:text-lg duration-500">聯絡我們</a></li>
        </ul>

        <ul class="hidden tablet:flex items-center space-x-6 ml-auto desktop:ml-0">
          <li><a href="#" class="hover:text-lg duration-500">註冊</a></li>
          <li><a href="#" class="hover:text-lg duration-500">登入</a></li>
          <li>
            <a
              href="#"
              class="flex items-center bg-white text-black rounded py-2 px-4 hover:bg-black hover:text-white"
              ><span class="material-symbols-outlined mr-1"> point_scan </span>訂閱</a
            >
          </li>
        </ul>
        <a href="#" class="desktop:hidden flex ml-auto tablet:ml-6"
          ><span class="material-symbols-outlined hamburger"> menu </span></a
        >

        <!-- tablet nav list -->
        <ul
          class="navToggle absolute bg-gradient-to-b from-standard to-deepest text-center space-y-2"
        >
          <li><a href="#" class="block py-2 hover:text-lg duration-500">產品</a></li>
          <li><a href="#" class="block py-2 hover:text-lg duration-500">關於我們</a></li>
          <li><a href="#" class="block py-2 hover:text-lg duration-500">最新消息</a></li>
          <li><a href="#" class="block py-2 hover:text-lg duration-500">FAQ</a></li>
          <li><a href="#" class="block py-2 hover:text-lg duration-500">聯絡我們</a></li>
          <ul class="tablet:hidden">
            <li><a href="#" class="block py-2 hover:text-lg duration-500">註冊</a></li>
            <li><a href="#" class="block py-2 hover:text-lg duration-500">登入</a></li>
            <li>
              <a
                href="#"
                class="inline-flex items-center bg-white text-black rounded py-2 px-4 hover:bg-black hover:text-white"
                ><span class="material-symbols-outlined mr-1"> point_scan </span>訂閱</a
              >
            </li>
          </ul>
        </ul>
      </div>
    </div>

    <!-- laptop banner -->
    <!-- <div class="hidden laptop:grid laptop:grid-cols-4 px-20 gap-x-8 items-end pt-14">
        <div>
          <p class="border-b mb-14 pb-1 font-700">最新消息！新版本 v15.4 釋出，搶先體驗！</p>
          <div class="relative">
            <img src="/public/images/diane.png" alt="diane" class="shadow-standard shadow-banner" />
            <p
              class="font-shrik absolute top-4 w-full text-center text-[32px]/normal tablet:text-xl/normal desktop:text-[32px]/normal"
            >
              Diane
            </p>
          </div>
        </div>
        <div class="col-span-2">
          <div class="text flex flex-col justify-center items-center mb-6">
            <img src="/public/images/circle.png" alt="circle" class="w-[196px] h-[196px] mb-14" />
            <p
              class="font-shrik text-[32px]/normal tablet:text-xl/normal desktop:text-[32px]/normal flex justify-between w-full"
            >
              <span>A</span><span>L</span><span>P</span><span>H</span><span>A</span><span>B</span
              ><span>O</span><span>X</span><span>+</span>
            </p>
            <p class="tracking-[16px]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
          </div>
          <div class="grid grid-cols-2 gap-x-8">
            <div class="relative">
              <img src="/public/images/felix.png" alt="felix" />
              <p
                class="font-shrik absolute top-4 w-full text-center text-[32px]/normal tablet:text-xl/normal desktop:text-[32px]/normal"
              >
                felix
              </p>
            </div>
            <div class="relative">
              <img src="/public/images/karina.png" alt="karina" />
              <p
                class="font-shrik absolute top-4 w-full text-center text-[32px]/normal tablet:text-xl/normal desktop:text-[32px]/normal"
              >
                Karina
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full">
          <p class="font-700 pt-1 border-t mb-auto">ALPHABOX+ STUDIO</p>
          <p class="text-[#AD93CF]">Copyright © 2023 Hexschool.</p>
          <div class="relative mt-14">
            <img src="/public/images/vito.png" alt="vito" />
            <p
              class="font-shrik absolute top-4 w-full text-center text-[32px]/normal tablet:text-xl/normal desktop:text-[32px]/normal"
            >
              Vito
            </p>
          </div>
        </div>
      </div> -->
    <!-- tablet banner  -->
    <!-- <div class="bg-gradient-to-b from-standard to-deepest laptop:hidden">
        <div class="container pt-[28px]"> -->
    <!-- text -->
    <!-- <div class="flex flex-col items-center mb-[28px]">
            <p class="font-700 pt-1 border-t self-start w-full">ALPHABOX+ STUDIO</p>
            <img src="/public/images/circle.png" alt="circle" class="w-[196px] h-[196px] my-8" />
            <p class="font-shrik text-xl/normal tablet:text-2xl/normal flex justify-between w-full">
              <span>A</span><span>L</span><span>P</span><span>H</span><span>A</span><span>B</span
              ><span>O</span><span>X</span><span>+</span>
            </p>
            <p class="tablet:text-xl/normal tracking-[5px] laptop:tracking-[16px] text-center">
              擁抱未來科技，專屬您的3D立體投影陪伴機器人
            </p>
          </div> -->
    <!-- pictures -->
    <!-- <div class="space-y-4">
            <div class="relative">
              <img src="/public/images/diane_square1.png" alt="diane" class="" />
              <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">Diane</p>
            </div>
            <div class="relative">
              <img src="/public/images/felix_square1.png" alt="felix" />
              <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">felix</p>
            </div>
            <div class="relative">
              <img src="/public/images/karina_square1.png" alt="karina" />
              <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">Karina</p>
            </div>
            <div class="relative mt-14">
              <img src="/public/images/vito_square1.png" alt="vito" />
              <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">Vito</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'

onMounted(() => {
  const navBtn = document.querySelector('.hamburger')

  const toggleNav = () => {
    const navList = document.querySelector('.navToggle')
    navList.classList.toggle('active')
  }

  navBtn.addEventListener('click', toggleNav)
})
</script>
