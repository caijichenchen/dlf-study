<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<hjyxpjf-counter-guo></hjyxpjf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<hjyxpjf-result :title="title"></hjyxpjf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import hjyxpjfCounterGuo from "@/Calculator/hjyxpjf/hjyxpjf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import hjyxpjfResult from "../hjyxpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjGuo',  //api请求
					count:2  //积分消耗
				},
				title:"全国"
			}
		},
		methods: {
			
		},
		components:{
			hjyxpjfCounterGuo,
			baseLayout,
			computing,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
