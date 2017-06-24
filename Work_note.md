# Work Records in Wisnuc

[TOC]

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

## Week 6

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

## Week 7

### 20170405

修复调整窗口大小引起的bug，优化photoList loading

### 20170406

继续优化photoList loading

### 20170407

重构PhotoDetail，继续优化photoList loading

## Week 8

### 20170411

对PhotoList添加跳转Top和Bottom的按钮

### 20170412

开会讨论新的整体界面设计，学习带session的ipc消息传递

### 20170413

重构Node端的media.js包括获取缩略图和清晰图

### 20170414

添加PhotoList的时间Box，修复滚动条Bug

## Week 9

### 20170417

整理代码，移除废弃或无用代码，merge代码

### 20170418

开会、学习MVVM与状态机模式

### 20170419

添加时间轴，同步鼠标、滚动条状态

### 20170420

对时间轴添加更多的Feature

### 20170421

添加PhotoDetail的动画效果，优化时间轴中的日期列表

## Week 10

### 20170424

与mark讨论时间轴的设计，调整日期格式，添加淡入淡出效果

### 20170425

merge代码，和马老师review代码，建立前后端集成的调试环境

### 20170426

修复新API带来的bug，着手重构Photo代码

### 20170427

拆分photo的model，修复Navigation传参相关bug

### 20170428

更新node-browser media 相关API，重构Photo代码

## Week 11

### 20170502

测试album，修复mediaShare的bug，但讨论后决定暂时close mediaShare

### 20170503

修复node/lib/media.js中response时机不对的bug，修复PhotoList的width造成的bug

### 20170504

根据新api，修复maintenance页面

### 20170505

继续移植、修复maintenance页面API

### 20170508

修复初始化界面磁盘信息相关bug

### 20170509

修复加载详细图片时因exiforientation造成的bug

### 20170510

添加为详细照片页面的返回按钮添加动画，修复bug

### 20170511

撰写字体测试页面，更新调试开发环境（fork + pull request）

### 20170512

为PhotoList部分添加momeize

### 20170515

为PhotoDetail添加键盘动作，增加AccountApp

### 20170516

添加修改密码与用户名的功能，完善新建共享盘的功能，添加菜单选项到

### 20170517

重构AdminUser、device、AdminDrives、Network、TimeDate部分代码

### 20170518

添加更新共享盘的功能，添加菜单选项到AdminDrives

### 20170519

添加snackbar。重构Power部分代码

### 20170522

重构PowerOff，调整DriversDetail

### 20170523

修改media相关bug，整理代码，移除consolelog

### 20170524

添加用户名、密码、文件名的限制

### 20170525

添加文件的详细页FileDetail

### 20170526

修改issue提交的bug，添加缩略图至FileDetail

### 20170527

调整photo页面，添加分辨率信息至FileDetail

### 20170531

撰写fruitmix-desktop的文档，主要是源码详解部分

### 20170601

撰写fruitmix-desktop的文档，补充架构部分

### 20170602

抽提出BreadCrumb，对文件夹添加名称限制

### 20170605

准备全面接手前端代码，修复 issue #306 and #327

### 20170606

阅读node及file部分代码，format代码

### 20170607

重构transmission的view部分代码，统一file、public、physical的样式

### 20170608

修复bug，包括issue #333, #305, #342, #334

### 20170609

重构移动的dialog，修复bug，包括issue #335, #326, #318

### 20170612

撰写fruitmix-desktop文档，添加api与状态机模型

### 20170613

继续撰写fruitmix-desktop文档，对transmission添加shift操作

### 20170614

修复bug，更新transmission的更新方式

### 20170615

移除前端的redux相关代码，清理无用代码，修改目录结构

### 20170616

修复mdns的bug，修复config相关内容

### 20170619

修改account页面, 添加assistant和trash模块

### 20170620

添加选择照片的功能

### 20170621

添加选择同一日期所有照片的功能，添加PhotoDetail的的toolbar

### 20170622

添加shift选择图片，添加上传下载Media的功能

### 20170623

添加缩放图片的功能，开会讨论API相关事宜