<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<gcqtclsf-counter-guo></gcqtclsf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<gcqtclsf-result></gcqtclsf-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import gcqtclsfCounterGuo from "@/Calculator/gcqtclsf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import gcqtclsfResult from "./gcqtclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcqtclsfGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcqtclsfCounterGuo,
			baseLayout,
			computing,
			gcqtclsfResult
		}
	}
</script>

<style>
</style>
