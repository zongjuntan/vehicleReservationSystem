<template>
	<view>
        <scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">出入预约</block>
			</cu-custom>
			<view class="container">
				<u-collapse
				@change="change"
				@close="close"
				@open="open"
				v-model="collapse"
			>
				<u-collapse-item
					title="申请驶入预约成功！！"
					name="Docs"
				>
				<text class="u-collapse-content">由于您驾驶的车辆运输危险化学品，请您严格按照园区规划的车辆行驶路线行驶。</text>
				</u-collapse-item>
			</u-collapse>
			</view>
			<view class="padding text-center margin-top uni-padding-wrap button-container" v-for="item in pageList" :key="item.name">
                <u-button type="primary"  :text="item.name" @tap="jumpPage(item)"></u-button>
            </view>
        </scroll-view>
    </view>

</template>

<script>
	import { ACCESS_TOKEN,USER_NAME,USER_INFO } from "@/common/util/constants"
	import { mapActions } from "vuex"
    import configService from '@/common/service/config.service.js';
	
    export default {
        data() {
            return {
				collapse: ['Docs'],
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}],
                pageList: [
                    {
                        route: 'drivingRoute',
                        name: '查看行驶线路图',
                    },
                    {
                        route: 'bindingDetails',
                        name: '查看绑定定位卡',
                    },
                    {
                        route: 'appointment',
                        name: '前往个人中心',
                    },
                ]
            };
        },
		onLoad:function(){
		},
		computed: {
		},
        methods: {
			...mapActions([ "mLogin","PhoneLogin","ThirdLogin" ]),
            jumpPage(item) {
                
				if(item.route == 'appointment') {
					uni.navigateTo({
						url: `/pages/appointment/index?route=people`  // 传递参数 id
					});
				} else {
					this.$Router.push({name: item.route})
				}
            },
			open(e) {
              // console.log('open', e)
            },
            close(e) {
              // console.log('close', e)
            },
            change(e) {
              // console.log('change', e)
            }
        },
		beforeDestroy() {
		},
    }
</script>

<style>
	.container {
		margin: 20upx;
		margin-top: 80upx;
		background: #ffffff;
	}
	.button-container {
		margin-top: 80upx;
	}
</style>
