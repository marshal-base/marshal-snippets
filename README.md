## This is Code Snippets of marshal93 for VS Code.

## 使用场景
* 公司自研 `UI` 库没有文档，使用没有代码提示，开发效率慢
* `Vue` 项目中使用 `Promise` 弹层组件时，弹层组件代码格式不统一

## 如何使用
### snippets
* sq-ui 片段
	* 折叠面板 `sqAccordion`
	* 按钮 `sqButton`
	* 单元格 `sqCell`
	* 加载更多 `sqLoad`
	* 通告栏 `sqNoticeBar`
	* 弹出层 `sqPopup`
	* 步进器 `sqStepper`
	* 步骤条 `sqSteps`
	* 轮播 `sqSwiper`
	* 标签页 `sqTabs`
	* 评分 `sqRater`
	* 多选框 `sqCheckbox`
	* 单选框 `sqRadio`
	* 表单 `sqField`
	* 表单带点击事件 `sqFieldLink`
	* 表单组 `sqfieldgroup`
	* 开关 `sqSwitch`
	* 勾选协议 `sqagree`
	* 选择地区弹层 `sqArea`
	* 发送短信 `sqSendCode`
	* `vant` 下拉刷新列表 `VantInitList`
	* `element-ui` 弹层 `VueInitElDialog`

### command
* `command`: `openElement` 打开 Element-UI 官网
* `command`: `openUri` 打开链接

## 如何开发自己的 VSCode 插件

* 安装 yeoman
```bash
npm install -g yo
```
* 安装 VSCode 模板
```bash
npm install -g generator-code @vscode/vsce
```
* 创建插件
```bash
yo code myextension
```
* 打包
```bash
vsce package
```

* 发布
```bash
vsce publish
```

### Thanks

[vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
[publishing-extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publishing-extensions)
