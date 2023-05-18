<%@ page language="java"  contentType="text/html;charset=UTF-8"%>
<jsp:include page="../check_logstate.jsp"/> 
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/course.css" /> 

<div id="course_manage"></div>
<div id="course_manage_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="course_manage_tool.edit();">修改</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="course_manage_tool.remove();">删除</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="course_manage_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="course_manage_tool.redo();">取消选择</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-export" plain="true" onclick="course_manage_tool.exportExcel();">导出到excel</a>
	</div>
	<div style="padding:0 0 0 7px;color:#333;">
		<form id="courseQueryForm" method="post">
			课程编号：<input type="text" class="textbox" id="courseNo" name="courseNo" style="width:110px" />
			课程名称：<input type="text" class="textbox" id="courseName" name="courseName" style="width:110px" />
			任课教师：<input type="text" class="textbox" id="teacherName" name="teacherName" style="width:110px" />
			上课教室：<input type="text" class="textbox" id="coursePlace" name="coursePlace" style="width:110px" />
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="course_manage_tool.search();">查询</a>
		</form>	
	</div>
</div>

<div id="courseEditDiv">
	<form id="courseEditForm" enctype="multipart/form-data"  method="post">
		<div>
			<span class="label">课程编号:</span>
			<span class="inputControl">
				<input class="textbox" type="text" id="course_courseNo_edit" name="course.courseNo" style="width:200px" />
			</span>
		</div>
		<div>
			<span class="label">课程名称:</span>
			<span class="inputControl">
				<input class="textbox" type="text" id="course_courseName_edit" name="course.courseName" style="width:200px" />

			</span>

		</div>
		<div>
			<span class="label">课程照片:</span>
			<span class="inputControl">
				<img id="course_coursePhotoImg" width="200px" border="0px"/><br/>
    			<input type="hidden" id="course_coursePhoto" name="course.coursePhoto"/>
				<input id="coursePhotoFile" name="coursePhotoFile" type="file" size="50" />
			</span>
		</div>
		<div>
			<span class="label">课程简介:</span>
			<span class="inputControl">
				<textarea id="course_courseMemo_edit" name="course.courseMemo" rows="8" cols="60"></textarea>

			</span>

		</div>
		<div>
			<span class="label">任课教师:</span>
			<span class="inputControl">
				<input class="textbox" type="text" id="course_teacherName_edit" name="course.teacherName" style="width:200px" />

			</span>

		</div>
		<div>
			<span class="label">总课时:</span>
			<span class="inputControl">
				<input class="textbox" type="text" id="course_courseCount_edit" name="course.courseCount" style="width:80px" />

			</span>

		</div>
		<div>
			<span class="label">课程学分:</span>
			<span class="inputControl">
				<input class="textbox" type="text" id="course_courseScore_edit" name="course.courseScore" style="width:80px" />

			</span>

		</div>
		<div>
			<span class="label">上课教室:</span>
			<span class="inputControl">
				<input class="textbox" type="text" id="course_coursePlace_edit" name="course.coursePlace" style="width:200px" />

			</span>

		</div>
	</form>
</div>
<script type="text/javascript" src="Course/js/course_manage.js"></script> 
