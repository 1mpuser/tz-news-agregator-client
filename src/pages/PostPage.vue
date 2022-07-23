<template>
	<div class="post-page">
		<h1>This is page with ID : {{ $route.params.id }}</h1>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'post-page',
});
</script>

<style scoped></style>
