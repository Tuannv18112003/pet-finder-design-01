import React, { useMemo, useState } from "react";
import {
  PawPrint,
  Heart,
  Home,
  ShieldCheck,
  Search,
  MapPin,
  CalendarDays,
  ArrowRight,
  Quote,
  Facebook,
  Instagram,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

/**
 * Trang chủ (React + TailwindCSS)
 * - Gợi ý font: Poppins / Quicksand (có thể add vào index.html)
 * - Màu sắc: tông kem - hồng nhạt - nâu đỏ/coral giống bố cục ảnh mẫu
 */

const palette = {
  bg: "#f6eeee", // nền hồng/kem rất nhạt
  surface: "#fffafa", // thẻ trắng ấm
  ink: "#1f1a17", // chữ chính (đen ấm)
  muted: "#6d5f58", // chữ phụ (nâu xám)
  brand: "#b24a3f", // cam/nâu đỏ CTA
  brand2: "#8f3b33", // hover
  soft: "#f2dede", // nền nhấn hồng
  line: "#d9d0cb", // viền nhạt
  mint: "#77b6ad", // xanh viền input
  mintSoft: "#e7f3f1", // nền xanh nhạt
  footer: "#2f6f66", // xanh chủ đạo footer
};

function Badge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
      style={{ borderColor: palette.line, color: palette.muted, background: "rgba(255,255,255,0.7)" }}
    >
      <Icon className="h-4 w-4" style={{ color: palette.brand }} />
      <span>{label}</span>
    </div>
  );
}

function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition active:scale-[0.99] " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
        className
      }
      style={{
        background: palette.brand,
        color: "#fff",
        boxShadow: "0 10px 24px rgba(178, 74, 63, 0.22)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = palette.brand2)}
      onMouseLeave={(e) => (e.currentTarget.style.background = palette.brand)}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
        className
      }
      style={{
        background: "transparent",
        color: palette.footer,
        border: `1px solid ${palette.mint}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = palette.mintSoft;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function PawBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="absolute opacity-[0.08]"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 29) % 100}%`,
            transform: `rotate(${(i * 23) % 360}deg) scale(${0.8 + (i % 5) * 0.12})`,
          }}
        >
          <PawPrint className="h-10 w-10" style={{ color: palette.footer }} />
        </div>
      ))}
    </div>
  );
}

function HeroIllustration() {
  // SVG minh hoạ cute (không cần ảnh ngoài)
  return (
    <svg viewBox="0 0 520 420" className="h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff4f4" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#b24a3f" stopOpacity="0.95" />
          <stop offset="1" stopColor="#8f3b33" stopOpacity="0.95" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* nền blob */}
      <path
        d="M106,110 C76,160 88,250 146,290 C204,330 290,344 362,320 C434,296 498,234 472,164 C446,94 368,52 280,52 C192,52 136,60 106,110 Z"
        fill="url(#g1)"
        filter="url(#soft)"
      />

      {/* người ôm thú cưng (tối giản) */}
      <circle cx="328" cy="150" r="34" fill="#f6d9d2" />
      <path d="M290 170 C305 195 338 204 360 195 C372 190 382 180 388 168" fill="none" stroke="#d7b7b0" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M254 292 C262 238 290 204 338 204 C394 204 428 246 432 292 C436 338 402 364 344 364 C286 364 246 338 254 292 Z"
        fill="#ffffff"
        stroke="#ead7d4"
        strokeWidth="6"
        filter="url(#soft)"
      />

      {/* chó */}
      <g transform="translate(150 220)">
        <path d="M30 120 C20 80 24 52 52 34 C66 24 84 20 102 22 C134 26 154 54 152 92 C150 132 124 152 92 156 C60 160 38 148 30 120 Z" fill="#fff" stroke="#ead7d4" strokeWidth="6" />
        <path d="M42 50 C24 44 14 28 18 16 C22 4 38 6 52 18" fill="#f6d9d2" />
        <path d="M132 54 C152 50 162 34 158 20 C154 6 140 8 126 20" fill="#f6d9d2" />
        <circle cx="78" cy="78" r="6" fill="#1f1a17" />
        <circle cx="112" cy="78" r="6" fill="#1f1a17" />
        <path d="M92 98 C88 104 80 108 72 104" stroke="#1f1a17" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M80 112 C92 126 118 124 126 110" stroke="#b24a3f" strokeWidth="8" strokeLinecap="round" fill="none" />
      </g>

      {/* mèo */}
      <g transform="translate(330 224)">
        <path d="M52 150 C22 134 10 104 20 74 C26 56 40 44 58 38 C70 34 84 34 96 38 C114 44 128 56 134 74 C144 104 132 134 102 150" fill="#fff" stroke="#ead7d4" strokeWidth="6" />
        <path d="M44 52 L28 34 L34 64" fill="#f2dede" stroke="#ead7d4" strokeWidth="6" strokeLinejoin="round" />
        <path d="M110 52 L126 34 L120 64" fill="#f2dede" stroke="#ead7d4" strokeWidth="6" strokeLinejoin="round" />
        <circle cx="64" cy="84" r="6" fill="#1f1a17" />
        <circle cx="100" cy="84" r="6" fill="#1f1a17" />
        <path d="M82 96 L74 104 L90 104 Z" fill="#b24a3f" />
        <path d="M82 106 C70 120 54 120 44 112" stroke="#1f1a17" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M82 106 C94 120 110 120 120 112" stroke="#1f1a17" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>

      {/* icon bay bay */}
      <g opacity="0.85">
        <path d="M110 170 C132 156 148 156 170 170" fill="none" stroke="url(#g2)" strokeWidth="10" strokeLinecap="round" />
        <path d="M100 190 C124 178 150 178 174 190" fill="none" stroke="#77b6ad" strokeWidth="10" strokeLinecap="round" />
        <circle cx="210" cy="128" r="8" fill="#b24a3f" opacity="0.85" />
        <circle cx="232" cy="110" r="6" fill="#77b6ad" opacity="0.85" />
        <circle cx="448" cy="118" r="8" fill="#b24a3f" opacity="0.85" />
        <circle cx="470" cy="136" r="6" fill="#77b6ad" opacity="0.85" />
      </g>
    </svg>
  );
}

const reasons = [
  {
    title: "Cộng đồng lớn mạnh",
    desc: "Hàng ngàn thành viên sẵn sàng chia sẻ và hỗ trợ tìm kiếm.",
    icon: PawPrint,
  },
  {
    title: "Dễ dàng sử dụng",
    desc: "Đăng tin chỉ trong vài bước, tìm kiếm nhanh theo giống – khu vực – thời gian.",
    icon: Home,
  },
  {
    title: "An toàn & Tin cậy",
    desc: "Thông tin được kiểm duyệt, ưu tiên liên hệ minh bạch.",
    icon: ShieldCheck,
  },
  {
    title: "Kết nối bằng yêu thương",
    desc: "Mỗi lượt chia sẻ là thêm một cơ hội để bé được trở về.",
    icon: Heart,
  },
];

const pets = [
  {
    name: "Bông",
    type: "Chó Poodle",
    place: "Quận 1, TP.HCM",
    date: "Hôm nay",
    tag: "Thất lạc",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Miu",
    type: "Mèo tam thể",
    place: "Thủ Đức, TP.HCM",
    date: "2 ngày trước",
    tag: "Cần hỗ trợ",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cà Rốt",
    type: "Chó Corgi",
    place: "Hải Châu, Đà Nẵng",
    date: "3 ngày trước",
    tag: "Đã có manh mối",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Luna",
    type: "Mèo Anh lông ngắn",
    place: "Cầu Giấy, Hà Nội",
    date: "1 tuần trước",
    tag: "Thất lạc",
    image:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=1200&q=80",
  },
];

const blogs = [
  {
    title: "Làm gì ngay khi thú cưng bị lạc?",
    desc: "Checklist 30 phút đầu tiên: gọi – tìm – đăng tin – liên hệ khu vực.",
    readTime: "5 phút",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kinh nghiệm tìm chó mèo hiệu quả",
    desc: "Cách tận dụng camera, nhóm cộng đồng và mẹo thu hút sự chú ý khi đăng bài.",
    readTime: "7 phút",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Những lỗi thường gặp khi đăng tin",
    desc: "Ảnh, mô tả, địa điểm và cách cập nhật manh mối để tăng tỉ lệ tìm thấy.",
    readTime: "6 phút",
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    name: "Chị Hương",
    role: "Chủ nuôi mèo",
    quote:
      "Mình đăng tin buổi sáng, chiều đã có bạn nhắn thấy bé ở gần công viên. Cảm ơn cộng đồng rất nhiều!",
  },
  {
    name: "Anh Tín",
    role: "Tình nguyện viên",
    quote:
      "Giao diện dễ dùng, thông tin rõ ràng. Mỗi ngày mình lướt vài phút là có thể hỗ trợ chia sẻ nhiều ca mới.",
  },
  {
    name: "Bạn Minh",
    role: "Chủ nuôi chó",
    quote:
      "Mình thích phần tìm kiếm nhanh và nút đăng tin nổi bật. Có kiểm duyệt nên yên tâm hơn.",
  },
];

function Stat({ value, label }) {
  return (
    <div
      className="rounded-2xl border p-4 text-center"
      style={{ background: "rgba(255,255,255,0.75)", borderColor: palette.line }}
    >
      <div className="text-2xl font-extrabold" style={{ color: palette.ink }}>
        {value}
      </div>
      <div className="mt-1 text-xs" style={{ color: palette.muted }}>
        {label}
      </div>
    </div>
  );
}

function SoftCard({ children, className = "" }) {
  return (
    <div
      className={"rounded-3xl border bg-white/80 p-6 shadow-sm backdrop-blur " + className}
      style={{ borderColor: palette.line }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Ảnh thật cho banner (cute, sáng)
  const heroImages = useMemo(
    () => ({
      main: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80",
      sub: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
    }),
    []
  );

  return (
    <div className="min-h-screen" style={{ background: palette.bg, color: palette.ink }}>
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b backdrop-blur" style={{ borderColor: "rgba(217,208,203,0.6)", background: "rgba(246,238,238,0.85)" }}>
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Mobile: trái = menu (3 gạch) */}
            <button
              className="md:hidden grid h-10 w-10 place-items-center rounded-2xl border bg-white/60 backdrop-blur transition"
              style={{ borderColor: palette.line }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Mở menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" style={{ color: palette.ink }} />
              ) : (
                <Menu className="h-5 w-5" style={{ color: palette.ink }} />
              )}
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-2xl"
                style={{ background: palette.footer, boxShadow: "0 10px 20px rgba(47,111,102,0.20)" }}
                aria-hidden
              >
                <PawPrint className="h-5 w-5" style={{ color: "#fff" }} />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight sm:text-base" style={{ color: "#fff", textShadow: "0 1px 0 rgba(0,0,0,0.08)" }}>
                  <span className="rounded-full px-3 py-1" style={{ background: palette.footer }}>
                    Mái Ấm Lạc Lối
                  </span>
                </div>
                <div className="hidden text-xs sm:block" style={{ color: palette.muted }}>
                  Kết nối cộng đồng – Tìm bé nhanh hơn
                </div>
              </div>
            </div>

            {/* Desktop actions: phải = Đăng ký/Đăng nhập (text) + nút Đăng tin */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                className="px-2 text-sm font-semibold transition hover:opacity-80"
                style={{ color: palette.ink }}
              >
                Đăng ký / Đăng nhập
              </button>
              <PrimaryButton className="px-4 py-2">
                <PawPrint className="h-4 w-4" />
                Đăng tin tìm kiếm
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="md:hidden border-b"
          style={{ borderColor: "rgba(217,208,203,0.6)", background: "rgba(246,238,238,0.92)" }}
        >
          <Container>
            <div className="py-3 flex flex-col gap-2">
              <button
                className="rounded-2xl px-4 py-3 text-sm font-extrabold"
                style={{ background: palette.brand, color: "#fff" }}
                onClick={() => setMobileOpen(false)}
              >
                Đăng tin tìm kiếm
              </button>
              <button
                className="rounded-2xl px-4 py-3 text-sm font-extrabold"
                style={{ background: palette.brand, color: "#fff" }}
                onClick={() => setMobileOpen(false)}
              >
                Đăng ký / Đăng nhập
              </button>
            </div>
          </Container>
        </div>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden py-10 sm:py-14">
        <PawBackground />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="relative lg:col-span-6">
              <div className="flex flex-wrap gap-2">
                <Badge icon={Heart} label="Đăng tin miễn phí" />
                <Badge icon={ShieldCheck} label="Kiểm duyệt thông tin" />
                <Badge icon={Home} label="Kết nối khu vực" />
              </div>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Tìm về yêu thương, <span style={{ color: palette.brand }}>nối lại</span> những vòng tay.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: palette.muted }}>
                Giúp bạn tìm lại người bạn 4 chân thân yêu. Đăng tin nhanh, tìm kiếm tiện lợi, kết nối cộng đồng tin cậy.
              </p>

              <div
                className="mt-6 flex flex-col gap-3 rounded-3xl border p-4 sm:flex-row sm:items-center"
                style={{ background: "rgba(255,255,255,0.75)", borderColor: palette.mint }}
              >
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: palette.mint }} />
                  <input
                    className="w-full rounded-2xl border bg-white/80 py-3 pl-12 pr-4 text-sm outline-none focus:ring-2"
                    placeholder='Bạn đang tìm kiếm gì? (vd: "chó Poodle", "mèo tam thể")'
                    style={{
                      borderColor: palette.line,
                      color: palette.ink,
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)",
                    }}
                  />
                </div>
                <PrimaryButton className="w-full sm:w-auto">
                  Tìm kiếm ngay
                  <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat value="10k+" label="Thành viên" />
                <Stat value="3k+" label="Ca đã hỗ trợ" />
                <Stat value="24/7" label="Kết nối" />
                <Stat value="98%" label="Phản hồi nhanh" />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative overflow-hidden rounded-[2.25rem] border bg-white/70 p-4 sm:p-6 shadow-sm"
                style={{ borderColor: palette.line }}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full" style={{ background: "rgba(178,74,63,0.10)" }} />
                <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full" style={{ background: "rgba(119,182,173,0.18)" }} />

                {/* Ảnh thật (cute) + decor */}
                <div className="relative grid gap-3 sm:grid-cols-12">
                  <div className="sm:col-span-8">
                    <div className="relative overflow-hidden rounded-3xl border" style={{ borderColor: "rgba(217,208,203,0.7)" }}>
                      <img
                        src={heroImages.main}
                        alt="Thú cưng đáng yêu"
                        className="h-64 w-full object-cover sm:h-72"
                        loading="lazy"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.00), rgba(0,0,0,0.18))" }} />
                      <div className="absolute bottom-3 left-3 right-3 rounded-2xl border bg-white/75 px-3 py-2 backdrop-blur"
                        style={{ borderColor: "rgba(217,208,203,0.7)" }}
                      >
                        <div className="text-sm font-extrabold">Chỉ cần 1 bài đăng — thêm 1000 cơ hội</div>
                        <div className="text-xs" style={{ color: palette.muted }}>Ảnh rõ • địa điểm chuẩn • cập nhật manh mối</div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4 flex sm:flex-col gap-3">
                    <div className="relative flex-1 overflow-hidden rounded-3xl border" style={{ borderColor: "rgba(217,208,203,0.7)" }}>
                      <img
                        src={heroImages.sub}
                        alt="Mèo dễ thương"
                        className="h-28 w-full object-cover sm:h-44"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 rounded-3xl border bg-white/70 p-4"
                      style={{ borderColor: "rgba(217,208,203,0.7)" }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl" style={{ background: palette.soft }}>
                          <Heart className="h-5 w-5" style={{ color: palette.brand }} />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold">Tin cậy & tiện lợi</div>
                          <div className="text-xs" style={{ color: palette.muted }}>
                            Đăng tin nhanh • Dễ chia sẻ
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <GhostButton className="w-full">
                          Xem hướng dẫn
                          <ArrowRight className="h-4 w-4" />
                        </GhostButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section id="why" className="relative py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Vì Sao Bạn Nên Chọn Chúng Tôi?</h2>
              <p className="mt-2 max-w-2xl" style={{ color: palette.muted }}>
                Tập trung vào trải nghiệm dễ dùng – thân thiện – đáng tin. Mỗi ca đăng là một câu chuyện cần được lắng nghe.
              </p>
            </div>
            <div className="flex gap-2">
              <GhostButton>
                Xem cách hoạt động
                <ArrowRight className="h-4 w-4" />
              </GhostButton>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <SoftCard key={r.title} className="h-full">
                <div className="flex items-start gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: palette.soft }}>
                    <r.icon className="h-6 w-6" style={{ color: palette.brand }} />
                  </div>
                  <div>
                    <div className="text-base font-extrabold">{r.title}</div>
                    <div className="mt-1 text-sm leading-relaxed" style={{ color: palette.muted }}>
                      {r.desc}
                    </div>
                  </div>
                </div>
              </SoftCard>
            ))}
          </div>
        </Container>
      </section>

      {/* LATEST PETS */}
      <section id="latest" className="py-12 sm:py-16" style={{ background: "rgba(255,255,255,0.35)" }}>
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Các Trường Hợp Mới Nhất</h2>
              <p className="mt-2 max-w-2xl" style={{ color: palette.muted }}>
                Những bé đang cần cộng đồng giúp đỡ để sớm tìm về mái ấm.
              </p>
            </div>
            <PrimaryButton>
              <PawPrint className="h-4 w-4" />
              Xem tất cả
            </PrimaryButton>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pets.map((p, idx) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-3xl border bg-white/80 shadow-sm transition hover:-translate-y-0.5"
                style={{ borderColor: palette.line }}
              >
                <div className="relative">
                  {/* thumbnail ảnh thật */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} - ${p.type}`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.22))" }} />
                  </div>
                  <div className="absolute left-4 top-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: palette.soft, color: palette.brand }}
                    >
                      <PawPrint className="h-4 w-4" />
                      {p.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 rounded-2xl border bg-white/80 px-3 py-2 backdrop-blur"
                    style={{ borderColor: "rgba(217,208,203,0.7)" }}
                  >
                    <div className="text-sm font-extrabold">
                      {p.name} <span className="font-semibold" style={{ color: palette.muted }}>— {p.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-col gap-2 text-sm" style={{ color: palette.muted }}>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" style={{ color: palette.footer }} />
                      <span>{p.place}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" style={{ color: palette.footer }} />
                      <span>{p.date}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <GhostButton className="px-4 py-2 text-xs">
                      Xem chi tiết
                      <ArrowRight className="h-4 w-4" />
                    </GhostButton>
                    <button
                      className="grid h-10 w-10 place-items-center rounded-2xl border transition"
                      style={{ borderColor: palette.line, background: "rgba(255,255,255,0.65)" }}
                      title="Chia sẻ"
                      onMouseEnter={(e) => (e.currentTarget.style.background = palette.mintSoft)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.65)")}
                    >
                      <Heart className="h-5 w-5" style={{ color: palette.brand }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Mẹo Hữu Ích & Câu Chuyện Cảm Động</h2>
              <p className="mt-2 max-w-2xl" style={{ color: palette.muted }}>
                Khu vực SEO: chia sẻ kiến thức, kinh nghiệm, và câu chuyện để tăng cơ hội tìm thấy.
              </p>
            </div>
            <GhostButton>
              Tất cả bài viết
              <ArrowRight className="h-4 w-4" />
            </GhostButton>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {blogs.map((b, idx) => (
              <div
                key={b.title}
                className="group overflow-hidden rounded-3xl border bg-white/80 shadow-sm transition hover:-translate-y-0.5"
                style={{ borderColor: palette.line }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.00) 45%, rgba(0,0,0,0.30))" }} />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: "rgba(255,255,255,0.75)", color: palette.footer, border: `1px solid ${palette.line}` }}
                    >
                      <CalendarDays className="h-4 w-4" />
                      {b.readTime}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-base font-extrabold leading-snug">{b.title}</div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: palette.muted }}>
                    {b.desc}
                  </p>

                  <div className="mt-4">
                    <button
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                      style={{ background: palette.mintSoft, color: palette.footer }}
                    >
                      Đọc thêm
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-16" style={{ background: "rgba(47,111,102,0.06)" }}>
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Cảm Nghĩ Người Dùng</h2>
              <p className="mt-2 max-w-2xl" style={{ color: palette.muted }}>
                Những phản hồi thật để bạn yên tâm đăng tin và nhờ cộng đồng hỗ trợ.
              </p>
            </div>
            <div className="hidden md:flex">
              <Badge icon={ShieldCheck} label="Minh bạch – Tôn trọng – Hỗ trợ" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <SoftCard key={t.name} className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-extrabold">{t.name}</div>
                    <div className="text-xs" style={{ color: palette.muted }}>
                      {t.role}
                    </div>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-2xl" style={{ background: palette.soft }}>
                    <Quote className="h-5 w-5" style={{ color: palette.brand }} />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: palette.muted }}>
                  “{t.quote}”
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ background: palette.brand }} />
                  <div className="h-2 w-2 rounded-full" style={{ background: palette.mint }} />
                  <div className="h-2 w-2 rounded-full" style={{ background: palette.line }} />
                </div>
              </SoftCard>
            ))}
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="mt-6" style={{ background: palette.footer, color: "#fff" }}>
        <Container>
          <div className="grid gap-10 py-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl" style={{ background: "rgba(255,255,255,0.14)" }}>
                  <PawPrint className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-extrabold tracking-tight">Mái Ấm Lạc Lối</div>
                  <div className="text-sm opacity-90">Tìm bé nhanh hơn, bằng sự tử tế của cộng đồng.</div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm opacity-95">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Hotline: 1900 0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Email: support@maiamlacloi.vn</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  className="grid h-10 w-10 place-items-center rounded-2xl transition hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.14)" }}
                  href="#"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  className="grid h-10 w-10 place-items-center rounded-2xl transition hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.14)" }}
                  href="#"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm font-extrabold">Liên kết</div>
              <ul className="mt-4 space-y-3 text-sm opacity-95">
                <li>
                  <a className="hover:opacity-90" href="#why">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90" href="#latest">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90" href="#blog">
                    Blog / Câu chuyện
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="text-sm font-extrabold">Chính sách</div>
              <ul className="mt-4 space-y-3 text-sm opacity-95">
                <li>
                  <a className="hover:opacity-90" href="#">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90" href="#">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-90" href="#">
                    Quy trình kiểm duyệt
                  </a>
                </li>
              </ul>

              {/* <div className="mt-6 rounded-3xl p-5" style={{ background: "rgba(255,255,255,0.12)" }}>
                <div className="text-sm font-extrabold">Nhận thông báo ca mới</div>
                <div className="mt-1 text-sm opacity-90">Mỗi tuần một bản tin nhỏ để bạn kịp thời hỗ trợ.</div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    className="w-full flex-1 rounded-2xl border bg-white/90 px-4 py-3 text-sm text-black outline-none"
                    placeholder="Email của bạn"
                    style={{ borderColor: "rgba(255,255,255,0.35)" }}
                  />
                  <button
                    className="rounded-2xl px-5 py-3 text-sm font-extrabold"
                    style={{ background: "#fff", color: palette.footer }}
                  >
                    Đăng ký
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          <div className="border-t py-6 text-sm opacity-95" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
            © {new Date().getFullYear()} Mái Ấm Lạc Lối. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}
