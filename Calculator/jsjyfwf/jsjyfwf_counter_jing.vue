<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">北京市环境影响评价费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">省份</view>
				<picker class="select" @change="PickerChange"  :range="picker1">
					<view class="picker" >
						北京市
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" v-model="needVal.jsjyfwfJing_standard" :range="picker2">
					<view class="picker" >
						建交发〔2017〕6号
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">中标价</view>
				<input type="text" id="sjf" v-model="needVal.jsjyfwfJing_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">收取分配</view>
				<input name="sjfJing_discount" v-model="needVal.jsjyfwfJing_qfbl" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfJing_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">浮动幅度</view>
				<input type="text" id="sjf" v-model="needVal.jsjyfwfJing_fdfd"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">打折折扣</view>
				<input type="text" id="sjf" v-model="needVal.jsjyfwfJing_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jsjyfwff-jing-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsjyfwff-jing-hytzxs>
			
	</view>
</template>
	
<script>
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@/common/json/jsjyfwf/jsjyfwf-jing.json'
	import explain from '@/common/base/explain.vue'
	import jsjyfwffJingHytzxs from "@/pagesB/Calculator/jsjyfwflayouts/jsjyfwfjing/jsjyfwfJing_sqfp.vue"
	
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jsjyfwfJing_discount: "100",
					jsjyfwfJing_fdfd: "100",
					jsjyfwfJing_graded: "0|100|300|500|800|1000|2000|3000|4000|5000|7500|10000|50000",
					jsjyfwfJing_jj: "400|2000|4000|7000|10000|15000|25000|35000|45000|60000|80000|100000|120000",
					jsjyfwfJing_qfbl: "100",
					jsjyfwfJing_standard: "建交发〔2017〕6号",
					jsjyfwfJing_zbj: "",
					type: "jsjyfwfJing"
				},
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1: ['北京市'],
				picker2: ['建交发〔2017〕6号'],
				index:'0',
				explain: [{
						"id": "1",
						"title": "浮动幅度",
						"text": "工程总承包项目收费标准可适当上浮，上浮幅度不超过25%，其他项目收费标准不得上浮，下浮不限"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "可以根据自己实际情况选择折扣"
					}
				]
			}
		},
		components: {
			uniTag,
			jsjyfwffJingHytzxs,
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

	