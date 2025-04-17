## databaseForJQL() @databaseforjql

uniCloud.databaseForJQL()是客户端访问云数据库的API，即[clientDB](https://doc.dcloud.net.cn/uniCloud/clientdb.html)。

- 暂不支持泛型传递
- 暂不支持getOne
- 暂不支持调用`db.command.aggregate`
- db.command.xxx不支持链式调用，如`db.command.lte(1726934400000).and(db.command.gte(1726848000000))`需改为`db.command.and([db.command.lte(1726934400000),db.command.gte(1726848000000)])`

**和uni-app项目的差异**

- uni-app x项目内不再支持uniCloud.database()方法，仅支持uniCloud.databaseForJQL()。
- 不再支持action云函数，因为安全问题已经不再推荐使用。开发者应改用[数据库触发器](https://doc.dcloud.net.cn/uniCloud/jql-schema-ext.html)来实现相关功能。

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.description -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.compatibility -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.param -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.returnValue -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.tutorial -->

<!-- UTSUNICLOUDAPIJSON.unicloud-database.example -->
