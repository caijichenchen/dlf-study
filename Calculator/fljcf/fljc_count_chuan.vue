<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川省防雷检测费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.fljcfChuan1">
				<view class="title">省份</view>
					<view class="title">
						{{multiSelector.fljcfChuan1[pickerIndex.fljcfChuan1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfChuan_standard">
				<view class="title">选择标准</view>
					<view class="title">
						{{multiSelector.fljcfChuan_standard[pickerIndex.fljcfChuan_standard]}}
					</view>
				<button type="primary" size="mini" @tap="showModal" data-target="fljcfChuan_standard">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfChuan_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="fljcfChuan_sfxm" :value="pickerIndex.fljcfChuan_sfxm"
				 :range="multiSelector.fljcfChuan_sfxm">
					<view class="picker">
						{{multiSelector.fljcfChuan_sfxm[pickerIndex.fljcfChuan_sfxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfChuan_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="fljcfChuan_jtfl" :value="pickerIndex.fljcfChuan_jtfl"
				 :range="multiSelector.fljcfChuan_jtfl">
					<view class="picker">
						{{multiSelector.fljcfChuan_jtfl[pickerIndex.fljcfChuan_jtfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.fljcfChuan_gclmc || showSelector.fljcfChuan_dw">
				<view class="title">{{multiSelector.fljcfChuan_gclmc}}</view>
				<input v-model="needVal.fljcfChuan_gcl" /></input>
				<uni-tag :text="multiSelector.fljcfChuan_dw" type="defult" v-model="needVal.fljcfChuan_dw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.fljcfChuan_discount" /></input>
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
	import datajson from '@/common/json/fljcfs/fljcfs-chuan.json'
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					fljcfChuan_standard: '',
					fljcfChuan_sfxm: '',
					fljcfChuan_jtfl: '',
					fljcfChuan_gclmc: '',
					fljcfChuan_gcl: '',
					fljcfChuan_dw: '',
					fljcfChuan_jj: '',
					fljcfChuan_discount: '50',
					type: 'fljcfChuan'
				},
				multiSelector: {
					fljcfChuan1: [],
					fljcfChuan_standard: [],
					fljcfChuan_sfxm: [],
					fljcfChuan_jtfl: [],//6
					fljcfChuan_gclmc: '',//5
					fljcfChuan_dw: '',//4
					fljcfChuan_jj: '',//7
				},
				showSelector: {
					fljcfChuan1: true,
					fljcfShan_category: true,
					fljcfChuan_sfxm: true,
					fljcfChuan_jtfl: true,
					fljcfChuan_gclmc: false,
					fljcfChuan_dw: false,
					fljcfChuan_jj: false,
				},
				pickerIndex: {
					fljcfChuan1: 0,
					fljcfChuan_standard: 0,
					index2: 0,
					fljcfChuan_sfxm: 0,
					fljcfChuan_jtfl: 0
				},
				showModalName: null,
				datajson:'',
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
			explain
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json//fljcfs/fljcfs-chuan.json',
				success:(res) =>{
					this.datajson = res.data
				}
			})
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
