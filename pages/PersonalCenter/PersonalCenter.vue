<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" >
		    <block slot="content">独立费</block>
		</cu-custom>
		<navigator v-if="loginState" class="header" url="grxx">
			<view class="userinfo">
				<view class="face"><image :src="serverUrl+'/upload'+userInfo.userInfo.head_img"></image></view>
				<view class="info">
					<view class="username">{{userInfo.userInfo.user.name}}</view>
					<view class="integral">会员信息:{{userInfo.vipInfo.type}}</view>
				</view>
			</view>
			<view class="setting"><image src="../../static/HM-PersonalCenter/setting.png"></image></view>
		</navigator >
			<navigator url="../login/login" v-else>
				<view>请登录</view>
			</navigator>
		<view class="orders"></view> 
		<!-- 我的通知 -->
		<view class="list" >
			<navigator url="wdtz" class="li"    hover-class="hover" >
				<view class="icon iconBLue"><text class="iconfont">&#xe872;</text></view>
				<view class="text">我的通知</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator url="/pagesC/PersonalCenter/wdhy" class="li"    hover-class="hover" >
				<view class="icon"><image src="/static/HM-PersonalCenter/sever/vip.png"></image></view>
				<view class="text">我的会员</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
		</view>
		<view class="list" >
			<navigator url="xgzl" class="li"   hover-class="hover" >
				<view class="icon iconRed" ><text class="iconfont">&#xe623;</text></view>
				<view class="text">修改资料</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator url="xgmm" class="li"   hover-class="hover" >
				<view class="icon iconGreen"><text class="iconfont">&#xe718;</text></view>
				<view class="text">修改密码</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
			<navigator url="zhaq" class="li"   hover-class="hover" >
				<view class="icon iconYellow"><text class="iconfont">&#xe6d8;</text></view>
				<view class="text">账户安全</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator url="aqmm" class="li"    hover-class="hover" >
				<view class="icon iconBLue"><text class="iconfont">&#xe62b;</text></view>
				<view class="text">安全密码</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
		</view>
		<view class="list" >
			<navigator url="zxhy" class="li"    hover-class="hover" >
				<view class="icon iconYellow" ><text class="iconfont">&#xe620;</text></view>
				<view class="text">自选会员</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator class="li" url="sfhy"   hover-class="hover" >
				<view class="icon iconGreen"><text class="iconfont">&#xe624;</text></view>
				<view class="text">省份会员</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
			<navigator class="li" url="VIPhy"  hover-class="hover" >
				<view class="icon iconGreen"><text class="iconfont">&#xe622;</text></view>
				<view class="text">VIP会员</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator class="li" url="qyhy"   hover-class="hover" >
				<view class="icon iconYellow"><text class="iconfont">&#xe631;</text></view>
				<view class="text">企业会员</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
		</view>
		<view class="list">
			<navigator url="jfgm" class="li"   hover-class="hover" >
				<view class="icon iconPop" ><text class="iconfont">&#xe621;</text></view>
				<view class="text">积分购买</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator url="jfcx" class="li"    hover-class="hover" >
				<view class="icon iconYellow"><text class="iconfont">&#xe600;</text></view>
				<view class="text">积分查询</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator > 
		</view>
		<view class="list" >
			<navigator url="wdyhj" class="li"    hover-class="hover" >
				<view class="icon iconY" ><text class="iconfont">&#xe69b;</text></view>
				<view class="text">优惠券</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator url="msth" class="li"    hover-class="hover" >
				<view class="icon iconD"><text class="iconfont">&#xe63b;</text></view>
				<view class="text">密匙兑换历史</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
		</view>
		<view class="list">
			<navigator url="wdhb" class="li"    hover-class="hover" >
				<view class="icon iconRed"><text class="iconfont">&#xe61d;</text></view>
				<view class="text">我的红包</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
		</view>
		<view class="list" >
			<navigator url="wdedingdan" class="li"  hover-class="hover" >
				<view class="icon iconBLue" ><text class="iconfont">&#xe603;</text></view>
				<view class="text">我的订单</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator url="wdfp" class="li"    hover-class="hover" >
				<view class="icon iconRed"><text class="iconfont">&#xe6f3;</text></view>
				<view class="text">我的发票</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
		</view>
		<view class="list" >
			<navigator url="csshi" class="li"    hover-class="hover" >
				<view class="icon iconRed" ><text class="iconfont">&#xe605;</text></view>
				<view class="text">我的计算</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator>
			<navigator url="mbgl" class="li"    hover-class="hover" >
				<view class="icon iconGray"><text class="iconfont">&#xe63e;</text></view>
				<view class="text">模块管理</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
		</view>
		<view class="list">
			<navigator url="wdbz" class="li"  hover-class="hover" >
				<view class="icon iconRed"><text class="iconfont">&#xe602;</text></view>
				<view class="text">我的标准</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
			<navigator url="wdsc" class="li"  hover-class="hover" >
				<view class="icon iconRed"><text class="iconfont">&#xe602;</text></view>
				<view class="text">我的收藏</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</navigator> 
		</view>
		<view class="list">
			<view class="li" @tap="showex()"   hover-class="hover" >
				<view class="icon iconRed"><text class="iconfont">&#xe616;</text></view>
				<view class="text">退出</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</view> 
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				li:'',
				serverUrl:this.$serverimgUrl,
			};
		},
		onShow() {
			if(!this.loginState){
				uni.navigateTo({
				    url: '../login/login'
				});
			}
		},
		computed:{
			...mapState({
				loginState:state=>state.user.loginState,
				token:state=>state.user.token,
				userInfo:state=>state.user.userInfo
			})
		},
		methods: {
			...mapMutations(['logout']),
			//用户点击订单类型
			toOrderType(index){
				uni.showToast({title: this.orderTypeLise[index].name});
			},
			//用户点击列表项
			toPage(list_i,li_i){
				uni.showToast({title: this.severList[list_i][li_i].name});
			},
			// 退出
			showex(){
				var that = this
				uni.showModal({
					title: '提示',
					content: '是否清除缓存',
					confirmText: '立刻清除',
					success: res => {
						if (res.confirm) {
							that.logout()
							uni.showToast({
							 	title: '清除缓存成功'
							});
							uni.switchTab({
							    url: '/pages/index/index'
							});
						}
					},
					fail: () => {}
				});
				
			},
		}
	}
</script>

<style lang="scss">
page{background-color:#fff}
.header{
	&.status{padding-top:var(--status-bar-height);}
	background-color:#00a0ea;width:100%;height:30vw;padding:0 4%;display:flex;align-items:center;
	.userinfo{
		width:90%;display:flex;
		.face{flex-shrink:0;width:15vw;height:15vw;
			image{width:100%;height:100%;border-radius:100%}
		}
		.info{
			display:flex;flex-flow:wrap;padding-left:30upx;
			.username{width:100%;color:#fff;font-size:40upx}
			.integral{display:flex;align-items:center;padding:0 20upx;height:40upx;color:#fff;background-color:rgba(0,0,0,0.1);border-radius:20upx;font-size:24upx}
		}
	}
	.setting{
		flex-shrink:0;width:6vw;height:6vw;
		image{width:100%;height:100%}
	}
}
.hover{background-color:#eee}
.orders{
	background-color:#00a0ea;width:100%;height:11vw;padding:0 4%;display:flex;align-items:flex-start;border-radius:0 0 100% 100%;margin-top: -40upx;
	.box{
		width:98%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:24upx;box-shadow:0 0 20upx rgba(0,0,0,0.15);margin-bottom:40upx;display:flex;align-items:center;justify-content:center;
		.label{
			display:flex;align-items:center;justify-content:center;flex-flow:wrap;width:100%;height:16vw;color:#666666;font-size:26upx;
			.icon{
				position:relative;width:7vw;height:7vw;margin:0 1vw;
				.badge{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:20upx;color:#fff;display:flex;align-items:center;justify-content:center;z-index: 10;}
				image{width:7vw;height:7vw;z-index: 9;}
			}
		}
	}
}
.list{
	width:100%;border-bottom:solid 26upx #f1f1f1; margin-top: 20upx;
	.li{
		width:100%;height:100upx;padding:0 4%;border-bottom:solid 1upx #e7e7e7;display:flex;align-items:center;
	&.noborder{border-bottom:0}
		.icon{
			flex-shrink:0;width:50upx;height:50upx;
			image{width:50upx;height:50upx}
		}
		.iconBLue{color: #00a0ea}
		.iconRed{color: #e83828}
		.iconGreen{color: #26c931}
		.iconYellow{color: #fea852}
		.iconPop{color: #6881ff}
		.iconLightblue{color: #20bbc5} 
		.iconGray{color: #9fadc7} 
		.iconY{color: #1FBAC4} 
		.iconD{color: #E6AF45} 
		.text{padding-left:20upx;width:100%;color:#666}
		.to{flex-shrink:0;width:40upx;height:40upx}
	}
}
</style>
