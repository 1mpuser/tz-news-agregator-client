<template>
	<div class="main">
		<div v-if="!isPostsLoading" style="text-align: center">
			<createPostButton v-if="$store.state.isAuth"
				>Create post</createPostButton
			>
			<modal-window
				:author="creatingItem.author"
				:text="creatingItem.text"
				:title="creatingItem.title"
				:date-of-create="creatingItem.dateOfCreate"
			></modal-window>
			<news :news="newsItems" />
		</div>
		<div v-else>
			<loadingElem></loadingElem>
		</div>
	</div>
</template>

<script lang="ts">
import { nanoid } from 'nanoid';
import { defineComponent } from 'vue';
import axios from 'axios';
import store from '../store/index';
import createPostButton from '../components/UI/createPostButton.vue';
import News from '../components/News.vue';
import NewsItem from '../components/NewsItem.vue';
import { INewsItem } from '../types/types';
import LoadingElem from '../components/UI/loadingElem.vue';
import modalWindow from '../components/UI/modalWindow.vue';
import formatedDate from '../scripts/formatedDate';
interface IData {
	newsItems: INewsItem[];
	isPostsLoading: boolean;
	modalWindowVisible: boolean;
	creatingItem: INewsItem;
}

export default defineComponent({
	components: {
		NewsItem,
		News,
		LoadingElem,
		createPostButton,
		modalWindow,
	},
	data(): IData {
		return {
			newsItems: [],
			isPostsLoading: false,
			modalWindowVisible: false,
			creatingItem: {
				title: '',
				author: store.state.username,
				dateOfCreate: formatedDate(),
				img: '',
				text: '',
				_id: nanoid(),
			},
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
		this.fetchNews();
	},
});
</script>

<style scoped>
.main {
	margin-top: 15px;
}
</style>
