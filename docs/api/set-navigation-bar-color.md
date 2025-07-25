<!-- ## uni.setNavigationBarColor(options) @setnavigationbarcolor -->

<!-- UTSAPIJSON.setNavigationBarColor.name -->

<!-- UTSAPIJSON.setNavigationBarColor.description -->

<!-- UTSAPIJSON.setNavigationBarColor.compatibility -->

注意当pages.json中设置导航栏为custom时：
1. 状态栏的背景色将恒为透明。此时无法通过本API设置状态栏背景色。开发者可自行在状态栏区域放置view，设置背景色。
2. 本API设置前景色frontColor时，会修改状态栏的前景色。

<!-- UTSAPIJSON.setNavigationBarColor.param -->

<!-- UTSAPIJSON.setNavigationBarColor.returnValue -->

<!-- UTSAPIJSON.setNavigationBarColor.example -->

<!-- UTSAPIJSON.setNavigationBarColor.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Bug & Tips @tips
- app-android平台，受系统限制，通过frontColor修改状态栏前景色仅在Android6.0及以上版本生效。