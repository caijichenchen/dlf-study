<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">西藏环境影响评价费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" v-model="needVal.hjyxpjZang_standard" :range="picker1">
					<view class="picker" >
						藏价费〔2002〕116号
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">咨询服务项目</view>
				<picker class="select" @change="PickerChange1" v-model="needVal.hjyxpjZang_zxfwxm" :range="picker2">
					<view class="picker">
						{{index>-1?picker2[index]:'编制环境影响报告书（含大纲）'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">估算投资额</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjZang_gstze"></input>
				<uni-tag  text="亿元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">行业调整系数</view>
				<input name="sjfZang_discount" v-model="needVal.hjyxpjZang_hytzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjZang_hytzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">环境敏感程度调整系数</view>
				<input name="sjfZang_discount" v-model="needVal.hjyxpjZang_hjmgcdtz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjZang_hjmgcdtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">地区调整系数</view>
				<input name="sjfZang_discount" v-model="needVal.hjyxpjZang_dqtzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="hjyxpjZang_dqtzxs">点击选择</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">浮动</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjZang_fd"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">优惠折扣</view>
				<input type="text" id="sjf" v-model="needVal.hjyxpjZang_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[3]">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<hjyxpjf-zang-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-zang-hytzxs>
		<hjyxpjf-zang-hjmgxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-zang-hjmgxs>
		<hjyxpjf-zang-dqtzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></hjyxpjf-zang-dqtzxs>
			
	</view>
</template>
	
<script>
	import explain from '@/common/base/explain.vue'
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import hjyxpjfZangHytzxs from "@/pagesB/Calculator/hjyxpjflayouts/hjyxpjzang/hjyxpjZang_hytzxs.vue"
	import hjyxpjfZangHjmgxs from "@/pagesB/Calculator/hjyxpjflayouts/hjyxpjzang/hjyxpjZang_hjmgxs.vue"
	import hjyxpjfZangDqtzxs from "@/pagesB/Calculator/hjyxpjflayouts/hjyxpjzang/hjyxpjZang_dqtzxs.vue"
	
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					
					hjyxpjZang_category: "0|0.2|0.5|1.0|1.5|2.0|10",
					hjyxpjZang_fd: "100",
					hjyxpjZang_gstze: "",
					hjyxpjZang_fl: "6|8|10|13|15|20|50",
					hjyxpjZang_hjmgcdtz: "1.0",
					hjyxpjZang_hytzxs: "1.0",
					hjyxpjZang_dqtzxs:'0.8',
					hjyxpjZang_standard: "藏价费〔2002〕116号",
					hjyxpjZang_nums: "",
					hjyxpjZang_discount: "40",
					hjyxpjZang_zxfwxm: "编制环境影响报告书（含大纲）",
					type: "hjyxpjZang"
				},
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1: ['藏价费〔2002〕116号'],
				picker2: ['编制环境影响报告书（含大纲）','编制环境影响报告表','评估环境影响报告书（含大纲）','评估环境影响报告表'],
				index:'0',
				explain: [{
						"id": "1",
						"title": "计算依据",
						"text": "不同市县标准可能不一样"
					},
					{
						"id": "2",
						"title": "估算投资额",
						"text": "估算投资额为项目建议书或可行性研究报告中的估算投资额"
					},
					{
						"id": "3",
						"title": "浮动",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "4",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			uniTag,
			hjyxpjfZangHytzxs,
			hjyxpjfZangHjmgxs,
			hjyxpjfZangDqtzxs,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
			},
			PickerChange1(e) {
				this.index = e.detail.value
				this.afterPicker(this.index)
			},
			afterPicker(index){
				this.index = index
				this.needVal.hjyxpjZang_zxfwxm = this.picker2[index]
				console.log(this.needVal.hjyxpjZang_zxfwxm );
				},
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
	