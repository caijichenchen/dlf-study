<template>
	<view>
		<view class="header" v-bind:class="{'status':isH5Plus}">
			<view class="userinfo">
				<view class="face"><image :src="userinfo.face"></image></view>
				<view class="info">
					<view class="username">{{userinfo.username}}</view>
					<view class="integral">积分:{{userinfo.integral}}</view>
				</view>
			</view>
			<view class="setting"><image src="../../static/HM-PersonalCenter/setting.png"></image></view>
		</view>
		<view class="orders">
			
		</view> 
		<!-- 我的通知 -->
		<view class="list" >
			<view class="li" @tap="showwdtz()"   hover-class="hover" >
				<view class="icon"><image src="/static/HM-PersonalCenter/sever/lingdang (2).png"></image></view>
				<view class="text">我的通知</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
			<view class="li" @tap="showwdhy()"   hover-class="hover" >
				<view class="icon"><image src="/static/HM-PersonalCenter/sever/vip.png"></image></view>
				<view class="text">我的会员</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
		</view>
		<view class="list" >
			<view class="li" @tap="showxgzl()"   hover-class="hover" >
				<view class="icon"><image src="/static/HM-PersonalCenter/sever/xg.png"></image></view>
				<view class="text">修改资料</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
			<view class="li" @tap="showxgmm()"   hover-class="hover" >
				<view class="icon"><image src="/static/HM-PersonalCenter/sever/mm.png"></image></view>
				<view class="text">修改密码</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
			<view class="li" @tap="showzhaq()"   hover-class="hover" >
				<view class="icon"><image src="/static/HM-PersonalCenter/sever/anquan.png"></image></view>
				<view class="text">账户安全</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
			<view class="li" @tap="showaqmm()"   hover-class="hover" >
				<view class="icon"><image src="/static/HM-PersonalCenter/sever/anfang.png"></image></view>
				<view class="text">安全密码</view>
				<image class="to" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
		</view>
		<view class="list" >
			<view class="li"   hoverv-class="hover" >
				<view class="icon"><image :src="'../../static/HM-PersonalCenter/sever/'+li.icon"></image></view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/HM-PersonalCenter/to.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus:true,
				//#endif
				//#ifndef APP-PLUS
				isH5Plus:false,
				//#endif
				userinfo:{},
				orderTypeLise:[
					//name-标题 icon-图标 badge-角标
					{name:'待付款',icon:'l1.png',badge:1},
					{name:'待发货',icon:'l2.png',badge:2},
					{name:'待收货',icon:'l3.png',badge:6},
					{name:'待评价',icon:'l4.png',badge:9},
					{name:'退换货',icon:'l5.png',badge:0}
				],
				severList:[
					[
						{name:'我的通知',icon:'point.png',page:'wdtz'},
						{name:'我的会员',icon:'quan.png',page:'wdhy'},
						{name:'修改资料',icon:'momey.png',page:'xgzl'},
						{name:'修改密码',icon:'renw.png',page:'xgmm'},
					],
					[
						{name:'积分明细',icon:'mingxi.png'},
						{name:'抽奖',icon:'choujiang.png'},
						{name:'收货地址',icon:'addr.png'},
						{name:'银行卡',icon:'bank.png'},
						{name:'安全中心',icon:'security.png'},
						{name:'在线客服',icon:'kefu.png'}
					]
				],
			};
		},
		onLoad() {
			//加载
			this.init();
		},
		methods: {
			init() {
				//用户信息
				this.userinfo={
					face:'../../static/HM-PersonalCenter/face.jpeg',
					username:"VIP会员10240",
					integral:"1435"
				}		
			},
			//用户点击订单类型
			toOrderType(index){
				uni.showToast({title: this.orderTypeLise[index].name});
			},
			//用户点击列表项
			toPage(list_i,li_i){
				uni.showToast({title: this.severList[list_i][li_i].name});
				
			},
			// 我的通知
			showwdtz(){
				uni.navigateTo({
					url: '../wdtz/wdtz',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			// 我的会员
			showwdhy(){
				uni.navigateTo({
					url: '../wdhy/wdhy',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			// 修改资料
			showxgzl(){
				uni.navigateTo({
					url: '../wdhy/wdhy',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			// 修改密码
			showxgmm(){
				uni.navigateTo({
					url: '../registe/xgmm',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			// 账户安全
			showzhaq(){
				uni.navigateTo({
					url: '../wdhy/wdhy',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			// 安全密码
			showaqmm(){
				uni.navigateTo({
					url: '../wdhy/wdhy',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
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
		.text{padding-left:20upx;width:100%;color:#666}
		.to{flex-shrink:0;width:40upx;height:40upx}
	}
}
</style>
