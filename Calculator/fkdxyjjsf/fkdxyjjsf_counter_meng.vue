<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfMeng_province">
				<view class="title">省份</view>
					<view class="title">
						{{multiSelector.fkdxyjjsfMeng_province[pickerIndex.fkdxyjjsfMeng_province]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfMeng_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fkdxyjjsfMeng_standard[pickerIndex.fkdxyjjsfMeng_standard]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfMeng_xzfl">
				<view class="title">选择分类</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfMeng_xzfl" :value="pickerIndex.fkdxyjjsfMeng_xzfl"
				 :range="multiSelector.fkdxyjjsfMeng_xzfl">
					<view class="picker">
						{{multiSelector.fkdxyjjsfMeng_xzfl[pickerIndex.fkdxyjjsfMeng_xzfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfMeng4">
				<view class="title">{{multiSelector.fkdxyjjsfMeng4}}</view>
				<input type="text" v-model="needVal.fkdxyjjsfMeng_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfMeng_category">
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-name="fkdxyjjsfMeng_category" :value="pickerIndex.fkdxyjjsfMeng_category"
				 :range="multiSelector.fkdxyjjsfMeng_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfMeng_category[pickerIndex.fkdxyjjsfMeng_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.fkdxyjjsfMeng_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/fkydjsfs/fkydjsfs-meng.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fkdxyjjsfMeng_jsmj: '',
					fkdxyjjsfMeng_standard: '',
					fkdxyjjsfMeng_category: '',
					fkdxyjjsfMeng_xzfl: "",
					fkdxyjjsfMeng_jj: '',
					fkdxyjjsfMeng_discount: '40',
					type: "fkdxyjjsfMeng"
				},
				multiSelector: {
					fkdxyjjsfMeng_province: [],
					fkdxyjjsfMeng_standard: [],
					fkdxyjjsfMeng_xzfl: [],
					fkdxyjjsfMeng4: '',
					fkdxyjjsfMeng_category: [],
					fkdxyjjsfMeng_jj: '',
				},
				pickerIndex: {
					fkdxyjjsfMeng_province: 0,
					fkdxyjjsfMeng_standard: 0,
					fkdxyjjsfMeng_category: 0,
					fkdxyjjsfMeng_xzfl: 0
				},
				showSelector: {
					fkdxyjjsfMeng_province: true,
					fkdxyjjsfMeng_standard: true,
					fkdxyjjsfMeng_xzfl: true,
					fkdxyjjsfMeng4: true,
					fkdxyjjsfMeng_category: true,
					fkdxyjjsfMeng_jj: false,
				},
				datajson:datajson,
				modalData: null,
				explain: [{
						"id": "1",
						"title": "选择分类",
						"text": "选择具体分类"
					},
					{
						"id": "2",
						"title": "计算区域",
						"text": "不同市县可能标准不一样"
					},
					{
						"id": "3",
						"title": "计算区域",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
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
