<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfMeng_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfMeng_xzsf" :value="pickerIndex.zbdlfMeng_xzsf"
				 :range="multiSelector.zbdlfMeng_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfMeng_xzsf[pickerIndex.zbdlfMeng_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfMeng_standard" :value="pickerIndex.zbdlfMeng_standard"
				 :range="multiSelector.zbdlfMeng_standard">
					<view class="picker">
						{{multiSelector.zbdlfMeng_standard[pickerIndex.zbdlfMeng_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zbdlfMeng_standard">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfMeng_category" :value="pickerIndex.zbdlfMeng_category"
				 :range="multiSelector.zbdlfMeng_category">
					<view class="picker">
						{{multiSelector.zbdlfMeng_category[pickerIndex.zbdlfMeng_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zbdlfMeng_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text"  v-model="needVal.zbdlfMeng_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.zbdlfMeng_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-meng-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-meng-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfMengZbxm from "@/pagesA/Calculator/zbdlflayouts/zbdlfmeng/zbdlfMeng_zbxm.vue"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@//components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@//common/json/zbdlf/zbdlf-meng.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfMeng_xzsf: '',
					zbdlfMeng_standard: '',
					zbdlfMeng_category: '',
					zbdlfMeng_graded: '',
					zbdlfMeng_fl: '',
					zbdlfMeng_gczj: '',
					zbdlfMeng_discount: '40',
					type: 'zbdlfMeng'
				},
				multiSelector: {
					zbdlfMeng_xzsf: [],
					zbdlfMeng_standard: [],
					zbdlfMeng_graded: '',
					zbdlfMeng_category: [],
					zbdlfMeng_fl: '',
				},
				showSelector: {
					zbdlfMeng_xzsf: true,
					zbdlfMeng_standard: true,
					zbdlfMeng_graded: false,
					zbdlfMeng_category: true,
					zbdlfMeng_fl: false,
				},
				pickerIndex: {
					zbdlfMeng_xzsf: 0,
					zbdlfMeng_standard: 0,
					zbdlfMeng_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [{
						"id": "1",
						"title": "工程造价",
						"text": "一般为中标金额"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			zbdlfMengZbxm,
			uniTag,
			explain
		},
		methods:{
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
