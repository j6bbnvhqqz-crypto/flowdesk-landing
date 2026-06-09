function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Nav />
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gray-900">
          Flow<span className="text-indigo-500">Desk</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition-colors">功能</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">价格</a>
          <a href="#" className="hover:text-gray-900 transition-colors">文档</a>
          <a href="#" className="hover:text-gray-900 transition-colors">关于</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline text-sm text-gray-700 hover:text-gray-900 cursor-pointer">登录</button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer">免费试用</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-6 fade-in-up">
          🚀 全新 2.0 版本已发布
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 fade-in-up stagger-1">
          用 AI 把客服效率
          <br />
          <span className="gradient-text">提升 10 倍</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 fade-in-up stagger-2">
          FlowDesk 是你的智能客服助手。自动处理 80% 重复问题，让团队专注于真正重要的事。接入只需 5 分钟。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up stagger-3">
          <button className="gradient-bg text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-indigo-200">
            免费开始使用 →
          </button>
          <button className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-semibold text-lg hover:border-gray-300 transition-colors cursor-pointer">
            预约演示
          </button>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-lg max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex flex-col gap-3">
              <ChatBubble isBot text="你好！我是 FlowDesk 助手，有什么可以帮你的？" delay="0" />
              <ChatBubble isBot={false} text="我的订单什么时候发货？" delay="1" />
              <ChatBubble isBot text="你的订单 #20240608 预计明天下午 3 点前发出，物流单号会在发货后短信通知你 📦" delay="2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ isBot, text, delay }) {
  return (
    <div className={`flex items-start gap-2 ${isBot ? "" : "flex-row-reverse"}`} style={{ opacity: 0, animation: `fadeInUp 0.5s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) forwards` }}>
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${isBot ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-600"}`}>
        {isBot ? "🤖" : "👤"}
      </div>
      <div className={`text-sm px-3 py-2 rounded-xl max-w-xs text-left ${isBot ? "bg-gray-100 text-gray-800 rounded-tl-sm" : "bg-indigo-500 text-white rounded-tr-sm"}`}>
        {text}
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: "⚡", title: "5 分钟接入", desc: "一行代码嵌入你的网站或 App，零配置即可启用 AI 客服。" },
  { icon: "🧠", title: "自动学习", desc: "从历史对话中持续学习，回答准确率每周提升，越用越聪明。" },
  { icon: "🌐", title: "多语言支持", desc: "支持 50+ 语言自动切换，全球用户无障碍沟通。" },
  { icon: "📊", title: "数据面板", desc: "实时查看客户满意度、响应时间、常见问题等关键指标。" },
  { icon: "🔗", title: "API 集成", desc: "无缝对接 Slack、飞书、钉钉等工具，消息绝不错过。" },
  { icon: "🔒", title: "企业级安全", desc: "SOC 2 认证，数据加密传输，GDPR 合规。" },
];

function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">为什么选择 FlowDesk</h2>
          <p className="text-gray-500 max-w-xl mx-auto">不仅仅是聊天机器人，而是一个完整的智能客服解决方案</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 card-hover cursor-default">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "10,000+", label: "服务企业" },
          { value: "99.9%", label: "服务可用率" },
          { value: "80%", label: "问题自动解决" },
          { value: "30s", label: "平均响应时间" },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PLANS = [
  { name: "入门版", price: "¥99", period: "/月", desc: "适合小型团队", features: ["1,000 次对话/月", "基础数据分析", "邮件支持", "1 个坐席"], popular: false },
  { name: "专业版", price: "¥299", period: "/月", desc: "适合成长型公司", features: ["10,000 次对话/月", "高级数据面板", "API 集成", "5 个坐席", "优先支持"], popular: true },
  { name: "企业版", price: "¥999", period: "/月", desc: "适合大型组织", features: ["无限对话", "自定义模型训练", "专属客户经理", "SLA 保障", "SSO 单点登录"], popular: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">简单透明的定价</h2>
          <p className="text-gray-500">14 天免费试用，无需信用卡</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan, i) => (
            <div key={i} className={`relative bg-white border rounded-2xl p-8 flex flex-col ${plan.popular ? "pricing-popular text-white border-transparent shadow-xl scale-[1.02]" : "border-gray-200 card-hover"}`}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">最受欢迎</span>}
              <h3 className={`text-lg font-semibold mb-2 ${plan.popular ? "text-white/90" : "text-gray-700"}`}>{plan.name}</h3>
              <div className="mb-2">
                <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-400"}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-gray-500"}`}>{plan.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className={`text-sm flex items-center gap-2 ${plan.popular ? "text-white/80" : "text-gray-600"}`}><span>✓</span> {f}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold text-sm cursor-pointer transition-colors ${plan.popular ? "bg-white text-indigo-600 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}`}>开始试用</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">准备好提升客服效率了吗？</h2>
        <p className="text-gray-400 text-lg mb-8">加入 10,000+ 企业，用 FlowDesk 重新定义客户体验</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg cursor-pointer transition-colors">免费开始 →</button>
          <button className="border border-gray-600 text-gray-300 hover:border-gray-400 px-8 py-3.5 rounded-xl font-semibold text-lg cursor-pointer transition-colors">联系销售</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div>© 2024 FlowDesk. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">隐私政策</a>
          <a href="#" className="hover:text-white transition-colors">服务条款</a>
          <a href="#" className="hover:text-white transition-colors">联系我们</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
