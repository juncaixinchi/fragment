# Work Records in Wisnuc

## Week 1

### 20170220

入职手续，安装与配置工作电脑（ubuntu、chrome、vim），参加工作熟悉与规划会议

### 20170221

配置前端开发环境（虚拟机、fruitmix-desktop），阅读前端维护页面 Maintenance.js 代码

### 20170222

继续阅读Maintenance.js 代码，并与马老师学习、讨论

### 20170223

阅读熟悉代码，主要是后端storage.js相关代码，调试后端开发环境（appifi）

### 20170224

继续熟悉代码，阅读整理storage.js及boot.js代码，研究ProbeFruitmix的ERROR信息

## Week 2

### 20170227

与马老师、Mark讨论Maintenance页面修改问题，修改在维护页面启动Wisnuc后的逻辑操作

### 20170228

熟悉代码，修改设置页面（ControlApp.jsx、PowerOff.jsx）及维护页面（Maintenance.jsx、InitVolumeDialogs.jsx）中RaiseButton为FlatButton

### 20170301

熟悉代码，修改PowerOff.jsx页面，添加确认操作页面，修改Textfiled内的hint text

### 20170302

修改PowerOff.jsx页面关机、重启或进入维护模式操作后的页面行为，暂定为自动跳转到登录页面

### 20170303

根据新的maintenance页面设计稿，修改页面，完成标题部分

## Week 3

### 20170306

根据新的maintenance页面设计稿，修改页面，完成内容的间距、颜色调整

### 20170307

根据新的maintenance页面设计稿，修改页面，重新设计与实现User部分内容

### 20170308

根据新的maintenance页面设计稿，完成所有修改，解决部分bug

### 20170309

配置React 的自主开发环境，包括babel、webpack、webpack-dev-server、eslint等

### 20170310

学习Lifting State Up及马老说提出的StateUp方法，跑一遍demo，拆分Maintenance.jsx

## Week 4

### 20170313

从Maintenance.jsx中拆分BtrfsVolume 、NewVolumeTop等组件，使用eslint格式化代码

### 20170314

学习lifting state up及马老师的Statup Pattern，并建立测试Demo

### 20170315

学习马老师的Statup Pattern，解决高阶函数Muithemeable的问题，依据PState和VState的差别，拆分出六个函数

### 20170316

从Maintenance.jsx中拆分PartitionedDisk、FileSystemUsageDisk、NoUsageDisk等组件

### 20170317

重构Maintenance.jsx页面及子组件的代码，删除未使用的变量或函数，基本完成拆分

## Week 5

### 20170320

根据新的设计修改Maintenance页面的DiskTitle和VolumeTitle，修复关于unique key的waining

### 20170321

修复Maintenance页面的Dialog相关Bug，整理代码

### 20170322

Review photo部分的代码，学习Material UI的Dialog写法

### 20170323

参考Material UI的Dialog，重写一个纯净简单的Dialog

### 20170324

更新Maintenance页面里安装或重新安装wisnuc的对话框

### 20170327

与马老师讨论，重写pureDialog，主要利用CSS来控制居中等设计

### 20170328

阅读photo相关代码，整理思路

### 20170329

根据新的设计，修正不符合material design的字体、间距等，更新Maintenance页面

### 20170330

更新fruitmix的全局字体

### 20170331

去掉photo原有的lazyLoad，修改选择照片的事件，设置自动登录以便于调试

### 20170401

将react-virtualized-list应用于render照片的列表

### 20170405

修复调整窗口大小引起的bug，优化photoList loading

### 20170406

继续优化photoList loading

### 20170407

重构PhotoDetail，继续优化photoList loading