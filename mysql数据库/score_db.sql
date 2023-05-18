/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : score_db

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2019-10-18 12:04:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `username` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('a', 'a');

-- ----------------------------
-- Table structure for `t_classinfo`
-- ----------------------------
DROP TABLE IF EXISTS `t_classinfo`;
CREATE TABLE `t_classinfo` (
  `classNo` varchar(20) NOT NULL COMMENT 'classNo',
  `className` varchar(20) NOT NULL COMMENT '班级名称',
  `banzhuren` varchar(20) DEFAULT NULL COMMENT '班主任姓名',
  `beginDate` varchar(20) DEFAULT NULL COMMENT '成立日期',
  PRIMARY KEY (`classNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_classinfo
-- ----------------------------
INSERT INTO `t_classinfo` VALUES ('BJ001', '计算机3班', '王志涛', '2019-10-03');
INSERT INTO `t_classinfo` VALUES ('BJ002', '计算机4班', '王晓光', '2019-10-08');

-- ----------------------------
-- Table structure for `t_course`
-- ----------------------------
DROP TABLE IF EXISTS `t_course`;
CREATE TABLE `t_course` (
  `courseNo` varchar(20) NOT NULL COMMENT 'courseNo',
  `courseName` varchar(20) NOT NULL COMMENT '课程名称',
  `coursePhoto` varchar(60) NOT NULL COMMENT '课程照片',
  `courseMemo` varchar(800) NOT NULL COMMENT '课程简介',
  `teacherName` varchar(20) NOT NULL COMMENT '任课教师',
  `courseCount` int(11) NOT NULL COMMENT '总课时',
  `courseScore` float NOT NULL COMMENT '课程学分',
  `coursePlace` varchar(20) NOT NULL COMMENT '上课教室',
  PRIMARY KEY (`courseNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_course
-- ----------------------------
INSERT INTO `t_course` VALUES ('KC001', 'PHP网站开发', 'upload/6ac977eb-16fc-45fc-ba7c-912302fbad87.jpg', '本书内容充实条理，结构严谨，对PHP的功能进行了循序渐进有层次的讲解。书中所列举案例的选择均突出知识点的实际应用性，并配合有TIPS技巧讲解，让读者能快速掌握HTML关键技能。\r\n\r\n全书共分为22章，包括PHP基础入门、流程控制语句、字符串的操作、PHP数组、正则表达式、JavaScript交互、日期与时间、Cookie与Session、图形图像处理技术、文件系统、面向对象、PHP加密技术、MySQL数据库基础、PHP+MySQL数据库、PHP与XML技术、PHP与Ajax技术、Smarty模板技术、ThinkPHP框架\')', '张晓彤', '36', '3.5', '6A-203');
INSERT INTO `t_course` VALUES ('KC002', '微信小程序开发', 'upload/887b3db0-24b2-48ce-ad82-6e00efb664f0.jpg', '微信小程序可以实现App软件的原生交互操作效果，无需安装卸载，解放用户手机内存。商家使用微信小程序也可以被更多用户找到自己的产品，成为有利的宣传。', '黄鑫', '40', '4', '6B-101');
INSERT INTO `t_course` VALUES ('KC003', '高等数学', 'upload/2ced6960-bc33-4dac-a3e1-af371e655e99.jpg', '主要内容包括：数列、极限、微积分、空间解析几何与线性代数、级数、常微分方程。', '李明博', '48', '4.5', '6C-201');

-- ----------------------------
-- Table structure for `t_scoreinfo`
-- ----------------------------
DROP TABLE IF EXISTS `t_scoreinfo`;
CREATE TABLE `t_scoreinfo` (
  `scoreId` int(11) NOT NULL AUTO_INCREMENT COMMENT '成绩编号',
  `studentNumber` varchar(20) NOT NULL COMMENT '考察学生',
  `courseNo` varchar(20) NOT NULL COMMENT '考察课程',
  `score` float NOT NULL COMMENT '成绩得分',
  `evaluate` varchar(80) NOT NULL COMMENT '学生评价',
  PRIMARY KEY (`scoreId`),
  KEY `studentNumber` (`studentNumber`),
  KEY `courseNo` (`courseNo`),
  CONSTRAINT `t_scoreinfo_ibfk_1` FOREIGN KEY (`studentNumber`) REFERENCES `t_student` (`studentNumber`),
  CONSTRAINT `t_scoreinfo_ibfk_2` FOREIGN KEY (`courseNo`) REFERENCES `t_course` (`courseNo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_scoreinfo
-- ----------------------------
INSERT INTO `t_scoreinfo` VALUES ('1', 'xs001', 'KC001', '92.5', '很听话，成绩也可以');
INSERT INTO `t_scoreinfo` VALUES ('2', 'xs002', 'KC001', '62', '上课不太认真');
INSERT INTO `t_scoreinfo` VALUES ('3', 'xs002', 'KC003', '70', '一般般啦');
INSERT INTO `t_scoreinfo` VALUES ('4', 'xs001', 'KC003', '95', '很听话，成绩优秀');

-- ----------------------------
-- Table structure for `t_student`
-- ----------------------------
DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student` (
  `studentNumber` varchar(20) NOT NULL COMMENT 'studentNumber',
  `password` varchar(20) NOT NULL COMMENT '学生密码',
  `classInfoId` varchar(20) NOT NULL COMMENT '所在班级',
  `studentName` varchar(20) NOT NULL COMMENT '姓名',
  `sex` varchar(2) NOT NULL COMMENT '性别',
  `photoUrl` varchar(60) NOT NULL COMMENT '学生照片',
  `birthday` varchar(20) DEFAULT NULL COMMENT '出生日期',
  `zzmm` varchar(10) DEFAULT NULL COMMENT '政治面貌',
  `telephone` varchar(20) DEFAULT NULL COMMENT '联系电话',
  `address` varchar(50) DEFAULT NULL COMMENT '家庭地址',
  `openid` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`studentNumber`),
  KEY `classInfoId` (`classInfoId`),
  CONSTRAINT `t_student_ibfk_1` FOREIGN KEY (`classInfoId`) REFERENCES `t_classinfo` (`classNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_student
-- ----------------------------
INSERT INTO `t_student` VALUES ('xs001', '123', 'BJ001', '张霞', '女', 'upload/b3ffa57d-ce34-465d-9706-3004eff59754.jpg', '2019-10-01', '团员', '13980920934', '四川成都市红星路10号', 'oM7Mu5XyeVJSc8roaUCRlcz_IP9k');
INSERT INTO `t_student` VALUES ('xs002', '123', 'BJ002', '赵小凤', '女', 'upload/fd2be928-a82a-4f46-9d9c-e454b89fe055.jpg', '2019-10-15', '党员', '13803920934', '四川省南充市滨江路10号', null);
