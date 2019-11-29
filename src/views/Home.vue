<template>
  <div class="home bg-gray-800">
    <div 
      class="bg-fixed" 
      style="background-image"
    ><img src="@/assets/images/home2.png">
    <div class="flex justify-center pt-16">
      <h2 class="py-2 px-2 text-md text-white">Have an account?</h2>
      <router-link
        class="nav-link"
        :to="{ name: 'login' }"
        active-class="active"
      >
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
          Sign In
        </button>
      </router-link>
    </div>
    </div>
    <div class="flex justify-center">
      <div class="p-24 flex flex-wrap items-center justify-center">
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
            <img class="relative w-full" src="@/assets/images/men.jpg" alt="">
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <!-- <span class="block opacity-75 -mb-1">T-shirt</span> -->
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">T-Shirt</span>
              <router-link
                class="nav-link"
                :to="{ name: 'tshirts' }"
                active-class="active"
              >
                <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Details</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
            <img class="relative w-full" src="@/assets/images/cewek.jpg" alt="">
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <!-- <span class="block opacity-75 -mb-1">Outdoor</span> -->
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Shirt</span>
              <router-link
                class="nav-link"
                :to="{ name: 'shirts' }"
                active-class="active"
              >
                <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Details</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
            <img class="relative w-50" src="@/assets/images/children.jpg" alt="">
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <!-- <span class="block opacity-75 -mb-1">Jacket</span> -->
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Jacket</span>
              <router-link
                class="nav-link"
                :to="{ name: 'jackets' }"
                active-class="active"
              >
                <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Details</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
