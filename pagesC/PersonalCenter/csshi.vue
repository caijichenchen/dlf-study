<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的计算</block>
		</cu-custom>
		<view class="suggst_title">
			<view class="suggst_title_calculation">
				计算名称
			</view>
			<view class="suggst_title_calculation">
				计算时间
			</view>
			<view class="suggst_title_calculation">
				浏览报告
			</view>
		</view>
		<view class="list_all" v-for="(item,index) in countdata.data" :key="index">
			<view class="list_alls">
				<view class="list_all_title">
					<text style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;">{{JSON.parse(item.data).name}}</text>
				</view>
				<view class="list_all_title">
					{{JSON.parse(item.data).date}}
				</view>
				<view>
					<navigator url="jsym" class="jsbtn" style="background-color: #5cb85c;border-color: #4cae4c;">查看计算过程</navigator>
				</view>
			</view>
		</view>
		<!-- <uni-pagination title="标题文字" show-icon="true" total="50" current="2"></uni-pagination> -->
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	// import {uniPagination} from "uni-ui"
	export default {
		data() {
			return {
				countdata:{}
			}
		},
		onLoad(){
			$req.request({
				url:'/api/xcx/mycount/mycount'
			}).then((res)=> {
				this.countdata = res.data.bigdata
				console.log('获取用户计算成功',res.data)
			}).catch((err)=>{
				console.log('获取用户计算失败',err)
			})
		},
		components: {
		    // uniPagination
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.suggst_title{
		display: flex;
		flex-wrap: wrap;
	}
	.suggst_title_calculation{
		width: 33.333%;
		height: 74upx;
		padding: 16upx;
		float: left;
		background-color: #00a0e0;
		color: #FFFFFF;
		text-align: center;
	}
	.list_alls{
		display: flex;
		flex-wrap: wrap;
		border-bottom: 2upx solid #ccc;
	}
	.list_all_title{
		width: 33.3333333%;
		height: 114upx;
		padding: 16upx;
		float: left;
		text-align: center;
	}
	.list_all_title navigator{
		width: 200upx;
		height: 58upx;
		padding: 10upx 20upx;
		color: #FFFFFF;
		font-size: 26upx;
		border-radius: 4upx;
	}
	.jsbtn {
		height: 60upx;
		line-height: 60upx;
		padding-left: 20upx;
		padding-right: 20upx;
		font-size: 0.75rem;
		color: #fff;
		margin-top: 0.7rem;
	}
</style>
