import {Link} from "react-router-dom";
import "./Footer.css"
export default function Footer(){
    return(
        <div className="footer">
            <div className="row-foo">
                <div className="row-1">
                    <div className="row-1-head">
                        <span>DMCA Protection</span>
                        <div class="disable-bottom-line"></div>
                    </div>
                    <p>Phim hoạt hình tổng hợp từ nhiều nguồn.</p>
                    <p>All the video content found on the PhimTuoiTho.Tv is not hosted on our servers 
                        nor is created or uploaded by us. PhimTuoiTho.Tv simply acts as a search engine that finds
                        videos from websites like TMDB, IMDB, YouTube, DailyMotion, Metacafe and other video portals.
                        PhimTuoiTho.Tv&nbsp;is not responsible for external websites content. If you find that some
                        of the content violates your rights you may request for that content to be brought down at
                        the host that is responsible for the content. That will ensure that the content is removed
                        from PhimTuoiTho.Tv&nbsp;and other search engines that may have indexed the Content.</p>
                </div>
                <div className="row-2">
                    <div className="row-2-head">
                        <span>About</span>
                        <div class="disable-bottom-line"></div>
                    </div>
                    <p>Truy cập website là đồng nghĩa với việc bạn đã chấp nhận các quy định của web tại <a href="http://phimtuoitho.tv/page/dieu-khoan-su-dung-va-noi-quy" target="_blank">Điều Khoản Sử Dụng &amp; Nội Quy</a> và&nbsp;<a href="http://phimtuoitho.tv/page/dieu-khoan-su-dung-va-noi-quy" target="_blank">Khiếu Nại Bản Quyền</a></p>
                    <p>Phim Tuổi Thơ Beta đang hoạt động thử nghiệm, chờ cấp giấy phép MXH.</p>
                </div>
                <div className="row-3">
                     <div className="row-3-head">
                        <span>Liên hệ quản trị viên</span>
                        <div class="disable-bottom-line"></div>
                    </div>
                    <p>Support: admin@phimtuoitho.tv</p>
                </div>
            </div>
        </div>
    );
}
