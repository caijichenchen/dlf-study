<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">{{title}}</text>
		</div>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhongjiaxie1">
			<view class="title">选择区域</view>
				<view class="title">
					{{multiSelector.zjzxfZhongjiaxie1[pickerIndex.zjzxfZhongjiaxie1]}}
				</view>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhongjiaxie_standard">
			<view class="title">咨询标准</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfZhongjiaxie_standard" :value="pickerIndex.zjzxfZhongjiaxie_standard"
			 :range="multiSelector.zjzxfZhongjiaxie_standard">
				<view class="picker">
					{{multiSelector.zjzxfZhongjiaxie_standard[pickerIndex.zjzxfZhongjiaxie_standard]}}
				</view>
				</picker>
			<button type="primary" size="mini" @tap="showModal" data-target="zjzxfZhongjiaxie_standard">点击查看</button>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhongjiaxie_category">
			<view class="title">咨询项目</view>
			<picker class="select" @change="PickerChange" data-name="zjzxfZhongjiaxie_category" :value="pickerIndex.zjzxfZhongjiaxie_category"
			 :range="multiSelector.zjzxfZhongjiaxie_category">
				<view class="picker">
					{{multiSelector.zjzxfZhongjiaxie_category[pickerIndex.zjzxfZhongjiaxie_category]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group" v-show="showSelector.zjzxfZhongjiaxie5 ">
			<view class="title">{{multiSelector.zjzxfZhongjiaxie5}}</view>
			<input v-model="needVal.zjzxfZhongjiaxie_ztz" /></input>
			<uni-tag text="万元" type="defult" ></uni-tag>
		</view>
		
		<view class="cu-form-group" v-show="showSelector.zjzxfZhongjiaxie7 ">
			<view class="title">{{multiSelector.zjzxfZhongjiaxie7}}</view>
			<input v-model="needVal.zjzxfZhongjiaxie_zytzxs" /></input>
			<button type="primary" size="mini" @tap="showModal" data-target="zjzxfZhongjiaxie_zytzxs">点击选择</button>
		</view>
		<view class="cu-form-group">
			<view class="title">打折折扣</view>
			<input v-model="needVal.zjzxfZhongjiaxie_discount" /></input>
			<uni-tag text="%" type="defult" ></uni-tag>
			<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
		</view>
		<explain></explain>
		<tzxs-zhongjiaxie :showModalName="showModalName" v-on:hideModal="hideModal" :zjzxfZhongjiaxie8="multiSelector.zjzxfZhongjiaxie8"></tzxs-zhongjiaxie>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/zjzxfs/zjzxfs-zhongjiaxie.json'
	import tzxsZhongjiaxie from '@/pagesA/Calculator/zjzxflayouts/zjzxfzhongjiaxie/zjzxfZhongjiaxie_zytzxs.vue'
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
					zjzxfZhongjiaxie_standard: '',
					zjzxfZhongjiaxie_graded: '',
					zjzxfZhongjiaxie_category: '',
					zjzxfZhongjiaxie_ztz: '',
					zjzxfZhongjiaxie_fl: '',
					zjzxfZhongjiaxie_zytzxs: '1',
					zjzxfZhongjiaxie_discount: '90',
					type: 'zjzxfZhongjiaxie'
				},
				multiSelector: {
					zjzxfZhongjiaxie1: [],
					zjzxfZhongjiaxie_standard: [],
					zjzxfZhongjiaxie_graded: [],
					zjzxfZhongjiaxie_category: [],
					zjzxfZhongjiaxie5: '',
					zjzxfZhongjiaxie_fl: '',
					zjzxfZhongjiaxie7: '',
					zjzxfZhongjiaxie8: ''
				},
				pickerIndex: {
					zjzxfZhongjiaxie1: 0,
					zjzxfZhongjiaxie_standard: 0,
					zjzxfZhongjiaxie_category: 0,
				},
				showSelector: {
					zjzxfZhongjiaxie1: true,
					zjzxfZhongjiaxie_standard: true,
					zjzxfZhongjiaxie_graded: false,
					zjzxfZhongjiaxie_category: true,
					zjzxfZhongjiaxie5: true,
					zjzxfZhongjiaxie_fl: false,
					zjzxfZhongjiaxie7: false,
					zjzxfZhongjiaxie8: false
				},
				showModalName: null,
				datajson:datajson,
				explain: [
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
			explain,
			tzxsZhongjiaxie
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
