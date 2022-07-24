<template>
	<div class="main">
		<news :news="newsItems" v-if="!isPostsLoading" />
		<div v-else>Downloading...</div>
	</div>
</template>

<script lang="ts">
import News from '../components/News.vue';
import axios from 'axios';
import NewsItem from '../components/NewsItem.vue';
import { INewsItem } from '../types/types';
import { defineComponent } from 'vue';
interface IData {
	newsItems: INewsItem[];
	isPostsLoading: boolean;
}

export default defineComponent({
	components: {
		NewsItem,
		News,
	},
	data(): IData {
		return {
			newsItems: [
				{
					author: 'Joe Dunne',
					dateOfCreate: '15th January 2022',
					img: 'http://localhost:8000/0db5438c-a9f3-43f0-b27c-3c8c3858a317.jpg',
					text: 'Pariatur enim nulla proident elit Lorem.',
					title:
						'Elit duis mollit sint adipisicing nostrud ad tempor enim occaecat.',
					_id: '48214y234184221',
				},
			],
			isPostsLoading: false,
		};
	},
	methods: {
		async fetchNews() {
			try {
				this.isPostsLoading = true;
				const { data } = await axios.get('http://localhost:8000/api/news');
				//const { data } = JSON.parse(String(json));
				this.newsItems.push(...data);
			} catch (error) {
				console.log(error);
			} finally {
				this.isPostsLoading = false;
			}
		},
	},
	mounted() {
		console.log('Works');
		this.fetchNews();
	},
});
</script>

<style scoped>
.main {
	margin-top: 15px;
}
</style>
