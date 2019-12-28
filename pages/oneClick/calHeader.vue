<template>
	<view class="c-header">
		<text class="l-box" @tap="moveUp(mark)">←</text>
		<text :data-id="id" :data-val="name" @tap="deleted">-</text>
		<text :data-id="id" :data-val="name" @tap="add">+</text>
		<text class="r-box" @tap="moveDown(mark)">→</text>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from 'vuex'
	export default {
		props:{
			id:{
				type:Number,
				default:null
			},
			name:{
				type:String,
				default:null
			},
			mark:{
				type:String,
				default:null
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			...mapMutations(['addCal','deleteCal','moveDownCal','moveUpCal']),
			moveUp(mark){
				// console.log(mark)
				const index = this.calNameList.indexOf(mark)
				if(this.calNameList.length == 1){
					return uni.showToast({
						icon:'none',
						title:'没办法移动哦~'
					})
				}
				if(index == 0){
					return uni.showToast({
						icon:'none',
						title:'已经放在第一位了哦~'
					})
				}
				this.moveUpCal(index)
			},
			moveDown(mark){
				const index = this.calNameList.indexOf(mark)
				if(this.calNameList.length == 1){
					return uni.showToast({
						icon:'none',
						title:'没办法移动哦~'
					})
				}
				if(index == this.calNameList.length-1){
					return uni.showToast({
						icon:'none',
						title:'已经放在最后一位了哦~'
					})
				}
				this.moveDownCal(index)
			},
			deleted(e){
				const id = e.currentTarget.dataset.id
				const name = e.currentTarget.dataset.val
				for(let key in this.selectedList){
					if(this.selectedList[key].role_id == id){
						if(this.selectedList[key].children.length == 1){
							return uni.showToast({
								icon:'none',
								title:'已经是最后一个了哦~'
							})
						}
						this.deleteCal(name)
					}
				}
			},
			add(e){
				const id = e.currentTarget.dataset.id
				const name = e.currentTarget.dataset.val
				for(let key in this.selectedList){
					if(this.selectedList[key].role_id == id){
						const addName = key + this.selectedList[key].children.length + ''
						this.addCal({
							data: this.calData[key][name],
							name:addName
						})
					}
				}
			}
		},
		computed:{
			selectedList(){ //用户选择的计算器
				let selectCalList = {}
				this.calList.forEach(item=>{
					if(item.check == true){
						selectCalList[item.mark] = item
					}
				})
				return selectCalList
			},
			...mapState({
				calList:state=>state.oneClick.calList,
				calData:state=>state.oneClick.calData,
				calNameList:state=>state.oneClick.calNameList
			}),
			...mapGetters(['allCalName'])
		},
		watch:{
			selectedList:function(val){//实时更新用户选择 
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
