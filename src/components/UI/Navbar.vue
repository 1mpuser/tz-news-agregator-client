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
				<form class="d-flex" role="search">
					<button class="btn btn-outline-success" type="submit">Login</button>
					<button class="btn btn-outline-success" type="submit">
						Registration
					</button>
				</form>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
export default {
	name: 'navbar',
};
</script>

<style scoped></style>
