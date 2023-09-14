
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";


const courseList = [
    {
        imgUrl: 'assets/images/course/01.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: '6th Semester',
        reviewCount: '03 reviews',
        title: 'Computer Networking',
        totalLeson: '18x Lesson',
        schdule: 'Offline Classroom',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Pradipta Roy',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/02.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: '6th Semester',
        reviewCount: '03 reviews',
        title: 'DBMS',
        totalLeson: '18x Lesson',
        schdule: 'Offline Classroom',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Lora Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/03.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: '5th Semester',
        reviewCount: '03 reviews',
        title: 'Artificial Intelligence',
        totalLeson: '18x Lesson',
        schdule: 'Offline Classroom',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Robot Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/04.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: '5th Semester',
        reviewCount: '03 reviews',
        title: 'Image Processing',
        totalLeson: '18x Lesson',
        schdule: 'Offline Classroom',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Zinat Zaara',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/05.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: '6th Semester',
        reviewCount: '03 reviews',
        title: 'Pattern Recognition',
        totalLeson: '18x Lesson',
        schdule: 'Offline Classroom',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Rajib Raj',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/06.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        cate: '6th Semester',
        reviewCount: '03 reviews',
        title: 'Operating Systems',
        totalLeson: '18x Lesson',
        schdule: 'Offine Classroom',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Angel Mili',
        btnText: 'Read More',
    },
]

const Course = () => {
    return (
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                        {courseList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="course-content">
                                            {/* <div className="course-price">{val.price}</div> */}
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <a href="#">{val.cate}</a>
                                                </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                    <span className="ratting-count"> {val.reviewCount}</span>
                                                </div>
                                            </div>
                                            <Link to="/course-single"><h4>{val.title}</h4></Link>
                                            <div className="course-details">
                                                <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                                <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                            </div>
                                            {/* <div className="course-footer">
                                                <div className="course-author">
                                                    <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
                                                    <Link to="/team-single" className="ca-name">{val.authorName}</Link>
                                                </div>
                                                <div className="course-btn">
                                                    <Link to="/course-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Course;