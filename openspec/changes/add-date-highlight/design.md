# Design: 日期高亮功能

## Technical Approach

### Data Model
在现有 `calendarData[dateKey]` 结构中添加 `highlight` 字段：
```js
calendarData[key] = {
  events: [],
  notes: [],
  mood: '静',
  accounts: [],
  highlight: '#5cc8b9' // 新增：高亮颜色值，null 表示无高亮
}
```

### Preset Colors
```js
const highlightColors = [
  { name: '薄荷', value: '#5cc8b9' },
  { name: '蜜桃', value: '#f0a0b0' },
  { name: '薰衣草', value: '#b898d8' },
  { name: '柠檬', value: '#f5c84a' },
  { name: '珊瑚', value: '#f0b090' },
  { name: '天空', value: '#80b8d8' }
];
```

### UI Components

1. **Color Picker Panel** — 底部弹出面板，包含：
   - 6个预设颜色圆点（38px，带选中态边框）
   - "移除高亮"按钮
   - 取消按钮

2. **Calendar Day Cell** — 修改 `.cal-day .day-num` 样式：
   - 有高亮时添加半透明背景色（opacity 0.25）
   - 高亮背景优先级低于 today（primary）和 selected（warning）

### Interaction Flow
- 点击日期 → 如果已有选中态，弹出颜色面板
- 双击或长按日期 → 直接弹出颜色面板
- 为简化实现，采用：点击一次选中日期，再点击同一日期弹出面板

### CSS Changes
```css
.cal-day .day-num.highlighted {
  background: var(--hl-color);
  color: var(--text-body);
}
```
通过 inline style 设置 `--hl-color` 实现动态颜色。

### Storage
复用现有 `calendarData` 和 `save()` 机制，无需新增存储键。
