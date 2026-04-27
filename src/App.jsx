import { useState } from 'react'

const apps = [
  {
    id: 13,
    emoji: '🎬',
    title: '개인 유튜브 운영 컨설팅',
    year: '2026.05',
    category: 'life',
    video: '/screenshots/13.mov',
    description: 'YouTube 채널 데이터를 CSV로 업로드하면 KPI 대시보드를 자동 생성하고, Gemini AI가 콘텐츠 전략을 1:1 컨설팅해주는 개인 맞춤형 채널 운영 도구',
    log: '내 채널 데이터 넣으면 AI가 컨설턴트가 되어주는 것',
    tags: ['React', 'Gemini API', 'PapaParse', 'Vercel'],
    color: '#ECFDF8',
    url: 'https://mj-youtube-consulting-minday.vercel.app/',
  },
  {
    id: 11,
    emoji: '🗺️',
    title: '트렌디 푸드맵',
    year: '2026.04',
    category: 'life',
    video: '/screenshots/11.mov',
    description: '네이버 DataLab 트렌드 분석으로 지금 뜨는 음식을 발굴하고, GPS 기반으로 주변 매장을 실시간 탐색하는 큐레이션 지도 앱',
    log: '유행하는 음식 한 눈에 보고, 내 주변에서 파는 곳 서치까지 한번에.',
    tags: ['React', 'Naver DataLab API', 'Google Sheets', 'Vercel'],
    color: '#F2F7F8',
    url: 'https://trendy-foodmap.vercel.app/',
  },
  {
    id: 9,
    emoji: '🎫',
    title: '표나바다',
    year: '2026.04',
    category: 'life',
    video: '/screenshots/9.mov',
    description: '취소할 기차표를 양도하고, 다음에 쓸 수 있는 패스로 교환하는 플랫폼. 우리 기차 편하게 타요.',
    log: '기차표 구하기 너무 어려운 요즘. 이런 아이디어 어때요?',
    tags: ['React', 'Firebase', 'Vercel'],
    color: '#EEF2FF',
    url: 'https://pyo-nabada.vercel.app/',
  },
  {
    id: 10,
    emoji: '☁️',
    title: '영상 클라우드 자동 업로드 시스템',
    year: '2026.04',
    category: 'work',
    animation: 'flow',
    description: '로컬에 저장된 영상 파일을 실시간으로 감지해 팀 공유 클라우드에 자동 업로드하는 무인 자동화 시스템',
    log: '매번 수동으로 올리는 게 너무 귀찮아서 아예 자동으로 만들어버림',
    tags: ['Python', 'Playwright', 'watchdog'],
    color: '#EFF6FF',
    url: null,
    flow: [
      { icon: '📁', label: 'Downloads\n폴더' },
      { icon: '👁️', label: '파일 감지\nwatchdog' },
      { icon: '🌐', label: '브라우저\n자동화' },
      { icon: '☁️', label: 'MyBox\n업로드' },
    ],
  },
  {
    id: 5,
    emoji: '📩',
    video: '/screenshots/5.mov',
    title: '이메일 첨부파일 자동 전달 시스템',
    year: '2026.04',
    category: 'work',
    description: '매일 수신하는 대용량 첨부파일을 정규식으로 파싱해 타 부서에 자동 전달하는 자동화 시스템',
    log: '루틴하게 오는 첨부파일을 손으로 전달하다 지쳐서 만듦',
    tags: ['Google Apps Script', 'Gmail API', 'Google Sheets'],
    color: '#FFFBEB',
    url: 'https://script.google.com/macros/s/AKfycbzPIMT833V8qo_eah5FMIiEkXQBHCCohwCNBrnqw2TG-6nIlzlF5zmgBaE8ndKB9Ahv/exec',
  },
  {
    id: 3,
    emoji: '💍',
    video: '/screenshots/3.mov',
    title: '인터랙티브 모바일 청첩장',
    year: '2026.04',
    category: 'life',
    description: '풀스택 바이브코딩으로 기성 플랫폼 이상의 UI 구현',
    log: '모청 너무 뻔하잖아요? 내 결혼식, 원하는 대로 하자.',
    tags: ['Lovable', 'v0.dev', 'Claude', 'Supabase'],
    color: '#FFF7ED',
    url: 'https://wedding-invitation-mj.vercel.app/',
  },
  {
    id: 4,
    emoji: '👊',
    video: '/screenshots/4.mov',
    title: '펀칭 이미지 메이커',
    year: '2026.03',
    category: 'life',
    description: 'SNS 유행 펀칭 효과를 커스텀하고 고해상도로 저장할 수 있는 모바일 최적화 웹 툴',
    log: 'SNS에서 유행하는 거 보고 당장 만들어보고 싶어서',
    tags: ['React', 'Canvas API', 'Vercel'],
    color: '#F0FDF4',
    url: 'https://punching-image-maker-mj.vercel.app/',
  },
  {
    id: 2,
    emoji: '🌠',
    video: '/screenshots/2.mov',
    title: '카드뉴스 자동화 시스템',
    year: '2026.02',
    category: 'life',
    description: '밈 및 카드뉴스 제작을 위한 React 기반 웹 앱 · 이미지 배경 제거 및 압축 파일 처리 기능 포함',
    log: '포토샵 켜는 게 피곤해서 만든 도구',
    tags: ['React', 'Claude Code', 'Vercel'],
    color: '#F5F3FF',
    url: 'https://cardnews-app-pi.vercel.app/',
  },
  {
    id: 12,
    emoji: '📺',
    video: '/screenshots/12.mov',
    title: '유튜브 채널 편성표',
    year: '2025.12',
    category: 'work',
    format: 'notion',
    description: 'Notion 데이터베이스로 유튜브 채널의 월간 콘텐츠 편성을 기획하고 실시간으로 팀과 공유하는 콘텐츠 스케줄링 시스템',
    log: '팀 전체 공유용 편성표를 위해 구축한 노션 시스템',
    tags: ['Notion', 'YouTube', 'Database'],
    color: '#F5F0FF',
    url: 'https://www.notion.so/2fff470c09f78047a422e12c64a0c6a4?v=2fff470c09f780f7b046000c96430c4a&source=copy_link',
  },
  {
    id: 1,
    emoji: '🗓️',
    video: '/screenshots/1.mov',
    title: '맞춤형 일정 관리 웹앱',
    year: '2025.12',
    category: 'life',
    description: '구글 Gemini로 나만의 업무 루틴에 최적화된 일정 관리 웹 앱 직접 개발 및 배포',
    log: '시중 앱이 내 루틴에 안 맞아서 그냥 직접 만들어버림',
    tags: ['Gemini', 'Google Sheets', 'Vercel'],
    color: '#FFF1F2',
    url: 'https://daily-roadmap-todos-d92u.vercel.app/',
  },
  {
    id: 6,
    emoji: '📋',
    image: '/screenshots/6.png',
    title: '작업물 기록 자동화',
    year: '2025.11',
    category: 'work',
    format: 'sheet',
    description: '영상 제작 요청·진행률 실시간 트래킹 및 SUMPRODUCT 기반 월간 성과 자동 집계 시스템',
    log: '업무 실황 공유 및 집계 시트',
    tags: ['Google Apps Script', 'Google Sheets'],
    color: '#ECFDF5',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSVH9KmqZJASA-8X5Wn96xsiej5Dfa8fmiREQjtp0Jo6ITB69YxepTB5E9PduXyr2kdlRqtlEphTXrg/pubhtml',
  },
  {
    id: 7,
    emoji: '📈',
    image: '/screenshots/7.png',
    title: '글로벌 경제지표 트래커',
    year: '2025.10',
    category: 'work',
    format: 'sheet',
    description: '실시간 API 연동으로 거시경제 지표와 개인 자산을 한눈에 보는 올인원 트래킹 시트',
    log: '매달 환율이랑 지표 찾아보기 귀찮아서 한 페이지로 모음',
    tags: ['Google Sheets', 'API 연동'],
    color: '#EFF6FF',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxq-mX6ACRv7pWKgkqThk_6VAHuoknBBS-J_7LgyQwk1hO4ocWaEg1I1bztW2gcBb0MF2hQbxv__mp/pubhtml',
  },
  {
    id: 8,
    emoji: '✈️',
    image: '/screenshots/8.png',
    title: '체계적인 여행 플래너',
    year: '2025.08',
    category: 'work',
    format: 'sheet',
    description: '실시간 환율 연동 + 동행자 실시간 협업을 위해 설계된 올인원 여행 관리 솔루션',
    log: '여행 계획 혼자 짜기 지쳐서 동행자랑 같이 쓸 수 있게 만든 것',
    tags: ['Google Sheets', '실시간 환율 API'],
    color: '#F0F9FF',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQcCdXDdM6t1_uv9gqKfRJWzOSeY6MmIAbS1Ok6UegO8ci9ruHhPNPwsj6CBLGmgo0QGmiS246wMXMs/pubhtml',
  },
]

const FILTERS = [
  { id: 'all', label: '전체' },
  { id: 'life', label: '생활' },
  { id: 'work', label: '업무' },
  { id: 'divider' },
  { id: 'vibe', label: '바이브코딩' },
  { id: 'sheet', label: '구글스프레드시트' },
  { id: 'notion', label: '노션' },
]

function groupByPeriod(list) {
  const map = {}
  list.forEach(app => {
    if (!map[app.year]) map[app.year] = []
    map[app.year].push(app)
  })
  return Object.entries(map).sort(([a], [b]) => b.localeCompare(a))
}

function LogCard({ app }) {
  const hasImage = Boolean(app.image)
  const hasVideo = Boolean(app.video)
  const hasFlow = app.animation === 'flow'
  const hasMedia = hasImage || hasVideo || hasFlow
  const isSheet = app.format === 'sheet'
  const isNotion = app.format === 'notion'
  const catLabel = app.category === 'life' ? 'Life' : 'Work'
  const formatLabel = isSheet ? '스프레드시트' : isNotion ? 'Notion' : null

  const ringColor = isSheet
    ? '#1D6F42'
    : isNotion
    ? '#00DCFB'
    : app.category === 'life'
    ? '#3ECFBF'
    : '#FF5CFF'

  return (
    <div className="rounded-3xl p-[2px]" style={{ background: ringColor }}>
    <div
      className="relative rounded-[22px] overflow-hidden min-h-[220px] flex flex-col select-none w-full"
      style={{
        backgroundColor: app.color,
        backgroundImage: hasImage ? `url(${app.image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* flow 애니메이션 배경 */}
      {hasFlow && app.flow && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="flex items-center gap-2">
            {app.flow.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="flex flex-col items-center gap-1"
                  style={{ animation: 'flowPulse 3.2s ease-in-out infinite', animationDelay: `${i * 0.8}s` }}
                >
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-[10px] text-gray-500 text-center whitespace-pre-line leading-tight">
                    {step.label}
                  </span>
                </div>
                {i < app.flow.length - 1 && (
                  <span
                    className="text-gray-400 text-sm mb-4"
                    style={{ animation: 'flowArrow 3.2s ease-in-out infinite', animationDelay: `${i * 0.8 + 0.4}s` }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 영상 배경 */}
      {hasVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={app.video}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* 항상 하단 그라디언트 — 컬러/이미지/영상 모두 흰 텍스트 보장 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      {hasMedia && <div className="absolute inset-0 bg-black/15" />}

      <div className="relative z-10 p-5 flex flex-col flex-1">

        {/* 상단: 이모지 아바타 + 카테고리 */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-sm flex-shrink-0">
            {app.emoji}
          </div>
          <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
            {catLabel}
          </span>
        </div>

        {/* 중앙: 제목 + 설명 — 가운데 정렬 / 우측 버튼 공간 확보용 pr */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pr-12 py-4">
          <h3
            className="text-[19px] text-white leading-snug break-keep"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 800 }}
          >
            {app.title}
          </h3>
          {app.log && (
            <p className="text-[11px] text-white/70 mt-2 leading-snug">
              {app.log}
            </p>
          )}
        </div>

        {/* 하단: 날짜 + 형식 배지 */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-white/50 tracking-widest" style={{ fontFamily: "'GriunMongtori', sans-serif" }}>{app.year}</span>
          {formatLabel && (
            <span className="text-[11px] text-white/40">{formatLabel}</span>
          )}
        </div>

      </div>

      {/* 우측 버튼 — absolute로 카드 위에 float */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {app.url ? (
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            title="열어보기"
          >
            <span className="text-base">↗</span>
          </a>
        ) : (
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/30">
            <span className="text-base">↗</span>
          </div>
        )}
        <button className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
          <span className="text-base">♡</span>
        </button>
      </div>

    </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('all')
  const filtered = (() => {
    if (active === 'all') return apps
    if (active === 'life') return apps.filter(a => a.category === 'life')
    if (active === 'work') return apps.filter(a => a.category === 'work')
    if (active === 'vibe') return apps.filter(a => !a.format)
    if (active === 'sheet') return apps.filter(a => a.format === 'sheet')
    if (active === 'notion') return apps.filter(a => a.format === 'notion')
    return apps
  })()
  const grouped = groupByPeriod(filtered)

  return (
    <div className="min-h-screen bg-[#F9F8F5]" style={{ fontFamily: "'Pretendard', sans-serif" }}>

      {/* Header */}
      <header className="max-w-xl mx-auto px-6 pt-14 pb-10">
        <div className="flex items-center justify-between pb-4 border-b-2 border-gray-900 mb-8">
          <span className="text-xs font-mono tracking-wide text-gray-600 uppercase">
            Total {apps.length} projects
          </span>
          <span className="text-xs font-mono tracking-wide text-gray-500 uppercase">
            AI | Vibe Coding | Notion Lab
          </span>
        </div>

        <h1
          className="text-4xl text-gray-900 tracking-tight leading-[0.9] mb-6"
          style={{ fontFamily: "'GriunMongtori', sans-serif" }}
        >
          minjaja_lab
        </h1>

        <p
          className="text-sm text-gray-600 leading-relaxed mb-4"
          style={{ fontFamily: "'GriunMongtori', sans-serif" }}
        >
          일과 일상을 더 편하게 만들기 위해<br />
          고민하고, 만들고, 실험한 것들을 모은 김민지의 실험실 🥼
        </p>

        <div className="flex gap-3 flex-wrap">
          <a href="https://www.instagram.com/minjaja.pdf" target="_blank" rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
            ↗ @minjaja.pdf
          </a>
          <a href="https://www.instagram.com/min_jaja_" target="_blank" rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
            ↗ @min_jaja_
          </a>
          <a href="https://www.linkedin.com/in/minji-kim-a83113233/" target="_blank" rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
            ↗ LinkedIn
          </a>
        </div>
      </header>

      {/* Filter */}
      <div className="max-w-xl mx-auto px-6 mb-10">
        <div className="flex gap-5 flex-wrap items-center">
          {FILTERS.map(f =>
            f.id === 'divider' ? (
              <span key="divider" className="text-gray-300 text-sm">|</span>
            ) : (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                style={{ fontFamily: "'GriunMongtori', sans-serif" }}
                className={`text-sm pb-1 border-b-2 transition-all ${
                  active === f.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                {f.label}
              </button>
            )
          )}
        </div>
      </div>

      {/* Timeline feed */}
      <main className="max-w-xl mx-auto px-6 pb-24">
        {grouped.map(([period, items]) => (
          <div key={period} className="mb-16">

            {/* Period marker */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
              <span className="text-xs text-gray-600 tracking-widest" style={{ fontFamily: "'GriunMongtori', sans-serif" }}>{period}</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Cards under timeline line */}
            <div className="pl-5 border-l border-gray-200 space-y-12">
              {items.map(app => (
                <LogCard key={app.id} app={app} />
              ))}
            </div>

          </div>
        ))}

        <footer className="pt-5 border-t border-gray-200 flex items-center justify-between">
          <p className="text-xs text-gray-400 font-mono">계속 실험 중 · minjaja_lab © 2026</p>
          <p className="text-xs text-gray-400 font-mono">🧪</p>
        </footer>
      </main>
    </div>
  )
}
