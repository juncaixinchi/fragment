# fragment

Some fragment scripts

## JS-exception-handler

```javascript
try{
  something
}catch(e){
  windows.loaction.href =
  "http://stackoverflow.com/search?q=[js]+" + e.message;
}
```

## reduce 

```javascript
//使用reduce，转化一维数组为二维数组
function reduce_5(target_array,num){
	var temp=[];
	return target_array.reduce(function(pre,cur,index){
		var ar=Math.floor(index/num);
		if(!temp[ar]){
			temp[ar]=[];
		}
		temp[ar].push(cur);
		return temp;
	},0);
}
var a=[1,2,3,4,5,11,12,13,14,15,21,22,23,24,25,31,32];
b=reduce_5(a,5);
console.log(b);

//不使用reduce，转化一维数组为二维数组
function reduce_raw(target_array,num){
	var temp=[];
	for(var i=0;i<target_array.length;i++)
	{
		var index=Math.floor(i/num);
		if(!temp[index]){
			temp[index]=[];
		}
		temp[index].push(target_array[i]);
	}
	return temp;
}
```

## Regexp

```javascript
var a=[1,2,3,4,5,11,12,13,14,15,21,22,23,24,25,31,32];
c=reduce_raw(a,5);
console.log(c);//判断是否是css文件
var isCss = /.*\.css(?=\?|$)/;
isCss.test("/path/to/main.css");
```
## continuous function  

```javascript
const C = x => f => f ? C(f(x)) : x
C(36)(x=>Math.sqrt(x))(x=>x.toString)()
```
