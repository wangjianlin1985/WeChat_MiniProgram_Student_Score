package com.chengxusheji.po;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;
import org.json.JSONException;
import org.json.JSONObject;
import com.client.utils.JsonUtils;
import com.client.utils.SessionConsts;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class ScoreInfo {
    /*成绩编号*/
    private Integer scoreId;
    public Integer getScoreId(){
        return scoreId;
    }
    public void setScoreId(Integer scoreId){
        this.scoreId = scoreId;
    }

    /*考察学生*/
    private Student studentNumber;
    public Student getStudentNumber() {
        return studentNumber;
    }
    public void setStudentNumber(Student studentNumber) {
        this.studentNumber = studentNumber;
    }

    /*考察课程*/
    private Course courseNo;
    public Course getCourseNo() {
        return courseNo;
    }
    public void setCourseNo(Course courseNo) {
        this.courseNo = courseNo;
    }

    /*成绩得分*/
    @NotNull(message="必须输入成绩得分")
    private Float score;
    public Float getScore() {
        return score;
    }
    public void setScore(Float score) {
        this.score = score;
    }

    /*学生评价*/
    @NotEmpty(message="学生评价不能为空")
    private String evaluate;
    public String getEvaluate() {
        return evaluate;
    }
    public void setEvaluate(String evaluate) {
        this.evaluate = evaluate;
    }

    @JsonIgnore
    public JSONObject getJsonObject() throws JSONException {
    	JSONObject jsonScoreInfo=new JSONObject(); 
		jsonScoreInfo.accumulate("scoreId", this.getScoreId());
		jsonScoreInfo.accumulate("studentNumber", this.getStudentNumber().getStudentName());
		jsonScoreInfo.accumulate("studentNumberPri", this.getStudentNumber().getStudentNumber());
		jsonScoreInfo.accumulate("courseNo", this.getCourseNo().getCourseName());
		jsonScoreInfo.accumulate("courseNoPri", this.getCourseNo().getCourseNo());
		jsonScoreInfo.accumulate("score", this.getScore());
		jsonScoreInfo.accumulate("evaluate", this.getEvaluate());
		return jsonScoreInfo;
    }

    @Override
	public String toString() {
		return JsonUtils.toJson(this);
	}
}