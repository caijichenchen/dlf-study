<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">生产准备费(光伏发电工程)</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" v-model="needVal.sczbfgf_jsyj" :range="picker1">
					<view class="picker" >
						NB/T 32027--2016
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="jsyj-guo">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建安设备费</view>
				<input type="text" id="sjf" v-model="needVal.sczbfgfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sjfGuo_discount" v-model="needVal.sczbfgfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			
			<!-- <sczbfgf-guo-jsyj v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sczbfgf-guo-jsyj> -->
		</form>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	// import sczbfgfGuoJsyj from "./sczbfgfGuo_jsyj.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					// sczbfgf_dzzk: '100',
					// sczbfgf_jasbf: '',
					// sczbfgf_jsyj: 'NB/T 32027--2016',
					type: "sczbfgfGuo",
					sczbfgfGuo_dzzk: "100",
					sczbfgfGuo_fl: "2.60|1.78|1.03|0.53|0.32|0.19|0.14|0.11",
					sczbfgfGuo_gczj: "",
					sczbfgfGuo_jfe: "3000|6000|12000|30000|60000|120000|180000|250000",
					sczbfgfGuo_jsyj: "NB/T 32027--2016"
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
			// sczbfgfGuoJsyj
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
	
