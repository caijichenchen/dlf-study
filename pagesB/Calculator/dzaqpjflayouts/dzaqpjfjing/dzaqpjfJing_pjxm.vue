<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">地震安全评价项目主要作业方法</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt" style="width: 87%; white-space: pre-wrap">
				{{dzaqpjfJing6}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem
	} from "@dcloudio/uni-ui"
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
			dzaqpjfJing6: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				modalName:'dzaqpjfJing_pjxm',
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			
		}
	}
</script>

<style >
	
	
</style>