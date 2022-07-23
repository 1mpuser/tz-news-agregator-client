<template>
	<div>
		<news-item
			v-for="(newsItem, index) in news"
			:key="newsItem._id"
			:newsItem="newsItem"
			:index="index"
		/>
	</div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { INewsItem } from '../types/types';
import axios from 'axios';
import NewsItem from './NewsItem.vue';
import { nanoid } from 'nanoid';
export default {
	name: 'news',
	components: {
		NewsItem,
	},
	props: {
		news: {
			type: Array as PropType<INewsItem[]>,
			required: true,
		},
	},

	methods: {},
};
</script>

<style lang="scss" scoped></style>
