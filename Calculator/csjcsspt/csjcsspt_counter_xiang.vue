<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省城市基础设施配套费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.csjcssptXiang_sfxz">
				<view class="title">省份选择</view>
				<view class="title">{{multiSelector.csjcssptXiang_sfxz[pickerIndex.csjcssptXiang_sfxz]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title" v-model="needVal.csjcssptXiang_standard">{{multiSelector.csjcssptXiang_standard[pickerIndex.csjcssptXiang_standard]}}</view>
				<button type="primary" size="mini" @tap="showModal" data-target="csjcssptXiang_standard">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">上年商品房平均销售价格</view>
				<input type="text"  v-model="needVal.csjcssptXiang_dj"></input>
				<uni-tag text="元/㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">报建面积</view>
				<input type="text"  v-model="needVal.csjcssptXiang_bjmj"></input>
				<uni-tag text="㎡" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">报建区域</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptXiang_bjqy" :value="pickerIndex.csjcssptXiang_bjqy"
				 :range="multiSelector.csjcssptXiang_bjqy">
					<view class="picker">
						{{multiSelector.csjcssptXiang_bjqy[pickerIndex.csjcssptXiang_bjqy]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">选择类别</view>
				<picker class="select" @change="PickerChange"  data-name="csjcssptXiang_category" :value="pickerIndex.csjcssptXiang_category"
				 :range="multiSelector.csjcssptXiang_category">
					<view class="picker">
						{{multiSelector.csjcssptXiang_category[pickerIndex.csjcssptXiang_category]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input name="csjcssptXiang_discount" v-model="needVal.csjcssptXiang_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
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
	import datajson from '@/common/json/csjcsspts/csjcsspts-xiang.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					csjcssptXiang_sfxz: '',
					csjcssptXiang_standard: '',
					csjcssptXiang_dj: '',
					csjcssptXiang_bjmj: '',
					csjcssptXiang_bjqy: '',
					csjcssptXiang_category: '',
					csjcssptXiang_jg: '',
					csjcssptXiang_discount: "40",
					type: "csjcssptXiang"
				},
				multiSelector: {
					csjcssptXiang_sfxz: [],
					csjcssptXiang_standard: [],
					csjcssptXiang_bjqy: [],
					csjcssptXiang_category: [],
					csjcssptXiang_jg: '',
				},
				pickerIndex: {
					csjcssptXiang_sfxz: 0,
					csjcssptXiang_standard: 0,
					csjcssptXiang_bjqy: 0,
					csjcssptXiang_category: 0,
				},
				showSelector: {
					csjcssptXiang_sfxz: true,
					csjcssptXiang_standard: true,
					csjcssptXiang_bjqy: true,
					csjcssptXiang_category: true,
					csjcssptXiang_jg: false,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "1",
						"title": "上年商品房平均销售价格",
						"text": "按上年度商品房平均销售价格"
					},
					{
						"id": "2",
						"title": "报建面积",
						"text": "请确定好报建面积"
					},
					{
						"id": "3",
						"title": "报建区域",
						"text": "请确定报建区域"
					},
					{
						"id": "4",
						"title": "选择类别",
						"text": "请确定报建区域"
					},
					{
						"id": "5",
						"title": "优惠折扣",
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
