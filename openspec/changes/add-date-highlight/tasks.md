# Tasks: 日期高亮功能

## Phase 1: Data Layer

- [x] 1.1 在 `getDateData()` 中添加 `highlight: null` 默认值
- [x] 1.2 定义 `highlightColors` 预设颜色数组

## Phase 2: CSS

- [x] 2.1 添加 `.day-num.highlighted` 样式（半透明背景）
- [x] 2.2 添加颜色选择面板样式（`.hl-picker-overlay`, `.hl-picker-box`, `.hl-colors`, `.hl-dot`）
- [x] 2.3 确保高亮不覆盖 today/selected 样式

## Phase 3: HTML

- [x] 3.1 在 `<body>` 中添加颜色选择面板 HTML 结构

## Phase 4: JS - Calendar Rendering

- [x] 4.1 修改 `renderCalendar()` 中日期格子渲染逻辑，检测 highlight 数据并应用样式
- [x] 4.2 修改 `selectDay()` 逻辑，点击已选中日期时弹出颜色面板

## Phase 5: JS - Color Picker

- [x] 5.1 实现 `openHighlightPicker(dateKey)` 函数
- [x] 5.2 实现 `setHighlight(dateKey, color)` 函数
- [x] 5.3 实现 `removeHighlight(dateKey)` 函数
- [x] 5.4 实现 `closeHighlightPicker()` 函数

## Phase 6: Integration

- [x] 6.1 颜色选择后调用 `save()` 持久化
- [x] 6.2 重新渲染日历显示更新
