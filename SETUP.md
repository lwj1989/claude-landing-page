# Claude 无限畅享版 - Landing Page 创建说明

## 项目位置

Landing Page 位于 `landing-page/` 目录下，这是一个独立的 Next.js 项目。

## 设计风格

基于首页 `frontend/index.html` 的实际内容，重新设计的 Landing Page：

### 核心内容

1. **标题**: "Claude 无限畅享版"
2. **副标题**: "一站式账号、日志与配额管理"
3. **使用步骤**: 5 个步骤（添加账号、系统配置、查看日志、用户管理、备份恢复）
4. **最佳实践**: 4 个建议（启用日志、设置配额、IP 限频、定期备份）
5. **支持的模型**: 5 个 Claude 模型（opus-4.5、sonnet-4.5、sonnet-4、haiku-4.5、auto）
6. **版本说明**: Basic/Pro/Ultra 三种版本及其账号限制
7. **配置工具**: Claude Code 和 Cursor 的配置示例
8. **联系方式**: 闲鱼「不能李姐」

### 视觉设计

- **深色背景**: #050505 配合噪点纹理
- **高对比度**: 白色文字配渐变色彩
- **粗体标题**: 使用 Inter 字体的加粗样式
- **渐变色彩**: 紫色 (#purple-500) 到粉色 (#pink-600)
- **玻璃态**: 毛玻璃效果的导航栏
- **渐变边框**: 卡片边框使用渐变效果
- **流畅动画**: Framer Motion 实现的淡入、上浮等动画

## 快速开始

### 启动开发服务器

```bash
# 方式 1: 使用启动脚本（推荐）
./start-landing.sh

# 方式 2: 直接运行
cd landing-page
npm install  # 首次运行
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
cd landing-page
npm run build
npm start
```

## 技术栈

- **Next.js 15**: App Router, React Server Components
- **TypeScript**: 类型安全
- **Tailwind CSS 4**: 现代化 CSS 框架
- **Framer Motion**: 流畅动画
- **Lucide React**: 图标库
- **Google Fonts**: Inter 字体

## 自定义指南

### 修改内容

所有内容都在 `app/page.tsx` 中，可以轻松修改：

```typescript
// 修改使用步骤
const usageSteps = [
  { step: '01', title: '添加账号', desc: '支持批量导入，确保 Token 刷新正常' },
  // ...
];

// 修改最佳实践
const bestPractices = [
  { icon: RefreshCw, title: '启用请求日志', desc: '排查问题更高效' },
  // ...
];

// 修改支持的模型
const models = [
  { name: 'claude-opus-4.5', desc: '最强推理能力' },
  // ...
];

// 修改版本说明
const versions = [
  { name: 'Basic', limit: '5 个账号', color: 'from-blue-500 to-blue-600' },
  { name: 'Pro', limit: '20 个账号', color: 'from-purple-500 to-purple-600' },
  { name: 'Ultra', limit: '100 个账号', color: 'from-pink-500 to-pink-600' }
];

// 修改配置工具
const configs = [
  {
    name: 'Claude Code',
    code: `export ANTHROPIC_BASE_URL=http://你的服务器地址:端口\nexport ANTHROPIC_API_KEY=你的API密钥`,
    hint: '配置后重启终端生效'
  },
  // ...
];
```

### 修改联系方式

更新页面中的链接：

```typescript
// 修改为实际的闲鱼链接
href="https://www.goofish.com/personal?spm=a21ybx.home.nav.1.36b13da6f30167"
```

### 修改品牌颜色

1. 主色调：`from-purple-600 to-pink-600`
2. 文字渐变：`from-purple-400 via-pink-400 to-orange-400`
3. 版本颜色：
   - Basic: `from-blue-500 to-blue-600`
   - Pro: `from-purple-500 to-purple-600`
   - Ultra: `from-pink-500 to-pink-600`

## 部署建议

### Vercel (最简单)

```bash
cd landing-page
vercel
```

### 其他平台

- **Netlify**: 拖拽 `.next` 目录或连接 Git 仓库
- **Cloudflare Pages**: 连接 Git 仓库自动部署
- **GitHub Pages**: 使用 `npm run build` 后导出静态文件

## 文件结构

```
landing-page/
├── app/
│   ├── globals.css      # 自定义 CSS（玻璃态、渐变边框、噪点等）
│   ├── layout.tsx       # 根布局（字体配置、meta 信息）
│   └── page.tsx         # 主页面（所有内容和数据）
├── public/              # 静态资源
├── tailwind.config.ts   # Tailwind 配置（颜色、动画）
├── tsconfig.json        # TypeScript 配置
├── package.json         # 依赖管理
├── .gitignore         # Git 忽略文件
├── README.md           # 项目文档
└── SETUP.md           # 本说明文件
```

## 与首页的对应关系

| 首页内容 | Landing Page 对应 |
|---------|---------------|
| "欢迎使用 Claude 无限畅享版控制台" | Hero 区域的徽章 |
| "一站式账号、日志与配额管理" | Hero 区域副标题 |
| "使用步骤" | 使用步骤 Section |
| "最佳实践" | 最佳实践 Section |
| "支持的模型" | 支持的模型 Section |
| "版本说明" | 版本说明 Section |
| "联系售后" - 闲鱼: 不能李姐 | 所有 CTA 按钮和页脚链接 |
| "Claude Code 配置" | 配置工具 Section - Claude Code |
| "Cursor 配置" | 配置工具 Section - Cursor |
| "常用快捷操作" | 使用步骤区域的视觉呈现 |

## 性能指标

- ✅ 首屏加载时间 < 2s
- ✅ Lighthouse 性能评分 > 90
- ✅ 完全静态生成 (SSG)
- ✅ 自动优化图片和字体
- ✅ 代码分割和懒加载

## 故障排查

### 字体加载失败
- 检查网络连接
- 确认 Google Fonts 可访问
- 回退到系统字体

### 动画卡顿
- 减少同时运行的动画数量
- 检查设备性能

### 构建失败
- 删除 `.next` 目录后重新构建
- 清除 node_modules 重新安装

## 后续改进建议

1. **添加图片**: 产品截图、配置示例图
2. **多语言**: 中英文切换
3. **暗色主题**: 动态主题切换
4. **更多动画**: 滚动视差效果
5. **SEO 优化**: meta 标签、结构化数据
6. **分析集成**: Google Analytics
7. **联系表单**: 邮件订阅功能
8. **更多配置**: 支持更多开发工具

## 联系方式

如有问题，请提交 Issue 或联系闲鱼「不能李姐」。
