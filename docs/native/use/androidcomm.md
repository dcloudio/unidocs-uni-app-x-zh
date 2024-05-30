## uni-app x 与 android 原生工程通信

### 广播方式

实现实时通讯可以通过安卓原生的广播通信的方式。

#### uni-app x项目

首先需要在当前页面注册一个BroadcastReceiver接受android原生应用发送的广播信息。

发送广播可以通过`UTSAndroid.getUniActivity()?.sendBroadcast(intent)`将信息传送到原生。

```uvue
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="send"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	// #ifdef APP-ANDROID
	import BroadcastReceiver from 'android.content.BroadcastReceiver'
	import Context from 'android.content.Context'
	import Intent from 'android.content.Intent'
	import IntentFilter from 'android.content.IntentFilter'
	class MyReciver extends BroadcastReceiver {
		constructor() {
		}
		override onReceive(context : Context, intent : Intent) {
			var action = intent.getAction()
			if (action.equals("ACTION_FROM_NATIVE")) {
				var value = intent.getStringExtra("key");
				uni.showToast({
					title: value!!
				})
			}
		}
	}
	// #endif
	export default {
		data() {
			return {
				title: '点击图片发送广播',
				// #ifdef APP-ANDROID
				receiver: null as BroadcastReceiver | null
				// #endif
			}
		},
		onLoad() {

		},
		onReady() {
			// #ifdef APP-ANDROID
			this.receiver = new MyReciver()
			UTSAndroid.getUniActivity()?.registerReceiver(this.receiver!, new IntentFilter("ACTION_FROM_NATIVE"))
			// #endif
		},

		onUnload() {
			// #ifdef APP-ANDROID
			UTSAndroid.getUniActivity()?.unregisterReceiver(this.receiver!)
			// #endif
		},
		methods: {
			send() {
				// #ifdef APP-ANDROID
				var intent = new Intent("ACTION_TO_NATIVE");
				intent.putExtra("key", "接受到广播，三秒钟之后会接收到原生发送的广播");
				UTSAndroid.getUniActivity()?.sendBroadcast(intent)
				// #endif
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
```

#### android原生项目

首先需要在当前activity注册一个BroadcastReceiver接受uni-app x发送的广播信息。

发送广播可以通过`sendBroadcast(inte)`将信息传送到uni-app x。

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_activity)
        findViewById<View>(R.id.btn_goto).setOnClickListener {
            startActivity(Intent(this@MainActivity, UniAppActivity::class.java))
            registerReceiver(broadcast, IntentFilter("ACTION_TO_NATIVE"))
        }
    }

    private val broadcast = object : BroadcastReceiver() {
        val handler = Handler(Looper.getMainLooper())
        override fun onReceive(context: Context, intent: Intent) {
            if(intent.action == "ACTION_TO_NATIVE") {
                Toast.makeText(context, intent.getStringExtra("key"), Toast.LENGTH_SHORT).show()
                handler.postDelayed({
                    val inte = Intent("ACTION_FROM_NATIVE")
                    inte.putExtra("key", "接受来自原生的广播")
                    sendBroadcast(inte)
                }, 3000)
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        unregisterReceiver(broadcast)
    }
}
```

**注意：广播要在页面关闭的时候取消注册，避免可能出现崩溃的问题。**

具体可以参考离线打包SDK中的`app-comm`示例。