<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">黑龙江省资产评估收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.zcpgsfHei1">
				<view class="title">选择省份</view>
				<view class="title">{{multiSelector.zcpgsfHei1[pickerIndex.zcpgsfHei1]}}</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfHei_standard">
				<view class="title">选择标准</view>
				<view class="title">{{multiSelector.zcpgsfHei_standard[pickerIndex.zcpgsfHei_standard]}}</view>
				<button type="primary" size="mini" @tap="showModal" data-target="zcpgsfHei_standard">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfHei_category">
				<view class="title">计费类型</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfHei_category" :value="pickerIndex.zcpgsfHei_category"
				 :range="multiSelector.zcpgsfHei_category">
					<view class="picker">
						{{multiSelector.zcpgsfHei_category[pickerIndex.zcpgsfHei_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfHei_ryjc">
				<view class="title">人员级次</view>
				<picker class="select" @change="PickerChange" data-name="zcpgsfHei_ryjc" :value="pickerIndex.zcpgsfHei_ryjc"
				 :range="multiSelector.zcpgsfHei_ryjc">
					<view class="picker">
						{{multiSelector.zcpgsfHei_ryjc[pickerIndex.zcpgsfHei_ryjc]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfHei_ryjc">
				<view class="title">人数</view>
				<input type="text" v-model="needVal.zcpgsfHei_peoples"></input>
				<uni-tag text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.zcpgsfHei4 || showSelector.zcpgsfHei5">
				<view class="title">{{multiSelector.zcpgsfHei4}}</view>
				<input type="text" v-model="needVal.zcpgsfHei_edorcd"></input>
				<uni-tag :text="multiSelector.zcpgsfHei5" type="defult" v-model="multiSelector.zcpgsfHei5"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="zcpgsfHei_discount" v-model="needVal.zcpgsfHei_discount" /></input>
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
	import datajson from "@/common/json/zcpgfs/zcpgfs-hei.json"
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					zcpgsfHei_standard: '黑价联〔2010〕92号',
					zcpgsfHei_category: '',
					zcpgsfHei_ryjc: '',
					zcpgsfHei_dysf: '',
					zcpgsfHei_peoples: '',
					zcpgsfHei_fl: '',
					zcpgsfHei_graded: '',
					zcpgsfHei_edorcd: '',
					zcpgsfHei_discount: '100',
					type: 'zcpgsfHei'
				},
				multiSelector: {
					zcpgsfHei1: [],
					zcpgsfHei_standard: [],
					zcpgsfHei_category: [],
					zcpgsfHei4: '',
					zcpgsfHei5: '',
					zcpgsfHei_fl: '',//6
					zcpgsfHei_graded: '',//7
					zcpgsfHei_ryjc: [],//8
					zcpgsfHei_dysf: '',//9
				},
				showSelector: {
					zcpgsfHei1: true,
					zcpgsfHei_standard: true,
					zcpgsfHei_category: true,
					zcpgsfHei4: true,
					zcpgsfHei5: true,
					zcpgsfHei_fl: false,
					zcpgsfHei_graded: false,
					zcpgsfHei_ryjc:  false,
					zcpgsfHei_dysf: false,
				},
				pickerIndex: {
					zcpgsfHei1: 0,
					zcpgsfHei_standard: 0,
					zcpgsfHei_category: 0,
					zcpgsfHei_ryjc: 0,
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
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


