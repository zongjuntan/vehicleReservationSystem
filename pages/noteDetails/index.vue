<template>
	<view class="bindingRecord box">
		<view class="hedaer">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">申请单详情</block>
			</cu-custom>
		</view>
		
		<view class="container"  :style="[{animation: 'show ' + 0.6+ 's 1'}]">
			<scroll-view scroll-y class="page margin-top">
				<!-- <view>
					<u-skeleton
					rows="10"
					title
					loading
				></u-skeleton>
				</view> -->
				<view class="card">
					<view class="icon">
						<text class="cuIcon-warnfill text-yellow" size="20"></text>
		        		<text class="text-grey">该申请正在等待批准</text>
					</view>
					<view class="bg-white padding">
						<view class="cu-steps">
							<view class="cu-item" :class="index>basics?'':'text-blue'" v-for="(item,index) in basicsList" :key="index">
								<text class="num" :class="index==2?'err':''" :data-index="index + 1"></text> {{item.name}}
							</view>
						</view>
					</view>
					<view class="icon">
		        		<text class="text-grey">请耐心等待或寻求管理员帮助</text>
					</view>
					<view class="title">
						<u--text size="20" text="申请单信息"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="驾驶员姓名:"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="驾驶员手机号:" class="name"></u--text>
						</view>
						<u--text  text="注意定位权限申请等原属于app.json的内容，在uni-app中是在manifest中配置"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="车辆类型:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="车辆车牌:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="同行人员数量:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
				</view>
				<view class="card">
					<view class="icon">
						<text class="cuIcon-roundcheckfill text-blue" size="20"></text>
		        		<text class="text-grey">该申请已批准</text>
					</view>
					<view class="title">
						<u--text size="20" text="申请单信息"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="驾驶员姓名:"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="驾驶员手机号:" class="name"></u--text>
						</view>
						<u--text  text="注意定位权限申请等原属于app.json的内容，在uni-app中是在manifest中配置"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="车辆类型:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="车辆车牌:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="同行人员数量:" class="name"></u--text>
						</view>
						<u--text  text="45666976321"></u--text>
					</view>
				</view>
			</scroll-view>
		</view>

        <!-- <view class="footer box padding-lr-xl padding-tb-xl login-paddingtop">
			<u-button type="primary" text="返回主页" @tap="BackPage"></u-button>
		</view> -->
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
				basicsList: [
					{cuIcon: 'usefullfill',name: '申请'}, 
					{cuIcon: 'roundclosefill',name: '企业'},
					{cuIcon: 'roundcheckfill',name: '园区'}
				],
				basics: 0
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
				.icon {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.cuIcon-warnfill, .cuIcon-roundcheckfill {
						font-size: 200upx;
					}
				}
				.title {
					padding: 30upx 0;
				}
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
