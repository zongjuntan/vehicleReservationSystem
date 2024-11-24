<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">车辆行驶规划规则协议</block>
			</cu-custom>
			
			
			
			<view class="padding flex flex-direction">
			  <text> 123  </text>
			</view>
			
			
			<view class="padding text-center margin-top uni-padding-wrap">
				<u-row
					justify="space-between"
					gutter="10"
				>	
					<u-col span="5">
						<u-button type="primary" text="同 意"></u-button>
					</u-col>
					<u-col span="5">
						<u-button type="primary" :plain="true" text="退 出"></u-button>
					</u-col>
				</u-row>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	const plan_type = [{text:'日常记录',value:'1'},{text:'本周工作',value:'2'},{text:'下周计划',value:'3'}];
	import appSelect from '@/components/my-componets/appSelect.vue'
	import myImageUpload from '@/components/my-componets/my-image-upload.vue'
	import myDate from '@/components/my-componets/my-date.vue'
	
	
	export default {
		components:{
		    appSelect,myImageUpload,myDate
		 },
		data() {
			return {
				modalName: null,
				item:{msg:'退出成功'},
				plan_type,
				type:"1",
				selected:[],
				beginTime:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
