<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfZhe_province">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange" data-index='index0' data-name="fkdxyjjsfZhe_province" :value="pickerIndex.index0"
				 :range="multiSelector.fkdxyjjsfZhe_province">
					<view class="picker">
						{{pickerIndex.index0 >-1?multiSelector.fkdxyjjsfZhe_province[pickerIndex.index0]:'浙江'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfZhe_standard">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" data-index='index1' data-name="fkdxyjjsfZhe_standard" :value="pickerIndex.index1"
				 :range="multiSelector.fkdxyjjsfZhe_standard">
					<view class="picker">
						{{pickerIndex.index1>-1?multiSelector.fkdxyjjsfZhe_standard[pickerIndex.index1]:'浙价费〔2016〕211号'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建设面积</view>
				<input type="text" id="sjf" v-model="needVal.fkdxyjjsfZhe_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfZhe_category">
				<!-- <input type="hidden" v-show='false' v-model="needVal.fkdxyjjsfZhe_graded"> -->
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-index='index2' data-name="fkdxyjjsfZhe_category" :value="pickerIndex.index2"
				 :range="multiSelector.fkdxyjjsfZhe_category">
					<view class="picker">
						{{multiSelector.fkdxyjjsfZhe_category[pickerIndex.index2]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.fkdxyjjsfZhe_fjtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="fkdxyjjsfZhe_fjtz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.fkdxyjjsfZhe_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<!-- <fkdxyjjsf-zhe-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fkdxyjjsf-zhe-fjtz> -->
		<fkdxyjjsf-zhe-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fkdxyjjsf-zhe-fjtz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/fkydjsfs/fkydjsfs-zhe.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import fkdxyjjsfZheFjtz from '@/pagesB/Calculator/fkdxyjjsflayouts/fkdxyjjsfzhe/fkdxyjjsfZhe_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fkdxyjjsfZhe_jsmj: '',
					fkdxyjjsfZhe_standard: '',
					fkdxyjjsfZhe_category: '',
					fkdxyjjsfZhe_jj: '',
					fkdxyjjsfZhe_fjtz: "1.0",
					fkdxyjjsfZhe_discount: 40,
					type: "fkdxyjjsfZhe"

				},
				multiSelector: {
					fkdxyjjsfZhe_province: [],
					fkdxyjjsfZhe_standard: [],
					fkdxyjjsfZhe_category: [],
					fkdxyjjsfZhe_jj: '',

				},
				pickerIndex: {
					index0: 0,
					index1: 0,
					index2: 0,
				},
				showSelector: {
					fkdxyjjsfZhe_standard: true,
					fkdxyjjsfZhe_category: true,
					fkdxyjjsfZhe_jj: true,
					fkdxyjjsfZhe_province: true,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
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
			fkdxyjjsfZheFjtz,
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

<style>

</style>
