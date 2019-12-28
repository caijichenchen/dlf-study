 <template>
 	<view>
 		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
 			<block slot="backText">返回</block>
 		    <block slot="content">搜索</block>
 		</cu-custom>
 		<view class="searchTopBox">
			<input class="search-in" type="text" v-model="searchkey" placeholder="请输入关键字">
			<!-- <view class="search-btn">搜索</view> -->
			<view class="cu-btn " @tap="getSearch">搜索</view>
 		</view>
 		<view class="content">
			<view class="his-box" v-if="showhistory">
				<view style="display: flex;">
					<view class="cont-title">历史记录</view>
					<view class="clear-btn" @tap="clearSearchList">清空</view>
				</view>
				<view class="cont-box" style="margin-top: 0.3rem;">
					<view class="his-item" v-for="(item,index) in hisSearchList" :key="index" :data-name="item" @tap="setSearch">{{item}}</view>
				</view>
			</view>
			<view class="hot-box">
				<view class="cont-title">热门推荐</view>
				<view class="cont-box">
					<view class="hot-item" v-for="(item,index) in hotCalList" :key="index" :data-name="item" @tap="setSearch">{{item}}</view>
				</view>
			</view>
 		</view>
 	</view>
 </template>
 <script>
	import $req from '@/common/req/request.js'
 	export default {
 		data() {
 			return {
				searchkey: '',
				hisSearchList: [],
				showhistory:false,
				hotCalList: ['设计费计算器','监理费计算器','招标代理费计算器','造价咨询费计算器','监理费计算标准-发改价格[2007]670号','招标代理费计算标准-计价格[2002]1980号','设计费计算标准|计价格[2002]10号']
 			}
 		},
		mounted() {
			let searchList = uni.getStorageSync('hisSearchList')
			if(searchList){
				this.hisSearchList = searchList
				this.showhistory = true
			}
		},
 		methods: {
			getSearch(){
				let searchkey = this.searchkey.trim()
				if(!searchkey){
					return uni.showToast({
						icon:'none',
						title:'输入不能为空'
					})
				}
				this.searchkey = ''
				this.showhistory = true
				if(this.hisSearchList.length >= 5){//保留历史记录条数
					this.hisSearchList.pop()
					this.hisSearchList.unshift(searchkey)
				}
				this.hisSearchList.unshift(searchkey)
				this.hisSearchList = [...new Set(this.hisSearchList)]
				uni.setStorageSync('hisSearchList',this.hisSearchList)
				uni.navigateTo({
						url:'/pages/sousuo/searchResult'
					})
				// $req.request({
				// 	url: '/api/xcx/search',
				// 	data:{
				// 		key: searchkey
				// 	}
				// }).then(res=>{
				// 	console.log(res.data)
				// }).catch(err=>{
				// 	console.log(err)
				// }).finally(data=>{
				// 	console.log(data)
				// 	uni.navigateTo({
				// 		url:'/pages/sousuo/searchResult'
				// 	})
				// })
				uni.request({
					url: this.$serverUrl + '/api/xcx/search',
					data:{
						key: searchkey
					},
					success:(res)=> {
						console.log(res)
					},
					fail:(err)=>{
						console.log(err)
					}
				})
			},
			setSearch(e){
				this.searchkey = e.currentTarget.dataset.name
			},
			clearSearchList(){
				this.showhistory = false
				this.hisSearchList = []
				uni.removeStorageSync('hisSearchList')
			}
 		}
 	}
 </script>
 <style>
 	page {
 		background: #FFF;
 	}
 	.searchTopBox {
 		width: 100%;
 		background-color: #FFFFFF;
 		box-sizing: border-box;
 		margin-top: 0.5rem;
		display: flex;
		padding-left: 3%;
		box-sizing: border-box;
 	}
	.search-in {
		width: 80%;
		background: #f5f5f5;
		height: 1.6rem;
		padding-left: 1rem;
		border-radius: 1.6rem;
	}
	.his-box {
		margin-bottom: 1rem;
	}
	.his-item {
		padding: 0.3rem 0.6rem;
		background: #f5f5f5;
		color: #000000;
		font-size: 0.75rem;
		margin-right: 1.5rem;
		margin-bottom: 0.7rem;
	}
	.clear-btn {
		margin-left: auto;
		background: #f5f5f5;
		color: #ccc;
		border-radius: 15%;
		padding: 0.3rem;
	}
	.search-btn {
		font-size: 0.8rem;
		width: 20%;
		line-height: 1.6rem;
		text-align: center;
		color: #00A0E0;
	}
 	.content {
		margin-top: 0.5rem;
		padding-left: 3%;
		padding-right: 3%;
		box-sizing: border-box;
	}
	.cont-title {
		font-size: 0.8rem;
		font-weight: 700;
		text-align: left;
	}
	.cont-box {
		display: flex;
		flex-wrap: wrap;
	}
	.hot-item {
		background: #f1f8ff;
		color: #0366d6;
		margin-top: 0.7rem;
		font-size: 0.75rem;
		margin-right: 1.5rem;
		padding: 0.3rem 0.6rem;
	}
 </style>