<template>
  <!-- banner -->
  <section
    class="bg-gradient-to-b from-standard to-deepest laptop:bg-homeBanner laptop:bg-cover bg-no-repeat border-t border-white z-10"
  >
    <div
      class="text text-white px-3 laptop:px-20 flex flex-col items-start laptop:grid grid-cols-4 gap-x-8 laptop:items-end first-letter pt-7 pb-8 laptop:py-14 desktop:pb-0"
    >
      <div class="hidden laptop:block">
        <p class="border-b pb-1 font-700">最新消息！新版本 v15.4 釋出，搶先體驗！</p>
      </div>
      <div
        class="text col-span-2 flex flex-col justify-center items-center order-2 self-center laptop:order-none"
      >
        <img
          src="/public/images/circle.png"
          alt="circle"
          class="w-[196px] h-[196px] my-8 laptop:mb-14 animate-spin-slow"
        />
        <div class="desktop:-mb-[140px] w-full">
          <p class="font-shrik text-xl/normal desktop:text-[32px]/normal flex justify-between">
            <span>A</span><span>L</span><span>P</span><span>H</span><span>A</span><span>B</span
            ><span>O</span><span>X</span><span>+</span>
          </p>
          <p class="tracking-[16px] text-center">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
        </div>
      </div>
      <div class="flex flex-col w-full laptop:h-full order-1 laptop: laptop:order-none">
        <p class="font-700 pt-1 border-t">ALPHABOX+ STUDIO</p>
        <p class="text-[#AD93CF] mt-auto hidden laptop:block">Copyright © 2023 Hexschool.</p>
      </div>
    </div>
    <!-- pictures -->
    <div
      class="px-3 laptop:px-20 picture grid tablet:grid-cols-2 desktop:grid-cols-4 auto-rows-auto gap-y-4 tablet:gap-8 desktop:gap-y-0 items-end text-white"
    >
      <div class="col-span-4 h-20 hidden desktop:block"></div>
      <div class="relative">
        <img
          src="/public/images/diane.png"
          alt="diane"
          class="shadow-standard shadow-banner -mb-24 hidden desktop:block"
        />
        <img
          src="/public/images/diane_square1.png"
          alt="diane"
          class="shadow-standard shadow-banner desktop:hidden"
        />
        <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">Diane</p>
      </div>
      <div class="relative">
        <img src="/public/images/felix.png" alt="felix" class="-mb-24 hidden desktop:block" />
        <img src="/public/images/felix_square1.png" alt="felix" class="desktop:hidden" />
        <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">felix</p>
      </div>
      <div class="relative">
        <img src="/public/images/karina.png" alt="karina" class="-mb-24 hidden desktop:block" />
        <img src="/public/images/karina_square1.png" alt="karina" class="desktop:hidden" />
        <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">Karina</p>
      </div>
      <div class="relative">
        <img src="/public/images/vito.png" alt="vito" class="-mb-24 hidden desktop:block" />
        <img
          src="/public/images/vito_square1.png"
          alt="vito"
          class="desktop:hidden -mb-[104px] tablet:mb-0"
        />
        <p class="font-shrik absolute top-4 w-full text-center text-[32px]/normal">Vito</p>
      </div>
    </div>
  </section>
  <!-- intro -->
  <section
    class="px-3 pt-[136px] pb-[60px] laptop:px-20 laptop:py-16 desktop:pt-36 desktop:pb-[52px] laptop:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark to-black relative -z-10"
  >
    <img
      src="/public/images/mobile/carousel_mobile.png"
      alt="carousel"
      class="blur -z-20 laptop:w-1/2 absolute left-0 top-0 w-full h-full object-cover"
    />
    <div class="bg-gradient-to-r from-standard to-deepest h-10 mb-1"></div>
    <div
      class="introText text-white text-2xl/normal laptop:text-5xl/normal tracking-[24px] laptop:tracking-[48px]"
    >
      <h3 class="">什麼是</h3>
      <h3>ALPHABOX+</h3>
    </div>
    <div class="showCase flex justify-center pt-12 pb-8">
      <button type="button">
        <img src="/public/images/arrow_prev.png" alt="prev" class="arrow hidden laptop:block" />
      </button>
      <div class="showCase laptop:mx-[52px] relative text-white">
        <img
          src="/public/images/carousel.png"
          alt="carousel"
          class="hidden laptop:block object-cover"
        />
        <img
          src="/public/images/mobile/carousel_mobile.png"
          alt="carousel"
          class="laptop:hidden object-cover"
        />
        <div
          class="showCaseText absolute laptop:right-0 laptop:top-1/3 bottom-0 px-4 pb-4 laptop:text-end"
        >
          <p class="font-shrik text-[64px]/normal">01</p>
          <p class="text-2xl/normal tracking-[24px] mb-2">立體投影技術</p>
          <p>透過高科技立體投影技術，讓您感受真實的科技世界。</p>
        </div>
      </div>
      <button type="button">
        <img src="/public/images/arrow_next.png" alt="next" class="arrow hidden laptop:block" />
      </button>
    </div>
    <div class="bg-gradient-to-l from-standard to-deepest h-10"></div>
  </section>
  <!-- news -->
  <section
    class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark to-black relative"
  >
    <div class="container text-white pt-[60px] pb-20 laptop:pt-40 laptop:pb-10 flex flex-col">
      <h3
        class="text-[40px]/normal tracking-[40px] laptop:text-5xl/normal laptop:tracking-[48px] pb-10 text-center laptop:text-start"
      >
        最新消息
      </h3>
      <div class="grid grid-cols-1 laptop:grid-cols-2 laptop:auto-rows-auto">
        <div class="laptop:col-span-2 border-y py-10 px-4">
          <h4 class="tracking-[16px] flex pb-2">
            <span class="material-symbols-outlined mr-4"> emergency </span>2023.06.30
          </h4>
          <p class="text-xl/normal tracking-[20px] pb-3">產品升級公告</p>
          <p class="flex items-start justify-between flex-col laptop:flex-row">
            榮幸地宣布，ALPHABOX+
            已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。<br />歡迎您了解本次升級帶來的更為卓越的性能！<a
              href="#"
              class="group"
              ><img
                src="/public/images/arrow_next.png"
                alt="arrow"
                class="mt-3 laptop:mt-0 w-[196px] h-6 group-hover:-scale-x-100 group-hover:brightness-50 duration-200"
            /></a>
          </p>
        </div>
        <div class="border-b py-10 laptop:border-r px-4">
          <h4 class="tracking-[16px] flex pb-2">
            <span class="material-symbols-outlined mr-4"> emergency </span>2023.06.30
          </h4>
          <p class="text-xl/normal tracking-[20px] pb-3">限時優惠活動</p>
          <div>
            <p class="flex pb-3">
              為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+
              的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！
            </p>
            <a href="#" class="group"
              ><img
                src="/public/images/arrow_next.png"
                alt="arrow"
                class="w-[86px] group-hover:-scale-x-100 group-hover:brightness-50 duration-200"
            /></a>
          </div>
        </div>
        <div class="border-b py-10 px-4">
          <h4 class="tracking-[16px] flex pb-2">
            <span class="material-symbols-outlined mr-4"> emergency </span>2023.04.18
          </h4>
          <p class="text-xl/normal tracking-[20px] pb-3">新功能上線</p>
          <div>
            <p class="flex pb-3">
              為使您的 ALPHABOX+
              更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。
            </p>
            <a href="#" class="group"
              ><img
                src="/public/images/arrow_next.png"
                alt="arrow"
                class="w-[86px] group-hover:-scale-x-100 group-hover:brightness-50 duration-200"
            /></a>
          </div>
        </div>
      </div>
      <a href="#" class="group self-center mt-10 mb-0 laptop:my-[76px]"
        ><img src="/public/images/more.png" alt="more" class="group-hover:scale-105 duration-200"
      /></a>
      <p class="self-end hidden laptop:block">
        為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料
      </p>
    </div>
  </section>
  <!-- share -z-20-->
  <section
    class="share bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black to-dark relative overflow-hidden pt-[60px] pb-20 laptop:pt-40 laptop:pb-10"
  >
    <!-- bg text opacity -->
    <p
      class="text-white text-opacity-5 text-9xl/normal laptop:text-[400px]/normal font-shrik absolute -bottom-[70px] -left-[318px] laptop:-bottom-[233px] laptop:-left-[307px]"
    >
      ALPHABOX+ALPHABOX+ALPHABOX+ALPHABOX+ALPHABOX+
    </p>
    <div class="container text-white">
      <div class="shareTitle flex flex-wrap flex-col laptop:flex-row laptop:items-center">
        <h3
          class="text-[40px]/normal tracking-[40px] laptop:text-5xl/normal laptop:tracking-[48px] self-start mb-4 laptop:order-1"
        >
          使用分享
        </h3>
        <div
          class="flex items-center text-base tracking-normal laptop:order-3 laptop:w-full mb-6 laptop:mb-0"
        >
          01<span class="material-symbols-sharp"> horizontal_rule </span>04
        </div>
        <p class="text-base tracking-normal laptop:ml-10 desktop:ml-[214px] laptop:order-2">
          展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。
        </p>
      </div>
      <div class="material-symbols-outlined mt-10">emergency</div>
      <!-- comment -->
      <div
        class="shareComment pt-6 pb-0 laptop:pb-12 flex flex-col items-center laptop:flex-row gap-y-6 laptop:gap-y-0 laptop:gap-x-6 overflow-x-auto overflow-y-hidden"
      >
        <div
          class="flex-shrink-0 p-6 laptop:p-10 bg-dark text-white flex flex-col laptop:w-[416px] h-[351px] tablet:h-[416px]"
        >
          <p class="flex items-center mb-8">
            Zona<span><img src="/public/images/dot.png" alt="dot" class="w-2 mx-1" /></span>Taipei
          </p>
          <p class="">
            ALPHABOX+
            真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。
          </p>
          <p class="flex items-center mt-auto">
            <img src="/public/images/dot.png" alt="dot" class="" /><img
              src="/public/images/dot.png"
              alt="dot"
              class="mx-4"
            />ALPHABOX+ Dianne
          </p>
        </div>
        <div
          class="flex-shrink-0 p-6 laptop:p-10 bg-white text-black flex flex-col laptop:w-[416px] h-[351px] tablet:h-[416px]"
        >
          <p class="flex items-center mb-8">
            Lin<span
              ><img src="/public/images/dot.png" alt="dot" class="w-2 mx-1 brightness-0" /></span
            >Chiayi
          </p>
          <p class="">
            非常推薦！它的畫面清晰度超高，真的讓我驚艷不已。而且它還可以和我互動，感覺就像是有個真實的朋友在身邊。
          </p>
          <p class="flex items-center mt-auto">
            <img src="/public/images/dot.png" alt="dot" class="brightness-0" /><img
              src="/public/images/dot.png"
              alt="dot"
              class="mx-4 brightness-0"
            />ALPHABOX+ Felix
          </p>
        </div>
        <div
          class="flex-shrink-0 p-6 laptop:p-10 bg-dark text-white flex flex-col laptop:w-[416px] h-[351px] tablet:h-[416px]"
        >
          <p class="flex items-center mb-8">
            云<span><img src="/public/images/dot.png" alt="dot" class="w-2 mx-1" /></span>Taipei
          </p>
          <p class="">
            我之前一直在找能陪伴我度過空虛時光的好夥伴，直到遇見
            ALPHABOX+。它不僅僅是一個機器人，更像是一個真正的朋友，陪著我分享喜怒哀樂。真的很讚！
          </p>
          <p class="flex items-center mt-auto">
            <img src="/public/images/dot.png" alt="dot" class="" /><img
              src="/public/images/dot.png"
              alt="dot"
              class="mx-4"
            />ALPHABOX+ Dianne
          </p>
        </div>
        <div
          class="flex-shrink-0 p-6 laptop:p-10 bg-white text-black flex flex-col laptop:w-[416px] h-[351px] tablet:h-[416px]"
        >
          <p class="flex items-center mb-8">
            Zichi<span
              ><img src="/public/images/dot.png" alt="dot" class="w-2 mx-1 brightness-0" /></span
            >Kaohsiung
          </p>
          <p class="">
            讓我在忙碌的工作之餘，也能找到休閒的樂趣。它的互動功能非常有趣，讓我在短短的時間內就愛上了它。給它一百分！
          </p>
          <p class="flex items-center mt-auto">
            <img src="/public/images/dot.png" alt="dot" class="brightness-0" /><img
              src="/public/images/dot.png"
              alt="dot"
              class="mx-4 brightness-0"
            />ALPHABOX+ Dianne
          </p>
        </div>
      </div>
      <p class="hidden laptop:block laptop:mt-[136px]">
        若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。
      </p>
    </div>
  </section>
  <!-- contact -->
  <section class="contact bg-dark pt-[60px] pb-20 laptop:py-36">
    <div class="container grid laptop:grid-cols-12">
      <div class="text-white col-span-5">
        <h3
          class="text-[40px]/normal tracking-[27px] laptop:text-5xl/normal laptop:tracking-[48px] mb-5"
        >
          聯絡我們
        </h3>
        <div class="flex relative mb-9 laptop:mb-[54px]">
          <img src="/public/images/dot.png" alt="dot" class="w-3 h-3" />
          <span class="decoration"></span>
        </div>
        <p class="mb-1">讓科技成為您的最佳夥伴</p>
        <p>立即體驗神奇功能並享限時優惠！</p>
      </div>
      <div class="col-span-7">
        <span class="material-symbols-sharp text-white mt-6 laptop:mt-0 mb-4"> emergency </span>
        <form class="flex flex-col">
          <div class="relative mb-4">
            <input
              type="text"
              id="email"
              class="block px-4 py-2 w-full text-xl/normal text-gray-900 bg-white border-1 border-gray-300 appearance-none focus:outline-none focus:pt-5 focus:ring-0 peer duration-300"
              placeholder=" "
            />
            <label
              for="email"
              class="absolute text-xl/normal text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] rounded-t-lg px-2 peer-focus:px-2 peer-focus:text-standard peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:left-0 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >EMAIL</label
            >
          </div>
          <div class="relative mb-4">
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="3"
              class="block px-4 py-2 w-full text-xl/normal text-gray-900 bg-white border-1 border-gray-300 appearance-none focus:outline-none focus:pt-5 focus:ring-0 peer duration-300"
            ></textarea>
            <label
              for="comment"
              class="absolute text-2xl/normal text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] rounded-t-lg px-2 peer-focus:px-2 peer-focus:text-standard peer-focus:text-xl/normal peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:left-0 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >COMMENT</label
            >
          </div>
          <button
            type="button"
            class="text-white bg-standard py-2 w-full laptop:w-3/5 self-end flex justify-center hover:bg-white hover:text-black duration-200"
          >
            <span class="material-symbols-sharp mr-1"> point_scan </span>送出
          </button>
        </form>
      </div>
    </div>
  </section>
  <!-- display -->
  <section>
    <div class="grid grid-cols-2 gap-y-[1px] desktop:grid-cols-4 gap-x-[1px] default:gap-y-0">
      <div class="bg-homeDiane bg-cover bg-top bg-no-repeat">
        <a
          href="#"
          class="bg-black block text-white duration-300 hover:bg-opacity-50 py-6 laptop:pt-6 laptop:pb-14 h-full group"
        >
          <div class="displayTitle flex flex-col items-center">
            <h4 class="text-[128px]/normal laptop:text-[400px]/normal font-saira">1</h4>
            <p
              class="text-2xl/normal mt-4 laptop:mt-5 laptop:text-[32px]/normal font-shrik mb-[18px]"
            >
              Diane
            </p>
          </div>
          <div
            class="displayContent flex flex-col items-start px-3 laptop:px-[39px] desktop:items-end desktop:flex-row"
          >
            <p class="mr-10 font-700">知識型<br />學術領導/知識分享/智能問答</p>
            <img
              src="/public/images/arrow.png"
              alt="gotoDiane"
              class="desktop:w-[155px] object-contain h-6 group-hover:-scale-x-100 duration-300"
            />
          </div>
        </a>
      </div>
      <div class="bg-homeFelix bg-cover bg-top bg-no-repeat">
        <a
          href="#"
          class="bg-black block text-white duration-300 hover:bg-opacity-50 py-6 laptop:pt-6 laptop:pb-14 h-full group"
        >
          <div class="displayTitle flex flex-col items-center">
            <h4 class="text-[128px]/normal laptop:text-[400px]/normal font-saira">2</h4>
            <p
              class="text-2xl/normal mt-4 laptop:mt-5 laptop:text-[32px]/normal font-shrik mb-[18px]"
            >
              Felix
            </p>
          </div>
          <div
            class="displayContent flex flex-col items-start px-3 laptop:px-[39px] desktop:items-end desktop:flex-row"
          >
            <p class="mr-10 font-700">娛樂型<br />音樂播放/語音互動/遊戲陪伴</p>
            <img
              src="/public/images/arrow.png"
              alt="gotoFelix"
              class="desktop:w-[155px] object-contain h-6 group-hover:-scale-x-100 duration-300"
            />
          </div>
        </a>
      </div>
      <div class="bg-homeKarina bg-cover bg-top bg-no-repeat">
        <a
          href="#"
          class="bg-black block text-white duration-300 hover:bg-opacity-50 py-6 laptop:pt-6 laptop:pb-14 h-full group"
        >
          <div class="displayTitle flex flex-col items-center">
            <h4 class="text-[128px]/normal laptop:text-[400px]/normal font-saira">3</h4>
            <p
              class="text-2xl/normal mt-4 laptop:mt-5 laptop:text-[32px]/normal font-shrik mb-[18px]"
            >
              Karina
            </p>
          </div>
          <div
            class="displayContent flex flex-col items-start px-3 laptop:px-[39px] desktop:items-end desktop:flex-row"
          >
            <p class="font-700 mr-10">生活型<br />健康提醒/日程安排/智能家居</p>
            <img
              src="/public/images/arrow.png"
              alt="gotoKarina"
              class="desktop:w-[155px] object-contain h-6 group-hover:-scale-x-100 duration-300"
            />
          </div>
        </a>
      </div>
      <div class="bg-homeVito bg-cover bg-top bg-no-repeat">
        <a
          href="#"
          class="bg-black block text-white duration-300 hover:bg-opacity-50 py-6 laptop:pt-6 laptop:pb-14 h-full group"
        >
          <div class="displayTitle flex flex-col items-center">
            <h4 class="text-[128px]/normal laptop:text-[400px]/normal font-saira">4</h4>
            <p
              class="text-2xl/normal mt-4 laptop:mt-5 laptop:text-[32px]/normal font-shrik mb-[18px]"
            >
              Vito
            </p>
          </div>
          <div
            class="displayContent flex flex-col items-start px-3 laptop:px-[39px] desktop:items-end desktop:flex-row"
          >
            <p class="mr-10 font-700">情感型<br />情感識別/心情分析/心靈支持</p>
            <img
              src="/public/images/arrow.png"
              alt="gotoVito"
              class="desktop:w-[155px] object-contain h-6 group-hover:-scale-x-100 duration-300"
            />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped></style>
