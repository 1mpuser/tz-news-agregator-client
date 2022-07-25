<template>
	<div class="post-page">
		<loadingElem v-if="isLoading"></loadingElem>
		<div v-else>
			<modalWindow
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
						:value="newsItem.title"
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
						:value="newsItem.text"
						@input="inputTextHandler"
					/>
					<label for="text" class="form__label">Text</label>
				</div>
				<br />
				<button @click="editPost">Edit post</button>
			</modalWindow>

			<h1>{{ this.newsItem.title }}</h1>
			<br />
			<h4>Author : {{ this.newsItem.author }}</h4>
			<br />
			<h4>Date : {{ this.newsItem.dateOfCreate }}</h4>
			<br />
			<div>{{ this.newsItem.text }}</div>
			<div v-if="$store.state.isAuth" style="align-items: center">
				<br />
				<create-post-button @click="makeWindowVisible">Edit</create-post-button>
				<br />
				<br />
				<create-post-button @click="deletePost">Delete</create-post-button>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import { INewsItem } from '../types/types';
import loadingElem from '../components/UI/loadingElem.vue';
import createPostButton from '../components/UI/createPostButton.vue';
import { deleteItem, editElem } from '../http/newsApi';
import modalWindow from '../components/UI/modalWindow.vue';
// interface IData {
// 	isLoading: boolean;
// 	newsItem: INewsItem;
// 	modalWindowVisible: boolean;
// }
export default defineComponent({
	name: 'post-page',
	components: {
		loadingElem,
		createPostButton,
		modalWindow,
	},
	data() {
		return {
			isLoading: false,
			modalWindowVisible: false,
			newsItem: {
				title: '',
				author: '',
				text: '',
				dateOfCreate: '',
				_id: '',
			},
		};
	},
	methods: {
		async getPost() {
			try {
				this.isLoading = true;
				const id = this.$route.params.id;
				const url = `http://localhost:8000/api/news/${id}`;
				const { data } = await axios.get(url);
				this.newsItem = data;
			} catch (error) {
				console.log(error);
			} finally {
				this.isLoading = false;
			}
		},
		async deletePost() {
			try {
				this.isLoading = true;
				const id = String(this.$route.params.id);
				const data = await deleteItem(id);
				this.$router.push('/');
			} catch (error) {
				console.log(error);
			} finally {
				this.isLoading = false;
			}
		},
		async editPost() {
			try {
				this.isLoading = true;
				const id = String(this.$route.params.id);
				const data = await editElem(this.newsItem, id);
				await this.getPost();
			} catch (error) {
				console.log(error);
			} finally {
				this.isLoading = false;
			}
		},
		makeWindowVisible() {
			this.modalWindowVisible = true;
		},
		inputTitleHandler(event) {
			const HTMLElem = event.target;
			const value = HTMLElem.value;
			this.newsItem.title = String(value);
		},
		inputTextHandler(event) {
			const HTMLElem = event.target;
			const value = HTMLElem.value;
			this.newsItem.text = String(value);
		},
	},
	mounted() {
		this.getPost();
	},
});
</script>

<style scoped>
.post-page {
	align-items: center;
	text-align: center;
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
