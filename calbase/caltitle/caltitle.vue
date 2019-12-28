<template>
		<view class="c-header">
			<text class="l-box">←</text>
			<text>-</text>
			<!-- <text :data-id="test.jsxmqqgzzxfGuo.role_id" :data-val="item.name" @tap="add">+</text> -->
			<text @tap="add">+</text>
			<text class="r-box">→</text>
		</view>
</template>

<script>
	export default {
		props:{
			id:{
				type:String
			},
			name:{
				type:String
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			add(e){
				
			}
		}
	}
</script>

<style scoped>
	.c-header {
		height: 70rpx;
		line-height: 70rpx;
		background: #f5f5f5;
		border-bottom: 2rpx solid #ddd;
		border-top: 2rpx solid #ddd;
		font-size: 40rpx;
		display: flex;
		justify-content: center;
	}
	.c-header text {
		display: inline-block;
		text-align: center;
		width: 60rpx;
		background: #fff;
		border: 2rpx solid #ddd;
		height: 64rpx;
		border-top-style: none;
		border-bottom-style: none;
		line-height: 64rpx;
	}
	.l-box{
		margin-right: auto;
	}
	.r-box {
		margin-left: auto;
	}
</style>
