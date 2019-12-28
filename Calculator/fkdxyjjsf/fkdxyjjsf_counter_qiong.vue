<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南省防空地下室易地建设费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfQiong_xzsf">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange" data-index='index0' data-name="fkdxyjjsfQiong_xzsf" :value="pickerIndex.index0"
				 :range="multiSelector.fkdxyjjsfQiong_xzsf">
					<view class="picker">
						{{pickerIndex.index0 >-1?multiSelector.fkdxyjjsfQiong_xzsf[pickerIndex.index0]:'海南'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfQiong_xzbz">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" data-index='index1' data-name="fkdxyjjsfQiong_xzbz" :value="pickerIndex.index1"
				 :range="multiSelector.fkdxyjjsfQiong_xzbz">
					<view class="picker">
						{{pickerIndex.index1>-1?multiSelector.fkdxyjjsfQiong_xzbz[pickerIndex.index1]:'琼价费管[2010]329号'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建设面积</view>
				<input type="text" id="sjf" v-model="needVal.fkdxyjjsfQiong_jsmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fkdxyjjsfQiong_xzqy">
				<view class="title">计算区域</view>
				<picker class="select" @change="PickerChange" data-index='index2' data-name="fkdxyjjsfQiong_xzqy" :value="pickerIndex.index2"
				 :range="multiSelector.fkdxyjjsfQiong_xzqy">
					<view class="picker">
						{{multiSelector.fkdxyjjsfQiong_xzqy[pickerIndex.index2]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.fkdxyjjsfQiong_fjtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="fkdxyjjsfQiong_fjtz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.fkdxyjjsfQiong_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fkdxyjjsf-qiong-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fkdxyjjsf-qiong-fjtz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/fkydjsfs/fkydjsfs-qiong.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import fkdxyjjsfQiongFjtz from '@/pagesB/Calculator/fkdxyjjsflayouts/fkdxyjjsfqiong/fkdxyjjsfQiong_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fkdxyjjsfQiong_jsmj: '',
					fkdxyjjsfQiong_xzbz: '',
					fkdxyjjsfQiong_xzqy: '',
					fkdxyjjsfQiong_jj: '',
					fkdxyjjsfQiong_nums: "",
					fkdxyjjsfQiong_fjtz: "1.0",
					fkdxyjjsfQiong_yhzk: 40,
					type: "fkdxyjjsfQiong"

				},
				multiSelector: {
					fkdxyjjsfQiong_xzsf: [],
					fkdxyjjsfQiong_xzbz: [],
					fkdxyjjsfQiong_xzqy: [],
					fkdxyjjsfQiong_jj: '',

				},
				pickerIndex: {
					index0: 0,
					index1: 0,
					index2: 0,
				},
				showSelector: {
					fkdxyjjsfQiong_xzbz: true,
					fkdxyjjsfQiong_xzqy: true,
					fkdxyjjsfQiong_jj: true,
					fkdxyjjsfQiong_xzsf: true,
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
			fkdxyjjsfQiongFjtz,
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
