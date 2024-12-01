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
						<my-picker label="所属企业：" v-model="formData.deptId" :columns="enterprise" placeholder="请选择所属企业" ></my-picker>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<my-picker label="车辆类型：" v-model="formData.carType" :columns="carTypes" placeholder="请选择车辆类型" ></my-picker>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">车辆车牌:</view>
						<input class="uni-input" placeholder="请输入车辆车牌" v-model="formData.licensePlate" />
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">同行人员数量:</view>
						<input class="uni-input" placeholder="请输入同行人员数量" v-model="formData.numberPersonnel" />
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">是否运输危化品:</view>
						<u-radio-group v-model="formData.isHazardousChemicals" @change="radioChange">
							<u-radio shape="circle" label="是" name="0"></u-radio>
							<u-radio shape="circle" label="否" name="1" class="margin-left"></u-radio>
						</u-radio-group>
					</view>
					<view>
						<u-picker :show="show" @cancel="show = false" :columns="columns" @change="changeHandler" @confirm="confirm"></u-picker>
					</view>
					<!-- <view class=" margin-top">
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
					</view> -->
				</block>
				<block v-if="formData.isHazardousChemicals=== '0'">
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<view class="title">驾驶员身份证：</view>
						<input class="uni-input" placeholder="请输入驾驶员身份证"  v-model="formData.cardNumber" />
					</view>
					<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
						<my-picker label="运输危化品类型：" v-model="formData.hazardousChemicalsType" :columns="hazardousChemicalsTypes" placeholder="请选择运输危化品类型" ></my-picker>
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
						<textarea maxlength="-1" v-model="formData.remark" placeholder="多行文本输入框"></textarea>
					</view>
				</block>
				<block v-if="formData.isHazardousChemicals==1">

					<view class="cu-form-group margin-top shadow-warp align-start">
						<view class="title">进入事宜：</view>
						<textarea maxlength="-1" v-model="formData.entryMatters" placeholder="多行文本输入框"></textarea>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<my-date label="入园时间：" v-model="formData.enterTime" placeholder="请选择入园时间" fields="minute"></my-date>
					</view>
					<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
						<my-date label="出园时间：" v-model="formData.outTime" placeholder="请选择出园时间" fields="minute"></my-date>
					</view>
					<view class="cu-form-group margin-top shadow-warp align-start">
						<view class="title">留言：</view>
						<textarea maxlength="-1" v-model="formData.remark" placeholder="多行文本输入框"></textarea>
					</view>
					<view>
						<u-picker :show="show" @cancel="show = false" :columns="columns" @change="changeHandler" @confirm="confirm"></u-picker>
					</view>
				</block>
				<view class="text-center uni-padding-wrap bottom-btn">
					<u-button type="primary" text="申请驶入" @tap="onLogin"></u-button>
				</view>
            </view>
			
        </scroll-view>
    </view>

</template>

<script>
	import { mapActions } from "vuex"
	import myDate from '@/components/my-componets/my-date.vue';
	import myPicker from '@/components/my-componets/my-picker.vue';
	import options from './options';
	import { http } from '@/common/service/service.js'
    export default {
		components:{
			myDate,
			myPicker,
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
				columns: [1, 2,3],
                enterprise: [options.enterprise],
				carTypes: [options.carTypes],
				hazardousChemicalsTypes: [options.hazardousChemicalsTypes],
				radioValue: '',
				formData: {
					driverName: '', //驾驶员姓名
					phonenumber: '', //手机号码
					// userId: '', //关联c_sys_user
					carType: '', // 车辆类型：1货车，2渣土车，3半挂车，4轿车
					licensePlate: '', // 车牌
					numberPersonnel: '', // 同行人员数量
					isHazardousChemicals: '', // 是否危化品:0是，1否
					// hazardousChemicalsId: '', // 危险品预约表ID
					cardNumber: '', // 身份证照
					deptId: '', // 所属企业
					hazardousChemicalsType: '', // 运输危化品类型
					capacity: '', // 容量
					enterTime: '', // 入园时间
					outTime: '', // 出院时间
					// entryMatters: '', // 出入事宜
					remark: '', // 留言
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
			radioChange(val) {
				console.log(val, this.formData.isHazardousChemicals)
			},
			jumpPage(name) {
				console.log(this.formData)
				// this.$Router.push({name})
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
			verify() {
				if(!this.formData.driverName || this.formData.driverName.length==0){
					this.$tip.toast('请填写驾驶员姓名');
					return false;
				}
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				if(!this.formData.phonenumber || this.formData.phonenumber.length==0){
					this.$tip.toast('请填写手机号');
					return false;
				}
				if(!checkPhone.test(this.formData.phonenumber)){
					this.$tip.toast('请输入正确的手机号');
					return false
				}
				if(!this.formData.deptId || this.formData.deptId.length==0){
					this.$tip.toast('请选择所属企业');
					return false;
				}
				if(!this.formData.carType || this.formData.carType.length==0){
					this.$tip.toast('请选择车辆类型');
					return false;
				}
				if(!this.formData.licensePlate || this.formData.licensePlate.length==0){
					this.$tip.toast('请填写车牌');
					return false;
				}
				if(!this.formData.numberPersonnel || this.formData.numberPersonnel.length==0){
					this.$tip.toast('请填写同行人员数量');
					return false;
				}
				if(!this.formData.isHazardousChemicals || this.formData.isHazardousChemicals.length==0){
					this.$tip.toast('请选择是否危化品');
					return false;
				}
				if(this.formData.isHazardousChemicals == 0){
					let checkCard= new RegExp(/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9Xx]$/);
					if(!this.formData.cardNumber || this.formData.cardNumber.length==0){
						this.$tip.toast('请填写身份证照');
						return false;
					}
					if(!checkCard.test(this.formData.cardNumber)){
						this.$tip.toast('请输入正确的身份证照');
						return false
					}
					if(!this.formData.hazardousChemicalsType || this.formData.hazardousChemicalsType.length==0){
						this.$tip.toast('请选择运输危化品类型');
						return false;
					}
					if(!this.formData.capacity || this.formData.capacity.length==0){
						this.$tip.toast('请填写容量');
						return false;
					}
					if(!this.formData.enterTime || this.formData.enterTime.length==0){
						this.$tip.toast('请选择入园时间');
						return false;
					}
					if(!this.formData.outTime || this.formData.outTime.length==0){
						this.$tip.toast('请选择出院时间');
						return false;
					}
					if(!this.formData.remark || this.formData.remark.length==0){
						this.$tip.toast('请填写留言');
						return false;
					}
				}
				if(this.formData.isHazardousChemicals == 1){
					if(!this.formData.entryMatters || this.formData.entryMatters.length==0){
						this.$tip.toast('请填写出入事宜');
						return false;
					}
					if(!this.formData.enterTime || this.formData.enterTime.length==0){
						this.$tip.toast('请选择入园时间');
						return false;
					}
					if(!this.formData.outTime || this.formData.outTime.length==0){
						this.$tip.toast('请选择出院时间');
						return false;
					}
					if(!this.formData.remark || this.formData.remark.length==0){
						this.$tip.toast('请填写留言');
						return false;
					}
				}
				return true;
			},
			onLogin: function () {
				if (!this.verify()) {
					return;
				}
				this.loading = true;
				http.post('/reservation/exit', this.formData).then(res => {
					console.log(res)
					if (res.code == 200) {
						this.$tip.success('预约成功!')
						if (this.formData.isHazardousChemicals === '0') {
							this.$Router.push({name:'dangerousSuccess'})
						} else {
							this.$Router.push({name:'normalSuccess'})
						}
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

    .bottom-btn {
	    margin: 60upx 0 150upx 0;
	}

</style>
