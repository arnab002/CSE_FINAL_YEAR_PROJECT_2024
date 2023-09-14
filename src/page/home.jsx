import { Component, Fragment } from "react";
import Footer from "../component/layout/footer-4";
import HeaderTwo from "../component/layout/header";
import AboutTwo from "../component/section/about-2";
import AchievementTwo from "../component/section/achievement";
import BannerTwo from "../component/section/banner-2";
import Blog from "../component/section/blog";
import CategoryTwo from "../component/section/category-3";
import CourseTwo from "../component/section/course";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";


const HomeTwo = () => {
    return (
        <Fragment>
            <HeaderTwo />
            <BannerTwo />
            <AboutTwo />
            {/* <CourseTwo /> */}
            <CategoryTwo />
            <Instructor />
            {/* <Student /> */}
            <Skill />
            <AchievementTwo />
            {/* <Blog /> */}
            <Footer />
        </Fragment>
    );
}
 
export default HomeTwo;