# GIT - DOCUMENT-1
### 1. Git init
- Dùng để khởi tạo repo local, Thực hiện duy nhất một lần khi bắt đầu một dự án mới hoàn toàn trên máy tính
- Khi chạy lệnh này, Git sẽ tạo ra một thư mục ẩn tên là .git trong thư mục hiện tại. Thư mục này chứa toàn bộ cấu hình, lịch sử và siêu dữ liệu (metadata) cần thiết để Git theo dõi các thay đổi.
- Ý nghĩa: Dùng để biến một thư mục thông thường trên máy tính thành một kho lưu trữ Git mới (Local Git Repository).
### 2. Git add
- git add <file name>, git add .,: dùng để đưa file từ working directory sang staging area
- git add <file name>: add 1 file cụ thể
- git add .: add tất cả các file trong thư mục hiện tại
### 3. Git commit -m"message"
 - Lưu chính thức các file đang nằm trong Staging Area thành bản ghi vĩnh viễn trên kho lưu trữ Git ở máy local.