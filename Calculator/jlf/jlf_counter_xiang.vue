<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view >湘监协[2016]2号</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="text"  v-model="needVal.jlfXiang_jfe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfXiang_jfe">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="text"  v-model="needVal.jlfXiang_fztz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfXiang_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="text"  v-model="needVal.jlfXiang_fjtz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfXiang_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sjfGuo_discount" v-model="needVal.jlfXiang_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<jlfxiang-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfxiang-fjtz>
		<jlfxiang-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal' :modalName="modalName"></jlfxiang-fztz>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import jlfxiangFjtz from "@/pagesC/Calculator/jlflayouts/jlfxiang/jlfXiang_fjtz.vue"
	import jlfxiangFztz from "@/pagesC/Calculator/jlflayouts/jlf_fztz.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfXiang_dzzk: "50",
					jlfXiang_jfe: "",
					jlfXiang_fjtz: '1.0',
					jlfXiang_fztz: '1.0',
					jlfXiang_jsyj: "湘监协[2016]2号",
					type: "jlfXiang",
					jlfXiang_nums: ""
				},
				modalData: null,  //查看说明
				showModalName: null,
				modalName:'jlfXiang_fztz',
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			uniTag,
			explain,
			jlfxiangFjtz,
			jlfxiangFztz,
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
	