<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title" v-model="needVal.jlfGuo_jsyj">发改价格[2007]670号</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">工程造价</view>
				<input type="text"  v-model="needVal.jlfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfGuo_gczj">点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">专业调整</view>
				<input type="text"  v-model="needVal.jlfGuo_zytz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfGuo_zytz">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<picker class="select" @change="PickerChanges" :value="index" :range="jlfGuo_fztz">
					<view class="picker" name="sjfGui_fztz">
						{{jlfGuo_fztz[index]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="sjfGui_fztz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">高程调整</view>
				<input type="text"  v-model="needVal.jlfGuo_gctz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfGuo_gctz">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input  v-model="needVal.jlfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input  v-model="needVal.jlfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<gczj v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></gczj>
		<zytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zytz>
		<gctz v-bind:showModalName="showModalName" v-on:hideModal='hideModal' :modalName="modalName" :title="title"></gctz>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import gczj from '@/pagesC/Calculator/jlflayouts/jlfguo/jlfGuo_gczj.vue'
	import zytz from '@/pagesC/Calculator/jlflayouts/jlfguo/jlfGuo_zytz.vue'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfGuo_jsyj: '发改价格[2007]670号',
					jlfGuo_gczj: '',
					jlfGuo_zytz: '',
					jlfGuo_fztz: 'I级',
					jlfGuo_gctz: '1.0',
					jlfGuo_fdfd: '80',
					jlfGuo_dzzk: '50',
					jlfGuo_nums: '',
					type: "jlfGuo"
				},
				modalData: null,  //查看说明
				showModalName: null,
				index:0,
				modalName: 'jlfGuo_gctz',
				title:'监理',
				jlfGuo_fztz: ['I级','II级','III级','II级双线','铁路III级','穿II级','穿III级'],
				explain: [{
						"id": "1",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
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
			gczj,
			zytz,
			gctz
		},
		methods:{
			PickerChanges(e) {
				this.index = e.detail.value
				this.needVal.jlfGuo_fztz = this.jlfGuo_fztz[this.index]
			},
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
	