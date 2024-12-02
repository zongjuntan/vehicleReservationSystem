  <template>
	<view class="zai-box">
        <scroll-view scroll-y class="page">
            <view class="text-center" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
				<image :src="$config.imgUrl + '/static/logo2.png'" mode='aspectFit' class="zai-logo"></image>
				<view class="zai-title text-shadow ">铁门关经济技术开发区化工园区车辆出入预约小程序</view>
			</view>
            <view class="box padding-lr-xl login-paddingtop" :style="[{animation: 'show ' + 0.6+ 's 1'}]">
				<block>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-people margin-right-xs"></text>姓名:</view>
						<input class="uni-input" placeholder="请输入姓名" v-model="username" />
					</view>
					<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-mobile margin-right-xs"></text>手机号码:</view>
						<input placeholder="请输入手机号码" name="input" v-model="phonenumber"></input>
					</view>
					<view class="padding text-center margin-top">
						<u-checkbox-group v-model="checkboxValue" >
							<u-checkbox label=" " name="1"></u-checkbox>
							<u--text size="11" @tap="agreement" type="primary" text="铁门关经开区化工园区车辆行驶规划规则协议"></u--text>
						</u-checkbox-group>
					</view>
					<view class="padding text-center margin-top uni-padding-wrap">
						<u-row
						    justify="space-between"
						    gutter="10"
						>
						    <u-col span="5">
						        <u-button type="primary" :text="loading ? '登录中...' : '登录'" @tap="onLogin"></u-button>
						    </u-col>
						    <u-col span="5">
						        <u-button type="primary" :plain="true" text="注册" @tap="onRegister"></u-button>
						    </u-col>
						</u-row>
						<!-- <button class="cu-btn bg-blue lg margin-right shadow" :loading="loading" :class="[shape=='round'?'round':'']"
							@tap="onLogin"><text space="emsp">{{loading ? "登录中...":" 登录 "}}</text>
						</button>
						<button class="cu-btn line-blue lg margin-left shadow" :loading="loading" :class="[shape=='round'?'round':'']"
							@tap="loginWay=3-loginWay">短信登录
						</button> -->
					</view>
				</block>
				<!-- #ifdef APP-PLUS -->
				<view class="padding flex flex-direction  text-center">
					当前版本:{{version}}
				</view>
				<!-- #endif -->
				
            </view>
        </scroll-view>
		<!-- 登录加载弹窗 -->
		<view class="cu-load load-modal" v-if="loading">
			<!-- <view class="cuIcon-emojifill text-orange"></view> -->
			<image :src="$config.imgUrl + '/static/logo2.png'" mode="aspectFit" class="round"></image>
			<view class="gray-text">登录中...</view>
		</view>
    </view>

</template>

<script>
	import { ACCESS_TOKEN,USER_NAME,USER_INFO } from "@/common/util/constants"
	import { mapActions } from "vuex"
	import { http } from '@/common/service/service.js'
	// import logo from '@/static/logo2.png';
    export default {
        data() {
            return {
				// logo,
				shape:'',//round 圆形
				loading: false,
				username: 'admin',
				phonenumber: '18888888888',
				checkboxValue: [],
            };
        },
		onLoad:function(){
		},
		computed: {
		},
        methods: {
			 ...mapActions([ "mLogin","PhoneLogin","ThirdLogin" ]),
			agreement() {
				this.$Router.push({name:'agreement'})
			},
			onRegister() {
				this.$Router.push({name:'register'})			
			},
			onLogin: function (){
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				if(!this.username || this.username.length==0){
				  this.$tip.toast('请填写用户名');
				  return;
				}
				if(!this.phonenumber || this.phonenumber.length==0){
					this.$tip.toast('请填写手机号');
					return;
				}
				if(!checkPhone.test(this.phonenumber)){
					this.$tip.toast('请输入正确的手机号');
					return false
				}
				if(this.checkboxValue.length==0){
				  this.$tip.toast('请认真查看协议并勾选后登录');
				  return;
				}
				this.loading = true;
				const params = {
					deptId: 1,
					username: this.username,
					phonenumber: this.phonenumber, // 加密存储的密码
				}
				http.post('/auth/mobileLogin',params).then(res => {
					console.log(res)
					if (res.code == 200) {
						uni.setStorageSync(ACCESS_TOKEN, res.data['access_token'])
						this.$Router.replaceAll({name:'homepage'})
						this.$tip.success('登录成功!')
					} else {
						this.$tip.alert(res.msg);
					}
					
				}).catch((err) => {
					let msg = err.data.message || "请求出现错误，请稍后再试"
					this.loading=false;
					this.$tip.alert(msg);
					}).finally(()=>{
					this.loading=false;
				})
			},
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
        width: 300upx;
        height: 400upx;
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
