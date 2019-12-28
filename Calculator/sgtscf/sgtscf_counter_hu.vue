<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海市施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择省份</view>
				<picker class="select" v-model="needVal.sgtscfHu_xzsf" :range="picker">
					<view class="picker" name="sgtscfHu_xzsf">
						上海
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" v-model="needVal.sgtscfHu_standard" :range="picker1">
					<view class="picker" name="sgtscfHu_standard">
						沪建交〔2011〕480号、沪价费〔2011〕002号
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" v-model="needVal.sgtscfHu_category" :range="picker2">
					<view class="picker" name="sgtscfHu_standard">
						施工图设计文件审查费
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建筑安装工程直接费</view>
				<input type="text"  id="sjf" v-model="needVal.sgtscfHu_gcl"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sgtscfHu_discount" v-model="needVal.sgtscfHu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
			
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					sgtscfHu_category: "施工图设计文件审查费",
					sgtscfHu_discount: "100",
					sgtscfHu_fl: "0.72|1.67|3.10|8.31|13.10|20.00|24.40|45.20|84.40|121.20|157|191|334|620|834|1000|1130|1760",
					sgtscfHu_gcl: "",
					sgtscfHu_graded: "200|500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000|2000000",
					sgtscfHu_standard: "沪建交〔2011〕480号、沪价费〔2011〕002号",
					type: "sgtscfHu",
				},
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				picker:['上海'],
				picker1:['沪建交〔2011〕480号、沪价费〔2011〕002号'],
				picker2:['施工图设计文件审查费'],
				index:'0',
				explain: [{
						"id": "1",
						"title": "打折折扣",
						"text": "根据各地区行情决定"
					},
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
			},
			//查看说明
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


