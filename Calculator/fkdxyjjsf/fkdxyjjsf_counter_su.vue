<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">苏州市防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfSu_province">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange" data-index='index0' data-name="fkdxyjjsfSu_province" :value="pickerIndex.index0"
				 :range="multiSelector.fkdxyjjsfSu_province">
					<view class="picker">
						{{pickerIndex.index0 >-1?multiSelector.fkdxyjjsfSu_province[pickerIndex.index0]:'甘肃'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfSu_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" data-index='index1' data-name="fkdxyjjsfSu_standard" :value="pickerIndex.index1"
				 :range="multiSelector.fkdxyjjsfSu_standard">
					<view class="picker">
						{{pickerIndex.index1>-1?multiSelector.fkdxyjjsfSu_standard[pickerIndex.index1]:'甘价服务〔2004〕第181号'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建设面积</view>
				<input type="text" id="sjf" v-model="needVal.fkdxyjjsfSu_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfSu_category">
				<!-- <input type="hidden" v-show='false' v-model="needVal.fkdxyjjsfSu_graded"> -->
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-index='index2' data-name="fkdxyjjsfSu_category" :value="pickerIndex.index2"
				 :range="multiSelector.fkdxyjjsfSu_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfSu_category[pickerIndex.index2]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.fkdxyjjsfSu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
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
	import datajson from '@/common/json/fkydjsfs/fkydjsfs-su.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fkdxyjjsfSu_jsmj: '',
					fkdxyjjsfSu_standard: '',
					fkdxyjjsfSu_category: '',
					fkdxyjjsfSu_jj: '',
					fkdxyjjsfSu_discount: 40,
					type: "fkdxyjjsfSu"

				},
				multiSelector: {
					fkdxyjjsfSu_province: [],
					fkdxyjjsfSu_standard: [],
					fkdxyjjsfSu_category: [],
					fkdxyjjsfSu_jj: '',

				},
				pickerIndex: {
					index0: 0,
					index1: 0,
					index2: 0,
				},
				showSelector: {
					fkdxyjjsfSu_standard: true,
					fkdxyjjsfSu_category: true,
					fkdxyjjsfSu_jj: true,
					fkdxyjjsfSu_province: true,
				},
				datajson:datajson,
				modalData: null,
				explain: [{
						"id": "1",
						"title": "建设面积",
						"text": "请确定好工程费用"
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
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


