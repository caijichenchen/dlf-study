import $req from '@/common/req/request.js'
function getFilterCategory(pro,category){
	const url = '/api/xcx/getCalculatorByProvince'
	let data = {
		state:1,
		calculator_type:category
	}
	if(pro){
		data = {
			state: 1,
			province:pro,
			calculator_type: category
		}
	}
	let proCalList = []
	
	async function getcal(){
		proCalList = await $req.request({
			url: url,
			data:data
		})
		
		// .then(res=>{
		// 	proCalList = res.data.message
		// 	console.log(proCalList)
		// }).catch(err=>{
		// 	console.log(err)
		// })
	} 
	console.log(proCalList)
	return proCalList
}

function changVal(data,needVal,multiSelector,pickerIndex){
	console.log('111',data)
	if(data ){
		for(let key in data){
			for(let i in needVal){
				if(key == i){
					needVal[i] = data[key]
				}
			}
		}
		for(let key in multiSelector){
			if(Array.isArray(multiSelector[key])){
				for(let i = 0;i<multiSelector[key].length;i++){
					if(multiSelector[key][i] == needVal[key]){
						pickerIndex[key] = i
					}
				}
			}
		}
	}
	// console.log(needVal)
	// console.log(multiSelector)
	// console.log(pickerIndex)
	// let data = {}
	// for(let key in needVal){
	// 	for(let i in multiSelector){
	// 		if(key == i){
	// 			data[key] = needVal[key]
	// 		}
	// 	}
	// } //需要匹配的联动数据
	// let childrenData
	// childrenData = datajson 
	// childrenData = [
	// 			{
	// 				n: "编制项目建议书",
	// 				s: [{
	// 					n: "6|14|37|55|100|125",
	// 					s: null
	// 				}]
	// 			}, 
	// 			{
	// 				n: "编制可行性研究报告",
	// 				s: [{
	// 					n: "12|28|75|110|200|250",
	// 					s: null
	// 				}]
	// 			}, 
	// 			{
	// 				n: "评估项目建议书",
	// 				s: [{
	// 					n: "4|8|12|15|17|20",
	// 					s: null
	// 				}]
	// 			}, 
	// 			{
	// 				n: "评估可行性研究报告",
	// 				s: [{
	// 					n: "5|10|15|20|25|35",
	// 					s: null
	// 				}]
	// 			}] 
	// console.log(childrenData[0]['s'])
	// for(let key in data){
	// 	// if(Array.isArray(childrenData) && childrenData.length){
	// 	// 	let dataList = []
	// 	// 	childrenData.forEach(item=>{
	// 	// 		if(Array.isArray(item['s'])){
	// 	// 			if(Array.isArray(item)){
	// 	// 				item.forEach(i=>{
	// 	// 					dataList.push(i['s'])
	// 	// 				})
	// 	// 			}else{
	// 	// 				dataList.push(item['s'])
	// 	// 			}
	// 	// 		}
	// 	// 	})
	// 	// 	childrenData = dataList
	// 	// 	console.log(childrenData)
	// 	// }
	// }
	// console.log(datajson)
	// return 2
}

function getChildren(){
}

function getChildrenData(data){
	let arr = []
	if (Array.isArray(data)) {
		for (let item of data) {
			arr.push(item['n'])
		}
	}
	console.log("++++",arr)
	return arr
}

export {
	getFilterCategory,
	changVal,
	getChildren
}