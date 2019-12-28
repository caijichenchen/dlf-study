<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">项目技术经济评审费(光伏发电工程)计算器</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" v-model="needVal.xmjsjjpsfgf_jsyj" :range="picker1">
					<view class="picker" >
						NB/T 32027--2016
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="jsyj-guo">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建安设备费</view>
				<input type="text" id="sjf" v-model="needVal.xmjsjjpsfgfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sjfGuo_discount" v-model="needVal.xmjsjjpsfgfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="dzzk-guo">查看说明</button>
			</view>
			
			<!-- <xmjsjjpsfgf-guo-jsyj v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></xmjsjjpsfgf-guo-jsyj> -->
		</form>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	// import xmjsjjpsfgfGuoJsyj from "./xmjsjjpsfgfGuo_jsyj.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					// xmjsjjpsfgf_dzzk: '100',
					// xmjsjjpsfgf_jasbf: '',
					// xmjsjjpsfgf_jsyj: 'NB/T 32027--2016',
					type: "xmjsjjpsfgfGuo",
					xmjsjjpsfgfGuo_dzzk: "100",
					xmjsjjpsfgfGuo_fl: "1.72|1.18|0.75|0.42|0.26|0.16|0.12|0.10",
					xmjsjjpsfgfGuo_gczj: "",
					xmjsjjpsfgfGuo_jfe: "5000|10000|20000|40000|80000|170000|270000|360000",
					xmjsjjpsfgfGuo_jsyj: "NB/T 32027--2016"
				},
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1:['NB/T 32027--2016'],
				index:'NB/T 32027--2016',
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
			// xmjsjjpsfgfGuoJsyj
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				console.log(e.detail.value);
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>
	
<style>

</style>
	