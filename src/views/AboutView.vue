<template>
  <!-- banner -->
  <section
    class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark to-black pt-[60px] pb-20 laptop:py-40"
  >
    <div class="container text-white grid laptop:grid-cols-2 laptop:auto-rows-auto">
      <h2
        class="text-[40px]/normal tracking-[40px] mb-6 laptop:text-5xl/normal laptop:tracking-[48px] font-900 laptop:mb-8 laptop:col-span-2"
      >
        關於我們
      </h2>
      <p class="mb-8 laptop:mb-0">
        創立於2021年，我們的使命是將科技與人性化設計相結合，為您打造最佳的3D立體投影陪伴機器人。憑藉創新的技術、卓越的研發團隊以及對品質的追求，我們致力於為全球用戶提供最先進且易用的陪伴機器人。
      </p>
      <ul
        class="text-[14px]/normal laptop:text-base flex flex-col items-start gap-y-6 laptop:gap-y-0 laptop:items-end font-300"
      >
        <li>我們擁抱變革，追求技術創新，以提供更卓越的產品給全球用戶。</li>
        <li>我們始終以用戶需求為核心，致力於提供最滿意的產品與服務。</li>
        <li>我們堅持高品質標準，確保每一款產品都經過嚴格的測試與品質把控。</li>
        <li>我們重視團隊協作，鼓勵創意交流，共同為實現願景而努力。</li>
      </ul>
    </div>
    <img
      src="/public/images/about_us.png"
      alt="aboutUsBanner"
      class="mt-6 mb-4 laptop:mt-9 laptop:mb-11 hidden laptop:block"
    />
    <img
      src="/public/images/mobile/about_us_mobile.png"
      alt="aboutUsBanner"
      class="mt-6 mb-4 laptop:mt-9 laptop:mb-11 w-full laptop:hidden"
    />
    <div class="container flex justify-center">
      <div class="aboutText text-white laptop:w-2/3 flex flex-col laptop:flex-row items-center">
        <span class="material-symbols-sharp mb-[18px] laptop:mb-0 laptop:mr-9"> emergency </span>
        <p>
          我們相信科技的力量能夠改變人類生活。通過不斷創新與優化，我們期待為您打造一款具有高度智能、豐富功能且呈現真實感的3D立體投影陪伴機器人，讓科技成為您生活中真誠的夥伴。
        </p>
      </div>
    </div>
  </section>
  <!-- introduce -->
  <section class="pictures">
    <div class="images py-6 laptop:py-10 px-3 laptop:px-20 grid laptop:grid-cols-3 laptop:gap-x-10">
      <img src="/public/images/hand.png" alt="images" />
      <img src="/public/images/screen.png" alt="images" class="hidden laptop:block" />
      <img src="/public/images/box.png" alt="images" class="hidden laptop:block" />
    </div>
    <div
      class="content mx-3 laptop:pb-[92px] laptop:mx-20 grid laptop:grid-cols-2 border-b-[12px] border-black doubleBorder relative"
    >
      <h3
        class="laptop:col-span-2 laptop:mb-20 text-2xl/normal tracking-[24px] fsFix:text-5xl/normal desktop:text-8xl/normal desktop:tracking-[96px] text-center font-900"
      >
        ALPHABOX+
      </h3>
      <p class="mt-6 mb-4 laptop:my-0 laptop:w-10/12">
        我們提供多款3D立體投影陪伴機器人，涵蓋知識型、娛樂型、生活型和情感型等不同類別，以滿足您的各種需求。每款產品都經過精心設計，具備高度智能化、多功能和人性化操作等特點，讓您在日常生活中獲得更便利的陪伴體驗。
      </p>
      <p class="mb-9 laptop:mb-6 laptop:w-8/12 laptop:justify-self-end">
        此外，我們還提供完善的售後服務，包括<span class="highlight relative mx-3">產品保固</span
        >、<span class="highlight relative mx-3">技術支援</span>及<span
          class="highlight relative mx-3"
          >線上客服</span
        >
        協助，確保您在購買與使用過程中得到全面支持。
      </p>
    </div>
  </section>
  <!-- prospect -->
  <section class="container grid py-[60px] laptop:py-40 gap-y-4 laptop:grid-cols-12 laptop:gap-x-6">
    <div class="laptop:col-span-7">
      <img src="/public/images/meeting.png" alt="prospect" />
    </div>
    <p class="laptop:col-span-5 my-auto">
      展望未來，我們將繼續投入研發，引領3D立體投影陪伴機器人技術的發展。通過結合虛擬現實、擴增現實和人工智能等領域的最新技術，我們將努力為用戶帶來更多前所未有的創新體驗。
    </p>
  </section>
  <!-- hiring -->
  <section class="bg-black py-12 laptop:py-6">
    <div class="container flex flex-col gap-y-6 laptop:flex-row gap-x-6 justify-center">
      <p class="laptop:w-2/3 text-white">
        我們熱忱歡迎有志之士加入我們的團隊，共同創造更美好的未來。如果您對科技充滿熱情，並擁有相關領域的專業知識，請隨時查看我們的招聘信息或與我們聯繫，讓我們攜手共進。
      </p>
      <a
        href="#"
        class="bg-white text-black flex py-2 px-14 rounded items-center justify-center hover:bg-standard hover:text-white"
        ><span class="material-symbols-sharp mr-1"> point_scan </span>查看職缺</a
      >
    </div>
  </section>
</template>

<style></style>
