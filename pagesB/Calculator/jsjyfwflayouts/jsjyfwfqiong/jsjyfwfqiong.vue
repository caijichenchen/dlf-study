<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsjyfwf-counter-qiong></jsjyfwf-counter-qiong>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jsjyfwf-result :title="title"></jsjyfwf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/pagesCommon/base/baseLayout.vue"
	import jsjyfwfCounterQiong from "@/Calculator/jsjyfwf/jsjyfwf_counter_qiong.vue"
	import computing from "@/pagesCommon/base/computing.vue"
	import jsjyfwfResult from "../jsjyfwf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsjyfwfQiong',  //api请求
					count:2  //积分消耗
				},
				title:'海南'
			}
		},
		components:{
			jsjyfwfCounterQiong,
			baseLayout,
			computing,
			jsjyfwfResult
		}
	}
</script>

<style>

</style>
