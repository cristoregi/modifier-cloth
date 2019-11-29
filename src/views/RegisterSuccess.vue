<template>
	<div class="flex justify-center p-32">
		<div>
			<h1 class="text-5xl">Thank You!</h1>
			<h3 class="text-xl">Your have been registered successfully</h3>
			<router-link
				class="nav-link pr-8"
				:to="{ name: 'login' }"
				active-class="active"
			>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Sign In
				</button>			
			</router-link>
		</div>
	</div>
</template>