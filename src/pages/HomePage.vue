<template>
	<div class="main">
		<div v-if="!isPostsLoading" style="text-align: center">
			<createPostButton @click="makeWindowVisible" v-if="$store.state.isAuth"
				>Create post</createPostButton
			>
			<modal-window
				:show="modalWindowVisible"
				@changevisible="modalWindowVisible = $event"
			>
				<div class="form__group">
					<br />
					<input
						type="input"
						class="form__field"
						name="title"
						placeholder="title"
						:value="creatingItem.title"
						@input="inputTitleHandler"
					/>
					<label for="Title" class="form__label">Title</label>
				</div>
				<div class="form__group">
					<input
						type="input"
						class="form__field"
						name="Text"
						placeholder="text"
						:value="creatingItem.text"
						@input="inputTextHandler"
					/>
					<label for="text" class="form__label">Text</label>
				</div>
				<br />
				<button @click="createPost">Create post</button>
			</modal-window>
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
import { postItem } from '../http/newsApi';
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
				this.newsItems.length = 0;
				this.newsItems.push(...data);
			} catch (error) {
				console.log(error);
			} finally {
				this.isPostsLoading = false;
			}
		},
		makeWindowVisible() {
			this.modalWindowVisible = true;
		},
		inputTitleHandler(event: Event) {
			const HTMLElem: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
			const value = HTMLElem.value;
			this.creatingItem.title = String(value);
		},
		inputTextHandler(event: Event) {
			const HTMLElem: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
			const value = HTMLElem.value;
			this.creatingItem.text = String(value);
		},
		async createPost() {
			if (this.creatingItem.title && this.creatingItem.text) {
				const data = await postItem(this.creatingItem);
				this.modalWindowVisible = false;
				this.fetchNews();
				this.creatingItem.title = '';
				this.creatingItem.text = '';
			} else this.modalWindowVisible = false;
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
.form__group {
	position: relative;
	padding: 15px 0 0;
	margin-top: 10px;
	width: 50%;
}
.form__field {
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 2px solid #9b9b9b;
	outline: 0;
	font-size: 1.3rem;
	color: black;
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
