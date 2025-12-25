# Claude 无限畅享版 - Landing Page

一个现代化的 Landing Page，用于展示 Claude 无限畅享版控制台。

## 特性

- **艺术风格设计**: 粗体标题、高对比度、渐变色彩
- **响应式布局**: 完美适配移动端、平板和桌面端
- **流畅动画**: 使用 Framer Motion 实现优雅的过渡效果
- **高性能**: 基于 Next.js 15 和 Tailwind CSS 4

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Inter (Google Fonts)

## 快速开始

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm start
```

## 页面结构

1. **导航栏**: 固定顶部，毛玻璃效果
2. **Hero 区域**: 
   - 大标题 "Claude 无限畅享版"
   - 副标题 "一站式账号、日志与配额管理"
   - 联系售后按钮
   - 防滥用提示和备份提示
3. **使用步骤**: 5 个步骤展示
4. **最佳实践**: 4 个实践建议
5. **支持的模型**: 5 个 Claude 模型
6. **版本说明**: Basic/Pro/Ultra 三种版本
7. **配置工具**: Claude Code 和 Cursor 配置示例
8. **CTA 区域**: 号召联系售后
9. **页脚**: 品牌和联系方式

## 自定义指南

### 修改内容

编辑 `app/page.tsx` 中的数据：

```typescript
// 使用步骤
const usageSteps = [
  { step: '01', title: '添加账号', desc: '...' },
  // ...
];

// 最佳实践
const bestPractices = [
  { icon: RefreshCw, title: '启用请求日志', desc: '...' },
  // ...
];

// 支持的模型
const models = [
  { name: 'claude-opus-4.5', desc: '最强推理能力' },
  // ...
];

// 版本说明
const versions = [
  { name: 'Basic', limit: '5 个账号', color: 'from-blue-500 to-blue-600' },
  // ...
];

// 配置工具
const configs = [
  { name: 'Claude Code', code: '...', hint: '...' },
  // ...
];
```

### 修改联系方式

更新 `app/page.tsx` 中的链接：

```typescript
// 更新为实际的闲鱼链接
href="https://www.goofish.com/personal?spm=a21ybx.home.nav.1.36b13da6f30167"
```

### 修改品牌颜色

编辑 `app/globals.css` 和页面中的渐变色彩：

```typescript
// 主渐变色
from-purple-600 to-pink-600

// 文字渐变色
from-purple-400 via-pink-400 to-orange-400
```

## 部署

### Vercel (推荐)

```bash
vercel
```

### 其他平台

- **Netlify**: 直接拖拽构建目录
- **Cloudflare Pages**: 部署到 Pages
- **GitHub Pages**: 静态导出后部署

## 项目结构

```
landing-page/
├── app/
│   ├── globals.css      # 全局样式 (自定义 CSS)
│   ├── layout.tsx       # 根布局 (字体配置)
│   └── page.tsx         # 主页面 (所有内容)
├── public/              # 静态资源
├── tailwind.config.ts   # Tailwind 配置
├── tsconfig.json        # TypeScript 配置
├── package.json         # 依赖管理
└── README.md           # 本文件
```

## 设计风格

- **背景**: 深色 (#050505) + 噪点纹理
- **主色调**: 紫色到粉色的渐变
- **字体**: Inter (正文)
- **效果**: 玻璃态、渐变边框、发光效果
- **动画**: 淡入、上浮、缩放等微交互

## 性能优化

- ✅ 字体优化 (Google Fonts)
- ✅ 图标懒加载
- ✅ CSS 压缩
- ✅ 代码分割
- ✅ 图片优化 (Next.js Image)

## 许可证

MIT License
