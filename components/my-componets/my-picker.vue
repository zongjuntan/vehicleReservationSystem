<template>
	<view class="picker">
		<view class="jun-form-group" @click="timechange">
			<view class="title"><text class="text-red" v-if="required">*</text>{{label}}</view>
			<input
			  :placeholder="placeholder"
			   name="input"
			   v-model="selected"
			   disabled="true"
			></input>
			 <view class="action text-lg">
				<u-icon
					name="arrow-right"
				></u-icon>
			</view>
		</view>
		<u-picker
			:show="visible"
			:columns="columns"
			:keyName="labelName"
			@confirm="onConfirm($event,'date')"
			@cancel="visible = false"
			>
		</u-picker>
	</view>
		
</template>

<script>
	export default {
	        name: "AppSecelt",
	        props:{
	            placeholder:{
	                type:String,
	                default:'请选择',
	                required:false
	            },
	            label:{
	                type:String,
	                default:'',
	                required:false
	            },
				labelName:{
	                type:String,
	                default:'label',
	                required:false
	            },
				keyName:{
	                type:String,
	                default:'value',
	                required:false
	            },
				columns:{
				    type:Array,
				    default: () => [],
				},
				required:{
	                type:Boolean,
					default:false,
	                required:false
	            }
	        },
	        data(){
	            return {
	                visible:false,
	                selected:''
	            }
	        },
	        watch:{
	            columns:{
	                immediate:true,
	                handler(val){
						console.log(val)
	                //   if(!val){
	                //     this.selected = ''
	                //   }else{
	                //     this.selected = val;
	                // }
	              }
	            }
	        },
	        created(){
				
	        },
	        methods:{
				timechange(){
					this.visible = true
				},
	            onConfirm(e){
					console.log("confirm",e)
					this.selected = e.value[0][this.labelName];
	                this.$emit('input', e.value[0][this.keyName]);
					this.visible = false
	            }
	        },
	        model: {
	            prop: 'value',
	            event: 'input'
	        }
	    }
</script>
	
<style scoped>
	.jun-form-group {
		background-color: #ffffff;
		display: flex;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
</style>