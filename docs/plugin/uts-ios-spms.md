本文旨在帮助 uts 插件开发者和使用者，快速了解 uts 插件中配置使用 Swift Package Manager 依赖的问题。

> 此功能 HBuilder X 4.8.3+ 版本支持

## 在 uts 插件中使用 Swift Package Manager 依赖

在 uts 插件中使用 Swift Package Manager 依赖库，需要在 config.json 中 dependencies-spms 节点做相应配置，下面是配置示例：

```json
{
	"deploymentTarget": "12.0",   // 可选，插件支持的最低 iOS 版本  默认：12.0
	"dependencies-spms": [ // 可选, 需要依赖的 Swift Package Manager 库, HBuilderX 4.8.3+ 版本支持
	// 1. exactVersion - 精确版本匹配：
	{
		"name": "Alamofire",
		"url": "https://github.com/Alamofire/Alamofire.git",
		"kind": "exactVersion",
		"version": "5.7.1"
	},

	// 2. upToNextMajorVersion - 默认最常用：
	{
		"name": "Alamofire", 
		"url": "https://github.com/Alamofire/Alamofire.git",
		"kind": "upToNextMajorVersion",
		"minimumVersion": "5.7.1"
	},

	// 3. upToNextMinorVersion - 小版本兼容：
	{
		"name": "Alamofire",
		"url": "https://github.com/Alamofire/Alamofire.git", 
		"kind": "upToNextMinorVersion",
		"minimumVersion": "5.7.1"
	},

	// 4. versionRange - 版本区间：
	{
		"name": "Alamofire",
		"url": "https://github.com/Alamofire/Alamofire.git",
		"kind": "versionRange", 
		"minimumVersion": "5.7.1",
		"maximumVersion": "5.7.8"
	},

	// 5. branch - 分支跟踪：
	{
		"name": "Alamofire",
		"url": "https://github.com/Alamofire/Alamofire.git",
		"kind": "branch",
		"branch": "main"
	},

	// 6. revision - 提交锁定：
	{
		"name": "Alamofire",
		"url": "https://github.com/Alamofire/Alamofire.git", 
		"kind": "revision",
		"revision": "2053b120767c42a70bcba21095f34e4cfb54a75d"
	}]
}
```

> **注意：**
> 1. 拷贝以上代码时请手动删除注释，实际项目中 config.json 中不能包含注释信息；  
> 2. GitHub、GitLab、Bitbucket 等国外代码托管服务访问速度慢或被限制，下载 Swift Package Manager 依赖库时需使用VPN；  
> 3. 上述config配置中完整列举了6种不同的Swift Package Manager 依赖下载方式；
> 4. Xcode默认已经支持Swift Package Manager环境，不需要类似CocoaPods单独配置所需环境；


**配置说明：**
- deploymentTarget：插件支持的最低 iOS 版本号，此节点为可选项，默认设置为 12.0.
	+ 插件支持的最低版本号应该设置为所有依赖的三方库（包含 framework .a pod ）中最低支持版本号中的最高的一个。
- dependencies-spms：插件需要依赖的 Swift Package Manager 库, HBuilderX 4.8.3+ 版本新增支持
	+ 把需要依赖的 spm 库相关信息配置在 dependencies-spms 节点下，需要明确指定每个 spm 库的名字 (name)、链接（url）、类型（kind）；
	+ name、url、kind 是必须的，不可以为nil，应该根据sdk的官方spm支持情况正确配置，避免下载出错；
	+ kind类型：Swift Package Manager 支持添加依赖时按需设置不同的类型，支持有效值：exactVersion、upToNextMajorVersion、upToNextMinorVersion、versionRange、branch、revision
		+ exactVersion：精确版本匹配，必须对应设置version
		+ upToNextMajorVersion：默认最常用，必须对应设置minimumVersion
			+ 比如"minimumVersion": "5.7.1"：自动升级兼容未来 5.x 版本，不会升级6.x版本；[5.7.1, 6.x) 左闭右开
		+ upToNextMinorVersion：小版本兼容，必须对应设置minimumVersion
			+ 比如"minimumVersion": "5.7.1"：自动升级兼容未来 5.7.x 版本，不会升级5.8.x版本；[5.7.1, 5.7.x) 左闭右开
		+ versionRange: 版本区间设置，必须对应设置minimumVersion、maximumVersion
			+ 比如"minimumVersion": "5.7.1"，"minimumVersion": "5.7.8": 自动升级兼容未来 5.7.x 版本，不会升级5.7.8版本；[5.7.1, 5.7.8) 左闭右开
		+ branch：分支跟踪，必须对应设置branch
		+ revision：提交锁定某个具体的commit，必须对应设置revision（指定该 spm 库仓库的某次commit）