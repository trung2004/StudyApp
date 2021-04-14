import { Component, OnInit } from '@angular/core';
import { Lesson } from '../_models/lesson';
import { Pagination } from '../_models/pagination';

@Component({
  selector: 'app-list-lesson',
  templateUrl: './list-lesson.component.html',
  styleUrls: ['./list-lesson.component.css']
})
export class ListLessonComponent implements OnInit {
  lessons: Lesson [];
  pageNumber = 1;
  pageSize = 5;
  pagination: Pagination;
  constructor() { }

  ngOnInit(): void {
    this.loadLesson();
  }
  loadLesson() {
    this.lessons = [
      {
        title: "Công Phá Đề Thi Học Sinh Giỏi Chuyên Đề Toán Rời Rạc Và Tổ Hợp",
        photos: "https://salt.tikicdn.com/cache/w444/media/catalog/product/8/6/864750751806_1.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/cong-pha-de-thi-hoc-sinh-gioi-chuyen-de-toan-roi-rac-va-to-hop-2015-p469651.html?src=ss-organic"
      },
      {
        title: "Bài Tập Tiếng Anh 11 (Có Đáp Án)",
        photos: "https://salt.tikicdn.com/cache/w444/ts/product/1b/46/86/89eaddca85240f3989a46b093da4b257.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bai-tap-tieng-anh-11-co-dap-an-p4077669.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
      {
        title: "Bộ Đề Thi Tổ Hợp THPT Khoa Học Xã Hội Lịch Sử - Địa Lí - Giáo Dục Công Dân",
        photos: "https://salt.tikicdn.com/cache/280x280/ts/product/ff/c4/a5/2f3c1bc3c3a3980a67d19b882e67b191.jpg",
        like: 10,
        dislike: 0,
        link: "https://tiki.vn/bo-de-thi-to-hop-thpt-khoa-hoc-xa-hoi-lich-su-dia-li-giao-duc-cong-dan-p4541275.html?src=ss-organic"
      },
    ];
  }
  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadLesson();
  }
}
