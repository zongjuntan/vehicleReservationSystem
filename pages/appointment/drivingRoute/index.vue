<template>
	<view>
        <scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="content">查看行驶线路图</block>
			</cu-custom>
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
            };
        },
		onLoad:function(){
		},
		computed: {
		},
        methods: {
			...mapActions([ "mLogin","PhoneLogin","ThirdLogin" ]),
		},
		beforeDestroy() {

		},
    }
</script>

<style>

</style>
