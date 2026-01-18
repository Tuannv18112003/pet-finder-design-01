import React, { useState } from 'react';
import { 
  Search, 
  PawPrint, 
  Heart, 
  Users, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Facebook, 
  Instagram, 
  Menu, 
  X,
  ArrowRight,
  Quote,
  Star,
  QrCode,
  ShieldCheck,
  Zap,
  BookOpen,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dữ liệu giả lập cho Thú cưng
  const pets = [
    {
      id: 1,
      name: "Bông",
      breed: "Chó Poodle",
      location: "Quận 1, TP.HCM",
      date: "15/01/2026",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Mochi",
      breed: "Mèo Anh Lông Ngắn",
      location: "Quận 7, TP.HCM",
      date: "14/01/2026",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Lu",
      breed: "Chó Corgi",
      location: "Quận Cầu Giấy, Hà Nội",
      date: "12/01/2026",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Xíu",
      breed: "Mèo Mướp",
      location: "Quận Ninh Kiều, Cần Thơ",
      date: "17/01/2026",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop"
    }
  ];

  // Dữ liệu Blog với hình ảnh
  const blogs = [
    {
      id: 1,
      title: "Làm gì khi bé đi lạc?",
      desc: "Các bước đầu tiên cực kỳ quan trọng giúp tăng cơ hội tìm lại bé nhanh nhất.",
      image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=500&auto=format&fit=crop",
      tag: "Hướng dẫn"
    },
    {
      id: 2,
      title: "Tìm Lu sau 1 năm thất lạc",
      desc: "Câu chuyện đầy cảm động về sự kiên trì và niềm tin không bao giờ tắt của người chủ.",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&auto=format&fit=crop",
      tag: "Câu chuyện"
    },
    {
      id: 3,
      title: "Cách đăng tin hiệu quả",
      desc: "Bí quyết sử dụng hình ảnh và từ khóa để bài viết tiếp cận đúng người cần gặp.",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=500&auto=format&fit=crop",
      tag: "Mẹo nhỏ"
    },
    {
      id: 4,
      title: "Tình nguyện viên tiêu biểu",
      desc: "Gặp gỡ những con người thầm lặng đã giúp kết nối hàng trăm gia đình.",
      image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?w=500&auto=format&fit=crop",
      tag: "Cộng đồng"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Chị Minh Anh",
      role: "Chủ nuôi bé Lu",
      content: "Nhờ Mái Ấm Lạc Lối mà mình đã tìm lại được bé Corgi sau 2 ngày thất lạc. Cộng đồng ở đây thực sự rất nhiệt tình và tử tế!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Anh Hoàng Nam",
      role: "Tình nguyện viên",
      content: "Một nền tảng tuyệt vời cho những người yêu động vật. Giao diện rất dễ dùng, giúp việc chia sẻ thông tin cứu hộ nhanh chóng.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Cô Thu Thủy",
      role: "Chủ nuôi bé Mochi",
      content: "Cảm ơn đội ngũ đã hỗ trợ tôi đăng tin. Sự tin cậy và tận tâm của các bạn là niềm hy vọng cho những người lạc mất thú cưng.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Quicksand',sans-serif] relative overflow-x-hidden">
      
      {/* Header Section */}
      <header className="bg-[#008080] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-12 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-white p-1.5 md:p-2 rounded-full shadow-inner">
              <PawPrint className="text-[#008080] w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">Mái Ấm Lạc Lối</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">
            <a href="#" className="hover:text-orange-300 transition-colors text-sm lg:text-base">Blog & Câu chuyện</a>
            <a href="#" className="hover:text-orange-300 transition-colors text-sm lg:text-base">Đăng nhập</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full font-bold shadow-xl transition-all hover:scale-105">
              Đăng tin
            </button>
          </nav>

          <button className="md:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* 1. Banner Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Tìm về yêu thương, <br className="hidden sm:block" />
              <span className="text-[#008080]">nối vòng tay lớn.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Giúp bạn tìm lại người bạn 4 chân thân yêu. Đăng tin miễn phí, kết nối cộng đồng yêu thú cưng lớn nhất Việt Nam.
            </p>
            
            <div className="bg-white p-1.5 md:p-2 rounded-[25px] sm:rounded-[35px] shadow-2xl border-2 sm:border-4 border-teal-50 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto lg:mx-0">
              <div className="flex-1 flex items-center px-4 sm:px-6 gap-3 py-1 sm:py-0">
                <Search className="text-[#008080]" size={24} />
                <input 
                  type="text" 
                  placeholder="Bạn đang tìm kiếm gì?"
                  className="w-full py-3 sm:py-5 outline-none text-gray-700 bg-transparent text-sm sm:text-lg font-medium"
                />
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-[20px] sm:rounded-[28px] font-bold text-base sm:text-xl shadow-lg transition-all active:scale-95">
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]">
              <div className="rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl border-[10px] lg:border-[15px] border-white rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&auto=format&fit=crop" 
                  alt="Pet Love" 
                  className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vì Sao Nên Chọn Chúng Tôi? */}
      <section className="py-16 md:py-24 bg-teal-50/40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Vì Sao Nên Chọn Chúng Tôi?</h2>
            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-[35px] shadow-sm text-center border border-white hover:shadow-xl transition-all">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                <Users size={32} />
              </div>
              <h3 className="text-lg font-extrabold mb-3">Cộng đồng lớn</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Hàng ngàn thành viên sẵn sàng giúp đỡ chia sẻ thông tin.</p>
            </div>
            <div className="bg-white p-8 rounded-[35px] shadow-sm text-center border border-white hover:shadow-xl transition-all">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                <Zap size={32} />
              </div>
              <h3 className="text-lg font-extrabold mb-3">Thông tin nhanh</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Hệ thống thông báo tức thời đến các khu vực lân cận.</p>
            </div>
            <div className="bg-white p-8 rounded-[35px] shadow-sm text-center border border-white hover:shadow-xl transition-all">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-extrabold mb-3">Tin cậy tuyệt đối</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Đội ngũ quản trị kiểm duyệt tin đăng nghiêm ngặt 24/7.</p>
            </div>
            <div className="bg-white p-8 rounded-[35px] shadow-sm text-center border border-white hover:shadow-xl transition-all">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-lg font-extrabold mb-3">Hoàn toàn miễn phí</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Sứ mệnh của chúng tôi là mang các bé trở về nhà an toàn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trường Hợp Mới Nhất */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 gap-4 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Trường Hợp Mới Nhất</h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-lg font-medium">Đang chờ sự giúp đỡ của bạn để về nhà</p>
            </div>
            <button className="text-[#008080] font-bold flex items-center gap-2 hover:underline group">
              Xem tất cả <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pets.map(pet => (
              <div key={pet.id} className="bg-white rounded-[35px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Khẩn cấp</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 leading-none">{pet.name}</h3>
                      <p className="text-[#008080] text-sm font-bold mt-1">{pet.breed}</p>
                    </div>
                    <Heart size={20} className="text-red-500 cursor-pointer" />
                  </div>
                  <div className="space-y-2 mb-6 flex-grow text-gray-600 text-xs font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-teal-500 shrink-0" />
                      <span className="truncate">{pet.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-teal-500 shrink-0" />
                      <span>Lạc ngày: {pet.date}</span>
                    </div>
                  </div>
                  <button className="w-full py-3.5 bg-[#008080] text-white text-sm font-bold rounded-2xl hover:bg-[#006666] transition-all shadow-md">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QR Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-[#008080] rounded-[40px] md:rounded-[60px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-10 md:gap-16 text-white shadow-2xl relative overflow-hidden">
            <div className="flex-1 text-center lg:text-left z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-6 italic leading-tight tracking-tight">Bạn vừa mới thấy <br />một bé thất lạc?</h2>
              <p className="text-teal-50 text-base sm:text-xl opacity-90 mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
                Chỉ mất 30 giây để chụp ảnh và báo tin. Bạn có thể là cứu tinh đưa bé về lại với gia đình mình ngay hôm nay.
              </p>
              
              <div className="bg-white p-6 sm:p-10 rounded-[35px] sm:rounded-[50px] inline-flex flex-col items-center gap-4 sm:gap-6 text-gray-900 shadow-2xl border-4 border-teal-400">
                <div className="bg-teal-50 p-4 sm:p-6 rounded-[25px] sm:rounded-[35px]">
                  <QrCode className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-[#008080]" />
                </div>
                <button className="bg-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-black text-sm sm:text-lg shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                  <QrCode size={20} />
                  Quét QR báo tin ngay
                </button>
              </div>
            </div>
            <div className="flex-1 hidden lg:flex justify-center z-10">
               <div className="w-64 h-64 xl:w-80 xl:h-80 rounded-full border-[8px] border-dashed border-teal-400/50 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                 <Heart size={100} className="text-orange-400" fill="currentColor" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mẹo & Câu Chuyện - Thay icon bằng hình ảnh */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Mẹo & Câu Chuyện</h2>
            <div className="w-20 h-1.5 bg-[#008080] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {blogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-[35px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-[#008080] px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">{blog.tag}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-black mb-3 text-gray-900 group-hover:text-[#008080] transition-colors">{blog.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">{blog.desc}</p>
                  <button className="text-[#008080] text-sm font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    Xem thêm <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cảm Nghĩ Người Dùng */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Cảm Nghĩ Người Dùng</h2>
            <p className="text-gray-500 text-sm sm:text-base font-medium">Hàng trăm bé đã được về nhà nhờ cộng đồng</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map(item => (
              <div key={item.id} className="bg-white p-8 md:p-10 rounded-[40px] md:rounded-[50px] shadow-sm border border-gray-100 relative h-full flex flex-col">
                <Quote className="absolute top-8 right-8 text-orange-100 opacity-50" size={50} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-orange-400" fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed font-medium flex-grow text-sm sm:text-base">"{item.content}"</p>
                <div className="flex items-center gap-4 border-t pt-6">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-2xl object-cover shadow-md" />
                  <div>
                    <h4 className="font-black text-gray-900 text-sm sm:text-base leading-none">{item.name}</h4>
                    <p className="text-[#008080] text-[10px] sm:text-xs font-black uppercase tracking-widest mt-1.5">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section - Đã căn chỉnh lại khoảng cách */}
      <footer className="bg-[#008080] text-white pt-16 md:pt-20 pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
            {/* Cột 1: Thông tin thương hiệu (4/12) */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-white p-1.5 rounded-xl"><PawPrint className="text-[#008080]" size={20} /></div>
                <span className="text-2xl font-black tracking-tight">Mái Ấm Lạc Lối</span>
              </div>
              <p className="text-teal-100 text-sm leading-relaxed mb-6 max-w-sm">
                Nối kết tình thương, mang niềm vui trở lại cho mọi gia đình yêu quý thú cưng trên khắp Việt Nam. Chúng tôi hoạt động phi lợi nhuận vì cộng đồng.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-teal-700 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-teal-700 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 bg-teal-700 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all"><MessageCircle size={18} /></a>
              </div>
            </div>

            {/* Cột 2: Link nhanh (2/12) */}
            <div className="md:col-span-3 lg:col-span-2">
              <h4 className="font-black text-lg mb-5 border-l-4 border-orange-400 pl-3 leading-none">Dịch vụ</h4>
              <ul className="space-y-3 text-teal-100 text-sm font-medium">
                <li><a href="#" className="hover:text-orange-300 transition-colors">Tìm thú lạc</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Đăng tin khẩn</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Nhận nuôi</a></li>
              </ul>
            </div>

            {/* Cột 3: Hỗ trợ (2/12) */}
            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-black text-lg mb-5 border-l-4 border-orange-400 pl-3 leading-none">Hỗ trợ</h4>
              <ul className="space-y-3 text-teal-100 text-sm font-medium">
                <li><a href="#" className="hover:text-orange-300 transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Mẹo hữu ích</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Chính sách</a></li>
              </ul>
            </div>

            {/* Cột 4: Liên hệ (4/12) */}
            <div className="md:col-span-12 lg:col-span-4">
              <h4 className="font-black text-lg mb-5 border-l-4 border-orange-400 pl-3 leading-none">Liên hệ</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-teal-700/50 p-4 rounded-2xl border border-teal-600/50">
                   <div className="bg-orange-500 p-2 rounded-lg"><Phone size={18} /></div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-wider opacity-70 leading-none mb-1">Hotline miễn phí</p>
                     <p className="font-black text-xl leading-none">1900-PET-FIND</p>
                   </div>
                </div>
                <div className="flex items-center gap-3 px-2">
                  <Mail size={16} className="text-orange-400" />
                  <p className="text-sm font-medium text-teal-50">support@maiamlacloi.vn</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-teal-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-teal-300 text-[10px] font-bold tracking-widest uppercase">
            <p>&copy; 2026 Mái Ấm Lạc Lối. Tất cả quyền được bảo lưu.</p>
            <p className="flex items-center gap-1">Designed with <Heart size={10} className="text-red-400" fill="currentColor" /> for pets</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;