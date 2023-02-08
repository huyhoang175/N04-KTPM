### Báo Cáo Tuần 2
# Tên nhóm: N04-KTPM (21011604@st.phenikaa-uni.edu.vn)
# Thánh viên:
    1.Nguyễn Huy Hoàng*
    2.Dương Văn Thắng*
    3.Nguyễn thị Hà*
    4.Trần Thị Hồng Ngát*
    5.Ngô Thị Thơm *
    6.Trần Gia Hòa*


### Nội Dung
- Xây dựng Phần mềm quản lý sản xuất nhằm mục đích chuẩn hóa lại quy trình, nâng cao hiệu quả hoạt động sản xuất, tối đa hóa năng suất của máy móc từ đó tối ưu được nguồn lực của đơn vị, đạt được các tiêu chí như sau:
Chuẩn hóa danh mục dữ liệu cho các đối tượng: khách hàng, nhà cung cấp, nguyên vật liệu, công cụ dụng cụ, sản phẩm.
Tổng hợp thông tin và theo dõi tiến độ cụ thể của từng đơn đặt hàng.
Tự động lập kế hoạch sản xuất dựa trên các yêu cầu đặt hàng và định mức quy định tại đơn vị, so sánh thực tế sản xuất với kế hoạch đề ra.
Quản lý hiệu quả khâu nhập xuất kho: nguyên vật liệu, thành phẩm.
Quản lý quy trình sản xuất: tạo lệnh sản xuất trực tiếp trên phần mềm, theo dõi, thống kê lại các thông tin trong quá trình sản xuất theo thời gian thực, đồng thời phục vụ cho việc kiểm tra và giám sát sự cố trong quá trình phát sinh.


## Xây dựng yêu cầu chức năng của hệ thống sản xuất.

Quản lý sản phẩm: cập nhật thông tin sản phẩm, quản lý kho, xác định nguồn cung cấp và giá.
Quản lý nhân viên: thêm, sửa, xoá thông tin nhân viên, quản lý chấm công và lương.
Quản lý tiến độ: theo dõi và cập nhật tiến độ sản xuất, báo cáo vấn đề và giải pháp.
Quản lý chi phí: theo dõi chi phí sản xuất, tính toán lợi nhuận và báo cáo tình hình kinh tế.
Quản lý chất lượng: đảm bảo chất lượng sản phẩm, kiểm tra và báo cáo kết quả chất lượng.
Tích hợp với các hệ thống khác: tích hợp với hệ thống quản lý tài chính, bán hàng và kho.
Bảo mật dữ liệu: bảo vệ dữ liệu quan trọng và cung cấp quyền truy cập riêng tư cho các nhân viên.

|Yêu cầu chức năng| Mô tả chi tiết | 
|---|------|---|---|
|  Quản lý sản phẩm |  - Cập nhật thông tin sản phẩm (tên, mô tả, hình ảnh, giá, ...)<br>- Quản lý kho hàng (nhập, xuất, tồn kho)<br>- Xác định nguồn cung cấp và giá<br>- Tạo báo cáo về sản phẩm    |
|Quản lý nhân viên|- Thêm, sửa, xoá thông tin nhân viên<br>- Quản lý chấm công và lương<br>- Tạo báo cáo về nhân viên|
|Quản lý tiến độ|- Theo dõi và cập nhật tiến độ sản xuất<br>- Báo cáo vấn đề và giải pháp<br>- Tạo báo cáo về tiến độ sản xuất|
|Quản lý chi phí|- Theo dõi chi phí sản xuất<br>- Tính toán lợi nhuận<br>- Tạo báo cáo về tình hình kinh tế|
|Quản lý chất lượng|- Đảm bảo chất lượng sản phẩm<br>- Kiểm tra và báo cáo kết quả chất lượng<br>- Tạo báo cáo về chất lượng|
|Tích hợp hệ thống|- Tích hợp với hệ thống quản lý tài chính, bán hàng và kho|
|Bảo mật dữ liệu|- Bảo vệ dữ liệu quan trọng và cung cấp quyền truy cập riêng tư cho các nhân viên.|

### Tính năng phần mềm lập kế hoạch sản xuất 
# 1. Thiết lập định mức sản xuất:
 
Bao gồm các định mức cần thiết cho sản xuất như:
 
- Định mức nguyên vật liệu sản phẩm (BOM)
 
- Định mức công đoạn sản xuất
 
- Định mức khấu hao vật liệu trên từng công đoạn
 
- Định mức nhân sự
 
- Định mức máy móc thiết bị
 
- Định mức thời gian sản xuất
 
  
# 2. Xây dựng kế hoạch sản xuất chi tiết:
 
Sau khi nhận được thông tin các định mức sản xuất. Hệ thống phần mềm sẽ tự động đối chiếu với tiến độ làm việc từ các hoạt động sản xuất đơn hàng trước. Đối chiếu dữ liệu của các bộ phận khác có liên quan như: Bộ phận kho, bộ phận nhân sự, bộ phận quản lý máy móc thiết bị... Từ đó lập ra một kế hoạch sản xuất chi tiết và tối ưu nhất với tình hình doanh nghiệp hiện tại.
 
![](![](file:///C:/Users/Admin/Documents/a.png)
 
 
# 3. Phát lệnh yêu cầu mua hàng và yêu cầu sản xuất:
 
Sau khi kế hoạch sản xuất được thông qua, hệ thống sẽ tự động phát đi các yêu cầu đến các bộ phận khác, như: Lệnh yêu cầu mua hàng, lệnh yêu cầu sản xuất.
 
Các bộ phận liên quan sẽ nhận được thông tin này ngay lập tức và triển khai độc lập.
 
  
# 4. Báo cáo tiến độ và nhắc việc:
 
Tiến độ làm việc, đáp ứng các lệnh hay tiến độ sản xuất sẽ được cập nhật liên tục lên báo cáo. Giúp nhà quản lý có thể bao quát được tình hình, để kịp thời ra những quyết định điều chỉnh, đôn đốc đúng đắn.
