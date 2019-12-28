<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">模板管理</block>
		</cu-custom>
		<view class="table">
			<view style="width: 15%;">
				序号
			</view>
			<view style="width: 35%;">
				名称
			</view>
			<view style="width: 50%;">
				操作
			</view>
		</view>
		<view v-if="!normList" class="list_all">
			暂无数据
		</view>
		<view v-else v-for="(item,index) in normList" :key="index">
			<view class="mb-wrap">
				<text style="width: 15%;">{{index+1}}</text>
				<text style="width: 35%;">{{item.name}}</text>
				<text style="color: #00A0E0;margin-right: 20upx;">修改</text>
				<text style="color: rgba(0,0,0,0.2);margin-right: 20upx;" v-if="item.default == 0" :data-countid="item.id" >删除</text>
				<text style="color: red;margin-right: 20upx;" v-else :data-countid="item.id" @tap="delMb">删除</text>
				<text style="color: rgba(0,0,0,0.2);" v-if="item.default == 0" :data-countid="item.id" >设为默认</text>
				<text style="color: #00A0E0;" v-else :data-countid="item.id" @tap="defaultMb">设为默认</text>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				normList: []
			}
		},
		onLoad(){
			this.getnormList()
		},
		methods: {
			getnormList(){
				$req.request({
					url:'/api/xcx/template/templatelist',
				}).then((res)=> {
					this.normList = res.data.data
					console.log('获取用户标准成功',res)
				}).catch((err)=>{
					console.log('获取用户标准失败',err)
				})
			},
			delMb(e) {
				$req.request({
					url:'/api/xcx/template/deleteTemplate?id='+e.currentTarget.dataset.countid,
				}).then((res)=> {
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
					this.getnormList()
				}).catch((err)=>{
					console.log('获取用户标准失败',err)
				})
			},
			defaultMb(e) {
				$req.request({
					url:'/api/xcx/template/default?id='+e.currentTarget.dataset.countid,
				}).then((res)=> {
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
					this.getnormList()
				}).catch((err)=>{
					console.log('获取用户标准失败',err)
				})
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.table{
		width: 100%;
		display: flex;
		background: #FFFFFF;
		padding-left: 16upx;
		padding-right: 16upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #ccc;
	}
	.table view {
		font-size: 0.82rem;
		height: 1.9rem;
		text-align: center;
		line-height: 1.9rem;
	}
	.list_all{
		width: 100%;
		padding: 16upx;
		text-align: center;
		border-bottom: 1px solid #f2f2f2;
		border-top: 1px solid #f2f2f2;
		color: #656565;
		background: #FFFFFF;
	}
	.mb-wrap {
		height: 1.8rem;
		line-height: 1.8rem;
		font-size: 0.78rem;
		padding-left: 16upx;
	}
	.mb-wrap text {
		color: #656565;
		display: inline-block;
		text-align: center;
	}
</style>
