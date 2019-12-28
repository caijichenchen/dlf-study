<template>
	<view class="fljc_content">
		<view class="content_jsq">
			<view class="fljctable">
				<img src="/static/img/tel.jpg">
				<text>河南省防雷检测费</text>
			</view>
			<form>
				<!-- 选择省份asmnhd as -->
				<view class="cu-form-group">
					<view class="title">省份</view>
					<picker class="select" @change="Pickeraddress" :range="picker1" v-model="needVal.fljcfYu_xzsf">
						<view class="picker" name="fljcfYu_xzsf">
							{{address>-1?picker1[address]:'河南'}}
						</view>
					</picker>
				</view>
				<!-- 选择标准 -->
				<view class="cu-form-group">
					<view class="title">选择标准</view>
					<picker class="select" @change="Pickerstandard" :range="picker" v-model="needVal.fljcfYu_standard">
						<view class="picker" name="fljcfYu_standard">
							{{started>-1?picker[started]:'豫发改[2016]1128号'}}
						</view>
					</picker>
					<button type="primary" size="mini">点击查看</button>
				</view>
				<!-- 选择收费项目 -->
				<view class="cu-form-group">
					<view class="title">收费项目</view>
					<picker class="select" @change="Pickerproject" :range="projectArr" v-model="needVal.fljcfYu_sfxm">
						<view class="picker" name="fljcfYu_sfxm">
							{{project>-1?projectArr[project]:'防雷装置施工检测'}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
				</view>
				<!-- ========================================以下根据底部框选择显示 -->
				<!-- 具体分类 -->
				<view class="cu-form-group" v-show=" project == 1 || project == 2">
					<view class="title">具体分类</view>
					<!-- <input  name="input" class="sjgs" v-model="sfjj"/></input> -->
					<picker class="select" @change="PickerClassify" :range="classify" v-model="needVal.fljcfYu_jtfl">
						<view class="picker" name="fljcfYu_jtfl">
							{{classify[classifyNumber]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
				</view>

				<!-- ==============================================================以上根据底部框选择显示 -->
				<view class="cu-form-group">
					<view class="title">工程量</view>
					<input name="fljcfYu_gcl" v-model="needVal.fljcfYu_gcl" /></input>
					<uni-tag :text=" uni_tag == ''? '点': uni_tag" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input name="fljcfYu_discount" v-model="needVal.fljcfYu_discount" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[2]">查看说明</button>
				</view>
			</form>
		</view>
		<!-- ====================================以下为显示说明 -->
		<explain></explain>
	</view>
</template>

<script>
	import {
		uniTag
	} from '@dcloudio/uni-ui'
	// import counterData from '../../../../static/public/counterData'
	// import {
	// 	fljcMixin
	// } from '../../../base/fljcMixin.js'
	import explain from '@/common/base/explain.vue'
	import {counterMixin} from "@/common/base/counterMixin"
	
	export default {
		mixins: [ counterMixin],
		data() {
			return {
				sfjj: '',
				classifyNumber: 0,
				classify: [],
				classifyArr: [],
				modalData: null,
				address: -1,
				started: -1,
				project: -1,
				dzzk: 50,
				picker1: [],
				picker: [],
				projectArr: [],
				uni_tag: '',
				needVal: {
					fljcfYu_xzsf: "河南",
					fljcfYu_standard: '豫发改[2016]1128号',
					fljcfYu_sfxm: "防雷装置施工技术检测",
					fljcfYu_jtfl: "hiddenhidden",
					fljcfYu_gcl: '1',
					fljcfYu_discount: '50',
					fljcfYu_dw: "点",
					fljcfYu_gclmc: "工程量",
					fljcfYu_jj: "40",
					type: "fljcfYu"
				},
				explain: [{
						"id": "1",
						"title": "收费项目",
						"text": "请选择对应的项目"
					},
					{
						"id": "2",
						"title": "具体分类",
						"text": "具体分类"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50% 各地区取值略有不同"
					}
				]
			}
		},
		created() {
			// this.picker1 = counterData[0].area
			// this.picker = counterData[0].number
			// this.projectArr = counterData[0].project
			// this.classifyArr = counterData[0].classify
			// this.uniTagArr = counterData[0].uniTagArr
		},
		methods: {
			// 具体分类
			PickerClassify(e) {
				this.classifyNumber = parseInt(e.detail.value)
			},
			//显示说明
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		},
		components: {
			uniTag,
			explain
		},
	}
</script>

<style>
	.fljc_content {
		width: 100%;
		height: auto;
		background-color: #fff;
	}

	.content_jsq {
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
		margin-top: 20upx;
		height: auto;
	}

	.content_jsq .fljctable {
		width: 100%;
		height: 60upx;
	}

	.content_jsq .fljctable img {
		width: 35upx;
		height: 45upx;
		float: left;
		margin-left: 20upx;
	}

	.content_jsq .fljctable text {
		float: left;
		margin-top: 5upx;
		margin-left: 15upx;
	}

	.fljc_content form {
		text-align: left;
	}

	.cu-form-group {
		position: relative;
		border-top: 0.5px solid #eee;
	}

	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.compute {
		width: 100%;
		height: 120upx;
	}

	.compute button {
		height: 80upx;
	}

	.compute text {
		font-size: 26upx;
		margin-left: 20upx;
	}
</style>
