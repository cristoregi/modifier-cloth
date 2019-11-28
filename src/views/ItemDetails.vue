<template>
	<div class="flex justify-center p-16">
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
				<div class="flex justify-center">
					<span class="block font-semibold text-xl">Boost Now!</span>
				</div>
			</div>
		</div>
		<div class="p-8">
			<h2 class="text-3xl">Boost Now!</h2>
			<h2 class="text-sm">Boost Now! is the premium clothing for you</h2><br>
			<h2 class="text-2xl text-blue-800">Rp 79.000</h2><br>
			<input type="radio" name="Small">Small 
			<input type="radio" name="Medium">Medium 
			<input type="radio" name="Large">Large 
			<input type="radio" name="Extra Large">Extra Large <br> <br>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="Amount"><br><br>
			<router-link
				class="nav-link"
				:to="{ name: 'cart' }"
				active-class="active"
			>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Add to cart
				</button>			
			</router-link>
		</div>
	</div>
</template>