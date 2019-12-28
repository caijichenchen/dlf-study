<template>
	<base-layout>
		<template v-slot:jsq>
			<jlfqian-counter-guo></jlfqian-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<jlfqian-result></jlfqian-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfqianCounterGuo from "@/Calculator/jlf/jlf_counter_qian.vue"
	import computing from "@/common/base/computing.vue"
	import jlfqianResult from "./jlfqian_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfQian',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfqianCounterGuo,
			baseLayout,
			computing,
			jlfqianResult
		}
	}
</script>

<style>

</style>
