# AI Rules 和 MCP

AI工具大都支持自定义规则来让AI更好的理解项目背景、编码风格、语言和框架的规范要求，从而生成更符合预期的代码。

uni-app x使用的uts语言、ucsss样式，和ts、css有差异。我们已经将这些差异和使用注意事项列在AI Rules中，让AI工具可以更好的生成uni-app x代码。

打开[Git地址](https://gitcode.com/dcloud/uni-app-x-ai-rules)，其中有各种AI工具的配置。

## Cursor
复制上述项目中的[.cursor](https://gitcode.com/dcloud/uni-app-x-ai-rules)目录到uni-app-x项目根目录下。则cursor在该项目下生成代码时会遵守这些规则。

这些规范在若干mdc文件中，里面描述了uni-app x的各种使用规则。开发者也可以自定义调整规则。

## Vscode-Copilot
复制[.github](https://github.com/dcloudio/uni-app-x-ai-rules)目录到uni-app-x项目根目录下[参考](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot?tool=vscode)

## 使用mcp

uni-app-x-mcp可以让你和AI交互的过程中自动把项目中的组件信息提供给AI，从而让AI在生成代码、修复bug时更加准确。

目前MCP的功能是告知 AI，当前项目下有哪些easycom组件。当开发者需要让AI按照项目下已经可用的组件来生成代码时，AI需要知道项目下有哪些可用组件，本MCP就会告诉AI可用组件清单。

#### 1、下载mcp包
```bash
$ npm i uni-app-x-mcp -g
```

#### 2、使用MCP

- 在Cursor中使用

在项目根路径创建.cursor/mcp.json文件，文件内容如下
```json
{
    "mcpServers": {
        "uni-app-x": {
            "command": "npx",
            "args": [
                "uni-app-x-mcp"
            ]
        }
    }
}
```

- 在Vscode中使用[参考](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)


在项目根路径创建.vscode/mcp.json文件，文件内容如下

```json
{
    "inputs": [
        {
            "type": "promptString",
            "id": "mcp:projectPath",
            "description": "Enter the projectPath",
        }
    ],
    "servers": {
        "uni-app-x": {
            "command": "npx",
            "args": [
                "uni-app-x-mcp"
            ]
        }
    }
}
```

#### 3、默认启动MCP服务
- 点击cursor setting -> 点击MCP
- 会出现一个MCP列表，选择自己需要启动MCP就行(默认是关闭状态)
![](https://web-ext-storage.dcloud.net.cn/hx/doc/D52E7A18-70BA-4C0F-A8AC-24AE8B8AB5DB.png)
- vscode的设置可以[参考](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)

ps: 默认需要自己点击是否使用MCP服务，也可以设置为自动代理的方式[文档](https://docs.cursor.com/chat/agent#yolo-mode)

#### 4、使用方式

话术: 帮我使用项目中的组件来完善当前页面/帮我使用项目中的组件完善当前xxx

![](https://web-ext-storage.dcloud.net.cn/hx/doc/A5961A5A-1A66-4943-A222-C5A936A5561B.png)
