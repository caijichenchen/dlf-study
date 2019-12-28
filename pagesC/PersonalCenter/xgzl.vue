<template>
	<view class="contain">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">修改个人资料</block>
		</cu-custom>
		<view>
			<view class="info-warp">
				<view class="info-sort">修改头像:</view>
				<image class="headerimg" @tap="changeImg" :src="serverUrl+'/upload'+userInfo.userInfo.head_img"></image>
			</view>
			<view class="info-warp">
				<view class="info-sort">用&nbsp;&nbsp;户&nbsp;&nbsp;名:</view>
				<view class="info-content">{{userInfo.userInfo.user.name}}</view>
			</view>
			<view class="info-warp">
				<view class="info-sort">姓&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;名:</view>
				<input class="nameinput" type="text" v-model="uname">
			</view>
			<view class="info-warp">
				<view class="info-sort">绑定手机:</view>
				<view class="info-content">{{userInfo.userInfo.user.tel}}</view>
				<navigator url="grxx" style="color: #00A0E0;line-height: 2.3rem;margin-left: 1rem;">解绑</navigator>
			</view>
			<view class="info-warp">
				<view class="info-sort">验证邮箱:</view>
				<view class="info-content"></view>
			</view>
		</view>
		<view class="ubutton ">
			<button class="textBuuton1" @tap="setUser">保存</button>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				uname:'',
				uavatar:'',
				uName:'',
				uphone:'',
				uemail:'dulifei@163.com',
				modalName: null,
				serverUrl:this.$serverimgUrl,
				imgSrc:''
			}
		},
		onLoad(){
			if(this.userInfo){
				this.uname = this.userInfo.userInfo.user_name
			}
		},
		computed: {
			...mapState({
				userInfo:state=>state.user.userInfo
			})
		},
		methods: {
			changeImg(){
				uni.chooseImage({
					count: 1, //默认9
					sourceType:['album','camera'],
					success: function (res) {
						console.log(res)
						console.log(JSON.stringify(res.tempFilePaths));
						this.imgSrc = res.tempFilePaths
						console.log(this.imgSrc)
						// uni.previewImage({
						// 	urls: res.tempFilePaths,
						// 	longPressActions: {
						// 		itemList: ['发送给朋友', '保存图片', '收藏'],
						// 		success: function(data) {
						// 			console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						// 		},
						// 		fail: function(err) {
						// 			console.log(err.errMsg);
						// 		}
						// 	}
						// });
					}
				});
			},
			setUser() {
				$req.request({
					url:'/api/xcx/account/amendset',
					method:'POST',
					data:{
						user_name:this.uname,
						man:this.userInfo.userInfo.sex,
						tel:this.userInfo.userInfo.user.tel,
						avatar:this.imgSrc[0]
					},
				}).then((res)=>{
					console.log(res.data)
					uni.showToast({
						icon:'none',
						title:res.data.message
					})
				}).catch((err)=>{
					uni.showToast({
						icon:'none',
						title:err.data.message
					})
				})
			},
			xgxm(e){
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			xguname(){
				let that = this
				uni.getStorage({ 
					key:"uerInfo",
					success:(res) => {
						uni.request({
						    url: this.$serverUrl + '/altername',
							  header: {
									"Authorization": "Bearer " + res.data.token,
									"Accept":"application/prs.dlf.v1+json",
									},
						    data: {
									name:this.uname
								},
								method: 'POST',
								dataType:'json',
						    success: (res) => {
										console.log(res)
										that.hideModal()
										
									}
							});
							
						},
					}) 
			}
		}
	}
</script>

<style>
	.contain{
		width: 100%;
		height: 1250upx;
		background-color: #fff;
	}
	.info-warp{
		width: 100%;
		height: 2.30rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		box-sizing: border-box;
		border-bottom: 2upx solid #ddd;
		display: flex;
	}
	.headerimg{
		width: 2.3rem;
		height: 2.3rem;
		border-radius: 50%;
		margin-left: auto;
	}
	.nameinput{
		text-align: right;
		margin-left: auto;
		height: 100%;
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
	.xgbtn {
		font-size: 0.7rem;
		color: #fff;
		text-align: center;
		height: 1.9rem;
		margin-top: 0.2rem;
		background: #00a0ea;
		line-height: 1.9rem;
		margin-right: 0;
		margin-left: 20upx;
	}
.uname,.uavatar,.uemail,.utel{
	float: left;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	padding-bottom: 10upx;
	padding-left: 30upx;
	position: relative;
	border-bottom: 1upx solid #ccc;
}
.uname view,.uavatar view,.uemail view,.utel view{float: left;}
.uname .v1{
	width: 78%;
	height: 100%;
	padding-left: 15upx;
	margin-left: 31upx;
	margin-top: 6upx;
}
.uname text{
	display: block;
	margin-left: 75%;
	margin-top: 20upx;
	border-radius: 10upx;
	position: absolute;
	z-index: 999;
}
.uname input{
	float: left;
	width: 78%;
	height: 100%;
	padding-left: 15upx;
	margin-left: 31upx;
	margin-top: 6upx;
}
/* 修改头像 */
.uavatar img{
	width: 60upx;
	height: 60upx;
	border-radius: 30upx;
	margin-left: 7%;
	float: left;
	margin-top: 15upx;
}
/* 修改手机 */
/* .utel text{
	float: left;
	margin-left: 49%;
} */
/* 验证邮箱 */
.uemail text{
	margin-left: 44%;
	margin-bottom: 20upx;
} 
.ubutton .textBuuton1{
	width: 90%;
	height: 80upx;
	line-height: 80upx;
	font-size: 28upx;
	background-color: #00a0ea;
	margin-left: 5%;
	float: left;
	margin-top: 20upx;
	color: #fff;
}
.xguname{
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	padding-left: 30upx;
	border: 1upx solid #ccc;
}
.uname .jcbd{float: right; margin-right: 30upx;}
.xguname view{float: left;width: 200upx;background-color: #eee;height: 100%;margin-left: -28upx;}
.xguname input{height: 100upx;line-height: 100upx;padding-left: 30upx;text-align: left;}
.tip{margin-left: 4upx;text-align: left;margin-top: 10upx;}
.textBuuton2{
	width: 90%;
	height: 60upx;
	line-height: 80upx;
	font-size: 28upx;
	background-color: #5cbb5c;
	float: left;
	margin: 20upx 0;
	margin-left: 5%;
	color: #fff;
}
</style>
