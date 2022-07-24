<template>
	<div class="registration-page">
		<h1>Registration page</h1>
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
				type="text"
				placeholder="Enter your password"
				class="input"
				v-bind:value="password"
				@input="inputPasswordHandler"
			/>
			<br />
			<div>
				<a class="butt" @click="signUp">Sign Up</a>
			</div>
		</form>
		<br />
		<div v-if="isLoading" class="content">
			<div class="loading">
				<p>Loading</p>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { registration } from '../http/newsApi';
import store from '../store/index';
import { MutationTypes } from '../store/types';
interface IData {
	isLoading: boolean;
	username: string;
	password: string;
}
export default defineComponent({
	name: 'login-page',
	data(): IData {
		return {
			isLoading: false,
			username: '',
			password: '',
		};
	},
	methods: {
		async signUp(): Promise<void> {
			try {
				this.isLoading = true;
				const data = await registration(this.username, this.password);
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
.registration-page {
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
.about {
	position: fixed;
	z-index: 10;
	bottom: 10px;
	right: 10px;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	transition: all 0.2s ease;
}
.about .bg_links {
	width: 40px;
	height: 40px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 100%;
	backdrop-filter: blur(5px);
	position: absolute;
}
.about .logo {
	width: 40px;
	height: 40px;
	z-index: 9;
	background-image: url(https://rafaelavlucas.github.io/assets/codepen/logo_white.svg);
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: 10px 7px;
	opacity: 0.9;
	transition: all 1s 0.2s ease;
	bottom: 0;
	right: 0;
}
.about .social {
	opacity: 0;
	right: 0;
	bottom: 0;
}
.about .social .icon {
	width: 100%;
	height: 100%;
	background-size: 20px;
	background-repeat: no-repeat;
	background-position: center;
	background-color: transparent;
	display: flex;
	transition: all 0.2s ease, background-color 0.4s ease;
	opacity: 0;
	border-radius: 100%;
}
.about .social.portfolio {
	transition: all 0.8s ease;
}
.about .social.portfolio .icon {
	background-image: url(https://rafaelavlucas.github.io/assets/codepen/link.svg);
}
.about .social.dribbble {
	transition: all 0.3s ease;
}
.about .social.dribbble .icon {
	background-image: url(https://rafaelavlucas.github.io/assets/codepen/dribbble.svg);
}
.about .social.linkedin {
	transition: all 0.8s ease;
}
.about .social.linkedin .icon {
	background-image: url(https://rafaelavlucas.github.io/assets/codepen/linkedin.svg);
}
.about:hover {
	width: 105px;
	height: 105px;
	transition: all 0.6s cubic-bezier(0.64, 0.01, 0.07, 1.65);
}
.about:hover .logo {
	opacity: 1;
	transition: all 0.6s ease;
}
.about:hover .social {
	opacity: 1;
}
.about:hover .social .icon {
	opacity: 0.9;
}
.about:hover .social:hover {
	background-size: 28px;
}
.about:hover .social:hover .icon {
	background-size: 65%;
	opacity: 1;
}
.about:hover .social.portfolio {
	right: 0;
	bottom: calc(100% - 40px);
	transition: all 0.3s 0s cubic-bezier(0.64, 0.01, 0.07, 1.65);
}
.about:hover .social.portfolio .icon:hover {
	background-color: #698fb7;
}
.about:hover .social.dribbble {
	bottom: 45%;
	right: 45%;
	transition: all 0.3s 0.15s cubic-bezier(0.64, 0.01, 0.07, 1.65);
}
.about:hover .social.dribbble .icon:hover {
	background-color: #ea4c89;
}
.about:hover .social.linkedin {
	bottom: 0;
	right: calc(100% - 40px);
	transition: all 0.3s 0.25s cubic-bezier(0.64, 0.01, 0.07, 1.65);
}
.about:hover .social.linkedin .icon:hover {
	background-color: #0077b5;
}
body {
	margin: 0;
}
.content {
	width: 100%;
	/* height: 100vh; */
	/* background-color: #171f30; */
	display: flex;
	justify-content: center;
	align-items: center;
}
.content .loading {
	width: 80px;
	height: 50px;
	position: relative;
}
.loading p {
	top: 0;
	padding: 0;
	margin: 0;
	color: #5389a6;
	font-family: 'Oxygen', sans-serif;
	animation: text 3.5s ease both infinite;
	font-size: 12px;
	letter-spacing: 1px;
}
@keyframes text {
	0% {
		letter-spacing: 1px;
		transform: translateX(0px);
	}
	40% {
		letter-spacing: 2px;
		transform: translateX(26px);
	}
	80% {
		letter-spacing: 1px;
		transform: translateX(32px);
	}
	90% {
		letter-spacing: 2px;
		transform: translateX(0px);
	}
	100% {
		letter-spacing: 1px;
		transform: translateX(0px);
	}
}
.content .loading span {
	background-color: #5389a6;
	border-radius: 50px;
	display: block;
	height: 16px;
	width: 16px;
	bottom: 0;
	position: absolute;
	transform: translateX(64px);
	animation: loading 3.5s ease both infinite;
}
.content .loading span:before {
	position: absolute;
	content: '';
	width: 100%;
	height: 100%;
	background-color: #a6dcee;
	border-radius: inherit;
	animation: loading2 3.5s ease both infinite;
}
@keyframes loading {
	0% {
		width: 16px;
		transform: translateX(0px);
	}
	40% {
		width: 100%;
		transform: translateX(0px);
	}
	80% {
		width: 16px;
		transform: translateX(64px);
	}
	90% {
		width: 100%;
		transform: translateX(0px);
	}
	100% {
		width: 16px;
		transform: translateX(0px);
	}
}
@keyframes loading2 {
	0% {
		transform: translateX(0px);
		width: 16px;
	}
	40% {
		transform: translateX(0%);
		width: 80%;
	}
	80% {
		width: 100%;
		transform: translateX(0px);
	}
	90% {
		width: 80%;
		transform: translateX(15px);
	}
	100% {
		transform: translateX(0px);
		width: 16px;
	}
}
</style>
