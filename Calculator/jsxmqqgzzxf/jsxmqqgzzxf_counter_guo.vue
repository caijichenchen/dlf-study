<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国建设项目前期工作咨询费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">工程造价</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfGuo1">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfGuo1" :value="pickerIndex.jsxmqqgzzxfGuo1"
				 :range="multiSelector.jsxmqqgzzxfGuo1">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfGuo1[pickerIndex.jsxmqqgzzxfGuo1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsxmqqgzzxfGuo_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfGuo_standard" :value="pickerIndex.jsxmqqgzzxfGuo_standard"
				 :range="multiSelector.jsxmqqgzzxfGuo_standard">
					<view class="picker">
						{{multiSelector.jsxmqqgzzxfGuo_standard[pickerIndex.jsxmqqgzzxfGuo_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfGuo_standard">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jsxmqqgzzxfGuo_category" :value="pickerIndex.jsxmqqgzzxfGuo_category"
				 :range="multiSelector.jsxmqqgzzxfGuo_category">
					<view class="picker" v-model="needVal.jsxmqqgzzxfGuo_category">
						{{multiSelector.jsxmqqgzzxfGuo_category[pickerIndex.jsxmqqgzzxfGuo_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfGuo_hytzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jsxmqqgzzxfGuo_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<input  v-model="needVal.jsxmqqgzzxfGuo_fztzxs" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsxmqqgzzxfGuo_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<!-- <jsxmqqgzzxf-guo-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsxmqqgzzxf-guo-hytzxs> -->
	</view>
</template>
	
<script>
	import explain from '@/common/base/explain.vue'
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	// import jsxmqqgzzxfGuoHytzxs from "@/pagesC/Calculator/jsxmqqgzzxflayouts/jsxmqqgzzxfguo/jsxmqqgzzxfGuo_hytzxs.vue"
	import datajson from '@/common/json/kyjbgfs/kyjbgfs-guo.json'
	import { changVal,getChildren } from '@/common/js/function.js'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			inputVal:{
				type: String,
				default:null
			},
			index:{
				type: String,
				default:null
			},
			data:{
				author: Object,
			}
		},
		data() {
			return {
				needVal: {
					jsxmqqgzzxfGuo_gczj: "",
					jsxmqqgzzxfGuo_standard: '',
					jsxmqqgzzxfGuo_graded: '',
					jsxmqqgzzxfGuo_category: '',
					jsxmqqgzzxfGuo_jsxs: '',
					jsxmqqgzzxfGuo_hytzxs: '1',
					jsxmqqgzzxfGuo_fztzxs: '1',
					jsxmqqgzzxfGuo_discount: '40',
					type: "jsxmqqgzzxfGuo",
				},
				multiSelector: {
					jsxmqqgzzxfGuo1: [],
					jsxmqqgzzxfGuo_standard: [],
					jsxmqqgzzxfGuo_graded: '',
					jsxmqqgzzxfGuo_category: [],
					jsxmqqgzzxfGuo_jsxs: '',
				},
				showSelector: {
					jsxmqqgzzxfGuo1: true,
					jsxmqqgzzxfGuo_standard: true,
					jsxmqqgzzxfGuo_graded: false,
					jsxmqqgzzxfGuo_category: true,
					jsxmqqgzzxfGuo_jsxs: false,
				},
				pickerIndex: {
					jsxmqqgzzxfGuo1: 0,
					jsxmqqgzzxfGuo_standard: 0,
					jsxmqqgzzxfGuo_category: 0,
				},
				showModalName: null,
				datajson:datajson,
				explain: [{
						"id": "1",
						"title": "项目类别",
						"text": "请确定好计算类别"
					},
					{
						"id": "3",
						"title": "复杂程度调整系数",
						"text": "国家标准：0.8 - 1.2"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					},
				]
			}
		},
		updated() {
			this.$emit('func',{index:this.index,data:this.needVal})
		},
		mounted() {
			changVal(this.data,this.needVal,this.multiSelector,this.pickerIndex)
			// if(this.data && this.data.type){
			// 	for(let key in this.data){
			// 		for(let i in this.needVal){
			// 			if(key == i){
			// 				this.needVal[i] = this.data[key]
			// 			}
			// 		}
			// 	}
			// 	for(let key in this.multiSelector){
			// 		if(Array.isArray(this.multiSelector[key])){
			// 			for(let i = 0;i<this.multiSelector[key].length;i++){
			// 				if(this.multiSelector[key][i] == this.needVal[key]){
			// 					this.pickerIndex[key] = i
			// 				}
			// 			}
			// 		}
			// 	}
			// }
			// console.log(this.needVal)
		},
		components: {
			uniTag,
			// jsxmqqgzzxfGuoHytzxs,
			explain
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			}
		},
		watch:{
			inputVal:function(val){
				this.needVal.jsxmqqgzzxfGuo_gczj = val
			}
		}
	}
</script>

	