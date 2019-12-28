<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">中设协字[2016]89号设计费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select" @change="PickerChange" v-model="needVal.cbsjps_xzxm" :range="picker1">
					<view class="picker" >
						{{index>-1?picker1[index]:'一般工程'}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzGuo_fzcd">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select"  v-model="needVal.cbsjps_xzbz" :range="picker2">
					<view class="picker" >
						国管房地[2006] 37号
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzGuo_fzcd">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">概算投资额</view>
				<input type="text" id="sjf" v-model="needVal.cbsjps_gstze"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="cbsjpsGuo_fjtz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input  v-model="needVal.cbsjps_fjtz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="cbsjpsGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input  v-model="needVal.cbsjps_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="showdzzk">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input  v-model="needVal.cbsjps_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="showdzzk">查看说明</button>
			</view>
			
		</form>

		<cbsjps-guo-fjxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></cbsjps-guo-fjxs>
			
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import cbsjpsGuoFjxs from "@/pagesB/Calculator/sjflayouts/cbsjpssf/cbsjpsGuo_fjtz.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					cbsjps_xzxm: '',
					cbsjps_xzbz: '国管房地[2006] 37号',
					cbsjps_gstze: '',
					cbsjps_fjtz: 1.0,
					cbsjps_fdfd: 80,
					cbsjps_dzzk: 50,
				},
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1: ['一般工程', '水运工程'],
				picker2: ['国管房地[2006] 37号'],
				index:'一般工程'
			}
		},
		components: {
			uniTag,
			cbsjpsGuoFjxs
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				console.log(e.detail.value);
			}
		}
	}
</script>
	
	