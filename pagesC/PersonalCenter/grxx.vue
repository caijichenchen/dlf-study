<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
		    <block slot="content">独立费</block>
		</cu-custom>
		<view>
			<view class="info-warp">
				<view class="info-sort">用&nbsp;户&nbsp;名:</view>
				<view class="info-content">{{userInfo.userInfo.user.name}}</view>
			</view>
			<view class="info-warp">
				<view class="info-sort">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像:</view>
				<view class="info-content" style="margin-top: 12upx;">
					<image style="width: 50upx;height: 50upx;" :src="serverUrl+'/upload'+userInfo.userInfo.head_img"></image>
				</view>
			</view>
			<view class="info-warp">
				<view class="info-sort">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</view>
				<view class="info-content">{{userInfo.userInfo.user_name}}</view>
			</view>
			<view class="info-warp">
				<view class="info-sort">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</view>
				<view class="info-content" v-if="userInfo.userInfo.sex == 1">女</view>
				<view class="info-content" v-if="userInfo.userInfo.sex == 0">男</view>
			</view>
			<view class="info-warp">
				<view class="info-sort">验证手机:</view>
				<view class="info-content">{{userInfo.userInfo.user.tel}}</view>
			</view>
			<view class="info-warp">
				<view class="info-sort">验证邮箱:</view>
				<view class="info-content"></view>
			</view>
			<view class="info-warp">
				<view class="info-sort">会员信息:</view>
				<view class="info-content">会员等级:{{userInfo.vipInfo.type}}</view>
			</view>
			<view class="info-warp">
				<view class="info-sort">会员期限:</view>
				<view class="info-content">{{userInfo.vipInfo.expireDate}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
     serverUrl:this.$serverimgUrl
    }
  },
	onLoad(){
		console.log(this.userInfo)
	},
	computed: {
		...mapState({
			userInfo:state=>state.user.userInfo
		})
	}
}
</script>

<style scoped>
	.info-warp{
		width: 100%;
		height: 2.30rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		box-sizing: border-box;
		border-top: 2upx solid #ddd;
		display: flex;
	}
	.info-sort {
		width: 25%;
		line-height: 2.30rem;
		font-size: 0.8rem;
	}
	.info-content {
		margin-left: auto;
		line-height: 2.30rem;
		font-size: 0.8rem;
		color: #656565;
	}
</style>
