<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfguo-counter-guo></jlfguo-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfguo-result></jlfguo-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfguoCounterGuo from "@/Calculator/jlf/jlf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfguoResult from "./jlfguo_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfguoCounterGuo,
			baseLayout,
			computing,
			jlfguoResult
		}
	}
</script>

<style>

</style>
