<template>
	<view>
        <scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">出入预约</block>
			</cu-custom>
            <view class="box padding-lr-xl login-paddingtop" :style="[{animation: 'show ' + 0.6+ 's 1'}]">
				<block v-if="loginWay==1">
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">驾驶员身份证：</view>
						<input class="uni-input" placeholder="请输入驾驶员身份证"  v-model="password" />
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">所属企业：</view>
						<input class="uni-input" placeholder="请选择所属企业" @tap="typeFocus" v-model="password" />
						<view class="action text-lg">
						    <u-icon
								@tap="typeFocus"
								name="arrow-right"
							></u-icon>
						</view>
					</view>
					<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">运输危化品类型：</view>
						<input placeholder="请输入运输危化品类型" name="input" v-model="userName"></input>
					</view>
					<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">运输容量：</view>
						<input placeholder="请输入运输容量" name="input" v-model="userName"></input>
						<view class="action text-lg">吨</view>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">入园时间：</view>
						<input class="uni-input" placeholder="请输入入园时间" @focus="focus('showDatetimeIn')" v-model="formData.datetimeIn" />
						<view class="action text-lg">
							<text class="cuIcon-calendar"></text>
						</view>
					</view>
					<view>
						<u-datetime-picker
							:show="showDatetimeIn"
							v-model="datetimeIn"
							mode="datetime"
							:formatter="formatter"
							@cancel="showDatetimeIn = false"
							@confirm="confirmDatetimeIn"
						></u-datetime-picker>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">出园时间：</view>
						<input class="uni-input" placeholder="请输入出园时间"  @focus="focus('showDatetimeOut')" v-model="formData.datetimeOut" />
						<view class="action text-lg">
							<text class="cuIcon-calendar"></text>
						</view>
					</view>
					<view>
						<u-datetime-picker
							:show="showDatetimeOut"
							v-model="datetimeOut"
							mode="datetime"
							:formatter="formatter"
							@cancel="showDatetimeOut = false"
							@confirm="confirmDatetimeOut"
						></u-datetime-picker>
					</view>
					<view class="cu-form-group margin-top shadow-warp align-start">
						<view class="title">留言：</view>
						<textarea maxlength="-1" @input="textareaBInput" placeholder="多行文本输入框"></textarea>
					</view>
					<view>
						<u-picker :show="show" @cancel="show = false" :columns="columns" @change="changeHandler" @confirm="confirm"></u-picker>
					</view>
				</block>
            </view>
        </scroll-view>
		<view class="padding text-center margin-top uni-padding-wrap cu-bar bg-white foot">
			<u-button type="primary" text="申请驶入" @tap="jumpPage"></u-button>
		</view>
    </view>

</template>

<script>
	import { ACCESS_TOKEN,USER_NAME,USER_INFO } from "@/common/util/constants"
	import { mapActions } from "vuex"
    import configService from '@/common/service/config.service.js';
	
    export default {
        data() {
            return {
			    show: false,
                columns: [
                    ['中国', '美国', '日本']
                ],
				formData: {
					datetimeOut: '',
					datetimeIn: '',
				},
				showDatetimeOut: false,
				showDatetimeIn: false,
				datetimeOut: '',
				datetimeIn: '',
				checkboxValue: '',
				shape:'',//round 圆形
				loading: false,
				userName: 'admin',
				password: '123456',
				phoneNo: '',
				smsCode: '',
				showPassword: true, //是否显示明文
				loginWay: 1, //1: 账密，2：验证码
				smsCountDown: 0,
				smsCountInterval: null,
				toggleDelay: false,
				version:'',
				//第三方登录相关信息
				thirdType:"",
				thirdLoginInfo:"",
				thirdLoginState:false,
				bindingPhoneModal:false,
				thirdUserUuid:'',
            };
        },
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		onLoad:function(){
			// #ifdef APP-PLUS
			var that=this
			plus.runtime.getProperty( plus.runtime.appid, function ( wgtinfo ) {
				that.version=wgtinfo.version
			});
			// #endif
		},
		computed: {
		      isSendSMSEnable() {
		        return this.smsCountDown <= 0 && this.phoneNo.length > 4;
		      },
		      getSendBtnText() {
		        if (this.smsCountDown > 0) {
		          return this.smsCountDown + '秒后发送';
		        } else {
		          return '发送验证码';
		        }
		      },
		      canSMSLogin() {
		        return this.userName.length > 4 && this.smsCode.length > 4;
		      },
		      canPwdLogin() {
		        return this.userName.length > 4 && this.password.length > 4;
		      },
		},
        methods: {
			 ...mapActions([ "mLogin","PhoneLogin","ThirdLogin" ]),
			jumpPage() {
				this.$Router.push({name:'dangerousSuccess'})
			},
			formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`
                }
                if (type === 'month') {
                    return `${value}月`
                }
                if (type === 'day') {
                    return `${value}日`
                }
                return value
            },
			confirmDatetimeOut(data) {
				console.log(data, this.formatDate(data.value))
				this.formData.datetimeOut = this.formatDate(data.value)
				this.showDatetimeOut = false
			},
			confirmDatetimeIn(data) {
				console.log(data, this.formatDate(data.value))
				this.formData.datetimeIn = this.formatDate(data.value)
				this.showDatetimeIn = false
			},
			formatDate(timestamp) {
				if (timestamp) {
					const date = new Date(timestamp); // 创建 Date 对象

					// 获取年、月、日、时、分、秒
					const year = date.getFullYear();
					const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，要加1
					const day = date.getDate().toString().padStart(2, '0');
					const hours = date.getHours().toString().padStart(2, '0');
					const minutes = date.getMinutes().toString().padStart(2, '0');
					const seconds = date.getSeconds().toString().padStart(2, '0');

					// 格式化为 "YYYY-MM-DD HH:MM:SS"
					return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
				}
    		},
			textareaBInput() {
				
			},
			agreement() {
				this.$Router.replaceAll({name:'agreement'})
			},
			changeHandler(val) {
				console.log(val)
			},
			focus(key) {
				this[key] = true
			},
			typeFocus(e) {
				this.show = true
			},
			confirm(val) {
				console.log(val)
				this.show = false
			},
			onLogin: function (){
					this.$Router.replaceAll({name:'index'})
					return
			        if(!this.userName || this.userName.length==0){
			          this.$tip.toast('请填写用户名');
			          return;
			        }
			        if(!this.password || this.password.length==0){
			           this.$tip.toast('请填写密码');
			          return;
			        }
			        let loginParams = {
			          username:this.userName,
			          password:this.password
			        }
					this.loading=true;
			        this.mLogin(loginParams).then((res) => {
					  this.loading=false;
			          if(res.data.success){
						 // #ifdef APP-PLUS
						  this.saveClientId()
						 // #endif
						 // #ifndef APP-PLUS
						  this.$tip.success('登录成功!')
						  this.$Router.replaceAll({name:'index'})
						 // #endif
						}else{
			              this.$tip.alert(res.data.message);
			            }
			        }).catch((err) => {
			          let msg = err.data.message || "请求出现错误，请稍后再试"
			          this.loading=false;
					  this.$tip.alert(msg);
			        }).finally(()=>{
					  this.loading=false;
				})
			},
			saveClientId(){
				var info = plus.push.getClientInfo();
				var cid = info.clientid;
				this.$http.get("/sys/user/saveClientId",{params:{clientId:cid}}).then(res=>{
					console.log("res::saveClientId>",res)
					this.$tip.success('登录成功!')
					this.$Router.replaceAll({name:'index'})
				})
			},
			changePassword() {
				this.showPassword = !this.showPassword;
			},
			onSMSSend() {
				let smsParams = {};
				smsParams.mobile=this.phoneNo;
				smsParams.smsmode="0";
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
                if(!smsParams.mobile || smsParams.mobile.length==0){
					this.$tip.toast('请输入手机号');
					return false
				}
				if(!checkPhone.test(smsParams.mobile)){
					this.$tip.toast('请输入正确的手机号');
					return false
				}
				this.$http.post("/sys/sms",smsParams).then(res=>{
				  if(res.data.success){
					this.smsCountDown = 60;
					this.startSMSTimer();
				  }else{
					this.smsCountDown = 0;
					this.$tip.toast(res.data.message);
				  }
				});
			  },
			startSMSTimer() {
				this.smsCountInterval = setInterval(() => {
				  this.smsCountDown--;
				  if (this.smsCountDown <= 0) {
					clearInterval(this.smsCountInterval);
				  }
				}, 1000);
			},
			onSMSLogin() {
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				
				if(!this.phoneNo || this.phoneNo.length==0){
				  this.$tip.toast('请填写手机号');
				  return;
				}
				if(!checkPhone.test(this.phoneNo)){
					this.$tip.toast('请输入正确的手机号');
					return false
				}
				if(!this.smsCode || this.smsCode.length==0){
				  this.$tip.toast('请填短信验证码');
				  return;
				}
				let loginParams = {
				  mobile:this.phoneNo,
				  captcha:this.smsCode
				};
				this.PhoneLogin(loginParams).then((res) => {
				  console.log("res====》",res)
				  if(res.data.success){
					this.$tip.success('登录成功!')
					this.$Router.replaceAll({name:'index'})
				  }else{
					this.$tip.error(res.data.message);
				  }
				}).catch((err) => {
				  let msg = ((err.response || {}).data || {}).message || err.data.message || "请求出现错误，请稍后再试"
				  this.$tip.error(msg);
				});
			},
			loginSuccess() {
			  // 登陆成功，重定向到主页
			  this.$Router.replace({name:'index'})
			},
			requestFailed(err) {
			  this.$message.warning("登录失败")
			},
        },
		beforeDestroy() {
		    if (this.smsCountInterval) {
		        clearInterval(this.smsCountInterval);
		    }
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
