<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJi1">
				<view class="title">选择省份</view>
				<view class="title">{{multiSelector.zcpgsfJi1[pickerIndex.zcpgsfJi1]}}</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJi_standard">
				<view class="title">选择标准</view>
				<view class="title">{{multiSelector.zcpgsfJi_standard[pickerIndex.zcpgsfJi_standard]}}</view>
				<button type="primary" size="mini" @tap="showModal" data-target="zcpgsfJi_standard">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJi_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfJi_category" :value="pickerIndex.zcpgsfJi_category"
				 :range="multiSelector.zcpgsfJi_category">
					<view class="picker">
						{{multiSelector.zcpgsfJi_category[pickerIndex.zcpgsfJi_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJi_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfJi_ryjc" :value="pickerIndex.zcpgsfJi_ryjc"
				 :range="multiSelector.zcpgsfJi_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfJi_ryjc[pickerIndex.zcpgsfJi_ryjc]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJi_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfJi_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfJi4 || showSelector.zcpgsfJi5">
				<view class="title">{{multiSelector.zcpgsfJi4}}</view>
				<input type="text" v-model="needVal.zcpgsfJi_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfJi5" type="defult" v-model="multiSelector.zcpgsfJi5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfJi_discount" v-model="needVal.zcpgsfJi_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
			
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from "@/common/json/zcpgfs/zcpgfs-ji.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfJi_standard: '冀价经费〔2013〕14号|冀价经费〔2011〕9号',
					zcpgsfJi_category: '',
					zcpgsfJi_ryjc: '',
					zcpgsfJi_dysf: '',
					zcpgsfJi_peoples: '',
					zcpgsfJi_fl: '',
					zcpgsfJi_graded: '',
					zcpgsfJi_edorcd: '',
					zcpgsfJi_discount: '100',
					type: 'zcpgsfJi'
				},
				multiSelector: {
					zcpgsfJi1: [],
					zcpgsfJi_standard: [],
					zcpgsfJi_category: [],
					zcpgsfJi4: '',
					zcpgsfJi5: '',
					zcpgsfJi_fl: '',//6
					zcpgsfJi_graded: '',//7
					zcpgsfJi_ryjc: [],//8
					zcpgsfJi_dysf: '',//9
				},
				showSelector: {
					zcpgsfJi1: true,
					zcpgsfJi_standard: true,
					zcpgsfJi_category: true,
					zcpgsfJi4: true,
					zcpgsfJi5: true,
					zcpgsfJi_fl: false,
					zcpgsfJi_graded: false,
					zcpgsfJi_ryjc:  false,
					zcpgsfJi_dysf: false,
				},
				pickerIndex: {
					zcpgsfJi1: 0,
					zcpgsfJi_standard: 0,
					zcpgsfJi_category: 0,
					zcpgsfJi_ryjc: 0,
					index4: 0,
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				explain: [{
						"id": "1",
						"title": "选择省份",
						"text": "请确定好所选区域"
					},
					{
						"id": "2",
						"title": "计费类型",
						"text": "不同计费类型收费方式不一样"
					},
					{
						"id": "3",
						"title": "人员级次",
						"text": "不同人员级次对应收费从上往下逐级递减"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情各地区取值略有不同"
					},
				]
			}
		},
		components: {
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


