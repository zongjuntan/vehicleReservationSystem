<template>
	<view class="bindingRecord box">
		<view class="hedaer">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">定位卡绑定详情</block>
			</cu-custom>
		</view>
		
		<view class="container"  :style="[{animation: 'show ' + 0.6+ 's 1'}]">
			<scroll-view scroll-y class="page">
				<!-- <view>
					<u-skeleton
					rows="10"
					title
					loading
				></u-skeleton>
				</view> -->
				<view class="card">
					<view class="item">
						<view class="name">
							<u--text type="info" text="定位卡号:"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="绑定人姓名:" class="name"></u--text>
						</view>
						<u--text  text="注意定位权限申请等原属于app.json的内容，在uni-app中是在manifest中配置"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="身份证号:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="绑定时间:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
				</view>
				<view class="card">
					<view class="item">
						<view class="name">
							<u--text type="info" text="该申请单暂未绑定定位卡信息！"></u--text>
						</view>
						<u--text  text="请在北门处发卡机柜领取定位卡，如有疑问请联系管理员:0016-1168"></u--text>
					</view>
				</view>
			</scroll-view>
		</view>
        <view class="footer box padding-lr-xl padding-tb-xl login-paddingtop">
			<u-button type="primary" text="返回上一页" @tap="BackPage"></u-button>
		</view>
    </view>

</template>

<script>
	import { mapActions } from "vuex"
    import configService from '@/common/service/config.service.js';
	
    export default {
		components: {
			// card
		},
        data() {
            return {
            };
        },
		onLoad:function(){
		},
		computed: {

		},
        methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
        },
		beforeDestroy() {
		},
    }
</script>

<style lang="scss">
	.bindingRecord {
		height: 100%;
		display: flex;
		flex-direction: column;
		.container {
			flex: 1;
			overflow-y: auto;
			padding: 20upx;
			.card {
				background-color: #ffffff;
				border-radius: 10upx;
				padding: 20upx;
				margin-bottom: 20upx; 
				.item {
					padding-bottom: 20upx;
					&:last-child {
						padding-bottom: 0;
					}
					.name {
						padding-bottom: 10upx;
					}
				}
			}
		}
	}
    

</style>
