# Short Film Studio

Trang web giới thiệu phim ngắn và quản lý sản xuất phim bằng tiếng Việt — làm bằng
React 18 + Vite 5. Phim chính: **Midnight Signal** (phim ngắn 12 phút, thể loại
chính kịch / bí ẩn).

## Trang web có gì

- **Danh mục phim** — 4 phim ngắn (Midnight Signal, The Last Projectionist,
  Neon Alley, Rice Field Letters) với bộ lọc theo thể loại, thời lượng, năm sản
  xuất và trạng thái.
- **Câu chuyện** — tóm tắt nội dung và 3 cảnh storyboard của phim chính.
- **Kế hoạch sản xuất** — bảng lịch quay, danh sách cảnh quay và checklist
  tiền kỳ / sản xuất / hậu kỳ có thể tích chọn (lưu trong trình duyệt).
- **Theo dõi liên hoan phim** — phim nào đã gửi đi đâu, hạn nộp và trạng thái.
- **Ê-kíp & liên hệ** — danh sách ê-kíp và form liên hệ có kiểm tra dữ liệu
  (mở ứng dụng email của khách với tin nhắn soạn sẵn — không cần máy chủ).

## Chạy thử

```bash
npm install
npm run dev      # mở http://localhost:3000
npm run build    # build bản production vào thư mục dist/
npm run preview  # xem thử bản production
```

Cần Node.js 18 trở lên.

## Sửa nội dung

Toàn bộ nội dung chỉnh sửa được nằm trong **`src/data.js`**:

| Muốn đổi gì | Sửa ở đâu trong `src/data.js` |
| --- | --- |
| Thêm / sửa phim | `films` |
| Các cảnh storyboard | `storyBeats` |
| Thành viên ê-kíp | `crew` |
| Ngày quay | `shootSchedule` |
| Cảnh quay | `shotList` |
| Checklist | `checklists` |
| Nộp liên hoan phim | `festivals` |
| Tên studio, email, địa điểm | `studio` |

Cấu trúc trang nằm trong `src/main.jsx`; giao diện nằm trong `src/styles.css`
(phong cách điện ảnh, tông tối, chữ Cormorant Garamond + Inter).

## Cấu trúc dự án

```
index.html          # trang chính, nạp font chữ
vite.config.js      # cấu hình Vite (máy chủ dev chạy ở cổng 3000)
src/
  main.jsx          # ứng dụng React: trang chính, phim, storyboard, kế hoạch, liên hoan, liên hệ
  data.js           # toàn bộ nội dung chỉnh sửa được (phim, ê-kíp, lịch quay, liên hoan)
  styles.css        # giao diện điện ảnh tông tối, hiển thị tốt trên điện thoại
```

## Đăng web

`npm run build` tạo thư mục tĩnh `dist/` — có thể đăng lên GitHub Pages,
Netlify, Vercel hoặc bất kỳ máy chủ tĩnh nào. Repo này đang chạy trực tiếp trên
GitHub Pages tại https://binhnguyen25.github.io/short-film-studio/ — mỗi lần
đẩy code lên nhánh main, trang web tự build và cập nhật lại.

## English summary

A Vietnamese-language cinematic portfolio and production-planning website for
short films (React 18 + Vite 5). Featured project: **Midnight Signal**
(12-minute drama / mystery). Includes a films catalogue with genre filter,
storyboard beats, shoot schedule, shot list, interactive checklists, a festival
submission tracker, and a validated contact form. All content is editable in
`src/data.js`; no backend is needed.
