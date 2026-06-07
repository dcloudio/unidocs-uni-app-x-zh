<!-- ## editor -->

<!-- UTSCOMJSON.editor.name -->

<!-- UTSCOMJSON.editor.description -->

<!-- UTSCOMJSON.editor.compatibility -->

<!-- UTSCOMJSON.editor.attribute -->

<!-- UTSCOMJSON.editor.event -->

<!-- UTSCOMJSON.editor.component_type -->

<!-- UTSCOMJSON.editor.children -->

### 上下文对象API

editor组件有上下文对象，api为[uni.createEditorContextAsync()](../api/create-editor-context-async.md)。

给editor组件设一个id属性，将id的值传入uni.createEditorContextAsync()，即可得到editor组件的上下文对象，进一步可使用对象上的方法。


<!-- UTSCOMJSON.editor.example -->

<!-- UTSCOMJSON.editor.reference -->

# tips
- 虽然editor组件被分类到form组件，但并不能在form的submit中提交
- 如果要做 im 输入类功能，需要使用 [onKeyboardHeightChange](../api/keyboard.md#onkeyboardheightchange) 监听键盘高度变化，来定位 editor 组件的位置，避免被键盘遮挡
- editor 组件可以使用 `readOnly=false` 属性来让键盘失焦，然后通过 `readOnly=true;setTimeout(() => {editor.format(name, value)}, 0)` 来实现在 editor 组件失焦的情况下调用 format 方法来修改 editor 组件内容输入并自动聚焦。如果失焦后直接调用 format 方法，再手动聚焦设置的内容会被覆盖掉。
