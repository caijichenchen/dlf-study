<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">安徽省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfWan1">
				<view class="title">省份</view>
					<view class="title">
						{{multiSelector.fljcfWan1[pickerIndex.fljcfWan1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfWan_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfWan_standard[pickerIndex.fljcfWan_standard]}}
					</view>
				<button type="primary" size="mini" @tap="showModal" data-target="fljcfWan_standard">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfWan_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfWan_sfxm" :value="pickerIndex.fljcfWan_sfxm"
				 :range="multiSelector.fljcfWan_sfxm">
					<view class="picker">
						{{multiSelector.fljcfWan_sfxm[pickerIndex.fljcfWan_sfxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfWan_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfWan_jtfl" :value="pickerIndex.fljcfWan_jtfl"
				 :range="multiSelector.fljcfWan_jtfl">
					<view class="picker">
						{{multiSelector.fljcfWan_jtfl[pickerIndex.fljcfWan_jtfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfWan_gclmc || showSelector.fljcfWan_dw">
				<view class="title" v-model="needVal.fljcfWan_gclmc">{{multiSelector.fljcfWan_gclmc}}</view>
				<input v-model="needVal.fljcfWan_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfWan_dw" type="defult" v-model="needVal.fljcfWan_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input v-model="needVal.fljcfWan_tzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="fljcfWan_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfWan_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击选择</button>
			</view>
		</form>
		<explain></explain>
		<tzxs-wan :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-wan>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/fljcfs/fljcfs-wan.json'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import tzxsWan from '@/pagesA/Calculator/fljcflayouts/fljcfwan/fljcfWan_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfWan_standard: '',
					fljcfWan_sfxm: '',
					fljcfWan_jtfl: '',
					fljcfWan_jj: '',
					fljcfWan_gclmc: '',
					fljcfWan_gcl: '',
					fljcfWan_dw: '',
					fljcfWan_tzxs: '1.0',
					fljcfWan_discount: '50',
					type: 'fljcfWan'
				},
				multiSelector: {
					fljcfWan1: [],
					fljcfWan_standard: [],
					fljcfWan_sfxm: [],
					fljcfWan_dw: '',//4
					fljcfWan_gclmc: '',//5
					fljcfWan_jtfl: [],//6
					fljcfWan_jj: '',//7
				},
				showSelector: {
					fljcfWan1: true,
					fljcfWan_standard: true,
					fljcfWan_sfxm: true,
					fljcfWan_dw: '',
					fljcfWan_gclmc: '',
					fljcfWan_jtfl: true,
					fljcfWan_jj: false,
				},
				pickerIndex: {
					fljcfWan1: 0,
					fljcfWan_standard: 0,
					fljcfWan_sfxm: 0,
					fljcfWan_jtfl: 0
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,
				explain: [
					{
						"id": "1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			tzxsWan
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
