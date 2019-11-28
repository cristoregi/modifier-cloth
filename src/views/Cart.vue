<template>
	<div>
    <div class="flex h-full justify-center p-32">
			<table class="table-auto">
				<thead>
					<tr>
						<th class="border bg-gray-800 text-white px-4 py-2">Number</th>
						<th class="border bg-gray-800 text-white px-4 py-2">Image</th>
						<th class="border bg-gray-800 text-white px-4 py-2">Size</th>
						<th class="border bg-gray-800 text-white px-4 py-2">Quantity</th>
						<th class="border bg-gray-800 text-white px-4 py-2">Subtotal</th>
						<th class="border bg-gray-800 text-white px-4 py-2">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border px-4 py-2">1</td>
						<td class="border px-4 py-2">
							<img class="w-40" src="@/assets/images/Boost Now.png">
						</td>
						<td class="border px-4 py-2">M</td>
						<td class="border px-4 py-2">1</td>
						<td class="border px-4 py-2">RP 79.000</td>
						<td class="border px-4 py-2">
							<button
								type="button"
								class="btn"
								@click="showModal"
							> <i class="fas fa-times"></i>
							</button>

							<modal
								v-show="isModalVisible"
								@close="closeModal"
							/>
						</td>
					</tr>	
				</tbody> <br>
				<router-link
					class="nav-link pr-8"
					:to="{ name: 'shop' }"
					active-class="active"
				>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Continue Shopping
					</button>			
				</router-link>
				<div class="flex pt-6">
					<table class="table-auto">
						<thead>
							<tr>
								<th class="text-gray-800 py-2">CART TOTALS</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-gray-800 py-2">Total: </td>
								<td class="text-gray-800 py-2">Rp 79.000 </td>
							</tr>
						</tbody>
						<router-link
							class="nav-link pr-8"
							:to="{ name: 'checkout' }"
							active-class="active"
						>
							<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
								Checkout
							</button>	
						</router-link>
					</table>
					
				</div>
			</table>
		</div>
	</div>
</template>

<script>
import modal from '../components/Modal';

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