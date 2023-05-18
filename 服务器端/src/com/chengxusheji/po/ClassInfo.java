package com.chengxusheji.po;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;
import org.json.JSONException;
import org.json.JSONObject;
import com.client.utils.JsonUtils;
import com.client.utils.SessionConsts;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class ClassInfo {
    /*班级编号*/
    @NotEmpty(message="班级编号不能为空")
    private String classNo;
    public String getClassNo(){
        return classNo;
    }
    public void setClassNo(String classNo){
        this.classNo = classNo;
    }

    /*班级名称*/
    @NotEmpty(message="班级名称不能为空")
    private String className;
    public String getClassName() {
        return className;
    }
    public void setClassName(String className) {
        this.className = className;
    }

    /*班主任姓名*/
    private String banzhuren;
    public String getBanzhuren() {
        return banzhuren;
    }
    public void setBanzhuren(String banzhuren) {
        this.banzhuren = banzhuren;
    }

    /*成立日期*/
    @NotEmpty(message="成立日期不能为空")
    private String beginDate;
    public String getBeginDate() {
        return beginDate;
    }
    public void setBeginDate(String beginDate) {
        this.beginDate = beginDate;
    }

    @JsonIgnore
    public JSONObject getJsonObject() throws JSONException {
    	JSONObject jsonClassInfo=new JSONObject(); 
		jsonClassInfo.accumulate("classNo", this.getClassNo());
		jsonClassInfo.accumulate("className", this.getClassName());
		jsonClassInfo.accumulate("banzhuren", this.getBanzhuren());
		jsonClassInfo.accumulate("beginDate", this.getBeginDate().length()>19?this.getBeginDate().substring(0,19):this.getBeginDate());
		return jsonClassInfo;
    }

    @Override
	public String toString() {
		return JsonUtils.toJson(this);
	}
}