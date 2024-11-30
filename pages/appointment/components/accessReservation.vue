<template>
	<view>
        <scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">出入预约</block>
			</cu-custom>
            <view class="box padding-lr-xl login-paddingtop" :style="[{animation: 'show ' + 0.6+ 's 1'}]">
				<block>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-people margin-right-xs"></text>驾驶员姓名:</view>
						<input class="uni-input" placeholder="请输入驾驶员姓名" v-model="formData.driverName" />
					</view>
					<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-mobile margin-right-xs"></text>手机号码:</view>
						<input placeholder="请输入手机号码" name="input" v-model="formData.phonenumber"></input>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-people margin-right-xs"></text>车辆类型:</view>
						<input class="uni-input" placeholder="请输入车辆类型" @tap="typeFocus" v-model="formData.carType" />
						<view class="action text-lg">
						    <u-icon
								@tap="typeFocus"
								name="arrow-right"
							></u-icon>
						</view>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-people margin-right-xs"></text>车辆车牌:</view>
						<input class="uni-input" placeholder="请输入车辆车牌" v-model="formData.licensePlate" />
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-people margin-right-xs"></text>同行人员数量:</view>
						<input class="uni-input" placeholder="请输入同行人员数量" v-model="formData.numberPersonnel" />
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title"><text class="cuIcon-people margin-right-xs"></text>是否运输危化品:</view>
						<u-radio-group v-model="radioValue">
							<u-radio shape="circle" label="是" name="1"></u-radio>
							<u-radio shape="circle" label="否" name="2" class="margin-left"></u-radio>
						</u-radio-group>
					</view>
					<view>
						<u-picker :show="show" @cancel="show = false" :columns="columns" @change="changeHandler" @confirm="confirm"></u-picker>
					</view>
					<view class=" margin-top">
						<u--text size="20" type="primary" text="是否运输危化品？"></u--text>
					</view>
					<view class="padding text-center margin-top uni-padding-wrap">
						<u-row
						    justify="space-between"
						    gutter="2"
						>
						    <u-col span="5">
						        <u-button type="primary" text="是" @tap="jumpPage('dangerous')"></u-button>
						    </u-col>
							<u-col span="5">
						        <u-button type="primary" text="否" @tap="jumpPage('normal')"></u-button>
						    </u-col>
						</u-row>
					</view>
				</block>
				<block v-if="formData.isHazardousChemicals==1">
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">驾驶员身份证：</view>
						<input class="uni-input" placeholder="请输入驾驶员身份证"  v-model="formData.cardNumber" />
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']" @tap="typeFocus">
						<view class="title">所属企业：</view>
						<input class="uni-input" placeholder="请选择所属企业" :disabled="true" v-model="formData.deptId" />
						<view class="action text-lg">
						    <u-icon
								@tap="typeFocus"
								name="arrow-right"
							></u-icon>
						</view>
					</view>
					<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">运输危化品类型：</view>
						<input placeholder="请输入运输危化品类型" name="input" v-model="formData.hazardousChemicalsType"></input>
					</view>
					<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">运输容量：</view>
						<input placeholder="请输入运输容量" name="input" v-model="formData.capacity"></input>
						<view class="action text-lg">吨</view>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<my-date label="入园时间：" v-model="formData.enterTime" placeholder="请选择入园时间" fields="minute"></my-date>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<my-date label="出园时间：" v-model="formData.outTime" placeholder="请选择出园时间" fields="minute"></my-date>
					</view>
					<view class="cu-form-group margin-top shadow-warp align-start">
						<view class="title">留言：</view>
						<textarea maxlength="-1" v-model="formData.outTime" placeholder="多行文本输入框"></textarea>
					</view>
					<view>
						
					</view>
				</block>
            </view>
        </scroll-view>
		<view class="padding text-center margin-top margin-bottom uni-padding-wrap">
			<u-button type="primary" text="申请驶入" @tap="jumpPage"></u-button>
		</view>
    </view>

</template>

<script>
	import { mapActions } from "vuex"
	import myDate from '@/components/my-componets/my-date.vue';
    export default {
		components:{
			myDate,
		},
        data() {
            return {
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
			    show: false,
                columns: [
                    ['中国', '美国', '日本']
                ],
				radioValue: '',
				formData: {
					driverName: '', //驾驶员姓名
					phonenumber: '', //手机号码
					userId: '', //关联c_sys_user
					carType: '', // 车辆类型：1货车，2渣土车，3半挂车，4轿车
					licensePlate: '', // 车牌
					numberPersonnel: '', // 同行人员数量
					isHazardousChemicals: '1', // 是否危化品:0是，1否
					hazardousChemicalsId: '', // 危险品预约表ID
					cardNumber: '', // 身份证照
					deptId: '', // 所属企业
					hazardousChemicalsType: '', // 运输危化品类型
					capacity: '', // 容量
					enterTime: '', // 入园时间
					outTime: '', // 出院时间
				},
				shape:'',//round 圆形
				loading: false,
            };
        },
		onLoad:function(){
		},
		computed: {
		},
        methods: {
			 ...mapActions([ "mLogin","PhoneLogin","ThirdLogin" ]),
			jumpPage(name) {
				this.$Router.push({name})
			},
			agreement() {
				this.$Router.push({name:'dangerous'})
			},
			changeHandler(val) {
				console.log(val)
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
