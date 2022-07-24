<template>
	<div class="login-page">
		<h1>Login page</h1>
		<form @submit.prevent>
			<input
				type="text"
				placeholder="Enter your username"
				class="input"
				v-bind:value="username"
				@input="inputUsernameHandler"
			/>
			<br />
			<input
				type="password"
				placeholder="Enter your password"
				class="input"
				v-bind:value="password"
				@input="inputPasswordHandler"
			/>
			<br />
			<div>
				<a class="butt" @click="logination">Log In</a>
			</div>
		</form>
		<br />
		<div>
			<LoadingElem v-if="isLoading"></LoadingElem>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { login } from '../http/newsApi';
import store from '../store/index';
import { MutationTypes } from '../store/types';
import loadingElem from '../components/UI/loadingElem.vue';
import LoadingElem from '../components/UI/loadingElem.vue';
interface IData {
	isLoading: boolean;
	username: string;
	password: string;
}

export default defineComponent({
	name: 'login-page',
	components: {
		loadingElem,
		LoadingElem,
	},
	data(): IData {
		return {
			isLoading: false,
			username: '',
			password: '',
		};
	},
	methods: {
		async logination(): Promise<void> {
			try {
				this.isLoading = true;
				setTimeout(() => console.log(), 100000);
				let data = await login(this.username, this.password);
				store.commit(MutationTypes.LOG_IN);
				store.commit(MutationTypes.SET_USERNAME, this.username);
				this.username = '';
				this.password = '';
				this.$router.push('/');
			} catch (error: any) {
				alert(error.response.data.message);
			} finally {
				this.isLoading = false;
			}
		},
		inputPasswordHandler(event: Event) {
			const HTMLElem: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
			const value = HTMLElem.value;
			this.password = String(value);
		},
		inputUsernameHandler(event: Event) {
			const HTMLElem: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
			const value = HTMLElem.value;
			this.username = String(value);
		},
	},
});
</script>

<style scoped>
.login-page {
	text-align: center;
}
.input {
	width: 50%;
	padding: 5px 15px;
	margin: 5px 0;
	border: 1px solid steelblue;
}
.butt {
	cursor: pointer;
	text-align: center;
	font-size: 13px;
	text-decoration: none;
	font-weight: 700;
	padding: 3px 6px;
	background: #eaeef1;
	display: inline-block;
	width: 150px;
	/* margin: 20px auto; */
	/* margin-left: 20px; */
	background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
	border-radius: 5px;
	color: rgba(0, 0, 0, 0.6);
	text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2),
		inset 0 1px 2px rgba(255, 255, 255, 0.7);
}

.butt.hover {
	background: #fff;
}
.butt.active {
	background: #d0d3d6;
	background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
	box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2),
		inset 0 2px 5px rgba(0, 0, 0, 0.2), 0 1px rgba(255, 255, 255, 0.2);
}
@import url('https://fonts.googleapis.com/css?family=Oxygen:700&display=swap');

body {
	margin: 0;
}
</style>
