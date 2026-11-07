# GIT - DOCUMENT-2
a. Sau khi tạo 3 file1,2,3 --> 3 file thuộc working directory, Git chưa quản lý thư mục này nên chúng chưa được theo dõi (Untracked).

b. Sau khi chạy lệnh git init: Git đã khởi tạo kho lưu trữ (.git). Git bắt đầu nhận diện thấy sự xuất hiện của 3 file này nhưng trạng thái của chúng vẫn là Untracked vì chưa dùng lệnh add 
--> 3 file thuộc working directory.

c. git commit -m"init project" ==> Không có gì xảy ra vì chưa có file nào được ad, chưa có gì để commit.
--> 3 file thuộc working directory.

d. git add file1 --> add file 1 vào staging area, file2,3 vẫn thuộc working directory

e. git commit -m"add file1" --> file1 được lưu chính thức vào Local Repository, file2,3 vẫn thuộc working directory

f. git commit -m"add file" --> Không có gì xảy ra vì staging are trống, file1 đã commit rồi còn file2,3 chưa được add, vùng staging area không có gì để commit.
 --> file1 đã được lưu chính thức vào Local Repository, file2,3 vẫn thuộc working directory
