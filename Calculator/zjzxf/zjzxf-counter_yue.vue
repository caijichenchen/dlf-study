<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">{{title}}</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfYue1">
			<view class="title">选择区域</view>
				<view class="title">
					{{multiSelector.zjzxfYue1[pickerIndex.zjzxfYue1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYue_standard">
			<view class="title">咨询标准</view>
				<view class="title">
					{{multiSelector.zjzxfYue_standard[pickerIndex.zjzxfYue_standard]}}
				</view>
			<button type="primary" size="mini" @tap="showModal" data-target="zjzxfYue_standard">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYue_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfYue_category" :value="pickerIndex.zjzxfYue_category"
			 :range="multiSelector.zjzxfYue_category">
				<view class="picker">
					{{multiSelector.zjzxfYue_category[pickerIndex.zjzxfYue_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYue5 ">
			<view class="title">{{multiSelector.zjzxfYue5}}</view>
			<input v-model="needVal.zjzxfYue_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYue_sdeTitle ">
			<view class="title" v-model="needVal.zjzxfYue_sdeTitle">{{multiSelector.zjzxfYue_sdeTitle}}</view>
			<input v-model="needVal.zjzxfYue_sde" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYue8 ">
			<view class="title">{{multiSelector.zjzxfYue8}}</view>
			<input v-model="needVal.zjzxfYue_hzhjcgb" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfYue10 ">
			<view class="title">{{multiSelector.zjzxfYue10}}</view>
			<input v-model="needVal.zjzxfYue_sffl" /></input>
			<uni-tag text="%" type="defult" >%</uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfYue_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
		</view>
		<explain></explain>
	</view>
</template>

<script>
	// import {
	// 	counterMixin
	// } from "@/pagesCommon/base/counterMixin"
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	// import {
	// 	MultiSelectorsChangeMixin
	// } from "@/pagesCommon/base/multiSelectorsChange.js"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import uniTag from '@/pagesCommon/components/uni-ui/uni-tag/uni-tag.vue'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	// import explain from '@/pagesCommon/base/explain.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/zjzxfs/zjzxfs-yue.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			title: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				needVal: {
					zjzxfYue_standard: '',
					zjzxfYue_graded: '',
					zjzxfYue_category: '',
					zjzxfYue_ztz: '',
					zjzxfYue_fl: '',
					zjzxfYue_sdeTitle: '',
					zjzxfYue_sde: '',
					zjzxfYue_hzhjcgb: '',
					zjzxfYue_sffl: '',
					zjzxfYue_discount: '90',
					type: 'zjzxfYue'
				},
				multiSelector: {
					zjzxfYue1: [],
					zjzxfYue_standard: [],
					zjzxfYue_graded: [],
					zjzxfYue_category: [],
					zjzxfYue5: '',
					zjzxfYue_fl: '',
					zjzxfYue_sdeTitle: '',
					zjzxfYue8: '',
					zjzxfYue_hzhjcgb: '',
					zjzxfYue10: '',
					zjzxfYue_sffl: '',
				},
				pickerIndex: {
					zjzxfYue1: 0,
					zjzxfYue_standard: 0,
					zjzxfYue_category: 0,
				},
				showSelector: {
					zjzxfYue1: true,
					zjzxfYue_standard: true,
					zjzxfYue_graded: false,
					zjzxfYue_category: true,
					zjzxfYue5: true,
					zjzxfYue_fl: false,
					zjzxfYue_sdeTitle: true,
					zjzxfYue8: true,
					zjzxfYue_hzhjcgb: false,
					zjzxfYue10: true,
					zjzxfYue_sffl: false,
				},
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "1",
						"title": "核增核减超过比",
						"text": "超过此部分比例才额外计算收益额，未明确规定默认为0"
					},
					{
						"id": "2",
						"title": "收费费率",
						"text": "核增核减额部分的收费费率"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为90%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>
</style>
