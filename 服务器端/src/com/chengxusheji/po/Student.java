package com.chengxusheji.po;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;
import org.json.JSONException;
import org.json.JSONObject;
import com.client.utils.JsonUtils;
import com.client.utils.SessionConsts;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class Student {
    /*学号*/
    @NotEmpty(message="学号不能为空")
    private String studentNumber;
    public String getStudentNumber(){
        return studentNumber;
    }
    public void setStudentNumber(String studentNumber){
        this.studentNumber = studentNumber;
    }

    /*学生密码*/
    @NotEmpty(message="学生密码不能为空")
    private String password;
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    /*所在班级*/
    private ClassInfo classInfoId;
    public ClassInfo getClassInfoId() {
        return classInfoId;
    }
    public void setClassInfoId(ClassInfo classInfoId) {
        this.classInfoId = classInfoId;
    }

    /*姓名*/
    @NotEmpty(message="姓名不能为空")
    private String studentName;
    public String getStudentName() {
        return studentName;
    }
    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    /*性别*/
    @NotEmpty(message="性别不能为空")
    private String sex;
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }

    /*学生照片*/
    private String photoUrl;
    public String getPhotoUrl() {
        return photoUrl;
    }
    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    private String photoUrlUrl;
    public void setPhotoUrlUrl(String photoUrlUrl) {
		this.photoUrlUrl = photoUrlUrl;
	}
	public String getPhotoUrlUrl() {
		return  SessionConsts.BASE_URL + photoUrl;
	}
    /*出生日期*/
    @NotEmpty(message="出生日期不能为空")
    private String birthday;
    public String getBirthday() {
        return birthday;
    }
    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    /*政治面貌*/
    private String zzmm;
    public String getZzmm() {
        return zzmm;
    }
    public void setZzmm(String zzmm) {
        this.zzmm = zzmm;
    }

    /*联系电话*/
    private String telephone;
    public String getTelephone() {
        return telephone;
    }
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    /*家庭地址*/
    private String address;
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    @JsonIgnore
    public JSONObject getJsonObject() throws JSONException {
    	JSONObject jsonStudent=new JSONObject(); 
		jsonStudent.accumulate("studentNumber", this.getStudentNumber());
		jsonStudent.accumulate("password", this.getPassword());
		jsonStudent.accumulate("classInfoId", this.getClassInfoId().getClassName());
		jsonStudent.accumulate("classInfoIdPri", this.getClassInfoId().getClassNo());
		jsonStudent.accumulate("studentName", this.getStudentName());
		jsonStudent.accumulate("sex", this.getSex());
		jsonStudent.accumulate("photoUrl", this.getPhotoUrl());
		jsonStudent.accumulate("birthday", this.getBirthday().length()>19?this.getBirthday().substring(0,19):this.getBirthday());
		jsonStudent.accumulate("zzmm", this.getZzmm());
		jsonStudent.accumulate("telephone", this.getTelephone());
		jsonStudent.accumulate("address", this.getAddress());
		return jsonStudent;
    }

    @Override
	public String toString() {
		return JsonUtils.toJson(this);
	}
}