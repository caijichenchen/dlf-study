<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南招标代理费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zbdlfXiang_xzsf">
				<view class="title">选择省份</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfXiang_xzsf" :value="pickerIndex.zbdlfXiang_xzsf"
				 :range="multiSelector.zbdlfXiang_xzsf">
					<view class="picker">
						{{multiSelector.zbdlfXiang_xzsf[pickerIndex.zbdlfXiang_xzsf]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfXiang_standard" :value="pickerIndex.zbdlfXiang_standard"
				 :range="multiSelector.zbdlfXiang_standard">
					<view class="picker">
						{{multiSelector.zbdlfXiang_standard[pickerIndex.zbdlfXiang_standard]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zbdlfXiang_standard">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">招标项目</view>
				<picker class="select" @change="PickerChange"  data-name="zbdlfXiang_category" :value="pickerIndex.zbdlfXiang_category"
				 :range="multiSelector.zbdlfXiang_category">
					<view class="picker">
						{{multiSelector.zbdlfXiang_category[pickerIndex.zbdlfXiang_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zbdlfXiang_category">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工程造价</view>
				<input type="text"  v-model="needVal.zbdlfXiang_gczj"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.zbdlfXiang_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 -->
		<explain></explain>
		<zbdlf-xiang-zbxm v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zbdlf-xiang-zbxm>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import zbdlfXiangZbxm from "@/pagesA/Calculator/zbdlflayouts/zbdlfxiang/zbdlfXiang_zbxm.vue"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@/common/json/zbdlf/zbdlf-xiang.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zbdlfXiang_xzsf: '',
					zbdlfXiang_standard: '',
					zbdlfXiang_category: '',
					zbdlfXiang_graded: '',
					zbdlfXiang_fl: '',
					zbdlfXiang_gczj: '',
					zbdlfXiang_discount: '40',
					type: 'zbdlfXiang'
				},
				multiSelector: {
					zbdlfXiang_xzsf: [],
					zbdlfXiang_standard: [],
					zbdlfXiang_graded: '',
					zbdlfXiang_category: [],
					zbdlfXiang_fl: '',
				},
				showSelector: {
					zbdlfXiang_xzsf: true,
					zbdlfXiang_standard: true,
					zbdlfXiang_graded: false,
					zbdlfXiang_category: true,
					zbdlfXiang_fl: false,
				},
				pickerIndex: {
					zbdlfXiang_xzsf: 0,
					zbdlfXiang_standard: 0,
					zbdlfXiang_category: 0,
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
			zbdlfXiangZbxm,
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
