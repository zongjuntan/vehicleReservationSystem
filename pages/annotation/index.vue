<template>
	<view class="bg-white" >
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="content">通告</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view class="cu-card article">
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
							<view>
								<view class="cu-tag bg-red light sm round">正义天使</view>
								<view class="cu-tag bg-green light sm round">史诗</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>

	export default {
		data() {
			return {}
		},
		onShow() {
		},
		computed:{
		},
		methods: {
		}
	}
</script>

<style scoped>
	.e-btn{margin-bottom: 1rem;}

	.titlePad{margin-top:0.6rem;}
	.cu-list>.move-cur{
		transform: translateX(-150rpx);
		
	}
	.nav .cu-item.cur {
		position: flex;
		z-index: 9;
		border-bottom: 4upx solid;
	}

</style>
