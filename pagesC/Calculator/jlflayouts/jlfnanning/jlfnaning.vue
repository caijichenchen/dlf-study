<template>
	<base-layout>
		<template v-slot:jsq>
			<jlfnanning-counter-guo></jlfnanning-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<jlfnanning-result></jlfnanning-result>
		</template>
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfnanningCounterGuo from "@/Calculator/jlf/jlf_counter_nanning.vue"
	import computing from "@/common/base/computing.vue"
	import jlfnanningResult from "./jlfnanning_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfNanning',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jlfnanningCounterGuo,
			baseLayout,
			computing,
			jlfnanningResult
		}
	}
</script>

<style>

</style>
