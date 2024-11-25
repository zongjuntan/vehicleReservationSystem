<template>
	<view>
		<accessReservation :cur="PageCur" v-if="PageCur=='home'" :key="commponent1Key"></accessReservation>
		<people v-if="PageCur=='people'" :key="commponent2Key"></people>
		<annotation v-if="PageCur=='annotation'"></annotation>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view :class="PageCur=='home'?'action text-green':'action text-gray'" @click="NavChange" data-cur="home">
				<view class='cuIcon-homefill'></view>预约
			</view>
			<view :class="PageCur=='annotation'?'action text-green':'action text-gray'" @click="NavChange" data-cur="annotation">
				<view class='cuIcon-noticefill'></view>通告
			</view>
			<!-- <view :class="PageCur=='profile'?'action text-green':'action text-gray'" @click="NavChange" data-cur="profile">
				<view class='cuIcon-profile'></view>发起
			</view> -->
			<view :class="PageCur=='people'?'action text-green':'action text-gray'" @click="NavChange" data-cur="people">
				<view class='cuIcon-peoplefill'></view>个人
			</view>
		</view>
	</view>
</template>

<script>
	import accessReservation from '@/pages/appointment/components/accessReservation.vue'
	import annotation from '@/pages/annotation/index.vue'
	export default {
		components: {
			accessReservation,
			annotation
		},
		data() {
		return {
				PageCur: 'home',
				commponent1Key: 0,
				commponent2Key: 0,
			}
		},
		onLoad:function(query){
			this.PageCur='home'
			if (query.route) {
				this.PageCur= query.route
			}
			++this.commponent1Key
			++this.commponent2Key
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
			
		}
	}
</script>

<style>

</style>
