<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">广西工程监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" v-model="needVal.jlfGui_jsyj" :range="picker1">
					<view class="picker" >
						桂建标[2018]37号
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">计费额</view>
				<input type="text"  v-model="needVal.jlfGui_jfe"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input  v-model="needVal.jlfGui_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfGui_dzzk: "100",
					jlfGui_jfe: "",
					jlfGui_jsyj: "桂建标[2018]37号",
					jlfGui_nums: "",
					type: "jlfGui"
				},
				modalData: null,  //查看说明
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1:['桂建标[2018]37号'],
				index:'桂建标[2018]37号',
				explain: [{
						"id": "1",
						"title": "计费额",
						"text": "一般建安工程费"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "不同地区折扣不同,具体根据实际调整"
					},
				]
			}
		},
		components: {
			uniTag,
			explain,
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				console.log(e.detail.value);
			},
			afterPicker(index){
				this.index = index
				this.needVal.zsxzsjfszGuo_fztz = this.picker2[index]
			},
			//查看说明
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
	