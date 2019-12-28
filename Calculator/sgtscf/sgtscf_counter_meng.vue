<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择省份</view>
				<picker class="select" v-model="needVal.djglfHu_xzsf" :range="picker">
					<view class="picker" name="djglfHu_xzsf">
						内蒙古
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" v-model="needVal.sgtscfMeng_standard" :range="picker1">
					<view class="picker" name="sgtscfMeng_standard">
						沪发改投〔2016〕70号
					</view>
				</picker>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建筑安装工程直接费</view>
				<input type="text"  id="sjf" v-model="needVal.sgtscfMeng_gcl"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sgtscfMeng_discount" v-model="needVal.sgtscfMeng_discount" /></input>
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
					sgtscfMeng_discount: "100",
					sgtscfMeng_fl: "0.0018|0.0012|0.001",
					sgtscfMeng_gcl: "",
					sgtscfMeng_graded: "0|1000|5000",
					sgtscfMeng_standard: "内计费字[2002]1007号",
					type: "sgtscfMeng",
				},
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				picker:['内蒙古'],
				picker1:['沪发改投〔2016〕70号'],
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


