<template>
	<view class="content">
		<cu-custom  >
		    <block slot="content"></block>
		</cu-custom>
		<view class="dlf">
			<view class="dlf-title">独立费</view>
			<view class="dlf-content">轻松计算 无价时间</view>
		</view>
		<view class="list">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="phoneno" type="number" maxlength="11" placeholder="请输入手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="password" type="text" password maxlength="16" placeholder="6-16位字母数字符号组成密码" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" @blur="checkInput" v-model="regpassword" type="text" password maxlength="16" placeholder="请确认密码" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/3.png"></image>
				<input class="biaoti" v-model="code" type="number" maxlength="4" placeholder="请输入验证码" />
				<view class="code" :class="goreg ? '':'noinput'" @click="getCode">{{codetext}}</view>
			</view>
			<button class="regbtn" :class="goreg ? '':'noinput'" @click="goreg && regUser">立即注册</button>
		</view>
		<view>
			<view class="okmsg">注册即代表同意<text style="color: #00a0e0;">《会员协议》</text></view>
		</view>
		<view class="login-box">
			<text>已有账号 ? </text>
			<text style="color: #00a0e0;" @tap="gologin">立即登录</text>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				phoneno:'',
				password:'',
				regpassword:'',
				code:'',
				codetext: '获取验证码',
				goreg:false,
				time:10,
				timer: null
			}
		},
		methods:{
			checkInput(){
				var regPhone = /^1[3456789]\d{9}$/
				if(!regPhone.test(this.phoneno)){
					uni.showToast({
						icon: 'none',
						title:'手机号输入格式不正确'
					})
					return 
				}
				if(this.password != this.regpassword){
					uni.showToast({
						icon: 'none',
						title:'两次密码输入不一致'
					})
					return 
				}
				if(!this.password && !this.regpassword){
					return
				}
				this.goreg = true
			},
			getCode(){
				var that = this
				this.timer = setInterval(()=>{
					if(that.time == 0){
						clearInterval(that.timer)
						that.time = 10
						that.goreg = true
						that.codetext = '获取验证码'
						return 
					}
					that.goreg = false
					that.codetext = (that.time--)+'s 再获取'
				},1000)
				$req.request({
					url:'/xcx/registerVerfied',
					data:{
						tel:this.phoneno,
						message_code: 'registf'
					}
				}).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			regUser(){
				console.log(22)
			},
			gologin(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		padding: 10rpx 10rpx;
		box-sizing: border-box;
	}
	.dlf-title {
		font-size:82rpx;
		font-weight: bolder;
		color: #00A0E0;
	}
	.dlf-content {
		font-size: 56rpx;
		color: #00A0E0;
	}
	.list {
		display: flex;
		flex-direction: column;
		padding-left: 12%;
		padding-right: 12%;
		margin-top: 50rpx;
		box-sizing: border-box;
		font-size: 32rpx;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #333333;
		height: 100rpx;
		margin-bottom: 18rpx;
		border-bottom: 2rpx solid rgba(230,230,230,1);
	}
	.list-call .img{
		width: 36rpx;
		height: 36rpx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 74upx;
		margin-left: 16upx;
	}
	.code {
		text-align: center;
		color: #fff;
		border:2rpx solid #00a0ea;
		height: 66rpx;
		line-height: 66rpx;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		font-size: 32rpx;
		background: #00a0e0
	}
	.noinput {
		opacity: 0.6;
	}
	.regbtn {
		color: #FFFFFF;
		background-color: #00a0ea;
		text-align: center;
		width: 100%;
		height: 70rpx;
		font-size: 32rpx;
		line-height: 70rpx;
		margin-top: 20rpx;
		border-radius: 14rpx;
	}
	.okmsg{
		margin-top: 1rem;
		height: 62rpx;
		line-height: 62rpx;
		font-size: 28rpx;
		border-bottom: 2rpx solid #ddd;
	}
	.login-box {
		color: #656565;
		margin-top: 1rem;
		font-size: 32rpx;
	}
</style>
