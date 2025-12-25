'use client';

import { motion } from 'framer-motion';
import { Sparkles, Crown, Shield, Database, ChevronRight, Terminal, Settings, HelpCircle } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const usageSteps = [
    {
      step: '01',
      title: '添加账号',
      desc: '支持批量导入，确保 Token 刷新正常'
    },
    {
      step: '02',
      title: '系统配置',
      desc: '打开请求日志与 IP 频率限制，设置保留天数'
    },
    {
      step: '03',
      title: '查看日志',
      desc: '按时间、IP、账号筛选，查看统计卡片与错误详情'
    },
    {
      step: '04',
      title: '用户管理',
      desc: '分配配额、查看 Token 消耗与成功率'
    },
    {
      step: '05',
      title: '备份恢复',
      desc: '定期导出备份，必要时一键导入恢复'
    }
  ];



  const models = [
    { name: 'claude-opus-4.5', desc: '最强推理能力', highlight: true },
    { name: 'claude-opus-4.5-thinking', desc: '深度思考模式', highlight: true },
    { name: 'claude-sonnet-4.5', desc: '平衡性能与速度', highlight: false },
    { name: 'claude-sonnet-4', desc: '快速响应', highlight: false },
    { name: 'claude-haiku-4.5', desc: '轻量高效', highlight: false },
    { name: 'auto', desc: '自动选择最佳模型', highlight: false }
  ];

  const versions = [
    { name: 'Basic', limit: '5 个账号', color: 'from-blue-500 to-blue-600' },
    { name: 'Pro', limit: '20 个账号', color: 'from-purple-500 to-purple-600' },
    { name: 'Ultra', limit: '100 个账号', color: 'from-pink-500 to-pink-600' }
  ];

  const tools = [
    {
      name: 'Claude Code',
      icon: Terminal,
      code: `export ANTHROPIC_BASE_URL=http://你的服务器地址:端口
export ANTHROPIC_API_KEY=你的API密钥`,
      hint: '配置后重启终端生效'
    },
    {
      name: 'Cursor',
      icon: Settings,
      code: `http://你的服务器地址:端口/v1`,
      hint: '在 Cursor Settings → Models → Add Model'
    },
    {
      name: 'VS Code',
      icon: Terminal,
      code: `Settings → AI → OpenAI-compatible provider
API Base: http://你的服务器地址:端口/v1
API Key: 你的API密钥`,
      hint: '安装 AI Coding 插件'
    },
    {
      name: 'Windsurf',
      icon: Terminal,
      code: `Settings → Providers → Custom
Base URL: http://你的服务器地址:端口/v1
API Key: 你的API密钥`,
      hint: '配置自定义 provider'
    },
    {
      name: 'Continue',
      icon: Terminal,
      code: `Config → Ollama → Custom Endpoint
Base URL: http://你的服务器地址:端口/v1
API Key: 你的API密钥`,
      hint: 'VS Code 扩展插件'
    },
    {
      name: 'Cline',
      icon: Terminal,
      code: `Settings → API Provider → OpenAI
Base URL: http://你的服务器地址:端口/v1
API Key: 你的API密钥`,
      hint: 'Claude Dev 替代方案'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden noise">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img
              src="/claude-text-dark.svg"
              alt="Claude Logo"
              className="h-10 w-auto"
            />
            <span className="font-display font-bold text-xl">Claude 无限畅享版</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.goofish.com/personal?spm=a21ybx.home.nav.1.36b13da6f30167"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              闲鱼: 不能李姐
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2.5 rounded-full font-medium transition-all"
            >
              开始使用
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">一站式账号、日志与配额管理</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[1.05] mb-6"
          >
            Claude
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              无限畅享版
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            无次数限制，不限额度，支持Claude Opus 4.5 thinking
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="https://www.goofish.com/personal?spm=a21ybx.home.nav.1.36b13da6f30167"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              联系售后
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-zinc-300">开启防滥用：IP频率限制 & 请求日志</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2">
              <Database className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-zinc-300">建议每天导出备份，避免数据丢失</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Steps Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              系统功能
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              强大的系统功能，满足各种需求
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {usageSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="gradient-border rounded-2xl p-6 group hover:bg-zinc-900/30 transition-all"
              >
                <div className="text-5xl font-display font-bold text-zinc-700 mb-4 group-hover:text-zinc-600 transition-colors">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Models Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              支持的模型
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              全面覆盖 Claude 系列模型
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {models.map((model, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl p-8 text-center group hover:scale-105 transition-all ${
                  model.highlight
                    ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'gradient-border hover:bg-zinc-900/30'
                }`}
              >
                {model.highlight && (
                  <div className="inline-flex items-center gap-1 bg-purple-500/20 text-purple-300 rounded-full px-3 py-1 text-xs font-medium mb-3">
                    <Sparkles className="w-3 h-3" />
                    推荐
                  </div>
                )}
                <code className={`text-xl font-mono mb-3 block ${model.highlight ? 'text-white' : 'text-purple-400'}`}>
                  {model.name}
                </code>
                <p className={`text-sm ${model.highlight ? 'text-zinc-200' : 'text-zinc-400'}`}>{model.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Versions Section */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              版本说明
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              选择适合你的版本
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {versions.map((version, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group gradient-border rounded-3xl p-8 text-center hover:scale-105 transition-all"
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${version.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-3xl mb-2">{version.name}</h3>
                <p className="text-zinc-400 text-lg">{version.limit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              支持的开发工具
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              兼容主流 AI 编程工具
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="gradient-border rounded-3xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                    <tool.icon className="w-5 h-5 text-pink-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl">{tool.name}</h3>
                </div>
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-xs text-zinc-300 border border-zinc-800">
                  <pre>{tool.code}</pre>
                </div>
                <p className="text-zinc-500 text-xs">{tool.hint}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              准备好开始了吗？
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              联系闲鱼售后「不能李姐」，获取完整使用指南
            </p>
            <motion.a
              href="https://www.goofish.com/personal?spm=a21ybx.home.nav.1.36b13da6f30167"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-5 rounded-full font-bold text-xl transition-all items-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              联系售后
              <HelpCircle className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/claude-text-dark.svg"
                alt="Claude Logo"
                className="h-8 w-auto"
              />
              <span className="font-display font-bold">Claude 无限畅享版</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="https://www.goofish.com/personal?spm=a21ybx.home.nav.1.36b13da6f30167" className="hover:text-zinc-400 transition-colors flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                闲鱼: 不能李姐
              </a>
            </div>
            <div className="text-sm text-zinc-600">
              MIT License · Made with ❤️
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
