<template>
	<div  class="h-full">
		<nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
			<div class="flex items-center flex-shrink-0 text-white mr-6">
				<router-link 
					class="nav-link"
					:to="{ name: 'home' }"
				>
					<img width="130px" src="@/assets/images/modify.png">
				</router-link>
			</div>
			<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div class="text-md lg:flex-grow">
					<router-link
						class="nav-link"
						:to="{ name: 'shop' }"
						active-class="active"
					>
						<a class="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 text-white mr-4">
						Shop
						</a>
					</router-link>
					<!-- <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 text-white mr-4">
						About Us
					</a> -->
				</div>
				<div>
					<router-link
						class="nav-link"
						:to="{ name: 'cart' }"
						active-class="active"
					>
						<a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 text-white mr-4">
							<i class="fas fa-shopping-cart"></i>Cart
						</a>
					</router-link>
				</div>
				<div>
					<router-link
						class="nav-link"
						:to="{ name: 'profile' }"
						active-class="active"
					>
						<span class="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 text-white mr-4">
							<i class="fas fa-user"></i> Profile
						</span>
					</router-link>
				</div>
				
				<div>
					
						<span @click="showModal" class="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-400 text-white mr-4">
							<i class="fas fa-sign-out-alt"></i> Sign Out
						</span>

						<modal
								v-show="isModalVisible"
								@close="closeModal"
							/>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import modal from '../components/LogoutModal';

export default {
	components: {
		modal,
	},
	data () {
		return {
			isModalVisible: false,
		};
	},
	methods: {
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
		}
	},
}
</script>