// Short Film Studio — toàn bộ nội dung chỉnh sửa được nằm ở đây.
// Sửa file này để thêm phim, thành viên ê-kíp, liên hoan phim hoặc ngày quay.
// Không cần backend: trang web là ứng dụng tĩnh React + Vite.

export const studio = {
  name: 'Short Film Studio',
  featuredFilm: 'Midnight Signal',
  tagline: 'Một thành phố lắng nghe giọng nói lẽ ra đã mất.',
  email: 'hello@shortfilmstudio.example',
  location: 'Thành phố Hồ Chí Minh, Việt Nam',
}

export const films = [
  {
    id: 'midnight-signal',
    title: 'Midnight Signal',
    genre: 'Chính kịch / Bí ẩn',
    duration: '12 phút',
    year: 2026,
    status: 'Hậu kỳ',
    statusTone: 'amber',
    logline:
      'Một nhân viên lưu trữ ca đêm phát hiện một bản tin radio đến từ tương lai — và phải quyết định bảo vệ sự thật hay để nó biến mất mãi mãi.',
    director: 'Linh Tran',
  },
  {
    id: 'last-projectionist',
    title: 'The Last Projectionist',
    genre: 'Chính kịch',
    duration: '9 phút',
    year: 2026,
    status: 'Đang sản xuất',
    statusTone: 'blue',
    logline:
      'Một người chiếu phim già giữ một cuộn phim chạy đêm này qua đêm khác cho một khán giả duy nhất, cho đến khi tòa nhà bị bán đi.',
    director: 'Minh Nguyen',
  },
  {
    id: 'neon-alley',
    title: 'Neon Alley',
    genre: 'Giật gân',
    duration: '14 phút',
    year: 2025,
    status: 'Đang chiếu liên hoan',
    statusTone: 'green',
    logline:
      'Một người giao hàng nhận chuyến giao cuối cùng qua con hẻm rực đèn neon và phát hiện một gói hàng gửi cho chính mình — ghi ngày mai.',
    director: 'Linh Tran',
  },
  {
    id: 'rice-field-letters',
    title: 'Rice Field Letters',
    genre: 'Tài liệu',
    duration: '11 phút',
    year: 2025,
    status: 'Hoàn thành',
    statusTone: 'green',
    logline:
      'Những người nông dân ở Đồng bằng sông Cửu Long đọc to những bức thư họ chưa bao giờ gửi, giữa các vụ mùa, ngay trên cánh đồng nơi những bức thư được viết.',
    director: 'Anh Hoàng',
  },
]

export const storyBeats = [
  {
    title: 'Cảnh 01',
    desc: 'Một tín hiệu radio đơn độc xuyên qua tiếng nhiễu. Một giọng nói đã mất từ quá khứ trở lại với hiện tại.',
  },
  {
    title: 'Cảnh 02',
    desc: 'Nhân vật chính đi theo một dấu vết đang mờ dần qua thành phố neon lạnh lẽo và những cầu thang trống vắng.',
  },
  {
    title: 'Cảnh 03',
    desc: 'Khoảnh khắc cuối cùng hé lộ: tín hiệu đó chưa bao giờ là lời cảnh báo — mà là một lời kêu gọi tưởng nhớ.',
  },
]

export const crew = [
  { role: 'Đạo diễn', name: 'Linh Tran', note: 'Midnight Signal, Neon Alley' },
  { role: 'Quay phim', name: 'Minh Nguyen', note: 'The Last Projectionist' },
  { role: 'Dựng phim', name: 'Anh Hoàng', note: 'Rice Field Letters' },
  { role: 'Nhạc sĩ', name: 'Quý Phạm', note: 'Nhạc gốc cho mọi phim' },
  { role: 'Nhà sản xuất', name: 'Thu Nguyen', note: 'Lịch quay & liên hoan phim' },
  { role: 'Thiết kế âm thanh', name: 'Bao Le', note: 'Trộn & hoàn thiện âm thanh' },
]

export const timeline = [
  'Tiền kỳ: hoàn thiện kịch bản và hồ sơ giới thiệu',
  'Sản xuất: khảo sát bối cảnh và quay trong 8 ngày',
  'Hậu kỳ: dựng phim, chỉnh màu, trộn âm thanh và nộp liên hoan phim',
]

// Lịch quay cho phim chính. Giờ là giờ địa phương; giữ lịch tập trung ngắn gọn.
export const shootSchedule = [
  { day: 'Ngày 1', date: 'Thứ 2', scene: 'Phòng lưu trữ — ban đêm', location: 'Studio A', callTime: '17:00', status: 'Đã xong' },
  { day: 'Ngày 2', date: 'Thứ 3', scene: 'Rượt đuổi ở cầu thang neon', location: 'Quận 4', callTime: '19:00', status: 'Đã xong' },
  { day: 'Ngày 3', date: 'Thứ 4', scene: 'Sân thượng — cao trào', location: 'Sân thượng, khu vực Bitexco', callTime: '18:00', status: 'Đã lên lịch' },
  { day: 'Ngày 4', date: 'Thứ 5', scene: 'Hồi tưởng — tiệm radio', location: 'Studio A', callTime: '09:00', status: 'Đã lên lịch' },
  { day: 'Ngày 5', date: 'Thứ 6', scene: 'Quay bổ sung & cảnh chèn', location: 'Studio A', callTime: '10:00', status: 'Dự kiến' },
]

export const shotList = [
  { shot: '1A', setup: 'Toàn cảnh — phòng lưu trữ, Nhi ngồi ở bàn', lens: '35mm', notes: 'Chỉ dùng đèn trong cảnh' },
  { shot: '1B', setup: 'Cận cảnh — núm chỉnh radio, tiếng nhiễu', lens: '85mm', notes: 'Macro, xóa phông mạnh' },
  { shot: '2A', setup: 'Quay theo — đi xuống cầu thang', lens: '24mm', notes: 'Gimbal, quay một lần' },
  { shot: '3A', setup: 'Toàn cảnh — sân thượng, đèn thành phố', lens: '35mm', notes: 'Giờ vàng + giờ xanh' },
  { shot: '3B', setup: 'Cận cảnh — Nhi đang lắng nghe', lens: '85mm', notes: 'Giữ 8 giây' },
]

export const checklists = [
  {
    phase: 'Tiền kỳ',
    items: ['Kịch bản đã chốt', 'Ngân sách đã duyệt', 'Diễn viên đã xác nhận', 'Đã khảo sát bối cảnh', 'Đã xong danh sách cảnh quay', 'Bảo hiểm & giấy phép'],
  },
  {
    phase: 'Sản xuất',
    items: ['Đã gửi lịch tập trung', 'Đã kiểm tra thiết bị', 'Dailies đã sao lưu (2 bản)', 'Đã thu âm tại hiện trường', 'Ảnh liên tục (continuity)'],
  },
  {
    phase: 'Hậu kỳ',
    items: ['Bản dựng thô', 'Chỉnh màu', 'Trộn âm thanh', 'Phụ đề (tiếng Anh / tiếng Việt)', 'Xuất bản chiếu thử cho liên hoan', 'Đã xong bộ tài liệu báo chí'],
  },
]

// Theo dõi nộp liên hoan phim. Trạng thái: Đã nộp / Đang xét duyệt / Được chọn / Bị từ chối / Dự kiến.
export const festivals = [
  { film: 'Neon Alley', festival: 'Busan International Short Film Festival', deadline: '2026-12-15', status: 'Đã nộp' },
  { film: 'Midnight Signal', festival: 'Hanoi International Film Festival', deadline: '2026-11-30', status: 'Đang xét duyệt' },
  { film: 'Rice Field Letters', festival: 'DMZ International Documentary FF', deadline: '2026-12-01', status: 'Được chọn' },
  { film: 'The Last Projectionist', festival: 'Clermont-Ferrand Short FF', deadline: '2027-01-10', status: 'Dự kiến' },
  { film: 'Midnight Signal', festival: 'Sundance Film Festival — Shorts', deadline: '2027-01-20', status: 'Dự kiến' },
]
