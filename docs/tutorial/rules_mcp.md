> 因为AI变化很快，下面文档中的使用方式可能会发生变化，具体使用方式最好还是以Vscode、Cursor的官方文档为准

## 使用规则
> 在 AI 辅助编程中，开发者通常需要根据项目特点调整 AI 的行为。自定义规则就是控制 AI 在代码生成、自动补全等场景中的行为。这些规则类似于团队的代码规范，旨在确保 AI 生成的代码更符合开发者的风格和项目需求。

> 目前许多AI工具都已支持自定义规则来让AI更好的理解项目背景、编码风格和具体需求，从而生成更符合预期的代码。以下是uni-app-x内部使用的一些规则[链接](https://github.com/dcloudio/uni-app-x-ai-rules)(以Cursor Rules为例，其中的内容也适用于其他工具)

### Cursor
复制[.cursor](https://github.com/dcloudio/uni-app-x-ai-rules)目录到uni-app-x项目根目录下

### Vscode-Copilot
复制[.github](https://github.com/dcloudio/uni-app-x-ai-rules)目录到uni-app-x项目根目录下[参考](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot?tool=vscode)

## 使用mcp
> uni-app-x-mcp可以让你和ai交互的过程中自动把项目中的组件信息提供给ai，从而让ai在生成代码、修复bug时更加准确

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

#### 3、默认启动mcp服务
- 点击cursor setting -> 点击mcp
- 会出现一个mcp列表，选择自己需要启动mcp就行(默认是关闭状态)
![](https://web-ext-storage.dcloud.net.cn/hx/doc/D52E7A18-70BA-4C0F-A8AC-24AE8B8AB5DB.png)
- vscode的设置可以[参考](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)

ps: 默认需要自己点击是否使用mcp服务，也可以设置为自动代理的方式[文档](https://docs.cursor.com/chat/agent#yolo-mode)

#### 4、使用方式

话术: 帮我使用项目中的组件来完善当前页面/帮我使用项目中的组件完善当前xxx

![](https://web-ext-storage.dcloud.net.cn/hx/doc/A5961A5A-1A66-4943-A222-C5A936A5561B.png)
