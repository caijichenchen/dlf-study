<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zbdlf-counter-hu></zbdlf-counter-hu>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zbdlfCounterHu from "@/Calculator/zbdlf/zbdlf_counter_hu.vue"
	import computing from "@/common/base/computing.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfHu',  //api请求
					count:2  //积分消耗
				},
				title: '上海'
			}
		},
		methods: {
			
		},
		components:{
			zbdlfCounterHu,
			baseLayout,
			computing,
			zbdlfResult
		}
	}
</script>

<style>

</style>
