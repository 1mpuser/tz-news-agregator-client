<template>
	<div class="app">
		<navbar></navbar>
		<br />
		<br />
		<router-view></router-view>
	</div>
</template>

<style>
/* #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
} */
</style>

<script>
import axios from 'axios';
import NewsItem from './components/NewsItem.vue';
import { INewsItem } from './types/types';
import News from './components/News.vue';
import Vue from 'vue';
import Navbar from './components/UI/Navbar.vue';

export default {
	components: {
		Navbar,
	},
	// components: {
	// 	NewsItem,
	// 	News,
	// },
	// data() {
	// 	return {
	// 		newsItems: [
	// 			{
	// 				author: 'Joe Dunne',
	// 				date: '15th January 2022',
	// 				img: 'http://localhost:8000/0db5438c-a9f3-43f0-b27c-3c8c3858a317.jpg',
	// 				text: 'Pariatur enim nulla proident elit Lorem.',
	// 				title:
	// 					'Elit duis mollit sint adipisicing nostrud ad tempor enim occaecat.',
	// 				_id: '48214y234184221',
	// 			},
	// 		],
	// 		isPostsLoading: false,
	// 	};
	// },
	// methods: {
	// 	async fetchNews() {
	// 		try {
	// 			this.isPostsLoading = true;
	// 			const json = await axios.get('http://localhost:8000/api/news');
	// 			const news = JSON.parse(String(json));
	// 			this.newsItems.push(...news);
	// 		} catch (error) {
	// 			console.log(error);
	// 		} finally {
	// 			this.isPostsLoading = false;
	// 		}
	// 	},
	// },
	// mounted() {
	// 	console.log('Works');
	// 	this.fetchPosts();
	// },
};
</script>
