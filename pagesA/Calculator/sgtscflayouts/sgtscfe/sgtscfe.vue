<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<sgtscf-counter-e></sgtscf-counter-e>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<sgtscf-result></sgtscf-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import sgtscfCounterE from "@/Calculator/sgtscf/sgtscf_counter_e.vue"
	import computing from "@/common/base/computing.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfE',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterE,
			baseLayout,
			computing,
			sgtscfResult
		}
	}
</script>

<style>

</style>
