<template>
	<view class="m-index">
		<cu-custom bgColor="bg-gradual-blue" >
		    <block slot="content">独立费</block>
		</cu-custom>
		<view class="m-header">
			<view class="search-input" @tap="goSearch">
				<text class="iconfont" style="color: #FFFFFF;font-size: 28rpx;padding-left: 20rpx;padding-right: 20rpx;">&#xe666;</text>
				<input placeholder="设计费计算器" placeholder-style="color:#ffff">
			</view>
			<view v-if="!loginState">
				<view class="m-login" @tap="navigate('login')">
					登录	
				</view>
			</view>
			<view v-else @tap="goCenter">
				<image style="width: 50upx;height: 50upx;margin-left: 20upx;border-radius:50% ;" :src="serverUrl+'/upload'+userInfo.userInfo.head_img"></image>
			</view>
		</view>
		<view class="m-entry-features" style="display: flex;background: #00a0e0;flex-wrap: wrap;">
		    <view class="m-entry-nav" @tap="navigate('sign')">
		        <view class="m-entry-nav-img">
		            <i class="iconfont" style="color: #FFFFFF;">&#xe62f;</i>
		        </view>
		        <p class="m-entry-text">签到</p>
		    </view>
		    <view class="m-entry-nav" @tap="navigate('invite')" >
		        <view class="m-entry-nav-img">
		            <i class="iconfont" style="color: #FFFFFF;">&#xe62a;</i>
		        </view>  
		        <p class="m-entry-text">推荐有奖</p>
		    </view>
			<view class="m-entry-nav" @tap="navigate('start')">
			    <view class="m-entry-nav-img">
			        <i class="iconfont" style="color: #FFFFFF;">&#xe637;</i>
			    </view>
			    <p class="m-entry-text">快速上手</p>
			</view>
		    <view class="m-entry-nav" @tap="navigate('exchange')">
		        <view class="m-entry-nav-img">
		            <i class="iconfont" style="color: #FFFFFF;">&#xe62d;</i>
		        </view>
		        <p class="m-entry-text">优惠兑换</p>
		    </view>
		</view>
		<view class="m-entry-features" style="display: flex;background: #FFFFFF;flex-wrap: wrap;margin-bottom: 20upx;">
		    <navigator class="m-entry-nav">
		        <view class="m-entry-nav-img">
		            <i class="iconfont" style="color: #f83;">&#xe6d1;</i>
		        </view>
		        <p class="m-entry-texts">我的会员</p>
		    </navigator>
		    <navigator class="m-entry-nav" @tap="mynavigate('csshi')">
		        <view class="m-entry-nav-img">
		            <i class="iconfont" style="color: #f83;">&#xe63f;</i>
		        </view>
		        <p class="m-entry-texts">我的计算</p>
		    </navigator>
		    <navigator class="m-entry-nav" @tap="mynavigate('wdbz')">
		        <view class="m-entry-nav-img">
		            <i class="iconfont" style="color: #7bbac2;">&#xe618;</i>
		        </view>
		        <p class="m-entry-texts">我的标准</p>
		    </navigator>
		    <navigator class="m-entry-nav" @tap="mynavigate('mbgl')">
		        <view class="m-entry-nav-img">
		            <i class="iconfont" style="color: #62bcff;">&#xe617;</i>
		        </view>
		        <p class="m-entry-texts">报告模板</p>
		    </navigator>
			<navigator class="m-entry-nav" @tap="mynavigate('jfgm')">
			    <view class="m-entry-nav-img">
			        <i class="iconfont" style="color: #6881ff;">&#xe621;</i>
			    </view>
			    <p class="m-entry-texts">积分购买</p>
			</navigator>
			<navigator class="m-entry-nav" @tap="mynavigate('sfhy')">
			    <view class="m-entry-nav-img">
			        <i class="iconfont" style="color: #f83;">&#xe611;</i>
			    </view>
			    <p class="m-entry-texts">省份会员</p>
			</navigator>
			<navigator class="m-entry-nav" @tap="mynavigate('VIPhy')">
			    <view class="m-entry-nav-img">
			        <i class="iconfont" style="color: #4fa3ae;">&#xe669;</i>
			    </view>
			    <p class="m-entry-texts">VIP会员</p>
			</navigator>
			<navigator class="m-entry-nav" @tap="mynavigate('qyhy')">
			    <view class="m-entry-nav-img">
			        <i class="iconfont" style="color: #87baed;">&#xe615;</i>
			    </view>
			    <p class="m-entry-texts">企业会员</p>
			</navigator>
		</view>
		<view class="carousel-inner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="topic-swiper">
				<swiper-item>
					<navigator>
						<image src="../../static/m_huibian.png" mode="widthFix" lazy-load></image>
					</navigator>
				</swiper-item>
				<swiper-item>
					<navigator url="/pages/PersonalCenter/VIPhy">
						<image src="../../static/m-vip.png" mode="widthFix" lazy-load></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="m-hot-area">
			<view class="m-hot-area-title">
				<h2>
					<span>|     </span>
					<span>热门计算器</span>
				</h2>
				<view class="mall" @tap="goAllCal">查看更多></view>
			</view>
			<view class="m-hot-cal-stand">
				<view class="box">
					<view v-for="(item,index) in hotCalList" :key="index" class="box-item" :data-url="item.new_url" @tap="goHotCal">
						<view class="m-hot-cal-icon">
							<i class="iconfont" style="color: #62bcff;">&#xe7b4;</i>
						</view>
						<view class="m-hot-cal-name">
							<text style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;">{{item.name}}</text>
						</view>
					</view>
				</view>
				<view class="box">
					<view v-for="(item,index) in hotNormList" :key="index" class="box-item" :data-url="item.new_url" @tap="goHotNorm">
						<view class="m-hot-cal-icon">
							<i class="iconfont" style="color: #62bcff;">&#xe7b4;</i>
						</view>
						<view class="m-hot-cal-name">
							<text style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;">{{item.name}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="m-hot-area">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in wdsc" :key="index" @tap="tabSelect" :data-id="index">
						{{item}}
					</view>
				</view>
				<view class="sjf_content">
					<!-- 我的收藏 -->
					<view v-show="TabCur==0" class="content_jsq">
						<view class="tabbox">
							<view class="item-box" :class="{tabox:index==show}" 
							v-for="(item,index) in tabs" :key="index" :data-index="index"
							@touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @tap="showtab(index)">
								<view class="item-list" >{{item.name}}</view>
								<view class="item-del" >删除</view><!-- 
								<text style="padding-left: 30upx;">{{item.name}}</text> 
								<text style="padding-right: 30upx;" class="rt" @tap="deletetabox(index)">X</text> -->
							</view>
						</view> 
					</view>
					<!-- 经常使用 -->
					<view v-show="TabCur==1" class="content_jsq">
						<view class="tabbox">
							<view class="text-black" :class="{tabox:index==show}" 
							style="width: 100%; height: 80upx;line-height: 80upx;"
							v-for="(item,index) in tabs" :key="index" @tap="showtab(index)">
								<text style="padding-left: 30upx;">{{item.name}}</text> 
								<text style="padding-right: 30upx;" class="rt" @tap="deletetabox(index)">X</text>
							</view>
						</view> 
					</view>
					<!-- 最近使用 -->
					<view v-show="TabCur==2" class="content_jsq">
						<view class="tabbox">
							<view class="text-black" :class="{tabox:index==show}" 
							style="width: 100%; height: 80upx;line-height: 80upx;"
							v-for="(item,index) in tabs" :key="index" @tap="showtab(index)">
								<text style="padding-left: 30upx;">{{item.name}}</text> 
								<text style="padding-right: 30upx;" class="rt" @tap="deletetabox(index)">X</text>
							</view>
						</view> 
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import $req from '@/common/req/request.js'
	export default {  
		data() {
			return {
				serverUrl:this.$serverimgUrl,
				hotCalList:[],
				hotNormList: [],
				current: 0,
				mode: 'long',
				CustomBar: this.CustomBar,
				TabCur: 0,
				scrollLeft: 0,
				wdsc:['我的收藏','经常使用','最近使用'],
				tabs:[
					{name:'暗红色的卡号圣诞节库函计算器'},
					{name:'暗红色的卡号圣诞节库函计算器'},
					{name:'暗红色的卡号圣诞节库函计算器'},
					{name:'暗红色的卡号圣诞节库函计算器'},
					{name:'暗红色的卡号圣诞节库函计算器'}
				],
				show:'',
				startX : 0,
				endX : 0,
				touchEle: '',
				moveWith: 0
			}
		},
		mounted() {
			if(this.hotCal.length > 0){ //热门计算器标准vuex存储
				this.hotCalList = this.hotCal.slice(0,3)
				this.hotNormList = this.hotNorm.slice(0,3)
			}else{
				$req.request({
					url:'/api/xcx/hotrank'
				}).then(res=>{
					this.hotCalList = res.data.slice(0,3)
					this.setHotCal(res.data)
				}).catch(err=>{
					console.log(err)
				})
				$req.request({
					url:'/api/xcx/norm'
				}).then(res=>{
					this.hotNormList = res.data.slice(0,3)
					this.setHotNorm(res.data)
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		computed:{
			...mapState({
				loginState:state=>state.user.loginState,
				userInfo:state=>state.user.userInfo,
				hotCal:state=>state.hot.hotCal,
				hotNorm:state=>state.hot.hotNorm
			}),
		},
		methods: {
			...mapMutations(['setHotCal','setHotNorm']),
			goSearch(){
				uni.navigateTo({
					url:'/pagesC/sousuo/sousuo'
				})
			},
			goCenter(){
				uni.switchTab({
					url: '/pages/PersonalCenter/PersonalCenter'
				})
			},
			navigate(path){
				if(!path) return
				this.navigateTo({
					url: `/pagesC/${path}/${path}`
				})
			},
			mynavigate(path){
				if(!path) return
				this.navigateTo({
					url: `/pagesC/PersonalCenter/${path}`
				})
			},
			goAllCal(){
				uni.switchTab({
					url: '/pages/Calculation/Calculation'
				})
			},
			goHotCal(e){
				let url = e.currentTarget.dataset.url
				let urlArr = url.split('/')
				if(urlArr[1] == 'sjf'){
					uni.navigateTo({
						url: `/pagesB/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
					})
				}else if(urlArr[1] == 'zbdlf' ){
					uni.navigateTo({
						url: `/pagesA/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
					});
				}else if(urlArr[1] == 'jlf'){
					uni.navigateTo({
						url: `/pagesC/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
					});
				}
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			showtab(index){
				this.show = index
			},
			deletetabox(index){
				console.log("点击了" + index);
				this.tabs.splice(index,1)
			},
			touchStart(e){
				this.touchEle = e.currentTarget.dataset.index
				console.log(this.touchEle)
				this.startX = e.touches[0].clientX//记录初始位置
			},
			touchMove(e){
				let moveX = e.touches[0].clientX
				let disX = this.startX - moveX
				
			},
			touchEnd(e){
				let nowEle = e.currentTarget.dataset.index
				console.log(nowEle)
				this.endX = e.changedTouches[0].clientX//结束位置
				if(this.touchEle == nowEle && this.startX-this.endX > 30 ){//当前节点左滑
					// console.log("左滑")
					
				}
				if(this.touchEle == nowEle && this.endX-this.startX > 30 ){//当前节点右滑
					console.log("右滑")
				}
				this.startX = 0
				this.endX = 0
			},
		}
	}
</script>

<style>
	/*导航部分样式*/
	.m-header{
		width: 100%;
		height: 37px;
		display: flex;
		padding: 5px 15px;
		background-color: #00a0e0;
	}
	.input-placeholder{
		color: #FFFFFF;
	}
	.search-input{
		width: 88%;
		float: left;
		height: 25px;
		line-height: 25px;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		color: #FFFFFF;
		font-size: 0.65rem;
		display: flex;
	}
	.m-search>input{
		height: 27px;
		line-height: 27px;
		width: 100%;
		color: #FFFFFF;
	}
	
	.m-login{
		margin-left: 20upx;
		line-height: 30px;
		color: #FFFFFF;
		font-size: 26rpx;
	}
	/*九宫格部分*/
	.m-entry-features {
	    height: 150 upx;
	    border-bottom: 40 upx;
	}
	
	.m-all-features {
	    height: 296 upx;
	    margin-bottom: 20 upx;
	}
	
	.m-entry-nav {
	    display: block;
	    width: 25%;
	    height: 154 upx;
	    padding: 15px 0;
	    border: 0;
	}
	
	.m-entry-nav-img {
	    width: 100%;
	    height: 80 upx;
	    text-align: center;
	}
	
	.m-entry-nav-img img{
	    width: 30px;
	    height: 30px;
	    text-align: center;
	}
	.m-entry-nav-img i{
		width: 27px;
		height: 27px;
		margin: 0 auto;
	}
	.m-entry-text {
	    display: block;
	    width: 100%;
	    text-align: center;
	    color: #FFFFFF;
	    font-size: 15 upx;
	    padding-top: 9px;
	    margin: 0;
	}
	
	.m-all-nav {
	    width: 25%;
	    height: 148 upx;
	    float: left;
	    padding: 20 upx 0;
	    background-color: #FFFFFF;
	}
	
	.m-all-text {
	    display: block;
	    width: 100%;
	    text-align: center;
	    font-size: 15 upx;
	}
	.m-entry-texts{
		display: block;
		width: 100%;
		text-align: center;
		color: #000000;
		font-size: 15 upx;
		padding-top: 9px;
		margin: 0;
	}
	/*轮播图*/
	.carousel-inner{
		width: 100%;
		height: 101px;
		margin-bottom: 20upx;
	}
	.topic-swiper{
		width: 100%;
		height: 101px;
	}
	.topic-swiper image{
		width: 100%;
		height: 101px;
	}
	/*热门计算器*/
	.m-hot-area-title{
		width: 100%;
		height: 70upx;
		background-color: #FFFFFF;
	}
	.m-hot-area-title h2{
		width: 60%;
		height: 70upx;
		font-size: 28upx;
		line-height: 70upx;
		/* padding: 15upx 20upx 0; */
		float: left;
	}
	.m-hot-area-title .mall{
		width: 40%;
		height: 70upx;
		line-height: 70upx;
		font-size: 28upx;
		color: #66b5dc;
		padding-left: 120upx;
		float: right;
		margin-bottom: 2upx;
	}
	.m-hot-area-titles{
		width: 100%;
		height: 70upx;
		background-color: #FFFFFF;
	}
	.m-hot-cal-stand{
		height: 240upx;
		margin-bottom: 20upx;
	}
	.m-hot-area-titles h2{
		width: 60%;
		height: 70upx;
		line-height: 70upx;
		font-size: 28upx;
		/* padding: 15upx 20upx 0; */
		float: left;
	}
	.m-hot-area-titles navigator{
		width: 40%;
		height: 70upx;
		line-height: 70upx;
		font-size: 28upx;
		color: #66b5dc;
		padding-left: 120upx;
		float: left;
		margin-bottom: 2upx;
	}
	/* 切换按钮 */
	.sjf_content{
		width: 100%;
		height: auto;
		background-color: #fff;
	}
	.content_jsq{
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
	}
	.text-orange , .line-orange, .lines-orange{
		color: #00a0ea;
	}
	.tabbox{
		width: 100%;
		padding-bottom: 40upx;
		border-bottom: 1upx solid #ececec;
	}
	.tabox{
		color: #fff;
		background: #00a0ea;
	}
	
	.item-box {
		width: 100%; 
		height: 80rpx;
		line-height: 80rpx;
		overflow: hidden;
		position: relative;
		display: flex;
	}
	.item-list {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
	}
	.item-del{
		position: absolute;
		width: 84rpx;
		background: red;
		color: #fff;
		font-size: 28rpx;
		line-height: 80rpx;
		height: 100%;
		text-align: center;
		right: 0;
	}
	.box{
		width: 100%;
		height: 120upx;
		display: flex;
		flex-wrap: wrap;
	}
	.box-item{
		width: 33.333%;
		height: 120upx;
		float: left;
		background: #FFFFFF;
		/* margin: 0 1upx 1upx; */
		border-bottom: 1upx solid #f1f1f1;
		border-right: 1upx solid #f1f1f1;
		
	}
	.m-hot-cal-icon{
		width: 40%;
		height: 120upx;
		padding-left: 10upx;
		float: left;
		display: flex;
		
	}
	.m-hot-cal-icon i{
		margin: auto;
	}
	.m-hot-cal-name{
		width: 60%;
		height: 120upx;
		padding-right: 10upx;
		float: left;
		display: flex;
	}
	.m-hot-cal-name text{
		font-size: 	22upx;
		color: #333;
		margin: auto;
	}
</style>