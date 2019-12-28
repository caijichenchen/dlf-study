<template>
	<view class="category-warp">
		<view class="content-wrap">
			<view class="c-title">Ⅰ、项目名称及工程造价</view>
			<view class="i-wrap">
				<view class="i-title b-l">项目名称</view>
				<input class="i-in i-l" type="text" @blur="setCalName">
			</view>
			<view class="i-wrap">
				<view class="i-title b-l">工程造价</view>
				<input class="i-in i-b" type="text" v-model="gczjVal" @blur="setCalVal">
				<view class="i-title b-r">万元</view>
			</view>
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅱ、工程建设其他费用</view>
			<view v-for="(i,k) in calNameList" :key="k">
				<view v-if="i == 'jsxmqqgzzxfGuo' && selectedList.jsxmqqgzzxfGuo" >
					<view v-for="(item,index) in selectedList.jsxmqqgzzxfGuo.children" :key="index" >
						<calheader :id="selectedList.jsxmqqgzzxfGuo.role_id" :name="item.name" :mark="'jsxmqqgzzxfGuo'"></calheader>
						<jsxmqq :inputVal="gczjVal" :index="item.name" :data="item.data" @func="getval"></jsxmqq>
					</view>
				</view>
				<view v-if="i == 'zbdlfGuo' && selectedList.zbdlfGuo">
					<view v-for="(item,index) in selectedList.zbdlfGuo.children" :key="'zb'+index" >
						<calheader :id="selectedList.zbdlfGuo.role_id" :name="item.name" :mark="'zbdlfGuo'"></calheader>
						<zbdlf-guo :inputVal="gczjVal" :index="item.name" :data="item.data" @func="getval"></zbdlf-guo>
					</view>
				</view>
				<view v-if="i == 'zjzxfYu' && selectedList.zjzxfYu">
					<view v-for="(item,index) in selectedList.zjzxfYu.children" :key="'zjyu'+index" >
						<calheader :id="selectedList.zjzxfYu.role_id" :name="item.name" :mark="'zjzxfYu'"></calheader>
						<zjzxf-yu :inputVal="gczjVal" :index="item.name" :data="item.data" @func="getval"></zjzxf-yu>
					</view>
				</view>  
			</view> 
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅲ、预备费</view>
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅳ、建设期贷款利息</view>
		</view>
		<view class="content-wrap">
			<view class="c-title">Ⅴ、铺底流动资金</view>
		</view>
		<view>
			<button @tap="oneComputed">一键计算</button>
			<button @tap="testMb">模拟模板</button>
		</view>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapMutations} from 'vuex'
	import calheader from './calHeader.vue'
	import jsxmqq from '@/Calculator/jsxmqqgzzxf/jsxmqqgzzxf_counter_guo'
	import zbdlfGuo from '@/Calculator/zbdlf/zbdlf_counter_guo.vue'
	import jsdwGuo from '@/Calculator/jsdw/xmjs_counter_guo.vue'
	import sgtscfGuo from '@/Calculator/sgtscf/sgtscf_counter_guo.vue'
	import zjzxfYu from '@/Calculator/zjzxf/zjzxf-counter_yu.vue'
	import ybfGuo from '@/Calculator/ybf-counter_guo.vue'
	import jsqlxGuo from '@/Calculator/jsqlx_counter_guo.vue'
	import pdldzjGuo from '@/Calculator/pdldzj_counter_guo.vue'
	export default {
		data(){
			return {
				gczjVal: '',
				arr:['zbdlfGuo','jsxmqq'],
				testResult:{
					jsxmqqgzzxfGuo:{
						jsxmqqgzzxfGuo0: {
							jsxmqqgzzxfGuo_category: "编制可行性研究报告",
							jsxmqqgzzxfGuo_discount: "100",
							jsxmqqgzzxfGuo_fztzxs: "1",
							jsxmqqgzzxfGuo_gczj: "42634.71",
							jsxmqqgzzxfGuo_graded: "3000|10000|50000|100000|500000",
							jsxmqqgzzxfGuo_hytzxs: "0.8",
							jsxmqqgzzxfGuo_jsxs: "12|28|75|110|200|250",
							jsxmqqgzzxfGuo_standard: "计价格[1999]1283号",
						},
						jsxmqqgzzxfGuo1: {
							jsxmqqgzzxfGuo1: "全国",
							jsxmqqgzzxfGuo_category: "评估项目建议书",
							jsxmqqgzzxfGuo_discount: "40",
							jsxmqqgzzxfGuo_fztzxs: "1",
							jsxmqqgzzxfGuo_gczj: "222",
							jsxmqqgzzxfGuo_graded: "3000|10000|50000|100000|500000",
							jsxmqqgzzxfGuo_hytzxs: "1",
							jsxmqqgzzxfGuo_jsxs: "4|8|12|15|17|20",
							jsxmqqgzzxfGuo_standard: "计价格[1999]1283号",
							
						},
					},
					zbdlfGuo:{
						zbdlfGuo0: {
							zbdlfGuo_category: "服务招标",
							zbdlfGuo_discount: "40",
							zbdlfGuo_fl: "0.015|0.008|0.0045|0.0025|0.001|0.0005|0.00035|0.00008|0.00006|0.00004",
							zbdlfGuo_gczj: "22",
							zbdlfGuo_graded: "0|100|500|1000|5000|10000|50000|100000|500000|1000000",
							zbdlfGuo_standard: "计价格[2002]1980号、发改价格[2011]534号",
							zbdlfGuo_xzsf: "全国",
							
						}
					}
				},
				resultVal:[],
				result:[],
				allCal:{}
			}
		},
		methods:{
			...mapMutations(['setNeedData','imitate']),
			setCalVal(){
				
			},
			getval(val){
				let data = []
				for(let key in val.data){
					data[key] = val.data[key]
				}
				this.resultVal[val.index] = data //单个计算器传递过来的数据
				for(let key in this.selectedList){  //整理数据
					this.result[key] = []
				}
				for(let key in this.result){
					for(let i in this.resultVal){
						if(i.search(key) != -1){
							this.result[key][i] = this.resultVal[i]
						}
					}
				}
				this.setNeedData(this.result)
				// console.log(this.result)
			},
			oneComputed(){
				console.log(this.result)
				let data = []
				const arr = ['zbdlfGuo','jsxmqqgzzxfGuo']
				arr.forEach(item=>{
					for(let key in this.result){
						if(item == key){
							data[key] = this.result[key]
						}
					}
				})
				console.log(data)
			},
			testMb(){
				this.imitate(this.testResult)
			}
		},
		mounted() {
			this.allCalName
		},
		computed:{
			selectedList(){ //用户选择的计算器
				let selectCalList = {}
				this.calList.forEach(item=>{
					if(item.check == true){
						selectCalList[item.mark] = item
					}
				})
				console.log("+++",selectCalList)
				return selectCalList
			},
			allCalName(){ //排序数组
				let arr = []
				this.calList.forEach(item=>{
					if(item.check == true){
						arr.push(item.mark)
					}
				})
				return arr
			},
			...mapState({
				calList:state=>state.oneClick.calList,
				needData:state=>state.oneClick.needData,
				calNameList:state=>state.oneClick.calNameList
			}),
			...mapGetters(['allCalName'])
		},
		components:{
			jsxmqq,
			sgtscfGuo,
			jsdwGuo,
			zjzxfYu,
			ybfGuo,
			jsqlxGuo,
			pdldzjGuo,
			zbdlfGuo,
			calheader
		},
		watch:{
			selectedList:function(val){//实时更新用户选择 
				this.allCal = val
			},
			// allCalName:function(val){//实时更新排序数组
				
			// }
		}
	}
</script>

<style>
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
		/* float: left; */
		margin-right: auto;
	}
	.r-box {
		/* float: right; */
		margin-left: auto;
	}
	.category-warp {
		margin-top: 40rpx;
		margin-bottom: 50rpx;
	}
	.content-wrap {
		/* padding: 70rpx 0; */
	}
	.c-title{
		font-size: 36rpx;
		margin-left: 10rpx;
		margin: 40rpx;
	}
	.i-wrap {
		display: flex;
		margin: 14rpx 3%;
	}
	.i-title{
		background: #eee;
		font-size: 28rpx;
		color: #555;
		padding: 12rpx 16rpx;
		border: 2rpx solid #ccc;
	}
	.i-in{
		border: 2rpx solid #ccc;
		height: 70rpx;
		padding-left: 10rpx;
	}
	.i-l {
		width: 78%;
		border-top-right-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}
	.i-b{
		width: 65%;
	}
	.b-l{
		border-top-left-radius: 12rpx;
		border-bottom-left-radius: 12rpx;
		border-right: 0;
	}
	.b-r{
		border-left: 0;
		border-top-right-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}
</style>
