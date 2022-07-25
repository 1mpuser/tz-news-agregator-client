<template>
	<div class="dialog" v-if="show" @click.stop="hideDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// interface IModalWindow {
// 	isShown?: boolean;
// 	tmpAuthor: string;
// 	tmpTitle: string;
// 	tmpText: string;
// 	tmpDateOfCreate: string;
// }
export default defineComponent({
	name: 'modal-window',
	props: {
		show: { type: Boolean, required: true },
	},
	methods: {
		hideDialog() {
			this.$emit('changevisible', false);
		},
	},
	// props: {
	// 	// show: {
	// 	// 	type: Boolean,
	// 	// 	default: false,
	// 	// },

	// 	author: {
	// 		required: true,
	// 		type: String,
	// 	},
	// 	title: {
	// 		required: true,
	// 		type: String,
	// 	},
	// 	text: {
	// 		required: true,
	// 		type: String,
	// 	},
	// 	dateOfCreate: {
	// 		required: true,
	// 		type: String,
	// 	},
	// },
	// data(): IModalWindow {
	// 	return {
	// 		//isShown: this.show,
	// 		tmpTitle: this.title,
	// 		tmpAuthor: this.title,
	// 		tmpText: this.text,
	// 		tmpDateOfCreate: this.dateOfCreate,
	// 	};
	// },
});
</script>

<style scoped>
.dialog {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	display: flex;
	z-index: 99;
}
.dialog__content {
	margin: auto;
	background: white;
	border-radius: 12px;
	min-height: 50px;
	min-width: 300px;
	padding: 20px;
}
</style>
