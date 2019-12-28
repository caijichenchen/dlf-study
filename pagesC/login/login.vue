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
				<input class="biaoti" v-model="phoneno" type="text"  maxlength="12" placeholder="输入手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
			</view>
			<!-- <button class="dlbutton" @tap="bindLogin()">登陆</button> -->
			<button class="cu-btn backBlue login-btn" @tap="bindLogin()">登陆</button>
			<view class="part">
				<view>
					<label class="radio" @click="setKnow"><radio style="transform: scale(0.6);" :checked="know" />记住我</label>
				</view>
				<navigator url="/pages/forget/forget" style="margin-left: auto;">忘记密码?</navigator>
			</view>
			<view class="elselogin">
				<view class="else-t">
					<view class="b-b"></view>
					<view style="line-height: 1.4rem;width: 40%;">其他方式登录</view>
					<view class="b-b"></view>
				</view>
				<view class="else-c">
					<!-- #ifdef APP-PLUS -->
					<view class="e-wrap">
						<view class="qqlogin"></view>
					</view>
					<!-- #endif -->
					<view class="e-wrap" @tap="wxlogin">
						<view class="welogin"></view>
					</view>
				</view>
				<view class="else-b">
					<view>没有账号?</view>
					<navigator url="/pages/reg/reg" style="color: #00A0E0;">立即注册</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import {mapMutations} from 'vuex';
	export default {
		data() {
			return {
				// phoneno:'17634766649',
				// password:'123456.',
				phoneno:'',
				password:'',
				storageData:{},
				loading: false,
				know:false
			};
		},
		mounted() {
			var phone = uni.getStorageSync('phone')
			var pwd = uni.getStorageSync('pwd')
			if(phone){
				this.know = true
				this.phoneno = phone
				this.password = pwd
			}
		},
		methods: {
			...mapMutations(['login','getUserInfo']),
			bindLogin(e) {
				this.loading = true
				var regPhone = /^1[3456789]\d{9}$/
				if(!this.phoneno){
					uni.showToast({
						icon: 'none',
						title:'手机号输入不能为空'
					})
					return
				}
				if(!regPhone.test(this.phoneno)){
					uni.showToast({
						icon: 'none',
						title:'手机号输入格式不正确'
					})
					return 
				}
				if (this.password.length < 6) {
						uni.showToast({
								icon: 'none',
								title: '密码长度不能少于六位'
						});
						return;
				}
				//用户登录
				$req.request({
					url: '/getApiToken',
					header: {"Content-Type": "application/x-www-form-urlencoded"},
					data: {
						tel:this.phoneno,
						password:this.password
					},
				}).then((res)=>{
					console.log('登陆成功')
					this.login(res.data.access_token)
					uni.setStorageSync('loginToken',res.data.access_token);
					uni.showToast({
						icon:'success',
						title: '登录成功'
					});
					this.getUserData()
					uni.switchTab({
					    url: '/pages/index/index'
					});
				}).catch((err)=>{
					console.log('登陆失败',err)
				})
		    },
			//获取用户个人信息
			getUserData() {
				$req.request({
					url:'/api/xcx/account/userInfo'
				}).then((res)=> {
					this.getUserInfo(res.data)
					console.log('获取用户资料成功',res.data)
				}).catch((err)=>{
					console.log('获取用户资料失败',err)
				})
			},
			wxlogin(){
				uni.showToast({
					icon:'none',
					title:'还没有接口'
				})
				// wx.login({
					
				// })
			},
			setKnow(){
				this.know = !this.know
				if(this.know){
					uni.setStorageSync('phone',this.phoneno)
					uni.setStorageSync('pwd',this.password)
				}else{
					uni.removeStorageSync('phone')
					uni.removeStorageSync('pwd')
				}
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
		font-size: 94rpx;
		font-weight: bolder;
		color: #00A0E0;
	}
	.dlf-content {
		font-size: 64rpx;
		color: #00A0E0;
	}
	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		padding-left: 70upx;
		padding-right: 70upx;
		font-size: 32rpx;
		color: #656565;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230,230,230,1);
	}
	.list-call .img{
		width: 40upx;
		height: 40upx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		font-size: 0.88rem;
		line-height: 100upx;
		margin-left: 16upx;
	}
	.login-btn {
		height: 70rpx;
		font-size: 32rpx;
		line-height: 70rpx;
		margin-top: 20rpx;
	}
	.part {
		display: flex;
		margin-top: 40rpx;
	}
	.elselogin {
		margin-top: 40rpx;
	}
	.else-t {
		width: 100%;
		height: 1.4rem;
		font-size: 0.76rem;
		display: flex;
	}
	.else-t .b-b {
		width: 30%;
		border-bottom: 2upx solid #ccc;
		box-sizing: border-box;
		height: 0.7rem;
	}
	.else-c {
		width: 100%;
		height: 5rem;
		display: flex;
		justify-content: center;/*水平主轴居中*/
		align-items: center;
	}
	.else-b {
		display: flex;
		justify-content: center;
	}
	.e-wrap {
		width: 50%;
		display: flex;
		justify-content: center
	}
	.qqlogin {
		width: 2.5rem;
		height: 2.5rem;
		background-image: url('../../static/QQ.png');
		background-size: cover;
	}
	.welogin {
		width: 2.5rem;
		height: 2.5rem;
		background-image: url('../../static/wechat.png');
		background-size: cover;
	}
</style>
