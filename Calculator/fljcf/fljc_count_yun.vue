<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">云南省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfYun1">
				<view class="title">省份</view>
					<view class="picker">
						{{multiSelector.fljcfYun1[pickerIndex.fljcfYun1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYun_standard">
				<view class="title">选择标准</view>
					<view class="picker">
						{{multiSelector.fljcfYun_standard[pickerIndex.fljcfYun_standard]}}
					</view>
				<button type="primary" size="mini" @tap="showModal" data-target="fljcfYun_standard">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYun_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfYun_sfxm" :value="pickerIndex.fljcfYun_sfxm"
				 :range="multiSelector.fljcfYun_sfxm">
					<view class="picker">
						{{multiSelector.fljcfYun_sfxm[pickerIndex.fljcfYun_sfxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYun_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfYun_jtfl" :value="pickerIndex.fljcfYun_jtfl"
				 :range="multiSelector.fljcfYun_jtfl">
					<view class="picker">
						{{multiSelector.fljcfYun_jtfl[pickerIndex.fljcfYun_jtfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYun_gclmc || showSelector.fljcfYun_dw">
				<view class="title" v-model="needVal.fljcfYun_gclmc">{{multiSelector.fljcfYun_gclmc}}</view>
				<input v-model="needVal.fljcfYun_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfYun_dw" type="defult" v-model="needVal.fljcfYun_dw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfYun_zzgd">
				<view class="title">防雷装置高度高度</view>
				<picker class="select" @change="PickerChange" data-name="fljcfYun_zzgd" :value="pickerIndex.fljcfYun_zzgd"
				 :range="multiSelector.fljcfYun_zzgd">
					<view class="picker">
						{{multiSelector.fljcfYun_zzgd[pickerIndex.fljcfYun_zzgd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfYun_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
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
	import datajson from '@/common/json/fljcfs/fljcfs-yun.json'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfYun_standard: '',
					fljcfYun_sfxm: '',
					fljcfYun_jtfl: '',
					fljcfYun_gclmc: '',
					fljcfYun_gcl: '',
					fljcfYun_dw: '',
					fljcfYun_jj: '',
					fljcfYun_graded: '',
					fljcfYun_zzgd: '',
					fljcfYun_discount: '50',
					type: 'fljcfYun'
				},
				multiSelector: {
					fljcfYun1: [],
					fljcfYun_standard: [],
					fljcfYun_sfxm: [],
					fljcfYun_jtfl: [],//6
					fljcfYun_gclmc: '',//5
					fljcfYun_dw: '',//4
					fljcfYun_jj: '',//7
					fljcfYun_graded: '',
					fljcfYun_zzgd: '',
				},
				showSelector: {
					fljcfYun1: true,
					fljcfYun_standard: true,
					fljcfYun_sfxm: true,
					fljcfYun_jtfl: true,
					fljcfYun_gclmc: false,
					fljcfYun_dw: false,
					fljcfYun_jj: false,
					fljcfYun_graded: false,
					fljcfYun_zzgd: false,
				},
				pickerIndex: {
					fljcfYun1: 0,
					fljcfYun_standard: 0,
					fljcfYun_sfxm: 0,
					fljcfYun_jtfl: 0,
					fljcfYun_zzgd: 0
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
						"title": "防雷装置高度高度",
						"text": "高度超过30米的加收100元。"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
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
