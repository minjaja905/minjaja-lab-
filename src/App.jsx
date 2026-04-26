import { useState } from 'react'

const apps = [
  {
    id: 11,
    emoji: '🗺️',
    title: '트렌디 푸드맵',
    year: '2026.04',
    category: 'life',
    description: '네이버 DataLab 트렌드 분석으로 지금 뜨는 음식을 발굴하고, GPS 기반으로 주변 매장을 실시간 탐색하는 큐레이션 지도 앱',
    log: '뭐 먹을지 고민하다가 만들어봤는데 오히려 더 많이 찾아보게 됨 ㅋ',
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
    description: '취소할 기차표를 양도하고, 다음에 쓸 수 있는 패스로 교환하는 플랫폼. 우리 기차 편하게 타요.',
    log: '기차표 바꾸기가 너무 불편해서 이번 달에 뚝딱 만들어봤다',
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
    description: '로컬에 저장된 영상 파일을 실시간으로 감지해 팀 공유 클라우드에 자동 업로드하는 무인 자동화 시스템',
    log: '매번 수동으로 올리는 게 너무 귀찮아서 아예 자동으로 만들어버렸다',
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
    title: '기자실 이메일 자동 전달 시스템',
    year: '2026.04',
    category: 'work',
    description: '매일 수신하는 대용량 첨부파일을 정규식으로 파싱해 기자실에 자동 전달하는 자동화 시스템',
    log: '하루에 수십 통씩 오는 이메일을 손으로 전달하다 지쳐서 만든 것',
    tags: ['Google Apps Script', 'Gmail API', 'Google Sheets'],
    color: '#FFFBEB',
    url: 'https://script.google.com/macros/s/AKfycbzPIMT833V8qo_eah5FMIiEkXQBHCCohwCNBrnqw2TG-6nIlzlF5zmgBaE8ndKB9Ahv/exec',
  },
  {
    id: 3,
    emoji: '💍',
    title: '인터랙티브 모바일 청첩장',
    year: '2026.04',
    category: 'life',
    description: '반려묘 퍼스널컬러 브랜딩 + RSVP 자동화, 풀스택 바이브코딩으로 기성 플랫폼 이상의 UI 구현',
    log: '친구 청첩장 만들어줬는데 기성 플랫폼보다 낫다고 다들 놀람',
    tags: ['Lovable', 'v0.dev', 'Claude', 'Supabase'],
    color: '#FFF7ED',
    url: 'https://wedding-invitation-mj.vercel.app/',
  },
  {
    id: 4,
    emoji: '👊',
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
    title: '카드뉴스 자동화 시스템',
    year: '2026.02',
    category: 'life',
    description: '밈 및 카드뉴스 제작을 위한 React 기반 웹 앱 · 이미지 배경 제거 및 압축 파일 처리 기능 포함',
    log: '밈 하나 만들 때마다 포토샵 켜는 게 피곤해서 만든 업무 도구',
    tags: ['React', 'Claude Code', 'Vercel'],
    color: '#F5F3FF',
    url: 'https://cardnews-app-pi.vercel.app/',
  },
  {
    id: 12,
    emoji: '📺',
    title: '유튜브 채널 편성표',
    year: '2025.12',
    category: 'work',
    format: 'notion',
    description: 'Notion 데이터베이스로 유튜브 채널의 월간 콘텐츠 편성을 기획하고 실시간으로 팀과 공유하는 콘텐츠 스케줄링 시스템',
    log: '팀 전체가 같은 편성표 보려고 구축한 노션 시스템',
    tags: ['Notion', 'YouTube', 'Database'],
    color: '#F5F0FF',
    url: null,
  },
  {
    id: 1,
    emoji: '🗓️',
    title: '맞춤형 일정 관리 웹앱',
    year: '2025.12',
    category: 'life',
    description: '구글 Gemini로 나만의 업무 루틴에 최적화된 일정 관리 웹 앱 직접 개발 및 배포',
    log: '시중 앱이 내 루틴에 안 맞아서 그냥 직접 만들어버렸다',
    tags: ['Gemini', 'Google Sheets', 'Vercel'],
    color: '#FFF1F2',
    url: 'https://daily-roadmap-todos-d92u.vercel.app/',
  },
  {
    id: 6,
    emoji: '📋',
    title: '작업물 기록 자동화',
    year: '2025.11',
    category: 'work',
    format: 'sheet',
    description: '영상 제작 요청·진행률 실시간 트래킹 및 SUMPRODUCT 기반 월간 성과 자동 집계 시스템',
    log: '영상이 몇 편인지 헷갈려서 만든 집계 시트',
    tags: ['Google Apps Script', 'Google Sheets'],
    color: '#ECFDF5',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSVH9KmqZJASA-8X5Wn96xsiej5Dfa8fmiREQjtp0Jo6ITB69YxepTB5E9PduXyr2kdlRqtlEphTXrg/pubhtml',
  },
  {
    id: 7,
    emoji: '📈',
    title: '글로벌 경제지표 트래커',
    year: '2025.10',
    category: 'work',
    format: 'sheet',
    description: '실시간 API 연동으로 거시경제 지표와 개인 자산을 한눈에 보는 올인원 트래킹 시트',
    log: '매달 환율이랑 지표 찾아보기 귀찮아서 한 페이지로 모았다',
    tags: ['Google Sheets', 'API 연동'],
    color: '#EFF6FF',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxq-mX6ACRv7pWKgkqThk_6VAHuoknBBS-J_7LgyQwk1hO4ocWaEg1I1bztW2gcBb0MF2hQbxv__mp/pubhtml',
  },
  {
    id: 8,
    emoji: '✈️',
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
  const isSheet = app.format === 'sheet'
  const isNotion = app.format === 'notion'
  const catLabel = app.category === 'life' ? 'Life' : 'Work'
  const catColor = app.category === 'life' ? 'text-indigo-400' : 'text-amber-500'

  const tagStyle = isSheet
    ? 'bg-emerald-50 text-emerald-700'
    : isNotion
    ? 'bg-violet-50 text-violet-700'
    : 'bg-gray-100 text-gray-500'

  const formatBadge = isSheet ? (
    <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">스프레드시트</span>
  ) : isNotion ? (
    <span className="text-[11px] font-medium text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">Notion</span>
  ) : null

  const linkLabel = isSheet ? '시트 열기' : isNotion ? '노션 열기' : '열어보기'
  const linkColor = isSheet
    ? 'text-emerald-600 hover:text-emerald-800'
    : isNotion
    ? 'text-violet-600 hover:text-violet-800'
    : 'text-gray-700 hover:text-indigo-600'

  return (
    <div className="group">
      {/* Thumbnail */}
      <div
        className="rounded-2xl h-52 flex items-center justify-center select-none mb-4 overflow-hidden"
        style={{ backgroundColor: app.color }}
      >
        {app.flow ? (
          <div className="flex items-center gap-2 px-6">
            {app.flow.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-[10px] text-gray-500 text-center whitespace-pre-line leading-tight">
                    {step.label}
                  </span>
                </div>
                {i < app.flow.length - 1 && (
                  <span className="text-gray-300 text-sm mb-4">→</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <span className="text-6xl">{app.emoji}</span>
        )}
      </div>

      {/* Category + format */}
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-[11px] font-semibold uppercase tracking-wide ${catColor}`}>{catLabel}</span>
        {formatBadge}
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-900 text-[17px] leading-snug mb-2">{app.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{app.description}</p>

      {/* Log comment */}
      {app.log && (
        <p className="text-sm text-gray-400 italic mb-4">"{app.log}"</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {app.tags.map(tag => (
          <span key={tag} className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${tagStyle}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      {app.url ? (
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-[13px] font-medium transition-colors ${linkColor}`}
        >
          {linkLabel}
          <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
        </a>
      ) : (
        <span className="text-[13px] text-gray-300">
          {app.format === 'notion' ? '내부 운영' : '로컬 실행'}
        </span>
      )}
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? apps : apps.filter(a => a.category === active)
  const grouped = groupByPeriod(filtered)

  return (
    <div className="min-h-screen bg-[#F9F8F5]" style={{ fontFamily: "'Pretendard', sans-serif" }}>

      {/* Header */}
      <header className="max-w-xl mx-auto px-6 pt-14 pb-10">
        <div className="flex items-center justify-between pb-4 border-b-2 border-gray-900 mb-8">
          <span className="text-xs font-mono tracking-wide text-gray-600 uppercase">
            Issue No.{apps.length} · 2026
          </span>
          <span className="text-xs font-mono tracking-wide text-gray-500 uppercase">
            AI Vibe Coding Lab
          </span>
        </div>

        <h1
          className="text-7xl text-gray-900 tracking-tight leading-[0.9] mb-1"
          style={{ fontFamily: "'AnsangsuBold', sans-serif" }}
        >
          minjaja
        </h1>
        <h1
          className="text-7xl text-gray-900 tracking-tight leading-[0.9] mb-6"
          style={{ fontFamily: "'AnsangsuBold', sans-serif" }}
        >
          _lab
        </h1>

        <p
          className="text-sm text-gray-600 leading-relaxed mb-4"
          style={{ fontFamily: "'AnsangsuBold', sans-serif" }}
        >
          일과 일상을 더 편하게 만들기 위해<br />
          AI와 함께 만들고 실험한 것들
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/minjaja.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ↗ @minjaja.pdf
          </a>
          <a
            href="https://www.instagram.com/min_jaja_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ↗ @min_jaja_
          </a>
        </div>
      </header>

      {/* Filter */}
      <div className="max-w-xl mx-auto px-6 mb-10">
        <div className="flex gap-6">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              style={{ fontFamily: "'AnsangsuBold', sans-serif" }}
              className={`text-sm pb-1 border-b-2 transition-all ${
                active === f.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline feed */}
      <main className="max-w-xl mx-auto px-6 pb-24">
        {grouped.map(([period, items]) => (
          <div key={period} className="mb-16">

            {/* Period marker */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
              <span className="text-xs font-mono text-gray-600 tracking-widest">{period}</span>
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
