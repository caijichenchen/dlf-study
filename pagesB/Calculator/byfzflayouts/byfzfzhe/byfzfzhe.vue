<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<byfzf-counter-zhe></byfzf-counter-zhe>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<byfzf-result></byfzf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import byfzfCounterZhe from "@/Calculator/byfzf_counter_zhe.vue"
	import computing from "@/common/base/computing.vue"
	import byfzfResult from "./byfzf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/byfzfZhe',  //api请求
					count:2  //积分消耗
				}
			}
		},
		components:{
			byfzfCounterZhe,
			baseLayout,
			computing,
			byfzfResult
		}
	}
</script>

<style>

</style>
