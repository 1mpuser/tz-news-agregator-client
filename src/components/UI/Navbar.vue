<template>
	<div class="navbar">
		<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<div class="container-fluid">
				<router-link class="navbar-brand" to="/">News</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<form class="d-flex" role="search" @submit.prevent>
					<button
						class="btn btn-outline-success"
						v-if="!$store.state.isAuth"
						type="submit"
						@click="resolveToLogPage"
					>
						Login
					</button>
					<button
						class="btn btn-outline-success"
						v-if="!$store.state.isAuth"
						type="submit"
						@click="resolveToRegPage"
					>
						Registration
					</button>
					<a class="navbar-brand" v-if="$store.state.isAuth">
						Hello, {{ $store.state.username }}</a
					>
					<button
						class="btn btn-outline-success"
						v-if="$store.state.isAuth"
						type="submit"
						@click="logOut"
					>
						Log out
					</button>
				</form>
			</div>
		</nav>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import store from '../../store/index';
import { MutationTypes } from '../../store/types';
export default defineComponent({
	name: 'navbar',
	methods: {
		resolveToLogPage() {
			this.$router.push('/login');
		},
		resolveToRegPage() {
			this.$router.push('/registration');
		},
		logOut() {
			store.commit(MutationTypes.LOG_OUT);
			localStorage.removeItem('token');
		},
	},
});
</script>

<style scoped></style>
