<template>
	<div>
		<div class="flex item-strech h-full p-16 justify-center">
			<aside>
				<table class="table-fixed">
					<thead>
						<tr>
							<th class="border bg-gray-800 text-white px-16 py-2">Category</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border px-16 py-2">
								<router-link
									class="nav-link"
									:to="{ name: 'shop' }"
									active-class="active"
								>
									All
								</router-link>
							</td>
						</tr>
						<tr>
							<td class="border px-16 py-2">
								<router-link
									class="nav-link"
									:to="{ name: 'tshirts' }"
									active-class="active"
								>
									T-shirts
								</router-link>
							</td>
						</tr>
						<tr>
							<td class="border px-16 py-2 bg-gray-300">
								<router-link
									class="nav-link"
									:to="{ name: 'shirts' }"
									active-class="active"
								>
									Shirts
								</router-link>
							</td>
						</tr>
						<tr>
							<td class="border px-16 py-2">
								<router-link
									class="nav-link"
									:to="{ name: 'jackets' }"
									active-class="active"
								>
									Jackets
								</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</aside>
			<main>
				<h1 class="px-8">SHIRTS</h1>
				<div class="flex">
					<div class="flex-shrink-0 m-6 relative overflow-hidden bg-gray-800 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
            <img class="relative w-50" src="@/assets/images/Borneosia.png" alt="">
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <!-- <span class="block opacity-75 -mb-1">Jacket</span> -->
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Borneosia</span>
							<router-link
								class="nav-link"
								:to="{ name: 'details' }"
								active-class="active"
							>
              	<span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Rp 89.000</span>
							</router-link>
            </div>
          </div>
        </div>
				<div class="flex-shrink-0 m-6 relative overflow-hidden bg-gray-800 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
            <img class="relative w-50" src="@/assets/images/Imagination is myth.png" alt="">
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <!-- <span class="block opacity-75 -mb-1">Jacket</span> -->
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Imagination</span>
							<router-link
								class="nav-link"
								:to="{ name: 'details' }"
								active-class="active"
							>
              	<span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Rp 99.000</span>
							</router-link>
            </div>
          </div>
        </div>
				<div class="flex-shrink-0 m-6 relative overflow-hidden bg-gray-800 rounded-lg max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
            <img class="relative w-50" src="@/assets/images/Boost Now.png" alt="">
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <!-- <span class="block opacity-75 -mb-1">Jacket</span> -->
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Boost Now!</span>
              <router-link
								class="nav-link"
								:to="{ name: 'details' }"
								active-class="active"
							>
								<span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Rp 79.000</span>
							</router-link>
            </div>
          </div>
        </div>
				</div>
			</main>
		</div>
	</div>
</template>