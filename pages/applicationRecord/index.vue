<template>
	<view class="bindingRecord box">
		<view class="hedaer">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">申请记录</block>
			</cu-custom>
		</view>
		<view class="tabList">
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-id="index">
					{{item.label}}
				</view>
			</scroll-view>
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
				<view class="card" v-for="item in dataList" @tap="jumpDetail(item)">
					<view class="title" style="text-align: center;">
						<u--text size="20" text="申请单信息"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="驾驶员:"></u--text>
						</view>
						<u--text :text="item.driverName"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="所属企业:" class="name"></u--text>
						</view>
						<u--text :text="enterprise(item.deptId)"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="车牌号:" class="name"></u--text>
						</view>
						<u--text :text="item.licensePlate"></u--text>
					</view>
					<view class="item">
						<view class="name">
							<u--text type="info" text="绑定定位卡:" class="name"></u--text>
						</view>
						<u--text text="暂无..."></u--text>
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
	import { http } from '@/common/service/service.js'
	import options from '@/utils/options.js';
    export default {
		components: {
			// card
		},
        data() {
            return {
				TabCur: 0,
				scrollLeft: 0,
				dataList: [],
				tabList: [
					{
						label: '待审核',
						id: '1',
					},
					{
						label: '待来访',
						id: '1',
					},
					{
						label: '未通告',
						id: '1',
					},
					{
						label: '已来访',
						id: '1',
					},
					{
						label: '反馈',
						id: '1',
					},
				]
            };
        },
		onLoad:function(){
			this.init()
		},
		computed: {
			
		},
        methods: {
			init() {
				http.get('/reservation/exit/list', this.formData).then(res => {
					console.log(res)
					if (res.code == 200) {
						this.dataList = res.rows
					} else {
					}
					
				}).catch((err) => {
					}).finally(()=>{
				})
			},
			enterprise(id) {
				const target = options.enterprise.find(item => item.id == id)
				return target?.label || ''
			},
			jumpDetail(item) {
				uni.navigateTo({
					url: `/pages/noteDetails/index?id=${item.id}`  // 传递参数 id
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
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
		// .tabList {
		// 	margin: 10upx;
		// }
		.container {
			flex: 1;
			overflow-y: auto;
			padding: 20upx;
			.card {
				background-color: #ffffff;
				border-radius: 10upx;
				padding: 20upx;
				margin-bottom: 20upx;
				.title {
					padding-bottom: 30upx;
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
