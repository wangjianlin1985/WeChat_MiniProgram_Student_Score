package com.chengxusheji.po;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;
import org.json.JSONException;
import org.json.JSONObject;
import com.client.utils.JsonUtils;
import com.client.utils.SessionConsts;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class Course {
    /*课程编号*/
    @NotEmpty(message="课程编号不能为空")
    private String courseNo;
    public String getCourseNo(){
        return courseNo;
    }
    public void setCourseNo(String courseNo){
        this.courseNo = courseNo;
    }

    /*课程名称*/
    @NotEmpty(message="课程名称不能为空")
    private String courseName;
    public String getCourseName() {
        return courseName;
    }
    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    /*课程照片*/
    private String coursePhoto;
    public String getCoursePhoto() {
        return coursePhoto;
    }
    public void setCoursePhoto(String coursePhoto) {
        this.coursePhoto = coursePhoto;
    }

    private String coursePhotoUrl;
    public void setCoursePhotoUrl(String coursePhotoUrl) {
		this.coursePhotoUrl = coursePhotoUrl;
	}
	public String getCoursePhotoUrl() {
		return  SessionConsts.BASE_URL + coursePhoto;
	}
    /*课程简介*/
    @NotEmpty(message="课程简介不能为空")
    private String courseMemo;
    public String getCourseMemo() {
        return courseMemo;
    }
    public void setCourseMemo(String courseMemo) {
        this.courseMemo = courseMemo;
    }

    /*任课教师*/
    @NotEmpty(message="任课教师不能为空")
    private String teacherName;
    public String getTeacherName() {
        return teacherName;
    }
    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    /*总课时*/
    @NotNull(message="必须输入总课时")
    private Integer courseCount;
    public Integer getCourseCount() {
        return courseCount;
    }
    public void setCourseCount(Integer courseCount) {
        this.courseCount = courseCount;
    }

    /*课程学分*/
    @NotNull(message="必须输入课程学分")
    private Float courseScore;
    public Float getCourseScore() {
        return courseScore;
    }
    public void setCourseScore(Float courseScore) {
        this.courseScore = courseScore;
    }

    /*上课教室*/
    @NotEmpty(message="上课教室不能为空")
    private String coursePlace;
    public String getCoursePlace() {
        return coursePlace;
    }
    public void setCoursePlace(String coursePlace) {
        this.coursePlace = coursePlace;
    }

    @JsonIgnore
    public JSONObject getJsonObject() throws JSONException {
    	JSONObject jsonCourse=new JSONObject(); 
		jsonCourse.accumulate("courseNo", this.getCourseNo());
		jsonCourse.accumulate("courseName", this.getCourseName());
		jsonCourse.accumulate("coursePhoto", this.getCoursePhoto());
		jsonCourse.accumulate("courseMemo", this.getCourseMemo());
		jsonCourse.accumulate("teacherName", this.getTeacherName());
		jsonCourse.accumulate("courseCount", this.getCourseCount());
		jsonCourse.accumulate("courseScore", this.getCourseScore());
		jsonCourse.accumulate("coursePlace", this.getCoursePlace());
		return jsonCourse;
    }

    @Override
	public String toString() {
		return JsonUtils.toJson(this);
	}
}