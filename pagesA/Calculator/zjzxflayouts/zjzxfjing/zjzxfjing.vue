<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-jing :title="title"></zjzxf-counter-jing>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<!-- <zjzxf-bz></zjzxf-bz> -->
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterJing from "@/Calculator/zjzxf/zjzxf-counter_jing.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	// import zjzxfBz from './zjzxfbz.vue'
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJing',  //api请求
					count:2  //积分消耗
				},
				title:"北京市造价咨询费"
			}
		},
		methods: {
			
		},
		components:{
			zjzxfCounterJing,
			baseLayout,
			computing,
			zjzxfResult,
			// zjzxfBz
		}
	}
</script>

<style>
</style>
