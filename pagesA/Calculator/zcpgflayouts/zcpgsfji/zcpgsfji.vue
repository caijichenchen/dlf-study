<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zcpgsf-counter-ji></zcpgsf-counter-ji>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zcpgsf-result :title="title"></zcpgsf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zcpgsfCounterJi from "@/Calculator/zcpgsf/zcpgsf_counter_ji.vue"
	import computing from "@/common/base/computing.vue"
	import zcpgsfResult from "../zcpgsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfJi',  //api请求
					count:2  //积分消耗
				},
				title:'河北'
			}
		},
		components:{
			zcpgsfCounterJi,
			baseLayout,
			computing,
			zcpgsfResult
		}
	}
</script>

<style>

</style>
