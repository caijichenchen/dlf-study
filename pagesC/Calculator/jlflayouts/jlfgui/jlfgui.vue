<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfgui-counter-guo></jlfgui-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfgui-result></jlfgui-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfguiCounterGuo from "@/Calculator/jlf/jlf_counter_gui.vue"
	import computing from "@/common/base/computing.vue"
	import jlfguiResult from "./jlfgui_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfGui',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfguiCounterGuo,
			baseLayout,
			computing,
			jlfguiResult
		}
	}
</script>

<style>

</style>
