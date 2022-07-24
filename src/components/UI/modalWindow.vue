<template>
	<div class="modal fade">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content shadow">
				<div class="modal-header">
					<h5 class="modal-title">Please tell us your name</h5>
					<button type="button" id="close" class="close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body bg-image" style="background-image: url()">
					<form id="inputs" class="needs-validation">
						<div class="form-group mx-2 mb-3">
							<label for="firstname">First Name</label>
							<input
								type="text"
								class="form-control"
								id="firstname"
								placeholder="First name"
							/>
						</div>
						<div class="form-group mx-2">
							<label for="lastname">Last Name</label>
							<input
								type="text"
								class="form-control"
								id="lastname"
								placeholder="Last name"
							/>
						</div>
					</form>
				</div>
				<div class="modal-footer justify text-14">
					<button
						id="submit"
						type="submit"
						class="btn btn-primary"
						data-toggle="modal"
						data-target="#modalForm"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface IModalWindow {
	isShown?: boolean;
	tmpAuthor: string;
	tmpTitle: string;
	tmpText: string;
	tmpDateOfCreate: string;
}
export default defineComponent({
	name: 'modal-window',
	props: {
		// show: {
		// 	type: Boolean,
		// 	default: false,
		// },

		author: {
			required: true,
			type: String,
		},
		title: {
			required: true,
			type: String,
		},
		text: {
			required: true,
			type: String,
		},
		dateOfCreate: {
			required: true,
			type: String,
		},
	},
	data(): IModalWindow {
		return {
			//isShown: this.show,
			tmpTitle: this.title,
			tmpAuthor: this.title,
			tmpText: this.text,
			tmpDateOfCreate: this.dateOfCreate,
		};
	},
});
</script>

<style scoped>
h1 {
	font-size: 45px !important;
}

.justify {
	text-align: justify;
}

.text-14 {
	font-size: 14px;
}

/* MODAL */

.bg-image {
	background-position: center center;
	background-repeat: no-repeat;
}

.modal-content {
	border: none;
	border-radius: 0px !important;
}

.form-control {
	border-radius: 0px !important;
	border: 0px;
	border-bottom: 1.3px solid #0069d9;
}

.form-control:valid {
	border-color: #0069d9 !important;
}

.was-validated .form-control:valid:focus {
	border-color: #80bdff;
	box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.modal-footer {
	padding: 0;
}

@media (min-width: 425px) {
	.modal-content {
		margin: 0 50px;
	}
	.modal-header {
		padding-top: 20px !important;
		padding-bottom: 20px !important;
		padding-left: 35px;
	}
	.modal-body {
		padding-top: 50px !important;
		padding-bottom: 50px !important;
		margin: 0 10px;
	}
}

@media (max-width: 424px) {
	.modal-content {
		margin: 0 20px;
	}
	.modal-header {
		padding: 20px auto;
		padding-left: 18px;
	}
	.modal-title {
		font-size: 17px;
	}
	.modal-body {
		padding-top: 30px !important;
		padding-bottom: 30px !important;
		padding-left: 0px !important;
		padding-right: 0px !important;
		margin: 0 10px;
	}
}

.close {
	color: #0069d9da;
	opacity: 6;
	text-shadow: 1px 1px 1px rgb(228, 228, 228);
	outline: 0 !important;
}

.close:hover {
	color: #0069d9;
	opacity: 6;
}

.btn-primary {
	height: 100%;
	width: 100%;
	padding: 20px 0;
	color: white;
	background-color: #0069d9da;
	border-color: #0069d9d3;
	border-radius: 0px !important;
}

.btn-primary:hover {
	color: #fff;
	background-color: #0069d9;
	border-color: #0066d3;
}

.btn-primary:not(:disabled):not(.disabled):active {
	color: white;
	background-color: #0069d9;
	border-color: #0066d3;
}

.btn-primary:focus {
	box-shadow: 0 0 0 !important;
}

.shadow {
	border-radius: 0px !important;
	box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.808) !important;
}

/* SECTION */

.section {
	background-color: #0069d9c0;
	color: white;
}
</style>
