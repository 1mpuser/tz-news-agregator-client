<template>
	<div class="form__group">
		<input type="input" class="form__field" name="Title" placeholder="Title" />
		<label for="Title" class="form__label">Name</label>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'my-input',
	props: {
		placeholder: {
			type: String,
			required: true,
		},
	},
	mounted() {
		// const elem = this.$el;
		// const children = elem.children;
		// const arr = [children[0], children[1]];
		// const input = arr[0];
		// const label = arr[1];
		// label.for = this.placeholder;
		// input.placeholder = this.placeholder;
		// console.log(input);
	},
});
</script>

<style scoped>
.form__group {
	position: relative;
	padding: 15px 0 0;
	margin-top: 10px;
	width: 50%;
}
.form__field {
	font-family: inherit;
	width: 80%;
	border: 0;
	border-bottom: 2px solid #9b9b9b;
	outline: 0;
	font-size: 1.3rem;
	color: #fff;
	padding: 7px 0;
	background: transparent;
	transition: border-color 0.2s;
}
.form__field::placeholder {
	color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
	font-size: 1.3rem;
	cursor: text;
	top: 20px;
}
.form__label {
	position: absolute;
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: #9b9b9b;
}
.form__field:focus {
	padding-bottom: 6px;
	font-weight: 700;
	border-width: 3px;
	border-image: linear-gradient(to right, #11998e, #38ef7d);
	border-image-slice: 1;
}
.form__field:focus ~ .form__label {
	position: absolute;
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: #11998e;
	font-weight: 700;
}
.form__field:required,
.form__field:invalid {
	box-shadow: none;
}
body {
	font-family: 'Poppins', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-size: 1.5rem;
	background-color: #222222;
}
</style>
