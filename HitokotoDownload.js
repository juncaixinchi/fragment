let all={}
let arr = []

function handlehitokoto(data) {
    all[data.id] = data
}

gethitokoto = () => {
    let js = document.createElement('script')
    let head = document.getElementsByTagName('head')[0]
    js.src = 'http://api.hitokoto.us/rand?encode=jsc&fun=handlehitokoto'
   	head.appendChild(js)
}

for(let i=1;i<2000;i++)
{
	setTimeout( () => gethitokoto() , 500 * i )
}

arr = []
for(i in all){
     arr.push(i)
}
arr.length

json=JSON.stringify(all)
document.write(json)

////////////////////////////////




json=JSON.stringify(all)
var aLink = document.createElement('a');
var blob = new Blob([json]);
var evt = document.createEvent("HTMLEvents");
evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
aLink.download = 'hitokoto.json';
aLink.href = URL.createObjectURL(blob);
aLink.dispatchEvent(evt);

button=document.createElement('button')
button.innerHTML='button';
body=document.getElementsByTagName('body')[0];
body.appendChild(button);
var blob = new Blob([all]);
document.getElementsByTagName("button")[0].onclick=function(){alert(1)};
document.getElementsByTagName("button")[0].download='hitokoto.json'




console.log(all)

function saveFile(content)  
{//保存  
var filename='jsonfile';  
var win=window.open('','','top=10000,left=10000');  
win.document.write(content);  
win.document.execCommand('SaveAs','',filename)  
//win.close(); 
}

saveFile(all)
http://api.hitokoto.us/rand
function downloadFile(fileName, content){
    var aLink = document.createElement('a');
    var blob = new Blob([content]);
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    aLink.dispatchEvent(evt);
}
downloadFile= () => console.log('hello');
button=document.createElement('button')
button.innerHTML='button';
button.onclick=downloadFile();
body=document.getElementsByTagName('body')[0];
body.appendChild(button);
downloadFile('fileName', {content: 'aa'})