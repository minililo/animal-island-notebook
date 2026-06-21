# 动森记事本 - 手机App构建指南

## 环境要求

- Node.js >= 18
- Android Studio (Android开发)
- Xcode (iOS开发，仅Mac)

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 同步Web资源到原生项目

```bash
npm run cap:sync
```

### 3. 打开原生IDE

**Android:**

```bash
npm run cap:open:android
```

**iOS (需要Mac):**

```bash
npm run cap:open:ios
```

### 4. 构建APK (Android)

在Android Studio中:

1. 等待Gradle同步完成
2. 点击 Build → Build Bundle(s) / APK(s) → Build APK(s)
3. APK文件位于: `android/app/build/outputs/apk/debug/app-debug.apk`

### 5. 直接运行到设备

连接Android手机并开启USB调试后:

```bash
npm run cap:run:android
```

## 项目结构

```
├── www/                    # Web资源目录
│   └── index.html          # 主页面
├── android/                # Android原生项目
├── ios/                    # iOS原生项目
├── capacitor.config.ts     # Capacitor配置
└── package.json
```

## 更新Web代码后

每次修改 `www/index.html` 后，需要同步:

```bash
npm run cap:sync
```

然后重新构建或运行。

## 发布APK

1. 在Android Studio中选择 Build → Generate Signed Bundle / APK
2. 创建或选择签名密钥
3. 选择release版本
4. 生成的APK可用于发布
