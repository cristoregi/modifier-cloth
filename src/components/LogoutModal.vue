<template>
	<div>
		<transition name="modal-fade">
			<div class="modal-backdrop">
				<div class="modal"
					role="dialog"
					aria-labelledby="modalTitle"
					aria-describedby="modalDescription"
				>
					<header
						class="modal-header"
						id="modalTitle"
					>
						<slot name="header">
							Logout
						</slot>
					</header>
					<section
						class="modal-body"
						id="modalDescription"
					>
						<slot name="body">
							You have succesfully logout
						</slot>
					</section>
					<footer class="modal-footer p-4">
						<slot name="footer">
							<router-link
								class="nav-link"
								:to="{ name: 'home' }"
								active-class="active"
							>
								<button
									type="button"
									class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
									@click="close"
									aria-label="Close modal"
								>
										Proceed
								</button>
							</router-link>
						</slot>
					</footer>
				</div>
			</div>
		</transition>	
	</div>
</template>

<script>
export default {
	name: 'modal',
	methods: {
		close() {
			this.$emit('close');
		},
	},
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
