  <template>
	<view>
        <scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-pink" :isBack="false">
				<block slot="content">首 页</block>
			</cu-custom>
			<view class="padding text-center margin-top uni-padding-wrap" v-for="item in pageList" :key="item.name">
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
                pageList: [
                    {
                        route: 'appointment',
                        name: '车辆预约',
                    },
                    {
                        route: '',
                        name: '公告',
                    },
                    {
                        route: '',
                        name: '消息/个人',
                    },
                    {
                        route: '',
                        name: '绑定定位卡记录',
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
                this.$router.push({name: item.route})
            }
        },
		beforeDestroy() {
		},
    }
</script>

<style>
    .login-paddingtop {
        padding-top: 100upx;
    }

    .zai-box {
        padding: 0 20upx;
        padding-top: 100upx;
        position: relative;
    }

    .zai-logo {
        width: 200upx;
        height: 150px;
    }

    .zai-title {
       font-size: 40upx;
       color: #000000;
       text-align: center;
	   padding: 20upx;
    }

    .input-placeholder, .zai-input {
        color: #94afce;
    }

    .zai-label {
        padding: 60upx 0;
        text-align: center;
        font-size: 30upx;
        color: #a7b6d0;
    }

    .zai-btn {
        background: #ff65a3;
        color: #fff;
        border: 0;
        border-radius: 100upx;
        font-size: 36upx;
    }

    .zai-btn:after {
        border: 0;
    }

    /*按钮点击效果*/
    .zai-btn.button-hover {
        transform: translate(1upx, 1upx);
    }

</style>
