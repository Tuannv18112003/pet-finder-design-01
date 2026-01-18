import React, { useState } from 'react';
import { 
  Search, 
  PawPrint, 
  Heart, 
  Home, 
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
  QrCode
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
    }
  ];

  // Dữ liệu giả lập cho Đánh giá khách hàng
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
      content: "Một nền tảng tuyệt vời cho những người yêu động vật. Giao diện rất dễ dùng, giúp việc chia sẻ thông tin cứu hộ nhanh chóng hơn bao giờ hết.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Cô Thu Thủy",
      role: "Chủ nuôi bé Mochi",
      content: "Cảm ơn đội ngũ đã hỗ trợ tôi đăng tin. Sự tin cậy và tận tâm của các bạn là niềm hy vọng cho những người lạc mất thú cưng như tôi.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Quicksand',sans-serif] relative">
      
      {/* Background Decor: Paw Prints (Z-index thấp để nằm dưới nội dung) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <PawPrint className="absolute top-[15%] left-[10%] rotate-12" size={40} />
        <PawPrint className="absolute top-[40%] right-[15%] -rotate-12" size={60} />
        <PawPrint className="absolute bottom-[25%] left-[20%] rotate-45" size={30} />
        <PawPrint className="absolute top-[70%] left-[5%] -rotate-12" size={50} />
      </div>

      {/* Header Section */}
      <header className="bg-[#008080] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-white p-2 rounded-full shadow-inner">
              <PawPrint className="text-[#008080]" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight">Mái Ấm Lạc Lối</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#" className="hover:text-orange-300 transition-colors">Blog & Câu chuyện</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Đăng nhập</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
              Đăng tin tìm kiếm
            </button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#006666] px-6 py-8 flex flex-col gap-5 border-t border-[#009999]">
            <a href="#" className="text-xl font-medium">Blog & Câu chuyện</a>
            <a href="#" className="text-xl font-medium">Đăng nhập</a>
            <button className="bg-orange-500 text-white px-6 py-4 rounded-2xl font-bold shadow-lg">
              Đăng tin tìm kiếm
            </button>
          </div>
        )}
      </header>

      {/* 1. Banner Section: Tìm về yêu thương */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
              Tìm về yêu thương, <br />
              <span className="text-[#008080]">nối vòng tay lớn.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Giúp bạn tìm lại người bạn 4 chân thân yêu. Đăng tin miễn phí, kết nối cộng đồng yêu thú cưng lớn nhất Việt Nam.
            </p>
            
            {/* Search Input Box */}
            <div className="bg-white p-2 rounded-[35px] shadow-2xl border-4 border-teal-50 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto lg:mx-0">
              <div className="flex-1 flex items-center px-6 gap-3">
                <Search className="text-[#008080]" size={28} />
                <input 
                  type="text" 
                  placeholder="Bạn đang tìm kiếm gì?"
                  className="w-full py-5 outline-none text-gray-700 bg-transparent text-lg font-medium"
                />
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-[28px] font-bold text-xl shadow-lg transition-all transform hover:-translate-y-1">
                Tìm kiếm ngay
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px]">
              {/* Main Illustration Photo */}
              <div className="rounded-[80px] overflow-hidden shadow-2xl border-[15px] border-white rotate-2 transition-transform hover:rotate-0 duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&auto=format&fit=crop" 
                  alt="Pet Love" 
                  className="w-full h-[550px] object-cover"
                />
              </div>
              {/* Decorative Blur Blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vì sao bạn nên chọn chúng tôi */}
      <section className="py-24 bg-teal-50/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">Vì Sao Bạn Nên Chọn Chúng Tôi?</h2>
            <div className="w-24 h-2 bg-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-12 rounded-[50px] shadow-sm text-center border border-white hover:shadow-2xl transition-all group">
              <div className="bg-orange-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Users size={48} className="group-hover:text-white text-orange-600" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Cộng đồng lớn mạnh</h3>
              <p className="text-gray-600 leading-relaxed">Hàng ngàn thành viên sẵn sàng giúp đỡ chia sẻ thông tin tìm kiếm.</p>
            </div>
            <div className="bg-white p-12 rounded-[50px] shadow-sm text-center border border-white hover:shadow-2xl transition-all group">
              <div className="bg-orange-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Home size={48} className="group-hover:text-white text-orange-600" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Dễ dàng sử dụng</h3>
              <p className="text-gray-600 leading-relaxed">Đăng tin nhanh chóng, tìm kiếm hiệu quả chỉ trong vài phút thao tác.</p>
            </div>
            <div className="bg-white p-12 rounded-[50px] shadow-sm text-center border border-white hover:shadow-2xl transition-all group">
              <div className="bg-orange-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <CheckCircle size={48} className="group-hover:text-white text-orange-600" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">An toàn & Tin cậy</h3>
              <p className="text-gray-600 leading-relaxed">Mọi thông tin đều được đội ngũ quản trị kiểm duyệt kỹ càng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Các trường hợp mới nhất */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900">Các Trường Hợp Mới Nhất</h2>
              <p className="text-gray-500 mt-3 text-lg">Đang chờ đợi sự giúp đỡ của bạn để được về nhà</p>
            </div>
            <button className="bg-teal-50 text-[#008080] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-teal-100 transition-all">
              Xem tất cả bé <ArrowRight size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {pets.map(pet => (
              <div key={pet.id} className="bg-white rounded-[50px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all group transform hover:-translate-y-3">
                <div className="h-80 overflow-hidden relative">
                  <img src={pet.image} alt={pet.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">Khẩn cấp</div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-black text-gray-900">{pet.name}</h3>
                      <p className="text-[#008080] font-black text-lg">{pet.breed}</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-2xl text-red-500 cursor-pointer hover:bg-red-500 hover:text-white transition-all">
                      <Heart size={28} />
                    </div>
                  </div>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <MapPin size={22} className="text-teal-500" />
                      <span>{pet.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <Calendar size={22} className="text-teal-500" />
                      <span>Lạc ngày: {pet.date}</span>
                    </div>
                  </div>
                  <button className="w-full py-5 bg-[#008080] text-white font-bold rounded-2xl text-xl shadow-lg shadow-teal-100 hover:bg-[#006666] transition-all">
                    Xem chi tiết bé
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bạn vừa mới nhìn thấy một bé thất lạc? (QR Code Section) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#008080] rounded-[60px] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 text-white shadow-2xl relative overflow-hidden">
            <PawPrint className="absolute -top-16 -right-16 text-white/10" size={300} />
            
            <div className="flex-1 text-center md:text-left z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 italic leading-tight">Bạn vừa mới nhìn thấy <br />một bé thất lạc?</h2>
              <p className="text-teal-50 text-xl opacity-90 mb-12 max-w-2xl leading-relaxed">
                Hành động nhỏ của bạn có thể mang lại niềm hy vọng lớn lao cho gia đình của bé. Chụp ảnh bé và báo tin ngay cho cộng đồng qua mã QR.
              </p>
              
              {/* QR Code Card */}
              <div className="bg-white p-10 rounded-[50px] inline-flex flex-col items-center gap-6 text-gray-900 shadow-2xl border-4 border-teal-400 transform hover:scale-105 transition-transform">
                <div className="bg-teal-50 p-6 rounded-[35px] shadow-inner">
                  <QrCode size={160} className="text-[#008080]" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-400 text-sm uppercase tracking-widest mb-4">Quét để báo tin</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-black text-lg shadow-xl flex items-center gap-3">
                    <QrCode size={24} />
                    Quét mã QR ngay
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 hidden lg:flex justify-center z-10">
               <div className="w-80 h-80 rounded-full border-[12px] border-dashed border-teal-400/50 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                 <Heart size={140} className="text-orange-400 drop-shadow-2xl" fill="currentColor" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mẹo hữu ích và câu truyện cảm động */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Mẹo Hữu Ích & Câu Chuyện Cảm Động</h2>
            <div className="w-32 h-2 bg-[#008080] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Blog Post 1 */}
            <div className="bg-white p-6 rounded-[50px] shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-8 hover:shadow-2xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&auto=format&fit=crop" 
                className="w-full sm:w-56 h-56 object-cover rounded-[40px] shadow-md" 
                alt="Tip 1" 
              />
              <div className="pr-6 py-4">
                <h3 className="text-2xl font-black mb-4 leading-snug">Làm gì khi thú cưng bị lạc?</h3>
                <p className="text-gray-500 text-base mb-8 leading-relaxed">Những bước quan trọng đầu tiên giúp bạn tăng cơ hội tìm lại người bạn nhỏ nhanh nhất.</p>
                <button className="text-[#008080] font-black flex items-center gap-2 group">
                  Đọc câu chuyện <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white p-6 rounded-[50px] shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-8 hover:shadow-2xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&auto=format&fit=crop" 
                className="w-full sm:w-56 h-56 object-cover rounded-[40px] shadow-md" 
                alt="Tip 2" 
              />
              <div className="pr-6 py-4">
                <h3 className="text-2xl font-black mb-4 leading-snug">Tìm bé Meow sau 1 năm</h3>
                <p className="text-gray-500 text-base mb-8 leading-relaxed">Câu chuyện đầy cảm động về sự kiên trì và niềm tin kỳ diệu của một người chủ trẻ.</p>
                <button className="text-[#008080] font-black flex items-center gap-2 group">
                  Đọc câu chuyện <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Khách hàng nói gì? */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Khách hàng nói gì?</h2>
            <p className="text-gray-500 text-lg">Hàng trăm gia đình đã tìm lại được hạnh phúc trọn vẹn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map(item => (
              <div key={item.id} className="bg-white p-12 rounded-[60px] shadow-sm border border-gray-50 relative group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <Quote className="absolute top-12 right-12 text-orange-100" size={80} />
                <div className="flex gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-orange-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-800 italic mb-12 leading-loose font-medium text-lg">"{item.content}"</p>
                <div className="flex items-center gap-5">
                  <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-3xl object-cover shadow-xl border-2 border-white" />
                  <div>
                    <h4 className="font-black text-xl text-gray-900">{item.name}</h4>
                    <p className="text-[#008080] text-sm font-black uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#008080] text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20 text-center md:text-left">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="bg-white p-2 rounded-2xl shadow-inner">
                  <PawPrint className="text-[#008080]" size={28} />
                </div>
                <span className="text-3xl font-black">Mái Ấm Lạc Lối</span>
              </div>
              <p className="text-teal-100 text-lg leading-relaxed mb-10">
                Nơi kết nối tình thương, mang niềm vui trở lại cho mọi gia đình yêu quý thú cưng trên khắp Việt Nam.
              </p>
              <div className="flex gap-5 justify-center md:justify-start">
                <a href="#" className="w-14 h-14 bg-teal-700 hover:bg-orange-500 rounded-2xl flex items-center justify-center transition-all shadow-lg transform hover:-translate-y-1">
                  <Facebook size={28} />
                </a>
                <a href="#" className="w-14 h-14 bg-teal-700 hover:bg-orange-500 rounded-2xl flex items-center justify-center transition-all shadow-lg transform hover:-translate-y-1">
                  <Instagram size={28} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-2xl mb-10 border-l-4 border-orange-400 pl-5">Dịch vụ</h4>
              <ul className="space-y-5 text-teal-100 font-medium text-lg">
                <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all">Tìm thú thất lạc</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all">Đăng tin khẩn cấp</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all">Cộng đồng hỗ trợ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-2xl mb-10 border-l-4 border-orange-400 pl-5">Thông tin</h4>
              <ul className="space-y-5 text-teal-100 font-medium text-lg">
                <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all">Mẹo hữu ích</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all">Điều khoản & Bảo mật</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-2xl mb-10 border-l-4 border-orange-400 pl-5">Liên hệ</h4>
              <div className="bg-teal-700 p-8 rounded-[40px] shadow-inner">
                <p className="font-bold text-white mb-3 text-sm tracking-widest uppercase">Tổng đài 24/7</p>
                <p className="text-orange-400 text-3xl font-black mb-6">1900-PET-FIND</p>
                <p className="text-teal-200 text-sm font-medium italic">support@maiamlacloi.vn</p>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-700 pt-12 text-center text-teal-300 text-sm font-bold tracking-wide uppercase opacity-70">
            <p>&copy; 2026 Mái Ấm Lạc Lối - Nơi nối lại những vòng tay. Designed with ❤️</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;