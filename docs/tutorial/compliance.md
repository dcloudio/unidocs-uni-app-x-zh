# uni-app x 开发者应用合规指南  

> 更新日期：2025年7月9日  

感谢开发者（以下简称“您”）选择使用 uni-app x 产品及相关服务开发跨平台应用（以下简称"App"或"应用"）。

《中华人民共和国个人信息保护法》自2021年11月1日起正式施行后，监管部门、各行业参与方和终端消费者越来越关注用户的隐私保护问题。为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，近年来，国家相关部门陆续出台《App违法违规收集使用个人信息行为认定方法》《常见类型移动互联网应用程序必要个人信息范围规定》《GB/T 35273 信息安全技术 个人信息安全规范》等文件，明确要求App开发者需遵循合法、正当、必要和诚信原则处理用户个人信息，并充分保障用户的知情权与选择权。

数字天堂（北京）网络技术有限公司（以下简称"DCloud"或"我们"）高度重视个人信息安全和保护，将适时升级迭代 uni-app x 相关开发工具以提升产品的安全性和稳定性，确保符合相关法律法规及、监管及标准的最新合规要求。强烈建议您升级使用最新版本 uni-app x 开发工具，以便保障您正常使用最新功能、避免因您更新不及时产生的不利影响。为帮助您更好地理解监管要求，规范使用 uni-app x 开发应用的个人信息收集与使用行为，避免因违规操作导致法律风险，特制定本《开发者应用合规指南》（以下简称“指南”）。本指南结合现行法律法规及行业实践，针对应用开发、集成第三方SDK、数据存储与传输等场景提供合规建议，供参考。


## App个人信息保护的合规要求  
首先需制定一份《隐私政策》，并确保在应用界面中显著位置展示。

### 基本要求  
您需根据法律要求以自身名义发布《隐私政策》，并就个人信息的处理行为获取用户同意或取得其他合法性基础。《隐私政策》的要求包括不限于如下：  
- 《隐私政策》须单独成文，而不是作为用户协议、用户说明等文件中的一部分存在。
- 应用首次运行收集处理个人信息前需要以醒目方式提示用户阅读《隐私政策》。
- 《隐私政策》描述语言需要清晰通俗，符合通用语言习惯，避免使用有歧义的语言。
- 《隐私政策》内容要包含产品及服务收集个人信息的目的、方式和范围，个人信息处理者的名称和联系方式等，并确保《隐私政策》链接正常有效。
- 您的产品及服务如涉及向第三方共享个人信息或集成了第三方的SDK时，需要在隐私政策中向用户进行披露和说明，获取用户的授权或同意。

#### 处理个人信息要求  
App在《隐私政策》中将收集个人信息的业务功能以及每个业务功能所收集的个人信息类型进行逐项列举，不应使用“等、例如” 等方式概括说明；同时，须对个人敏感信息类型进行显著标识（如字体加粗、标星号、下划线、斜体、颜色等）。  

您的产品及服务在处理用户个人信息时，需要遵守的要求包括不限于如下：  
- 处理个人信息需要基于使用目的所必需，满足最小化原则。
- 实际收集和处理的个人信息范围、使用目的需要与隐私政策的范围保持一致。
- 收集个人信息的频率需与隐私政策保持一致，禁止超频次收集个人信息。
- 有明确的个人信息到期删除机制，个人信息的存留期与隐私政策保持一致，到期按时删除个人信息或对个人信息进行匿名化处理。
- 如涉及处理不满十四周岁未成年人个人信息前，应取得未成年人的父母或其他监护人的同意。
- 如涉及处理个人信息用于个性化推荐功能或大数据分析业务的，应告知并取得最终用户的授权同意情况下方可开展相关业务功能。
- 如涉及处理敏感个人信息前，应取得最终用户的单独同意。
- 如涉及跨境传输个人信息，需要按照国家网信部门会同国务院有关部门制定的办法和相关标准进行安全评估，并符合其要求。同时您还取得最终用户的单独同意。
- 支持用户方便的行使数据主体权利，例如查阅、复制、更正、删除个人信息等权利。

### 声明SDK处理的个人信息  
使用 uni-app x 项目开发的应用包含了 DCloud 的 uni-app x 引擎，会涉及向 DCloud 共享个人信息，我们要求您在《隐私政策》中向用户进行披露和说明，获取用户的授权或同意。

建议在《隐私政策》中的“共享、转让、公开披露您的个人信息”章节添加三方SDK采集数据说明，参考以下示例：

> 本应用集成了三方SDK，这些SDK也会采集数据，具体见下:  
> - 本应用基于DCloud App引擎（uni-app x）开发，应用运行期间需要收集设备信息、应用信息，报错时的堆栈信息，引擎启动时间和内存消耗，用于排查在不同情况下的性能和故障，为用户提供更好的服务
>   + 涉及的个人信息类型：设备信息（设备品牌及型号、CPU类型、屏幕参数、操作系统名称及版本、网络类型、IP地址、User Agent信息、设备语言、时区、设备是否为模拟器或已经被root、匿名设备标识符），应用信息（应用名、应用包名、版本、AppId、包含的SDK信息）
>   + 使用目的：排查在不同情况下的性能和故障，为用户提供更好的服务  
>   + 收集方式：SDK自行采集，不涉及数据共享
>   + 第三方主体： 数字天堂(北京)网络技术有限公司  
>   + 隐私政策链接： [DCloud App引擎隐私政策](https://dcloud.io/license/appprivacy.html)

如果应用使用了涉及其它三方SDK的功能模块时，也需要添加三方SDK采集数据说明，请根据应用实际使用情况参考以下说明添加三方SDK信息。

#### uni-AD原生广告 SDK  
uni-ad相关业务要用到“uni-AD原生广告 SDK”。需在三方SDK采集数据说明中添加“uni-AD原生广告SDK”信息告知用户，参考以下示例：  

> - uni-AD原生广告 SDK  
>   + 涉及的个人信息类型：设备信息（设备品牌、型号、操作系统版本、分辨率、设备语言、手机系统时间、设备名称、时区、屏幕密度），应用信息（应用名、应用包名、版本号），设备信息（网络类型、IP地址、User Agent信息、BSSID、SSID），设备标识符（如IMEI/MEID、IMSI、GAID（仅GMS服务）、AndroidID、OAID），运营商信息，位置信息，传感器，应用安装列表  
>   + 使用场景：向最终用户投放广告时使用  
>   + 使用目的：广告投放、三方广告联盟SDK聚合服务  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 数字天堂(北京)网络技术有限公司  
>   + 隐私政策链接： [uni-AD原生广告SDK隐私政策](https://dcloud.io/license/uni-ad.html)

uni-ad聚合了其它广告渠道SDK，根据应用实际使用情况添加对应广告渠道的三方SDK信息：

##### 优量汇 SDK  
打包时勾选了uni-ad中的“腾讯优量汇”广告渠道时，会用到“优量汇 SDK”。需在三方SDK采集数据说明中添加“优量汇 SDK”信息告知用户，参考以下示例：  

> - 优量汇 SDK  
>   + 涉及的个人信息类型：粗略位置信息、设备信息（如设备制造商、设备型号、操作系统版本等）、设备标识符（如IMEI、AndroidID、OAID、IDFA等）、应用信息（宿主应用的包名、版本号）、广告数据（如曝光、点击数据等）  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：广告投放、广告归因、广告反作弊和广告效果优化  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 深圳市腾讯计算机系统有限公司  
>   + 隐私政策链接： [优量汇 SDK个人信息保护规则](https://e.qq.com/dev/help_detail.html?cid=2005&pid=5983)  

##### 穿山甲广告 SDK  
打包时勾选了uni-ad中的“穿山甲GroMore”广告渠道时，会用到“穿山甲广告 SDK”。需在三方SDK采集数据说明中添加“穿山甲广告 SDK”信息告知用户，参考以下示例：  

> - 穿山甲广告SDK  
>   + 涉及的个人信息类型：设备品牌、型号、软件系统版本、屏幕密度、屏幕分辨率、设备语言、设备时区、sim卡信息（mcc&mnc）、CPU信息、可用存储空间大小等基础信息，Android平台：AndroidID、OAID，iOS平台：手机系统重启时间、磁盘总空间、系统总内存空间、IDFV，HarmonyOS平台：OAID。用广告投放及广告反作弊。其中，IMEI、IDFA、AndroidID、OAID、设备的MAC地址、设备型号还会用于广告监测归因。  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：在应用中进行广告投放活动，包括广告展示、监测、归因及投放效果分析与优化  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 北京巨量引擎网络技术有限公司  
>   + 隐私政策链接： [穿山甲广告SDK隐私政策](https://www.csjplatform.com/privacy/partner)  

##### 快手联盟 SDK  
打包时勾选了uni-ad中的“快手广告联盟”广告渠道时，会用到“快手联盟 SDK”。需在三方SDK采集数据说明中添加“快手联盟 SDK”信息告知用户，参考以下示例：  

> - 快手联盟 SDK  
>   + 涉及的个人信息类型：基础信息：设备品牌、设备型号、软件系统版本、存储信息、运营商信息、设备时区、设备语言、网络信息等基础信息，设备标识：IMEIs、MEID、OAID、AndroidID、IMSIs、ICCID，位置信息：IP地址、MAC地址、GPS位置信息、基站信息、WIFI信息，应用信息：应用安装列表，其他信息：传感器信息、sim卡激活信息  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：广告投放、广告归因、反作弊、安全  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 北京快手科技有限公司  
>   + 隐私政策链接： [快手隐私政策](https://www.kuaishou.com/about/policy?tab=privacy)  


##### 百度联盟广告 SDK  
打包时勾选了uni-ad中的“百度百青藤广告联盟”广告渠道时，会用到“百度联盟广告 SDK”。需在三方SDK采集数据说明中添加“百度联盟广告 SDK”信息告知用户，参考以下示例：  

> - 百度联盟广告 SDK  
>   + 涉及的个人信息类型：设备信息：设备品牌、型号、软件系统版本、分辨率、网络信号强度、传感器信息，磁盘总空间、系统总内存空间、手机重启信息、手机系统更新时间等基础信息、OAID、AndroidID、屏幕宽高，屏幕像素密度，系统版本号，设备厂商，设备型号，手机运营商，手机网络状态，设备剩余存储空间，手机重启时间和更新时间，开发者应用信息：应用包名、应用前后台状态 设备信息：IMEI、IMSI、MEID 位置信息  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：广告投放、广告监测、广告归因、反作弊功保障服务稳定安全  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 北京百度网讯科技有限公司  
>   + 隐私政策链接： [百度联盟广告SDK隐私政策](https://union.baidu.com/bqt/#/legal/policies)

##### 鲸鸿动能 SDK  
打包时勾选了uni-ad中的“华为广告联盟”广告渠道时，会用到“鲸鸿动能 SDK”。需在三方SDK采集数据说明中添加“鲸鸿动能 SDK”信息告知用户，参考以下示例：  

> - 鲸鸿动能SDK  
>   + 涉及的个人信息类型：设备标识符（包含OAID）、设备信息（设备型号、设备硬件信息、操作系统、系统设置、设备使用信息）、应用信息、传感器信息（陀螺仪、加速度计、旋转矢量传感器、磁力计、气压计）、网络信息、运营商信息、IP地址、WLAN信息（WiFi状态、WiFi参数、WiFi列表、BSSID与SSID）、位置信息（如精确位置信息（可选，不存储）与WLAN信息（WiFi列表、BSSID与SSID）、蓝牙列表等粗略位置信息）、广告互动信息  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：程序化广告投放、广告监测归因、广告防欺诈与运营维护  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 华为软件技术有限公司  
>   + 隐私政策链接： [鲸鸿动能SDK隐私声明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/whale-hong-kinetic-energy-sdk-privacy-statement-0000001658283582)  

##### Sigmob广告 SDK  
打包时勾选了uni-ad中的“Sigmob广告联盟”广告渠道时，会用到“Sigmob广告 SDK”。需在三方SDK采集数据说明中添加“Sigmob广告 SDK”信息告知用户，参考以下示例：  

> - Sigmob广告SDK  
>   + 涉及的个人信息类型：设备信息（如设备制造商、设备品牌、设备型号、操作系统版本、电池备时区、设备标识符（如IMEI、AndroidID、OAID、IDFA、IDFV）、应用信息（mcc＆mnc）、系统总内存空间、磁盘总空间、可用存储空间大小、位置信息、粗略位置信息、广告数据（如曝光、点击数据等）、应用陀螺仪传感器、线性加速度传感器、磁场传感器、旋转矢量传感器）、网态、崩溃数据  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：广告投放、广告归因、广告反作弊、广告统计分析、APP崩溃  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 北京创智汇聚科技股份有限公司  
>   + 隐私政策链接： [Sigmob广告SDK隐私政策](https://doc.sigmob.com/Sigmob%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%90%88%E8%A7%84%E6%9D%A1%E6%AC%BE/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96/)  

##### Octopus SDK  
打包时勾选了uni-ad中的“Octopus章鱼移动广告”广告渠道时，会用到“Octopus SDK”。需在三方SDK采集数据说明中添加“Octopus SDK”信息告知用户，参考以下示例：  

> - Octopus SDK  
>   + 涉及的个人信息类型：设备标识符（如 OAID、Android ID、GAID、IDFA），设备传感器信息（加速度传感器、陀螺仪传感器、线性加速度传感器、磁场传感器、旋转矢量传感器），设备品牌、型号、软件系统版本、屏幕密度、屏幕分辨率、设备语言、设备时区、CPU 信息、可用存储空间大小、手机系统重启时间、磁盘总空间、系统总内存空间、运营商信息、Wi-Fi 状态、应用包名、版本号  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：广告投放及监测归因、反作弊、统计分析、减少 App 崩溃、提供可靠稳定的服务  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 北京圣盈科技有限公司  
>   + 隐私政策链接： [Octopus SDK 隐私政策](https://doc.adintl.cn/#/zh-cn/guide/UsePrivacy)  

##### BeiZi(AdScope) SDK  
打包时勾选了uni-ad中的“Adscope倍孜广告”广告渠道时，会用到“BeiZi(AdScope) SDK”。需在三方SDK采集数据说明中添加“BeiZi(AdScope) SDK”信息告知用户，参考以下示例：  

> - BeiZi(AdScope) SDK  
>   + 涉及的个人信息类型：设备品牌、设备型号、设备时区、设备语言、系统版本、UserAgent信息、屏幕高宽、屏幕方向、屏幕DPI信息、系统更新时间、磁盘空间、物理内存、网络类型、运营商、开发者应用名、应用版本号、应用包名、交互数据、广告数据(展示、点击、转化)、崩溃数据、性能数据，iOS平台：开机时间、设备名称，Android平台：OAID、cpu、运行状态、sim卡状态  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：基于用户设备信息调整广告投放策略，基于用户设备信息提供统计分析服务，基于用户设备信息进行基础的反作弊分析，基于用户设备信息实现广告正常显示与交互功能的实现，通过崩溃信息，以此来优化代码缺陷，最大程度减少App崩溃，通过收集SDK运行过程中性能数据，以优化SDK的性能，统计广告数据，以用于广告主统计投放结果。包括不限于：请求、展示 、点击 、转化，用于广告流程分析，获取信息只用于功能实现并不会收集与保存信息  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 上海倍孜网络技术有限公司  
>   + 隐私政策链接： [AdScope SDK 个人信息保护规则](https://sdkdoc.beizi.biz/#/zh-cn/guide/UsePrivacy)  

##### Funlink SDK  
打包时勾选了uni-ad中的“泛连”广告渠道时，会用到“Funlink SDK”。需在三方SDK采集数据说明中添加“Funlink SDK”信息告知用户，参考以下示例：  

> - Funlink SDK  
>   + 涉及的个人信息类型：设备品牌、型号、软件系统版本、屏幕密度、屏幕分辨率、设备语言、设备时区、IMEI、IMSI、ICCID、GAID、MEID、IDFA、IDFV、AndroidID、OAID、手机系统重启时间、设备的MAC地址、User Agent、IP地址、运营商信息、Wi-Fi状态、网络信号强度、应用版本、应用包名、应用名称、应用前后台状态、应用列表信息、加速度传感器、陀螺仪传感器、广告的展示、点击及转化等交互数据、系统崩溃数据、性能数据  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：广告投放及广告监测归因、反作弊、摇一摇广告投放、广告投放统计分析、提升SDK的稳定性，减少APP的崩溃  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 北京泛连科技有限公司  
>   + 隐私政策链接： [Funlink SDK隐私政策](https://www.adfunlink.com/doc/privacy.html)  

##### 聚力阅盟 SDK  
打包时勾选了uni-ad中的“聚力阅盟”广告渠道时，会用到“聚力阅盟 SDK”。需在三方SDK采集数据说明中添加“聚力阅盟 SDK”信息告知用户，参考以下示例：  

> - 聚力阅盟 SDK  
>   + 涉及的个人信息类型：设备型号、操作系统版本、唯一设备标识符、设备环境等软硬件特征信息；GPS位置以及WLAN接入点、蓝牙和基站等传感器信息  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：广告投放及广告监测归因、反作弊、摇一摇广告投放  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 杭州聚力阅盟科技有限公司  
>   + 隐私政策链接： [聚力阅盟隐私政策](https://idbj.juliyuemeng.com/privacy)  

##### 优推广告 SD  
打包时勾选了uni-ad中的“华夏乐游”广告渠道时，会用到“优推广告 SD”。需在三方SDK采集数据说明中添加“优推广告 SD”信息告知用户，参考以下示例：  

> - 优推广告 SDK  
>   + 涉及的个人信息类型：设备品牌、设备型号、软件系统版本、屏幕密度、屏幕分辨率、存储信息、运营商信息、设备时区、设备语言、网络信息，IMEI、OAID、AndroidId、IMSI、IDFA、IDFV，IP地址、MAC地址、GPS位置信息、WIFI信息，应用安装列表、设备传感器信息、线性加速度传感器信息、陀螺仪传感器信息、重力传感器信息、宿主应用的进程信息  
>   + 使用场景：向最终用户投放增强广告时使用  
>   + 使用目的：向最终用户提供广告服务  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 北京乐游阳光科技有限公司  
>   + 隐私政策链接： [优推广告平台 SDK 隐私政策](http://youtui.gameley.com/agreement.html#ytpolice)  


#### 腾讯定位 SDK  
应用中使用了[uni.getLocation](../api/get-location.md)、[uni.onLocationChange](../api/location-change.md)等定位功能并在[manifest.json](../collocation/manifest.md)的可选模块中勾选了“腾讯定位”，要用到“腾讯定位 SDK”。需在三方SDK采集数据说明中添加“腾讯定位 SDK”信息告知用户，参考以下示例： 

> - 腾讯定位 SDK  
>   + 涉及的个人信息类型：OAID、操作系统及版本、设备型号、WIFI信息（WiFi状态、WIFI参数、附近的WIFI列表、连接的WIFI）、传感器信息（重力传感器、陀螺仪传感器 、加速度传感器 、磁场传感器 、旋转矢量传感器 ）、蓝牙信息、精确位置信息（GPS信息）、SIM卡状态、位置服务获取、电话状态获取、网络运营商名称，手机制式  
>   + 使用场景：向最终用户提供定位服务时使用  
>   + 使用目的：帮助用户定位在地图上的位置并为用户提供定位服务  
>   + 收集方式：SDK自行采集，不涉及数据共享  
>   + 第三方主体： 深圳市腾讯计算机系统有限公司  
>   + 隐私政策链接： [腾讯定位 SDK个人信息保护规则](https://privacy.qq.com/document/preview/dbd484ce652c486cb6d7e43ef12cefb0)  


#### 微信 Open SDK  
应用中使用了[uni.requestPayment](../api/request-payment.md)支付功能并在[manifest.json](../collocation/manifest.md)的可选模块中勾选了“微信支付”，或使用了[uni.requestMerchantTransfer](../api/request-merchant-transfer.md)，要用到“微信 Open SDK”。需在三方SDK采集数据说明中添加“微信 Open SDK”信息告知用户，参考以下示例：

> - 微信 Open SDK  
>   + 涉及的个人信息类型：用户发起支付时生成的微信支付订单标识，在用户进行支付操作后向是否成功的状态信息  
>   + 使用场景：向最终用户提供微信支付/确认收款时使用  
>   + 使用目的：用户使用微信支付相关功能  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 深圳市腾讯计算机系统有限公司  
>   + 隐私政策链接： [微信隐私保护指引](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)  

#### App 支付宝客户端 SDK  
应用中使用了[uni.requestPayment](../api/request-payment.md)支付功能并在[manifest.json](../collocation/manifest.md)的可选模块中勾选了“支付宝支付”，要用到“App 支付宝客户端 SDK”。需在三方SDK采集数据说明中添加“App 支付宝客户端 SDK”信息告知用户，参考以下示例：

> - App 支付宝客户端 SDK
>   + 涉及的个人信息类型：Android ID、OAID、AAID、SSID、BSSID；系统设置、系统属性、设备型号、设备品牌、操作系统；IP 地址、网络类型、运营商信息、Wi-Fi 状态、Wi-Fi 参数、Wi-Fi 列表  
>   + 使用场景：向最终用户提供支付宝支付时使用  
>   + 使用目的： 保障用户账户和资金安全以及支付服务的安全稳定运行，履行反洗钱、反恐怖融资、反电信网络诈骗等法定义务，实现网络链路的选择和优化，以提升用户体验  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 支付宝（中国）网络技术有限公司  
>   + 隐私政策链接： [App 支付宝客户端 SDK 隐私说明](https://opendocs.alipay.com/open/54/01g6qm#%E6%94%AF%E4%BB%98%E5%AE%9D%20App%20%E6%94%AF%E4%BB%98%E5%AE%A2%E6%88%B7%E7%AB%AF%20SDK%20%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96)  

#### 个推消息推送 SDK  
应用中使用了[uni-push](../api/uni-push.md)消息推送功能时，要用到“个推消息推送 SDK”。需在三方SDK采集数据说明中添加“个推消息推送 SDK”信息告知用户，参考以下示例：

> - 个推消息推送 SDK  
>   + 涉及的个人信息类型：存储的个人文件、设备信息、网络信息（必选信息：设备平台、设备厂商、设备品牌、设备型号及系统版本、OAID、AndroidID、WIFI连接信息（SSID、BSSID）、运营商信息、DHCP；可选信息：IMEI、MAC、Google Advertising ID（GAID）、Serial Number、IMSI、ICCID、IP地址、基站信息）、位置相关信息、已安装应用列表  
>   + 使用场景：向最终用户提供消息推送服务时使用  
>   + 使用目的： 为App用户提供消息推送技术服务  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 每日互动股份有限公司  
>   + 隐私政策链接： [个推用户隐私政策](https://docs.getui.com/privacy/)  

如果在[manifest.json](../collocation/manifest.md)的可选模块中勾选了uni-push的厂商渠道，请根据应用实际使用情况参考以下说明添加三方SDK信息。

##### 华为推送 SDK  
打包时勾选了uni-push中的“华为推送”离线推送通道时，会用到“华为推送 SDK”。需在三方SDK采集数据说明中添加“华为推送 SDK”信息告知用户，参考以下示例：  

> - 华为推送 SDK  
>   + 涉及的个人信息类型：应用信息（应用基本信息），设备信息（AAID、设备标识符、设备硬件信息、系统基本信息、系统设置  
>   + 使用场景：向最终用户提供消息推送服务时使用  
>   + 使用目的： 用于华为手机的消息推送  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 华为软件技术有限公司  
>   + 隐私政策链接： [华为推送SDK隐私声明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sdk-data-security-0000001050042177)  

##### 荣耀推送 SDK  
打包时勾选了uni-push中的“荣耀推送”离线推送通道时，会用到“荣耀推送 SDK”。需在三方SDK采集数据说明中添加“荣耀推送 SDK”信息告知用户，参考以下示例：  

> - 荣耀推送 SDK  
>   + 涉及的个人信息类型：设备标识符（AAID、PushToken）  
>   + 使用场景：向最终用户提供消息推送服务时使用  
>   + 使用目的： 用于荣耀手机的消息推送  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 深圳荣耀软件技术有限公司  
>   + 隐私政策链接： [荣耀推送SDK隐私声明](https://developer.honor.com/cn/docs/11002/guides/sdk-data-security)  

##### 小米推送 SDK  
打包时勾选了uni-push中的“小米推送”离线推送通道时，会用到“小米推送 SDK”。需在三方SDK采集数据说明中添加“小米推送 SDK”信息告知用户，参考以下示例：  

> - 小米推送 SDK  
>   + 涉及的个人信息类型：设备标识OAID和加密的Android ID，以及使用推送服务的应用信息如应用包名、版本号和运行状态，设备相关信息如设备厂商、设备型号、设备内存、操作系统版本、小米推送SDK版本、设备归属地（国家或地区）、SIM卡运营商名称、当前网络类型、WiFi状态。其中当前网络类型、SIM卡运营商名称仅在设备本地读取，不会上传至小米服务器  
>   + 使用场景：向最终用户提供消息推送服务时使用  
>   + 使用目的： 用于小米手机的消息推送  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 北京小米移动软件有限公司  
>   + 隐私政策链接： [小米推送隐私政策](https://dev.mi.com/console/doc/detail?pId=1822)  

##### OPPO 推送 SDK  
打包时勾选了uni-push中的“OPPO 推送”离线推送通道时，会用到“OPPO 推送 SDK”。需在三方SDK采集数据说明中添加“OPPO 推送 SDK”信息告知用户，参考以下示例：  

> - OPPO 推送 SDK  
>   + 涉及的个人信息类型：RegisterId、appKey、appSecret、MCS应用包名、应用版本号、推送SDK版本号  
>   + 使用场景：向最终用户提供消息推送服务时使用  
>   + 使用目的： 用于oppo手机的消息推送  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 广东欢太科技有限公司  
>   + 隐私政策链接： [OPUSH SDK个人信息保护政策](https://open.oppomobile.com/new/developmentDoc/info?id=11228)  

##### vivo 推送 SDK  
打包时勾选了uni-push中的“vivo 推送”离线推送通道时，会用到“vivo 推送 SDK”。需在三方SDK采集数据说明中添加“vivo 推送 SDK”信息告知用户，参考以下示例：  

> - vivo 推送 SDK  
>   + 涉及的个人信息类型：设备标识信息（如IMEI、EmmCID、UFSID、ANDROIDID、GUID、GAID、OPENID、VAID、OAID、RegID、加密的Android ID）、使用推送服务的应用软件信息（如应用包名、版本号、APPID、安装、卸载、恢复出厂设置、运行状态）、设备制造商、网络相关信息（如IP地址、网络类型）、国家码、设备类型；收集消息创建、送达和点击的时间戳，并暂存从第三方应用处获得并推送给您的消息内容；收集您的推送SDK版本号、设备型号、操作系统版本、当前网络类型、消息发送结果、通知栏状态（如通知栏权限、用户点击行为）、锁屏状态（如是否锁屏，是否允许锁屏通知）；收集您的IP地址用于设备的网络优化；会使用您的手机系统状态信息、应用行为数据；会收集您的推送信息内容、通知栏状态（如通知栏权限、用户点击行为）以形成用户画像  
>   + 使用场景：向最终用户提供消息推送服务时使用  
>   + 使用目的： 用于vivo手机的消息推送  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 维沃移动通信有限公司  
>   + 隐私政策链接： [vivo推送隐私政策](https://dev.vivo.com.cn/documentCenter/doc/652)  

##### 魅族推送 SDK  
打包时勾选了uni-push中的“魅族推送”离线推送通道时，会用到“魅族推送 SDK”。需在三方SDK采集数据说明中添加“魅族推送 SDK”信息告知用户，参考以下示例：  

> - 魅族推送 SDK  
>   + 涉及的个人信息类型：设备相关信息，如手机品牌、手机型号、系统版本、系统语言，以及设备标识符（通过相关标识符生成应用间不相关的用户标识：push ID）。此外，还将暂时收集受应用开发者要求向您推送的消息内容，收集第三方应用基于 push ID 分类的、应用间不相关的标签、别名信息；收集第三方应用接收推送消息开关的状态信息；会收集消息送达后的相关展示、划掉、点击行为类数据  
>   + 使用场景：向最终用户提供消息推送服务时使用  
>   + 使用目的： 用于魅族手机的消息推送  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 珠海星纪魅族信息技术有限公司  
>   + 隐私政策链接： [魅族推送隐私政策](https://open.flyme.cn/docs?id=202)  

#### 个验认证 SDK  
应用中使用“App一键登录”功能（[uni.getUniVerifyManager](../api/get-univerify-manager.md)），要用到“个验认证 SDK”。需在三方SDK采集数据说明中添加“个验认证 SDK”信息告知用户，参考以下示例：  

> - 个验认证 SDK  
>   + 涉及的个人信息类型：设备平台、设备厂商、设备品牌、设备型号及系统版本、OAID、AndroidID、WIFI连接信息、SSID、BSSID、运营商信息、IP地址、去标识化的手机号码、DHCP；可选信息：IMEI、MAC、Google Advertising ID(GAID)、Serial Number、IMSI、ICCID、基站信息，用于有效识别设备、快速响应验证需求以提供高效、稳定、流畅的一键认证服务并生成唯一的客户端ID即GYUID（同时用于收费计算）  
>   + 使用场景：向最终用户提供一键登录认证服务时使用  
>   + 使用目的： 为App提供风控和认证服务  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 每日互动股份有限公司  
>   + 隐私政策链接： [个推用户隐私政策](https://docs.getui.com/privacy/)  

##### 联通账号认证 SDK  
App一键登录为了支持“中国联通”运行商，要用到“联通账号认证 SDK”。需在三方SDK采集数据说明中添加“联通账号认证 SDK”信息告知用户，参考以下示例：  

> - 联通账号认证 SDK  
>   + 涉及的个人信息类型：网络类型、网络地址、运营商类型、本机手机号、手机设备类型、手机操作系统、硬件厂商  
>   + 使用场景：向最终用户提供一键登录认证服务时使用  
>   + 使用目的： 为App提供风控和认证服务  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 中国联合网络通信有限公司  
>   + 隐私政策链接： [联通统一认证 隐私协议](https://opencloud.wostore.cn/authz/resource/html/disclaimer.html?fromsdk=true)  

##### 电信（天翼）账号认证 SDK  
App一键登录为了支持“中国电信”运行商，要用到“电信（天翼）账号认证 SDK”。需在三方SDK采集数据说明中添加“电信（天翼）账号认证 SDK”信息告知用户，参考以下示例：  

> - 电信（天翼）账号认证 SDK  
>   + 涉及的个人信息类型：注册手机号码、本机号码、网络连接类型、网络状态信息、网络地址、运营商类型、手机设备类型、手机设备厂商、手机操作系统类型及版本  
>   + 使用场景：向最终用户提供一键登录认证服务时使用  
>   + 使用目的： 为App提供风控和认证服务  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 天翼数字生活科技有限公司  
>   + 隐私政策链接： [天翼认证 隐私协议](https://e.189.cn/sdk/agreement/detail.do?hidetop=true)  

##### 移动账号认证 SDK  
App一键登录为了支持“中国移动”运行商，要用到“移动账号认证 SDK”。需在三方SDK采集数据说明中添加“移动账号认证 SDK”信息告知用户，参考以下示例：  

> - 移动账号认证 SDK  
>   + 涉及的个人信息类型：网络类型、网络地址（ip地址）、运营商类型、本机号码信息、SIM卡状态；手机设备类型、手机操作系统、硬件厂商；H5场景下同时同时收集浏览器指纹，浏览器指纹具体包括：操作系统、用户代理（浏览器类型）、浏览器版本号、浏览器是否启动cookie、cpu等级、cpu虚拟核心数、系统语言、浏览器插件、屏幕可用宽度、屏幕可用高度、颜色质量、时差区  
>   + 使用场景：向最终用户提供一键登录认证服务时使用  
>   + 使用目的： 为App提供风控和认证服务  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 中移互联网有限公司  
>   + 隐私政策链接： [中国移动认证服务协议&隐私政策](https://wap.cmpassport.com/resources/html/contract.html)  

#### 金融级实人认证 SDK  
应用中使用“uni实人认证”功能（[uni.getFacialRecognitionMetaInfo](../api/facial-recognition-meta-info.md)），要用到“金融级实人认证 SDK”。需在三方SDK采集数据说明中添加“金融级实人认证 SDK”信息告知用户，参考以下示例：  

> - 金融级实人认证 SDK  
>   + 涉及的个人信息类型：设备基础信息：设备制造商、设备品牌、设备类型及型号、设备名称、设备操作系统信息、设备内存及存储大小、电池及电量信息、基带信息、开机时间、屏幕亮度及分辨率、CPU信息、系统时区、系统语言、充电状态、系统内核信息、传感器列表、光线传感器信息；设备标识信息：IDFA （可选）、IDFV、Android ID、OAID；设备网络信息：BSSID、SSID、运营商信息、网络类型、SIM卡状态；设备应用信息：SDK宿主APP信息（包括：宿主APP应用名称、宿主APP应用版本、宿主APP安装时间），用于确认SDK服务可用性和识别虚假设备。最终用户上传的人脸、语音及身份信息，用于检查真实人脸、进行身份验证比对  
>   + 使用场景：向最终用户提供实人认证服务时使用  
>   + 使用目的： 为App提供身份认证服务  
>   + 收集方式：SDK自行采集  
>   + 第三方主体： 杭州阿里云智能科技有限公司  
>   + 隐私政策链接： [金融级实人认证SDK隐私权政策](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202107281509_18386.html)  


### 《隐私政策》示例

hello uni-app x 模板应用已有完整的示例《隐私政策》，可参考[hello uni-app x隐私政策](https://dcloud.io/license/hello-uni-app-x.html)。


## 展示《隐私政策》  
制定《隐私政策》后，应用首次启动或用户注册时，必须通过​​弹窗​​等显著方式提示用户阅读《隐私政策》，并提供“同意”与“拒绝”两个明确选项（拒绝按钮不可隐藏或弱化），通常可以在应用的“个人信息保护指引”（或“用户协议和隐私政策概要”）提示框中与“用户协议”一起进行展示。

### uvue页面实现提示框  

可通过uvue页面来实现“个人信息保护指引”，注意以下事项：
- 页面根 view 背景为透明色来实现弹框遮罩效果，参考示例中的"dialog-container"样式  
- 内容 view 使用圆角及不透明背景色来实现弹框效果，参考示例中的"dialog-content"样式  
- 在 scroll-view 中使用 text 嵌套子 text 来显示《隐私政策》链接样式，参考示例中的"privacy-href"样式  
- 在页面中使用uts插件 [uts-openSchema](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/alpha/uni_modules/uts-openSchema) 的 openSchema 方法实现点击《隐私政策》打开链接  
- 在页面使用 [button](../component/button.md) 组件设置 open-type 属性值为 agreePrivacyAuthorization 来实现用户`同意`《隐私政策》按钮  

完整页面示例如下：

```uvue
<template>
  <view class="dialog-container">
    <view class="dialog-content">
      <view style="width: 100%;justify-content: center;align-items: center;background-color: #fff;">
        <image src="../image/logo.png" style="margin-top: 25px;width: 60px;height: 60px;"></image>
      </view>
      <text
        style="text-align: center;padding-top: 20px;font-size: 20px;color: black;background-color: #fff;">个人信息保护指引</text>
      <scroll-view
        style="flex: 1;align-content: center;padding-top: 10px;padding-left: 25px;padding-right: 25px;background-color: #fff;"
        show-scrollbar="false">
        <text>
          <!-- #ifdef APP-HARMONY -->
          <text class="privacy-text">欢迎使用DCloud开发者中心系统，我们将通过</text>
          <!-- #endif -->
          <!-- #ifndef APP-HARMONY -->
          <text class="privacy-text">欢迎使用Hello uni-app x，我们将通过</text>
          <text class="privacy-href" @click="hrefClick(hrefLicense)">《用户服务协议》及</text>
          <!-- #endif -->
          <text
            class="privacy-text">相关个人信息处理规则帮助你了解我们如何收集、处理个人信息。根据《常见类型移动互联网应用程序必要个人信息范围规定》。同意《基本功能数据处理规则》仅代表你同意使用浏览、搜索、下载等主要功能收集、处理相关必要个人信息及数据。我们通过</text>
          <text class="privacy-href" @click="hrefClick(hrefPrivacy)">《隐私政策》</text>
          <text class="privacy-text">帮助你全面了解我们的服务及收集、处理个人信息的详细情况。</text>
        </text>
      </scroll-view>
      <button class="button" @click="reject">不同意</button>
      <button class="button" type="primary" open-type="agreePrivacyAuthorization" @click="agree">同意</button>
    </view>
  </view>
</template>

<script>
  // #ifdef APP-ANDROID || APP-IOS || APP-HARMONY
  import { openSchema } from '@/uni_modules/uts-openSchema'
  // #endif
  export default {
    data() {
      return {
        number: 0,
        hrefLicense: 'https://dcloud.io/license/DCloud.html',
        hrefPrivacy: 'https://dcloud.io/license/hello-uni-app-x.html'
      }
    },
    unmounted() {
      uni.offPrivacyAuthorizationChange(this.number)
    },
    onLoad() {
      this.number = uni.onPrivacyAuthorizationChange((callback) => {
        uni.showToast({
          title: 'isPrivacyAgree:' + !callback.needAuthorization
        })
      })
    },
    methods: {
      agree() {
        uni.closeDialogPage({
          dialogPage: this.$page
        })
      },
      reject() {
        uni.resetPrivacyAuthorization()
        uni.closeDialogPage({
          dialogPage: this.$page
        })
      },
      hrefClick(href : string) {
        // #ifdef APP-HARMONY
        uni.navigateTo({
          url: '/pages/component/button/privacy-web-view?url=/hybrid/html/privacy.html&title=隐私政策'
        })
        // #endif
        // #ifdef APP-ANDROID || APP-IOS
        openSchema(href)
        // #endif
      },
    }
  }
</script>

<style>
  .dialog-container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog-content {
    height: 60%;
    width: 80%;
    /* background-color: #fff; */
    border-radius: 12px;
  }

  .button {
    border-radius: 0px;
    border: 0px none;
    font-size: 15px;
    color: lightgrey;
    text-align: center;
    line-height: 40px;
  }

  .button-hover1 {
    color: black;
    background-color: #fff;
  }

  .button-hover2 {
    color: black;
    background-color: royalblue;
  }

  .privacy-text {
    color: grey;
  }

  .privacy-href {
    color: cadetblue;
    font-weight: bold;
    text-decoration-line: underline;
  }
</style>
```

### 应用中展示隐私政策  

#### App首次启动时展示  
在应用的 [onLaunch](../collocation/app.md#onlaunch) 生命周期中通过[uni.getPrivacySetting](../api/privacy.md#getprivacysetting)判断用户是否已经同意隐私政策，如果没有同意则通过[uni.openDialogPage](../api/dialog-page.md#opendialogpage)弹出提示框，否则跳过。

示例代码如下：
```uts
<script lang="uts">
  export default {
    onLaunch: function (res : OnLaunchOptions) {
      // #ifdef APP
      // App平台获取是否同意隐私政策，未同意则弹出提示框
      uni.getPrivacySetting({
        success(res){
           if(res.needAuthorization){
             uni.openDialogPage({
               url: '/pages/privacy',  // 修改为隐私政策页面地址
             })
           }
        }
      })
      // #endif
    },
    methods: {
    }
  }
</script>

```

**注意**  
展示《隐私政策》页面并不会阻塞应用打开首页，在页面逻辑中需要通过[uni.getPrivacySetting](../api/privacy.md#getprivacysetting)判断用户是否同意隐私政策，如果没有同意则不要调用采集个人信息相关的API或插件。


#### 进入App主界面后展示  
用户进入App主界面后，​​不超过4次点击​​即可访问隐私政策，且路径固定（如“设置-隐私政策”）。

可使用uts插件 [uts-openSchema](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/alpha/uni_modules/uts-openSchema) 的 openSchema 方法实现点击《隐私政策》打开链接。


## 合规文件指引  
为了更及时高效地落实合规要求，我们建议各位开发者充分了解现有以及陆续将发布的有关个人信息保护的法律、法规、政策、标准等，以下资料供参考：  
- [《GB/T 35273-2020信息安全技术 个人信息安全规范》](http://c.gb688.cn/bzgk/gb/showGb?type=online&hcno=4568F276E0F8346EB0FBA097AA0CE05E)  
- [《常见类型移动互联网应用程序必要个人信息范围规定》](http://www.cac.gov.cn/2021-03/22/c_1617990997054277.htm)
- [《App违法违规收集使用个人信息行为认定方法》](http://www.cac.gov.cn/2019-12/27/c_1578986455686625.htm)
- [《网络安全标准实践指南—移动互联网应用程序（App）使用软件开发工具包（SDK）安全指引》](https://www.tc260.org.cn/front/postDetail.html?id=20201126161240)  
- [《网络安全标准实践指南—移动互联网应用程序（App）系统权限申请使用指南》](https://www.tc260.org.cn/front/postDetail.html?id=20200918163359)  
- [《网络安全标准实践指南—移动互联网应用程序（App）个人信息保护常见问题及处置指南》](https://www.tc260.org.cn/front/postDetail.html?id=20200918162332)  
- [《网络安全标准实践指南—移动互联网应用程序（App）收集使用个人信息自评估指南》](https://www.tc260.org.cn/front/postDetail.html?id=20200722134829)  
- [《网络安全实践指南—移动互联网应用基本业务功能必要信息规范》](https://www.tc260.org.cn/front/postDetail.html?id=20190531230315)  





