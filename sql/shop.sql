/*
 Navicat Premium Data Transfer

 Source Server         : Test
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : shop

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 18/11/2019 18:41:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for auditinfo
-- ----------------------------
DROP TABLE IF EXISTS `auditinfo`;
CREATE TABLE `auditinfo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NULL DEFAULT NULL,
  `eid` int(11) NULL DEFAULT NULL,
  `ename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 173 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of auditinfo
-- ----------------------------
INSERT INTO `auditinfo` VALUES (1, 52, 1, '张三 ');
INSERT INTO `auditinfo` VALUES (2, 53, 1, '张三');
INSERT INTO `auditinfo` VALUES (3, 54, 2, '张三');
INSERT INTO `auditinfo` VALUES (166, 114, 9, '周杰伦');
INSERT INTO `auditinfo` VALUES (167, 115, 3, '王五');
INSERT INTO `auditinfo` VALUES (168, 115, 3, '王五');
INSERT INTO `auditinfo` VALUES (169, 116, 3, '王五');
INSERT INTO `auditinfo` VALUES (170, 117, 3, '王五');
INSERT INTO `auditinfo` VALUES (171, 0, 1, '张三');
INSERT INTO `auditinfo` VALUES (172, 118, 1, '张三');

-- ----------------------------
-- Table structure for auditlog
-- ----------------------------
DROP TABLE IF EXISTS `auditlog`;
CREATE TABLE `auditlog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NULL DEFAULT NULL,
  `auditid` int(11) NULL DEFAULT NULL,
  `auditname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `msg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of auditlog
-- ----------------------------
INSERT INTO `auditlog` VALUES (1, 52, 2, '李四', '0', '很优秀');
INSERT INTO `auditlog` VALUES (2, 53, 2, '李四', '2', '啥啊？');
INSERT INTO `auditlog` VALUES (3, 54, 2, '李四', '0', '恩  不错');
INSERT INTO `auditlog` VALUES (4, 114, 2, '李四', '2', '123');
INSERT INTO `auditlog` VALUES (5, 115, 1, '张三', '2', '来及');
INSERT INTO `auditlog` VALUES (6, 116, 1, '张三', '0', '高端大气');
INSERT INTO `auditlog` VALUES (7, 118, 1, '张三', '2', '1231');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car`  (
  `oid` int(20) NOT NULL AUTO_INCREMENT,
  `uid` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `pid` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `pname` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pimage` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `price` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `num` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`oid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 71 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES (12, '2', '61', '秋冬女鞋时尚深口女长筒靴', 'products/61.jpg', '49', '11');
INSERT INTO `car` VALUES (13, '2', '38', '2019春季运动裤女九分学生韩版哈伦', 'products/38.jpg', '68', '2');
INSERT INTO `car` VALUES (14, '2', '55', '2019秋冬可爱冬天保暖加绒针织帽女', 'products/55.jpg', '39', '3');
INSERT INTO `car` VALUES (18, '10', '8', '2019春夏新款织带针织小开衫短款', 'products/8.jpg', '110', '5');
INSERT INTO `car` VALUES (47, '11', '51', '韩版百搭时尚遮阳帽潮笑脸盘帽防晒帽', 'products/51.jpg', '29', '9');
INSERT INTO `car` VALUES (53, '11', '5', '春装韩版百搭针织T恤女圆领纯色上衣', 'products/5.jpg', '36', '9');
INSERT INTO `car` VALUES (68, '17', '73', '牛皮包宽带手提包单肩包斜挎女包', '/images/73.jpg', '109', '30');
INSERT INTO `car` VALUES (70, '13', '1', '百搭显高单排扣破洞高腰弹力小脚裤', '/images/1.jpg', '59', '1');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `cid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '上衣');
INSERT INTO `category` VALUES ('2', '裙子');
INSERT INTO `category` VALUES ('3', '裤子');
INSERT INTO `category` VALUES ('4', '鞋子');
INSERT INTO `category` VALUES ('5', '包包');
INSERT INTO `category` VALUES ('6', '腰带');
INSERT INTO `category` VALUES ('7', '帽子');
INSERT INTO `category` VALUES ('8', '口红');
INSERT INTO `category` VALUES ('9', '配饰');

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '分类表中ID号，无用',
  `claid` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类ID，此处在前端展示分类，如优惠促销，热卖单品',
  `pid` int(10) NULL DEFAULT NULL COMMENT '是product表中的商品id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of classify
-- ----------------------------
INSERT INTO `classify` VALUES (1, '10001', 1);
INSERT INTO `classify` VALUES (2, '10001', 11);
INSERT INTO `classify` VALUES (3, '10001', 39);
INSERT INTO `classify` VALUES (4, '10001', 25);
INSERT INTO `classify` VALUES (5, '10001', 51);
INSERT INTO `classify` VALUES (6, '10001', 75);
INSERT INTO `classify` VALUES (7, '10001', 87);
INSERT INTO `classify` VALUES (8, '10001', 95);
INSERT INTO `classify` VALUES (9, '10002', 41);
INSERT INTO `classify` VALUES (10, '10002', 99);
INSERT INTO `classify` VALUES (11, '10002', 83);
INSERT INTO `classify` VALUES (12, '10002', 2);
INSERT INTO `classify` VALUES (13, '10002', 61);
INSERT INTO `classify` VALUES (14, '10002', 77);
INSERT INTO `classify` VALUES (15, '10003', 13);
INSERT INTO `classify` VALUES (16, '10003', 21);
INSERT INTO `classify` VALUES (17, '10003', 49);
INSERT INTO `classify` VALUES (18, '10003', 53);
INSERT INTO `classify` VALUES (19, '10003', 37);
INSERT INTO `classify` VALUES (20, '10003', 73);
INSERT INTO `classify` VALUES (21, '10004', 43);
INSERT INTO `classify` VALUES (22, '10004', 59);
INSERT INTO `classify` VALUES (23, '10004', 79);
INSERT INTO `classify` VALUES (24, '10004', 3);
INSERT INTO `classify` VALUES (25, '10004', 63);
INSERT INTO `classify` VALUES (26, '10004', 9);
INSERT INTO `classify` VALUES (27, '10004', 19);
INSERT INTO `classify` VALUES (28, '10004', 47);
INSERT INTO `classify` VALUES (29, '10005', 27);
INSERT INTO `classify` VALUES (30, '10005', 71);
INSERT INTO `classify` VALUES (31, '10002', 33);
INSERT INTO `classify` VALUES (32, '10005', 23);
INSERT INTO `classify` VALUES (33, '10005', 85);
INSERT INTO `classify` VALUES (34, '10005', 5);
INSERT INTO `classify` VALUES (35, '10005', 81);
INSERT INTO `classify` VALUES (36, '10005', 67);
INSERT INTO `classify` VALUES (37, '10005', 45);
INSERT INTO `classify` VALUES (38, '10005', 57);
INSERT INTO `classify` VALUES (39, '10005', 17);
INSERT INTO `classify` VALUES (40, '10002', 91);
INSERT INTO `classify` VALUES (41, '10005', 101);
INSERT INTO `classify` VALUES (42, '10002', 109);
INSERT INTO `classify` VALUES (43, '10005', 97);
INSERT INTO `classify` VALUES (44, '10004', 29);
INSERT INTO `classify` VALUES (45, '10001', 103);
INSERT INTO `classify` VALUES (46, '10001', 93);
INSERT INTO `classify` VALUES (47, '10001', 89);
INSERT INTO `classify` VALUES (48, '10001', 69);
INSERT INTO `classify` VALUES (49, '10001', 15);
INSERT INTO `classify` VALUES (50, '10001', 31);
INSERT INTO `classify` VALUES (51, '10001', 7);
INSERT INTO `classify` VALUES (52, '10001', 8);
INSERT INTO `classify` VALUES (53, '10001', 4);
INSERT INTO `classify` VALUES (54, '10002', 55);
INSERT INTO `classify` VALUES (55, '10002', 106);
INSERT INTO `classify` VALUES (56, '10002', 65);
INSERT INTO `classify` VALUES (57, '10002', 72);

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES (1, '总经理', '拥有一切权限', 1);
INSERT INTO `department` VALUES (2, '商品管理员', '商品管理、类别管理、查看修改记录', 1);
INSERT INTO `department` VALUES (3, '采购员', '可以查看商品管理并进行采购', 1);
INSERT INTO `department` VALUES (4, '订单管理员', '订单管理、出货', 1);
INSERT INTO `department` VALUES (5, '采购经理', '可以审批采购申请，可以查看商品管理', 1);

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `telephone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `hiredate` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP COMMENT '入职时间',
  `state` int(11) NULL DEFAULT NULL COMMENT '状态 离职-0在职-1',
  `deptID` int(11) NULL DEFAULT NULL COMMENT '部门ID',
  `roleID` int(11) NULL DEFAULT NULL COMMENT '角色ID',
  `admin` bit(1) NULL DEFAULT b'0',
  `loginID` int(11) NULL DEFAULT NULL,
  `portrait` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES (1, '张三', '18999998888', '2018-09-16 00:00:00', 3, 1, 1, b'1', 1, '/images/b55fc20a-d207-4852-8e73-6f71b6f8b00e.jpg');
INSERT INTO `employee` VALUES (2, '李四', '18988889999', '2018-09-15 00:00:00', 1, 2, 2, b'0', 2, '/images/2b779ae3-6c3c-4c20-a027-dffae59f06ee.jpg');
INSERT INTO `employee` VALUES (3, '王五', '123456789', '2018-09-16 00:00:00', 1, 3, 3, b'0', 3, NULL);
INSERT INTO `employee` VALUES (9, '周杰伦', '13071787555', '2018-09-18 00:05:00', 1, 4, 4, b'0', 4, NULL);
INSERT INTO `employee` VALUES (10, '郭航', '13071787517', '2019-11-10 00:00:00', 1, 1, 1, b'0', 5, '/images/touxiang.png');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES (1, '123', '123');
INSERT INTO `login` VALUES (2, '456', '456');
INSERT INTO `login` VALUES (3, '789', '789');
INSERT INTO `login` VALUES (4, '0000', '0000');
INSERT INTO `login` VALUES (5, '13071787517', '8248');

-- ----------------------------
-- Table structure for orderitem
-- ----------------------------
DROP TABLE IF EXISTS `orderitem`;
CREATE TABLE `orderitem`  (
  `itemid` int(32) NOT NULL AUTO_INCREMENT,
  `oid` int(32) NULL DEFAULT NULL,
  `pid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` double NULL DEFAULT NULL,
  `count` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`itemid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of orderitem
-- ----------------------------
INSERT INTO `orderitem` VALUES (13, 12, '51', '韩版百搭时尚遮阳帽潮笑脸盘帽防晒帽', 29, 4535);
INSERT INTO `orderitem` VALUES (14, 70, '6', '新品玫瑰字母印花蕾丝拼接长袖', 58, 1998);
INSERT INTO `orderitem` VALUES (15, 71, '1', '百搭显高单排扣破洞高腰弹力小脚裤', 77, 6);
INSERT INTO `orderitem` VALUES (16, 71, '44', '2019夏季新款水溶钩花短袖网衫罩衫', 50, 9);
INSERT INTO `orderitem` VALUES (17, 72, '2', '百搭韩版显瘦纯色玫瑰花T恤', 56, 136);
INSERT INTO `orderitem` VALUES (18, 72, '1', '百搭显高单排扣破洞高腰弹力小脚裤', 77, 9);
INSERT INTO `orderitem` VALUES (19, 72, '42', '女宽松上衣春装2019韩版百搭半袖t恤', 45, 2);
INSERT INTO `orderitem` VALUES (20, 73, '4', '韩版休闲百搭宽松简约字母绣花短袖T恤', 81, 4);
INSERT INTO `orderitem` VALUES (21, 73, '45', '春季新款韩版街头立领收腰风衣外套', 93, 4);
INSERT INTO `orderitem` VALUES (22, 74, '5', '春装韩版百搭针织T恤女圆领纯色上衣', 36, 1);
INSERT INTO `orderitem` VALUES (23, 75, '51', '韩版百搭时尚遮阳帽潮笑脸盘帽防晒帽', 29, 1);
INSERT INTO `orderitem` VALUES (24, 76, '66', '百搭系带马丁靴水钻鞋跟圆头靴子', 189, 1);
INSERT INTO `orderitem` VALUES (25, 77, '57', 'siggi草帽女夏天沙滩帽防晒遮阳帽\r\n', 39, 4);
INSERT INTO `orderitem` VALUES (26, 78, '16', '时尚百搭蓝色高腰系带阔腿七分牛仔裤', 55, 5);
INSERT INTO `orderitem` VALUES (27, 0, '14', '2019吊带连衣裙公主裙背心裙子女装', 77, 4);
INSERT INTO `orderitem` VALUES (28, 82, '9', '2019女装破洞高腰牛仔短裤做旧牛仔裤', 687, 1);
INSERT INTO `orderitem` VALUES (29, 83, '57', 'siggi草帽女夏天沙滩帽防晒遮阳帽\r\n', 39, 1);
INSERT INTO `orderitem` VALUES (30, 115, '9', '2019女装破洞高腰牛仔短裤做旧牛仔裤', 687, 4);
INSERT INTO `orderitem` VALUES (31, 116, '61', '秋冬女鞋时尚深口女长筒靴', 49, 4);
INSERT INTO `orderitem` VALUES (32, 116, '1', '百搭显高单排扣破洞高腰弹力小脚裤', 59, 8);
INSERT INTO `orderitem` VALUES (33, 117, '2', '百搭韩版显瘦纯色玫瑰花T恤', 56, 24);
INSERT INTO `orderitem` VALUES (34, 117, '11', '2019新款双线装饰半身裙', 80, 1);
INSERT INTO `orderitem` VALUES (35, 118, '11', '2019新款双线装饰半身裙', 80, 17);
INSERT INTO `orderitem` VALUES (36, 119, '11', '2019新款双线装饰半身裙', 80, 3);

-- ----------------------------
-- Table structure for orderoutlog
-- ----------------------------
DROP TABLE IF EXISTS `orderoutlog`;
CREATE TABLE `orderoutlog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oid` int(11) NULL DEFAULT NULL,
  `eid` int(11) NULL DEFAULT NULL,
  `ename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `time` datetime(0) NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of orderoutlog
-- ----------------------------
INSERT INTO `orderoutlog` VALUES (20, 76, 9, '周杰伦', '2019-11-09 13:31:06', '发货成功');
INSERT INTO `orderoutlog` VALUES (21, 71, 9, '周杰伦', '2019-11-09 13:31:34', '发货成功');
INSERT INTO `orderoutlog` VALUES (22, 78, 9, '周杰伦', '2019-11-09 13:31:36', '发货成功');
INSERT INTO `orderoutlog` VALUES (23, 115, 1, '张三', '2019-11-10 13:47:15', '发货成功');
INSERT INTO `orderoutlog` VALUES (24, 76, 1, '张三', '2019-11-10 13:47:48', '发货成功');
INSERT INTO `orderoutlog` VALUES (25, 107, 1, '张三', '2019-11-10 13:47:51', '发货成功');
INSERT INTO `orderoutlog` VALUES (26, 108, 1, '张三', '2019-11-10 13:47:52', '发货成功');
INSERT INTO `orderoutlog` VALUES (27, 109, 1, '张三', '2019-11-10 13:47:53', '发货成功');
INSERT INTO `orderoutlog` VALUES (28, 110, 1, '张三', '2019-11-10 13:47:54', '发货成功');
INSERT INTO `orderoutlog` VALUES (29, 111, 1, '张三', '2019-11-10 13:47:56', '发货成功');
INSERT INTO `orderoutlog` VALUES (30, 112, 1, '张三', '2019-11-10 13:47:56', '发货成功');
INSERT INTO `orderoutlog` VALUES (31, 113, 1, '张三', '2019-11-10 13:47:57', '发货成功');
INSERT INTO `orderoutlog` VALUES (32, 71, 1, '张三', '2019-11-10 20:37:22', '发货成功');
INSERT INTO `orderoutlog` VALUES (33, 76, 1, '张三', '2019-11-10 20:37:24', '发货成功');
INSERT INTO `orderoutlog` VALUES (34, 71, 1, '张三', '2019-11-11 15:19:20', '发货成功');
INSERT INTO `orderoutlog` VALUES (35, 76, 1, '张三', '2019-11-11 15:19:21', '发货成功');
INSERT INTO `orderoutlog` VALUES (36, 71, 1, '张三', '2019-11-11 15:21:20', '发货成功');
INSERT INTO `orderoutlog` VALUES (37, 76, 1, '张三', '2019-11-11 15:25:11', '发货成功');
INSERT INTO `orderoutlog` VALUES (38, 107, 1, '张三', '2019-11-11 15:25:23', '发货成功');
INSERT INTO `orderoutlog` VALUES (39, 71, 1, '张三', '2019-11-11 15:25:43', '发货成功');
INSERT INTO `orderoutlog` VALUES (40, 76, 1, '张三', '2019-11-11 15:25:44', '发货成功');
INSERT INTO `orderoutlog` VALUES (41, 107, 1, '张三', '2019-11-11 15:25:46', '发货成功');
INSERT INTO `orderoutlog` VALUES (42, 108, 1, '张三', '2019-11-12 08:51:57', '发货成功');
INSERT INTO `orderoutlog` VALUES (43, 119, 1, '张三', '2019-11-12 08:52:06', '发货成功');
INSERT INTO `orderoutlog` VALUES (44, 116, 1, '张三', '2019-11-13 08:21:53', '发货成功');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `oid` int(32) NOT NULL AUTO_INCREMENT,
  `ordertime` datetime(0) NULL DEFAULT NULL,
  `total` int(30) NULL DEFAULT NULL,
  `state` int(11) NULL DEFAULT NULL,
  `address` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `telephone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `uid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '时间，用于查询最近订单量',
  PRIMARY KEY (`oid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 120 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (71, '2019-11-01 10:30:09', 912, 1, '江南style', '刘一博啊', '18503827215', '12', '2019-11-01');
INSERT INTO `orders` VALUES (76, '2019-11-02 17:06:41', 189, 2, '河南省郑州市金水区牛顿国际B座', '郭航', '13071787517', '11', '2019-11-02');
INSERT INTO `orders` VALUES (108, '2019-11-04 17:06:41', 189, 2, '河南省郑州市金水区牛顿国际B座', '郭航', '13071787517', '12', '2019-11-04');
INSERT INTO `orders` VALUES (109, '2019-11-05 17:06:41', 189, 2, '河南省郑州市金水区牛顿国际B座', '郭航', '13071787517', '11', '2019-11-05');
INSERT INTO `orders` VALUES (110, '2019-11-06 17:06:41', 189, 0, '河南省郑州市金水区牛顿国际B座', '郭航', '13071787517', '14', '2019-11-06');
INSERT INTO `orders` VALUES (111, '2019-11-07 17:06:41', 189, 2, '河南省郑州市金水区牛顿国际B座', '郭航', '13071787517', '12', '2019-11-07');
INSERT INTO `orders` VALUES (113, '2019-11-09 17:06:41', 189, 2, '河南省郑州市金水区牛顿国际B座', '郭航', '13071787517', '11', '2019-11-09');
INSERT INTO `orders` VALUES (115, '2019-11-10 10:01:24', 2748, 2, '河南省郑州市金水区牛顿国际', '郭航', '13071787517', '14', '2019-11-10');
INSERT INTO `orders` VALUES (116, '2019-11-11 17:59:40', 668, 2, '江南style', '刘一博', '18503827215', '12', '2019-11-11');
INSERT INTO `orders` VALUES (117, '2019-11-11 21:14:57', 1424, 0, '1111', '1111', '1111', '15', '2019-11-11');
INSERT INTO `orders` VALUES (118, '2019-11-11 21:20:37', 1360, 0, '江南style', '刘一博', '18503827215', '12', '2019-11-11');
INSERT INTO `orders` VALUES (119, '2019-11-11 21:20:56', 240, 2, '江南style', '刘一博', '18503827215', '12', '2019-11-11');

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parentid` int(11) NULL DEFAULT NULL,
  `url` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES (1, 0, NULL, '商品', '商品');
INSERT INTO `permission` VALUES (2, 1, 'goodsManage.html', '商品管理', '商品管理');
INSERT INTO `permission` VALUES (3, 1, 'goodsTypeManage.html', '类别管理', '类别管理');
INSERT INTO `permission` VALUES (4, 1, 'goodsUpdateLog.html', '修改记录', '修改记录');
INSERT INTO `permission` VALUES (5, NULL, NULL, NULL, NULL);
INSERT INTO `permission` VALUES (6, 0, NULL, '采购', '采购');
INSERT INTO `permission` VALUES (7, 6, 'goodsAuditResult.html', '采购申请', '采购申请(员工)展示个人申请记录');
INSERT INTO `permission` VALUES (8, 6, 'goodsAudit.html', '采购审核', '采购审核(老板)');
INSERT INTO `permission` VALUES (9, 6, 'goodsAuditlog.html', '审核记录', '审核记录(老板)');
INSERT INTO `permission` VALUES (10, NULL, NULL, NULL, NULL);
INSERT INTO `permission` VALUES (11, 0, NULL, '订单', '订单管理');
INSERT INTO `permission` VALUES (12, 11, 'ordersManage.html', '全部订单', '全部订单');
INSERT INTO `permission` VALUES (13, 11, 'goodsOutLog.html', '出库记录', '出库记录');
INSERT INTO `permission` VALUES (14, NULL, NULL, NULL, NULL);
INSERT INTO `permission` VALUES (15, 0, NULL, '管理', '管理');
INSERT INTO `permission` VALUES (16, 15, 'staffManage.html', '员工管理', '员工管理');
INSERT INTO `permission` VALUES (17, 15, 'roleManage.html', '角色管理', '角色管理');
INSERT INTO `permission` VALUES (18, 15, 'userManage.html', '用户管理', '用户管理');
INSERT INTO `permission` VALUES (19, NULL, NULL, NULL, NULL);
INSERT INTO `permission` VALUES (20, 0, NULL, '库存', '库存');
INSERT INTO `permission` VALUES (21, 20, 'goodsInventory.html', '修改库存', '修改库存');
INSERT INTO `permission` VALUES (22, 20, 'goodsInventoryLog\r\n.html', '库存变动记录', '库存变动记录');
INSERT INTO `permission` VALUES (23, NULL, NULL, NULL, NULL);
INSERT INTO `permission` VALUES (24, 0, NULL, '其他', '其他');
INSERT INTO `permission` VALUES (25, 24, NULL, '我要投诉', '我要投诉');
INSERT INTO `permission` VALUES (26, 24, NULL, '联系管理员', '联系管理员');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `pid` int(32) NOT NULL AUTO_INCREMENT,
  `pname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `marketPrice` double NULL DEFAULT NULL,
  `shopPrice` double NULL DEFAULT NULL,
  `pimage` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `inventory` int(11) NULL DEFAULT NULL,
  `pdesc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pflag` int(11) NULL DEFAULT NULL,
  `cid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `collect` int(11) NULL DEFAULT NULL,
  `desc` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `state` int(255) NULL DEFAULT NULL COMMENT '审核状态，1待审核，0审核通过，2，审核不通过',
  PRIMARY KEY (`pid`) USING BTREE,
  INDEX `sfk_0001`(`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 119 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, '百搭显高单排扣破洞高腰弹力小脚裤', 119, 59, '/images/1.jpg', 30, '2017春季新款时尚百搭显高单排扣破洞高腰弹力小脚裤', 0, '1', 157, NULL, 0);
INSERT INTO `product` VALUES (2, '百搭韩版显瘦纯色玫瑰花T恤', 109, 56, '/images/68261ed8-aebd-4fcc-aa54-ae85f77681c4.jpg', 30, '2017春季新款时尚百搭韩版显瘦纯色玫瑰花T恤', 0, '1', 458, NULL, 0);
INSERT INTO `product` VALUES (3, '韩版大露背蝴蝶结系带收腰喇叭线连衣裙', 199, 99, '/images/3.jpg', 30, '春季新款韩版大露背蝴蝶结系带收腰显瘦明线开叉喇叭线连衣裙', 0, '0', 12, NULL, 0);
INSERT INTO `product` VALUES (4, '韩版休闲百搭宽松简约字母绣花短袖T恤', 119, 81, '/images/b4522654-7293-4de3-b4f4-ba16a4314b88.jpg', 30, '2017春夏新款韩版休闲百搭宽松简约字母绣花短袖圆领套头T恤', 0, NULL, 127, NULL, 0);
INSERT INTO `product` VALUES (5, '春装韩版百搭针织T恤女圆领纯色上衣', 89, 36, '/images/5.jpg', 30, '2017 春装新款韩版百搭针织打底短袖T恤女圆领纯色上衣', 0, '0', 1234, NULL, 0);
INSERT INTO `product` VALUES (6, '新品玫瑰字母印花蕾丝拼接长袖', 99, 58, '/images/d58f6acd-6c13-49ef-a4ee-60e7fee58aaa.jpg', 30, '2017春季新品玫瑰字母印花蕾丝拼接长袖T恤', 0, '0', 453, NULL, 0);
INSERT INTO `product` VALUES (7, '修身显瘦撞色边针织T恤 学院风上衣', 199, 97, '/images/7.jpg', 30, '修身显瘦撞色边针织T恤 学院风中袖针织上衣', 0, '0', 435, NULL, 0);
INSERT INTO `product` VALUES (8, '2019春夏新款织带针织小开衫短款', 199, 110, '/images/8.jpg', 30, '2017春夏新款织带针织小开衫短款', 0, '0', 432, NULL, 0);
INSERT INTO `product` VALUES (9, '2019女装破洞高腰牛仔短裤做旧牛仔裤', 1348, 687, '/images/9.jpg', 30, '2017夏季新款女装破洞高腰牛仔短裤包边设计做旧牛仔裤', 0, '3', 45, NULL, 0);
INSERT INTO `product` VALUES (10, '半身裙 甜美学院风百搭百褶裙子', 1446, 737, '/images/10.jpg', 30, '2017新款双线装饰半身裙 甜美学院风百搭百褶裙子', 0, '2', 456, NULL, 0);
INSERT INTO `product` VALUES (11, '2019新款双线装饰半身裙', 156, 80, '/images/11.jpg', 10, '2017新款双线装饰半身裙 甜美学院风百搭百褶裙子', 0, '2', 786, NULL, 0);
INSERT INTO `product` VALUES (12, '新款宽松亮丝短袖t恤女打底衫上衣', 93, 47, '/images/12.jpg', 30, '2017春夏装新款圆领中长款黑色宽松亮丝短袖t恤女打底衫上衣', 0, '1', 45, NULL, 0);
INSERT INTO `product` VALUES (13, '2019春夏百搭优雅短袖套头针织衫', 110, 56, '/images/13.jpg', 30, '2017春夏新款韩版拼接网纱休闲百搭优雅短袖套头针织衫', 0, '1', 457, NULL, 0);
INSERT INTO `product` VALUES (14, '2019吊带连衣裙公主裙背心裙子女装', 151, 77, '/images/14.jpg', 30, '2017夏装新款韩版无袖民族风吊带连衣裙公主裙背心裙子女装', 0, '2', 231, NULL, 0);
INSERT INTO `product` VALUES (15, '新款韩版宽松七分袖poloT恤连衣裙子', 134, 68, '/images/15.jpg', 30, '新款韩版宽松显瘦小清新可爱卡通印花七分袖poloT恤连衣裙子', 0, '2', 735, NULL, 0);
INSERT INTO `product` VALUES (16, '时尚百搭蓝色高腰系带阔腿七分牛仔裤', 107, 55, '/images/16.jpg', 30, '2017 时尚百搭蓝色高腰系带阔腿七分牛仔裤', 0, '3', 643, NULL, 0);
INSERT INTO `product` VALUES (17, '2019春季新款宽松显瘦带帽中女上衣', 183, 93, '/images/17.jpg', 30, '2017春季新款宽松显瘦带帽口袋中长款牛仔外套女上衣', 0, '1', 97, NULL, 0);
INSERT INTO `product` VALUES (18, '2019春夏新品韩版宽松短袖T恤', 120, 61, '/images/18.jpg', 30, '2017春夏新品韩版宽松短袖T恤', 0, '1', 4532, NULL, 0);
INSERT INTO `product` VALUES (19, '设计感流苏拉链破边蝙蝠袖卫衣外套', 242, 123, '/images/19.jpg', 30, '设计感流苏拉链破边蝙蝠袖卫衣外套', 0, '1', 21, NULL, 0);
INSERT INTO `product` VALUES (20, '2019新款韩版翻边破洞修身牛仔长裤', 130, 70, '/images/20.jpg', 30, '2017新款韩版翻边一刀切破洞高腰弹力修身牛仔长裤！', 0, '3', 234, NULL, 0);
INSERT INTO `product` VALUES (21, '气质韩版小清新毛毛露肩显瘦连衣裙', 183, 93, '/images/21.jpg', 30, '新款气质韩版小清新毛毛露肩显瘦纯色仙款气质连衣裙子', 0, '2', 57, NULL, 0);
INSERT INTO `product` VALUES (22, '2019新品韩版百搭夹克棒球服棒球衫', 191, 97, '/images/22.jpg', 30, '2017春季新品韩版百搭休闲拼色夹克棒球服棒球衫', 0, '1', 2433, NULL, 0);
INSERT INTO `product` VALUES (23, '新款破洞个性韩版九分牛仔乞丐裤', 159, 81, '/images/23.jpg', 30, '2017新款破洞撕边百搭牛仔裤个性韩版九分牛仔乞丐裤', 0, '3', 789, NULL, 0);
INSERT INTO `product` VALUES (24, '韩版小樱桃小清新雪纺衫衬衫上衣', 149, 75, '/images/24.jpg', 30, '春季新款韩版小樱桃小清新百搭蕾丝拼接喇叭袖复古雪纺衫衬衫上衣', 0, '1', 256, NULL, 0);
INSERT INTO `product` VALUES (25, '2019春夏新款韩版口袋短袖T恤上衣', 105, 53, '/images/25.jpg', 30, '2017春夏新款韩版休闲百搭宽松纯色口袋基础套头短袖T恤上衣', 0, '1', 92, NULL, 0);
INSERT INTO `product` VALUES (26, '纯色刺绣T恤 休闲百搭圆领短袖上衣', 174, 89, '/images/26.jpg', 30, '1313 纯色刺绣T恤 休闲宽松百搭圆领短袖上衣', 0, '1', 435, NULL, 0);
INSERT INTO `product` VALUES (27, '2019春季新款深蓝西装马夹背心', 164, 83, '/images/27.jpg', 30, '2017 春季新款侧纽扣深蓝西装马夹背心', 0, '1', 786, NULL, 0);
INSERT INTO `product` VALUES (28, '新款小清新小性感连衣裙两件套', 159, 81, '/images/28.jpg', 30, '新款韩版小清新小性感碎花印花蕾丝拼接宽松显瘦连衣裙两件套', 0, '2', 543, NULL, 0);
INSERT INTO `product` VALUES (29, '复古大花朵V领印花雪纺连衣裙短裙', 166, 85, '/images/29.jpg', 30, '复古大花朵碎花V领系带印花雪纺连衣裙短裙', 0, '2', 84, NULL, 0);
INSERT INTO `product` VALUES (30, '2019新款原宿风宽松露肩短袖T恤', 98, 50, '/images/30.jpg', 30, '2017新款原宿风宽松露肩镂空短袖T恤', 0, '1', 7978, NULL, 0);
INSERT INTO `product` VALUES (31, '星星雪纺衬衫连衣裙收腰碎花连衣裙', 200, 102, '/images/31.jpg', 30, '【张予曦】星星雪纺衬衫连衣长裙收腰两件套女裙春A字碎花连衣裙', 0, '2', 456, NULL, 0);
INSERT INTO `product` VALUES (32, '新款 舒适干练腰带装饰西装裤休闲裤', 144, 73, '/images/32.jpg', 30, '2017早春新款 舒适干练腰带装饰西装裤休闲裤', 0, '3', 12, NULL, 0);
INSERT INTO `product` VALUES (33, '2019新款韩版高腰破洞毛边牛仔短裤', 102, 52, '/images/33.jpg', 30, '2017夏季新款韩版高腰破洞毛边牛仔短裤', 0, '3', 7687, NULL, 0);
INSERT INTO `product` VALUES (34, '2019春季牛仔裤女长裤子破洞铅笔裤', 159, 81, '/images/34.jpg', 30, '2017春季新款牛仔裤女长裤子破洞潮显瘦小脚裤铅笔裤', 0, '3', 7654, NULL, 0);
INSERT INTO `product` VALUES (35, '2019春夏韩国淑女气质蝴蝶结衬衣', 159, 81, '/images/35.jpg', 30, '2017新款春夏韩国淑女气质显瘦蝴蝶结衬衣', 0, '1', 21, NULL, 0);
INSERT INTO `product` VALUES (36, 'bf风个性拼接毛边牛仔裤女九分裤', 156, 80, '/images/36.jpg', 30, 'bf风个性拼接宽松毛边牛仔裤女韩国显瘦不规则直筒阔腿九分裤', 0, '3', 67, NULL, 0);
INSERT INTO `product` VALUES (37, '春季韩版女短袖学生宽松打底衫上衣', 96, 49, '/images/37.jpg', 30, '【钱夫人同款】春季韩版t恤女短袖圆领学生宽松时尚打底衫上衣', 0, '1', 453, NULL, 0);
INSERT INTO `product` VALUES (38, '2019春季运动裤女九分学生韩版哈伦', 134, 68, '/images/38.jpg', 30, '2017春季新款运动裤女九分学生韩版宽松百搭显瘦原宿bf哈伦', 0, '3', 12364, NULL, 0);
INSERT INTO `product` VALUES (39, '2019春夏韩版优雅半身裙包臀裙裙子', 125, 63, '/images/39.jpg', 27, '2017春夏新款韩版优雅刺绣气质高腰显瘦半身裙包臀裙短裙裙子', 0, '2', 45, NULL, 0);
INSERT INTO `product` VALUES (40, '韩版春季新款花朵学院条纹七分袖衬衣', 129, 66, '/images/40.jpg', 30, '韩版春季新款花朵刺绣学院风时尚百搭条纹七分袖衬衣', 0, '1', 37, NULL, 0);
INSERT INTO `product` VALUES (41, '2019春季新款百搭韩版显瘦圆领长T恤', 201, 103, '/images/41.jpg', 30, '2017春季新款时尚百搭韩版显瘦金属圆环镂空字母圆领长T恤', 0, '1', 122, NULL, 0);
INSERT INTO `product` VALUES (42, '女宽松上衣春装2019韩版百搭半袖t恤', 89, 45, '/images/42.jpg', 30, '短袖t恤女宽松上衣春装2017新款 韩版百搭半袖t恤', 0, '1', 87, NULL, 0);
INSERT INTO `product` VALUES (43, '兔先生亮片字母圆领做旧T恤', 120, 61, '/images/43.jpg', 30, '兔先生亮片字母圆领做旧T恤', 0, '1', 786, NULL, 0);
INSERT INTO `product` VALUES (44, '2019夏季新款水溶钩花短袖网衫罩衫', 98, 50, '/images/44.jpg', 30, '2017夏季新款水溶钩花短袖网衫罩衫', 0, '1', 465, NULL, 0);
INSERT INTO `product` VALUES (45, '春季新款韩版街头立领收腰风衣外套', 183, 93, '/images/45.jpg', 30, '春季新款韩版街头立领收腰抽褶显瘦帅气夹克风衣外套', 0, '1', 547, NULL, 0);
INSERT INTO `product` VALUES (46, '2019春韩版拼接优雅短袖套头针织衫', 110, 56, '/images/46.jpg', 30, '2017春夏新款韩版拼接网纱休闲百搭优雅短袖套头针织衫', 0, '1', 678, NULL, 0);
INSERT INTO `product` VALUES (47, '2019新款春夏宽松休闲G字母印花T恤', 93, 47, '/images/47.jpg', 30, '2017新款春夏宽松休闲G字母印花T恤', 0, '1', 6597, NULL, 0);
INSERT INTO `product` VALUES (48, '小番茄定制 后背喇叭袖压皱雪纺衬衫', 142, 72, '/images/48.jpg', 30, '小番茄定制 温柔静谧后背纽扣喇叭袖压皱雪纺衬衫 真丝皱两件套', 0, '1', 213, NULL, 0);
INSERT INTO `product` VALUES (49, '2019欧美性感网纱纯色长袖雪纺衫', 117, 60, '/images/49.jpg', 30, '2017早春欧美性感网纱透视花边半高领灯笼袖纯色长袖雪纺衫', 0, '1', 4567, NULL, 0);
INSERT INTO `product` VALUES (50, '2019春夏新款露背百褶连衣裙', 338, 172, '/images/50.jpg', 30, '2017 春夏新款露背百褶连衣裙', 0, '2', 78, NULL, 0);
INSERT INTO `product` VALUES (51, '韩版百搭时尚遮阳帽潮笑脸盘帽防晒帽', 239, 29, '/images/51.jpg', 30, '渔夫帽女韩版百搭时尚遮阳帽潮笑脸大檐遮阳帽女系休闲盘帽防晒帽\r\n', 0, '7', 500, NULL, 0);
INSERT INTO `product` VALUES (52, '2019新款休闲百搭女棉麻遮阳防晒帽', 299, 35, '/images/52.jpg', 30, '【双面可戴】2019新款休闲百搭日系渔夫帽女棉麻遮阳可折叠防晒帽', 0, '7', 600, NULL, 0);
INSERT INTO `product` VALUES (53, '【显脸小】羊毛帽子女纯色防寒防风', 278, 68, '/images/53.jpg', 30, '【显脸小】羊毛帽子女渔夫帽冬季帽子厚时尚纯色防寒防风', 0, '7', 666, NULL, 0);
INSERT INTO `product` VALUES (54, '秋冬韩版潮贝雷帽休闲拼接鸭舌帽', 198, 65, '/images/54.jpg', 30, '【简约时尚 优雅气质】siggi女款帽子秋冬韩版潮贝雷帽复古毛呢八角帽休闲出游拼接鸭舌帽', 0, '7', 7845, NULL, 0);
INSERT INTO `product` VALUES (55, '2019秋冬可爱冬天保暖加绒针织帽女', 399, 39, '/images/55.jpg', 30, '2019秋冬新款时尚百搭可爱拼色毛线帽韩版冬天保暖加绒针织帽子女\r\n\r\n时尚保暖毛线帽 针织帽子女\r\n\r\n', 0, '7', 8999, NULL, 0);
INSERT INTO `product` VALUES (56, '爱英伦针织毛线帽女士帽子', 280, 56, '/images/56.jpg', 30, '秋冬季加绒保暖护耳潮流韩版百搭甜美可爱英伦针织毛线帽女士帽子\r\n\r\n', 0, '7', 6721, NULL, 0);
INSERT INTO `product` VALUES (57, 'siggi草帽女夏天沙滩帽防晒遮阳帽\r\n', 158, 39, '/images/57.jpg', 30, 'siggi草帽女夏天沙滩帽小清新防晒出游遮阳帽\r\n\r\n', 0, '7', 3574, NULL, 0);
INSERT INTO `product` VALUES (58, '2019新款双面可戴时尚大檐太阳帽子', 239, 28, '/images/58.jpg', 30, '2019新款双面可戴时尚大檐可折叠太阳帽子女遮阳帽防晒帽子', 0, '7', 5454, NULL, 0);
INSERT INTO `product` VALUES (59, '2019秋冬新款羊羔毛渔夫帽子\r\n', 190, 58, '/images/59.jpg', 30, '明星同款2019秋冬新款羊羔毛渔夫帽子男女帽子日系盆帽\r\n\r\n', 0, '7', 7154, NULL, 0);
INSERT INTO `product` VALUES (60, '秋冬季女时尚百搭毛线帽保暖女帽子\r\n\r\n', 399, 39, '/images/60.jpg', 30, '秋冬季女时尚百搭可爱拼色毛线帽 韩版冬天保暖加绒针织帽女帽子', 0, '7', 8221, NULL, 0);
INSERT INTO `product` VALUES (61, '秋冬女鞋时尚深口女长筒靴', 139, 49, '/images/61.jpg', 30, '秋冬女鞋时尚深口女长筒靴粗跟套脚休闲舒适过膝长靴女靴', 0, '4', 10010, NULL, 0);
INSERT INTO `product` VALUES (62, '艾米娜头层牛皮女士马丁靴短筒女靴', 269, 28, '/images/62.jpg', 30, '艾米娜头层牛皮女士马丁靴短筒女靴子短靴低跟弹力靴', 0, '4', 7844, NULL, 0);
INSERT INTO `product` VALUES (63, '女鞋子拉链短靴 潮流个性回弹缓震', 263, 199, '/images/63.jpg', 30, '斯凯奇女鞋子拉链短靴 潮流个性回弹缓震易洁防污女休闲鞋高帮鞋', 0, '4', 5201, NULL, 0);
INSERT INTO `product` VALUES (64, '女短靴系带休闲纯色牛皮女马丁靴', 497, 299, '/images/64.jpg', 30, '韩版低跟女短靴系带休闲纯色牛皮女马丁靴', 0, '4', 6574, NULL, 0);
INSERT INTO `product` VALUES (65, '秋冬女鞋时尚深口女长筒靴', 156, 89, '/images/65.jpg', 30, '秋冬女鞋时尚深口女长筒靴粗跟套脚休闲舒适过膝长靴女靴', 0, '4', 2474, NULL, 0);
INSERT INTO `product` VALUES (66, '百搭系带马丁靴水钻鞋跟圆头靴子', 236, 189, '/images/66.jpg', 30, '19冬季新款百搭系带马丁靴水钻鞋跟圆头靴子加绒女鞋', 0, '4', 8545, NULL, 0);
INSERT INTO `product` VALUES (67, '低跟女短靴系带牛皮女马丁靴', 157, 139, '/images/67.jpg', 30, '【牛皮】韩版低跟女短靴系带休闲纯色牛皮女马丁靴', 0, '4', 7545, NULL, 0);
INSERT INTO `product` VALUES (68, '百搭女粗跟厚底短靴马丁靴', 156, 99, '/images/68.jpg', 30, '2019秋冬新款百搭女粗跟厚底短靴英伦风帅气机车女靴潮马丁靴', 0, '4', 9154, NULL, 0);
INSERT INTO `product` VALUES (69, '2019季新款靴子高筒长靴女靴', 125, 109, '/images/69.jpg', 30, '尖头瘦瘦靴女秋2019季新款靴子高筒长靴粗跟过膝靴女靴长筒靴', 0, '4', 3210, NULL, 0);
INSERT INTO `product` VALUES (70, '高帮平底圆头短靴潮机车马丁靴', 366, 299, '/images/70.jpg', 30, '2019新款高帮平底圆头短靴潮机车女休闲鞋靴子女士马丁靴', 0, '4', 2121, NULL, 0);
INSERT INTO `product` VALUES (71, '梅花锁扣链条包单肩斜挎女包', 419, 389, '/images/71.jpg', 30, 'HR赫莲娜2019新品梅花锁扣链条包单肩斜挎女包', 0, '5', 4141, NULL, 0);
INSERT INTO `product` VALUES (72, '2019新款链条包小香风菱格包', 136, 119, '/images/72.jpg', 30, '稻草人牛皮2019新款链条包小香风菱格包夏季单肩斜挎包', 0, '5', 1210, NULL, 0);
INSERT INTO `product` VALUES (73, '牛皮包宽带手提包单肩包斜挎女包', 128, 109, '/images/73.jpg', 30, '2019新款头层牛皮水桶包小包包宽带手提包单肩包斜挎女包', 0, '5', 2322, NULL, 0);
INSERT INTO `product` VALUES (74, '新款牛皮链条包鳄鱼纹流苏包', 469, 399, '/images/74.jpg', 30, 'HR赫莲娜19年新款牛皮链条包鳄鱼纹流苏包单肩女士斜挎包', 0, '5', 4757, NULL, 0);
INSERT INTO `product` VALUES (75, '夏季新款链条包时尚斜挎包港风', 390, 299, '/images/75.jpg', 30, '沙驰女包夏季新款百搭小方包复古单肩包链条包时尚斜挎包港风', 0, '5', 8457, NULL, 0);
INSERT INTO `product` VALUES (76, '牛皮小包包斜挎包时尚手提包女包', 149, 119, '/images/76.jpg', 30, '2019新款牛皮小包包斜挎包时尚大容量枕头包单肩包手提包女包', 0, '5', 6545, NULL, 0);
INSERT INTO `product` VALUES (77, '优雅女士单肩斜挎包波士顿桶包', 999, 888, '/images/77.jpg', 30, '蔻驰 【热卖爆款】优雅BENNETT女士单肩斜挎包波士顿桶包', 0, '5', 1011, NULL, 0);
INSERT INTO `product` VALUES (78, '新款简约菱格包女式斜挎包女包', 198, 179, '/images/78.jpg', 30, '【王牌爆款】新款小包包简约菱格包女式斜挎包女包', 0, '5', 845, NULL, 0);
INSERT INTO `product` VALUES (79, 'COACH/蔻驰 女士中号单肩手提tote包', 898, 849, '/images/79.jpg', 30, 'COACH/蔻驰 女士中号单肩手提tote包', 0, '5', 3245, NULL, 0);
INSERT INTO `product` VALUES (80, 'MK mercer女士中号斜挎包手提包女包', 1099, 588, '/images/80.jpg', 30, 'MK mercer女士中号斜挎包手提包女包', 0, '5', 7545, NULL, 0);
INSERT INTO `product` VALUES (81, '透粉底液 N°2 贝壳粉（适合亚洲肤色）', 456, 289, '/images/81.jpg', 30, '纪梵希（Givenchy）恒颜清透粉底液 N°2 贝壳粉（适合一般亚洲肤色）', 0, '8', 8520, NULL, 0);
INSERT INTO `product` VALUES (82, '丝滑滋润肌肤之钥光魅幻色唇膏口红4g', 465, 199, '/images/82.jpg', 30, '【哑光质地 丝滑滋润】肌肤之钥光魅幻色唇膏口红4g', 0, '8', 3201, NULL, 0);
INSERT INTO `product` VALUES (83, '法布勒斯限量色唇膏 FF02 磨砂黑管口红', 478, 299, '/images/83.jpg', 30, 'TOM FORD 法布勒斯限量色唇膏 FF02 磨砂黑管口红', 0, '8', 9654, NULL, 0);
INSERT INTO `product` VALUES (84, 'MAC 魅可限量版黑管 tf口红', 536, 499, '/images/84.jpg', 30, 'MAC 魅可限量版黑管 tf口红', 0, '8', 4214, NULL, 0);
INSERT INTO `product` VALUES (85, 'TOM FORD 琉璃焕彩唇膏03', 532, 399, '/images/85.jpg', 30, 'TOM FORD 琉璃焕彩唇膏03', 0, '8', 6541, NULL, 0);
INSERT INTO `product` VALUES (86, 'TOM FORD细白管闪亮唇膏#07 Willful', 445, 299, '/images/86.jpg', 30, 'TOM FORD细白管闪亮唇膏#07 Willful', 0, '8', 3212, NULL, 0);
INSERT INTO `product` VALUES (87, 'TOM FORD 柔雾缎采唇膏 tf细黑管 ', 426, 399, '/images/87.jpg', 30, 'TOM FORD 柔雾缎采唇膏 tf细黑管 【多色可选】', 0, '8', 8954, NULL, 0);
INSERT INTO `product` VALUES (88, 'TOM FORD  滋润唇膏 3g #01杏仁粉', 426, 398, '/images/88.jpg', 30, 'TOM FORD 汤姆福特 滋润唇膏 3g #01杏仁粉', 0, '8', 7847, NULL, 0);
INSERT INTO `product` VALUES (89, 'TOM FORD 汤姆福特 黑管滋润唇膏 ', 426, 298, '/images/89.jpg', 30, 'TOM FORD 汤姆福特 黑管滋润唇膏 3g #31', 0, '8', 5654, NULL, 0);
INSERT INTO `product` VALUES (90, '阿玛尼口红 柔雾缎采唇膏 tf细黑管 ', 465, 299, '/images/90.jpg', 30, '阿玛尼口红 柔雾缎采唇膏 tf细黑管  ', 0, '8', 5321, NULL, 0);
INSERT INTO `product` VALUES (91, '珍珠耳钉安娜ins风法式风情耳坠耳环女', 132, 99, '/images/91.jpg', 30, '珍珠耳钉安娜同款睡觉不用摘的女ins风法式风情耳坠耳环女', 0, '9', 9841, NULL, 0);
INSERT INTO `product` VALUES (92, '冰时尚简约渐变撞色仿真丝披肩丝巾', 153, 109, '/images/92.jpg', 30, '冰火之歌时尚简约双色渐变撞色仿真丝披肩丝巾', 0, '9', 5451, NULL, 0);
INSERT INTO `product` VALUES (93, 'S925银针耳钉优雅气质时尚长款耳饰', 156, 119, '/images/93.jpg', 30, '日韩经典玫瑰金四叶草流苏S925银针耳钉优雅气质时尚长款耳饰', 0, '9', 3214, NULL, 0);
INSERT INTO `product` VALUES (94, '2019秋款丝绸欧美风缎面喷绘真丝丝巾', 165, 129, '/images/94.jpg', 30, '2019秋款时尚百搭丝绸欧美风缎面喷绘真丝丝巾', 0, '9', 4564, NULL, 0);
INSERT INTO `product` VALUES (95, '简约时尚撞色圆耳钉圆片银针耳环', 167, 99, '/images/95.jpg', 30, '声色（秋冬新款 十色可选）简约时尚撞色圆耳钉圆片银针耳环', 0, '9', 4787, NULL, 0);
INSERT INTO `product` VALUES (96, '珍珠韩国耳钉百搭气质耳环少女耳坠', 134, 88, '/images/96.jpg', 30, '香风银针简约水钻一字珍珠韩国东大门耳钉百搭气质耳环少女耳坠', 0, '9', 8970, NULL, 0);
INSERT INTO `product` VALUES (97, '网红耳饰简约圈圈耳扣耳钉', 115, 55, '/images/97.jpg', 30, '925纯银小圆圈耳圈气质耳骨环网红耳饰简约圈圈耳扣耳钉', 0, '9', 5425, NULL, 0);
INSERT INTO `product` VALUES (98, '水珍珠耳钉优雅气质项链生日礼物', 125, 79, '/images/98.jpg', 30, '蔻斯琦 S925银淡水珍珠耳环耳钉立体花朵优雅气质项链生日礼物', 0, '9', 8781, NULL, 0);
INSERT INTO `product` VALUES (99, '珍珠耳钉百搭气质耳环少女耳坠', 162, 39, '/images/99.jpg', 30, '小香风银针简约水钻一字珍珠韩国东大门耳钉百搭气质耳环少女耳坠', 0, '9', 3147, NULL, 0);
INSERT INTO `product` VALUES (100, '时尚质感耳环耳坠女士长耳线', 214, 79, '/images/100.jpg', 30, '静风格 【个性前卫&一款多带】采用施华洛世奇水晶珍珠闪亮时尚质感气场十足耳环耳坠女士长耳线', 0, '9', 4561, NULL, 0);
INSERT INTO `product` VALUES (101, '新款头层牛皮针扣皮带女式腰带', 241, 69, '/images/101.jpg', 30, '2019新款头层牛皮针扣皮带女式腰带真皮装饰裙带', 0, '6', 7841, NULL, 0);
INSERT INTO `product` VALUES (102, '女简约百搭裤带搭配牛仔裤皮带女', 261, 99, '/images/102.jpg', 30, '复古女士皮带腰带女简约百搭韩国时尚裤带搭配牛仔裤皮带女', 0, '6', 2524, NULL, 0);
INSERT INTO `product` VALUES (103, '女式腰带复古针扣腰带细皮带女', 231, 109, '/images/103.jpg', 30, '简约时尚女式腰带复古百搭细皮带女针扣腰带细皮带女', 0, '6', 3214, NULL, 0);
INSERT INTO `product` VALUES (104, '吐火罗新品百搭蝴蝶刺绣牛皮腰带', 215, 179, '/images/104.jpg', 30, '吐火罗新品民族风百搭蝴蝶刺绣牛皮腰带', 0, '6', 4512, NULL, 0);
INSERT INTO `product` VALUES (105, '装饰连衣裙细腰带休闲牛仔裤裤带', 231, 159, '/images/105.jpg', 30, '双圆扣2019新款皮带时尚百搭装饰连衣裙细腰带休闲牛仔裤裤带', 0, '6', 2124, NULL, 0);
INSERT INTO `product` VALUES (106, '个性简约自动扣皮带男女通用裤腰带', 256, 189, '/images/106.jpg', 30, '女款时尚个性简约自动扣皮带男女通用裤腰带', 0, '6', 1203, NULL, 0);
INSERT INTO `product` VALUES (107, '时尚裙装配饰女士气质细腰带/女皮带', 241, 129, '/images/107.jpg', 30, '【2019新款】皮尔卡丹时尚裙装配饰女士气质细腰带/女皮带', 0, '6', 7814, NULL, 0);
INSERT INTO `product` VALUES (108, '新款时尚镶钻扣头板扣皮带女士腰带', 251, 99, '/images/108.jpg', 30, '新款时尚镶钻扣头板扣皮带女士腰带', 0, '6', 2124, NULL, 0);
INSERT INTO `product` VALUES (109, '女士皮带女款复古简约圆扣PU腰带', 211, 88, '/images/109.jpg', 30, '2019新品韩版潮流时尚女士皮带女款复古简约圆扣PU腰带', 0, '6', 2356, NULL, 0);
INSERT INTO `product` VALUES (110, '时尚个性简约百搭真皮女士皮带', 241, 119, '/images/110.jpg', 30, '牛皮新款复古宽腰带时尚个性针扣女士腰带简约百搭真皮女士皮带', 0, '6', 3211, NULL, 0);
INSERT INTO `product` VALUES (113, '脆司令椒香脆皮鸭味干脆面', 199, 188, '/images//794b7291-ea94-4622-b045-596204084fe5.png', 30, '脆司令椒香脆皮鸭味干脆面', 0, '9', NULL, NULL, 0);
INSERT INTO `product` VALUES (114, '干脆面', 1, 2, '/images//f291d4e8-b399-4ac3-b07d-f197269660ee.png', 30, '3', 0, '1', NULL, NULL, 2);
INSERT INTO `product` VALUES (115, '茶叶蛋', 2, 1.5, '/images/863952ab-4feb-460b-b3ff-ddd8535d8e17.jpg', 30, '好好吃', 1, '9', NULL, NULL, 2);
INSERT INTO `product` VALUES (116, '水杯', 10, 5, '/images/001eebf2-113d-4458-a032-aa295b165ba0.jpg', 30, '水杯', 0, '9', NULL, NULL, 0);
INSERT INTO `product` VALUES (117, '橙子', 20, 15, '/images/233a6011-a8b2-4137-98c2-1cbb02bce38d.jpg', 30, '好好吃', 0, '1', NULL, NULL, 1);
INSERT INTO `product` VALUES (118, '卫生纸', 5, 3, '/images/153f36ae-c6cb-4fe3-99c0-3b1a5044c3d2.jpg', 30, '卫生纸', 0, '9', NULL, NULL, 2);

-- ----------------------------
-- Table structure for role_per
-- ----------------------------
DROP TABLE IF EXISTS `role_per`;
CREATE TABLE `role_per`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rid` int(11) NULL DEFAULT NULL,
  `pid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 124 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of role_per
-- ----------------------------
INSERT INTO `role_per` VALUES (1, 1, 2);
INSERT INTO `role_per` VALUES (2, 1, 3);
INSERT INTO `role_per` VALUES (3, 1, 4);
INSERT INTO `role_per` VALUES (4, 1, 7);
INSERT INTO `role_per` VALUES (5, 1, 8);
INSERT INTO `role_per` VALUES (17, 1, 9);
INSERT INTO `role_per` VALUES (18, 1, 12);
INSERT INTO `role_per` VALUES (19, 1, 13);
INSERT INTO `role_per` VALUES (20, 1, 16);
INSERT INTO `role_per` VALUES (21, 1, 17);
INSERT INTO `role_per` VALUES (22, 1, 18);
INSERT INTO `role_per` VALUES (23, 1, 21);
INSERT INTO `role_per` VALUES (24, 1, 22);
INSERT INTO `role_per` VALUES (25, 1, 25);
INSERT INTO `role_per` VALUES (26, 1, 26);
INSERT INTO `role_per` VALUES (66, 2, 2);
INSERT INTO `role_per` VALUES (67, 2, 3);
INSERT INTO `role_per` VALUES (68, 2, 4);
INSERT INTO `role_per` VALUES (69, 2, 25);
INSERT INTO `role_per` VALUES (70, 2, 26);
INSERT INTO `role_per` VALUES (71, 3, 2);
INSERT INTO `role_per` VALUES (72, 3, 3);
INSERT INTO `role_per` VALUES (73, 3, 4);
INSERT INTO `role_per` VALUES (74, 3, 25);
INSERT INTO `role_per` VALUES (75, 3, 26);
INSERT INTO `role_per` VALUES (76, 3, 2);
INSERT INTO `role_per` VALUES (77, 3, 3);
INSERT INTO `role_per` VALUES (78, 3, 4);
INSERT INTO `role_per` VALUES (79, 3, 7);
INSERT INTO `role_per` VALUES (80, 3, 25);
INSERT INTO `role_per` VALUES (81, 3, 26);
INSERT INTO `role_per` VALUES (82, 4, 2);
INSERT INTO `role_per` VALUES (83, 4, 3);
INSERT INTO `role_per` VALUES (84, 4, 4);
INSERT INTO `role_per` VALUES (85, 4, 25);
INSERT INTO `role_per` VALUES (86, 4, 26);
INSERT INTO `role_per` VALUES (87, 4, 2);
INSERT INTO `role_per` VALUES (88, 4, 3);
INSERT INTO `role_per` VALUES (89, 4, 4);
INSERT INTO `role_per` VALUES (90, 4, 7);
INSERT INTO `role_per` VALUES (91, 4, 25);
INSERT INTO `role_per` VALUES (92, 4, 26);
INSERT INTO `role_per` VALUES (93, 4, 12);
INSERT INTO `role_per` VALUES (94, 4, 13);
INSERT INTO `role_per` VALUES (95, 4, 21);
INSERT INTO `role_per` VALUES (96, 4, 22);
INSERT INTO `role_per` VALUES (97, 4, 25);
INSERT INTO `role_per` VALUES (98, 4, 26);
INSERT INTO `role_per` VALUES (99, 5, 2);
INSERT INTO `role_per` VALUES (100, 5, 3);
INSERT INTO `role_per` VALUES (101, 5, 4);
INSERT INTO `role_per` VALUES (102, 5, 25);
INSERT INTO `role_per` VALUES (103, 5, 26);
INSERT INTO `role_per` VALUES (104, 5, 2);
INSERT INTO `role_per` VALUES (105, 5, 3);
INSERT INTO `role_per` VALUES (106, 5, 4);
INSERT INTO `role_per` VALUES (107, 5, 7);
INSERT INTO `role_per` VALUES (108, 5, 25);
INSERT INTO `role_per` VALUES (109, 5, 26);
INSERT INTO `role_per` VALUES (110, 5, 12);
INSERT INTO `role_per` VALUES (111, 5, 13);
INSERT INTO `role_per` VALUES (112, 5, 21);
INSERT INTO `role_per` VALUES (113, 5, 22);
INSERT INTO `role_per` VALUES (114, 5, 25);
INSERT INTO `role_per` VALUES (115, 5, 26);
INSERT INTO `role_per` VALUES (116, 5, 2);
INSERT INTO `role_per` VALUES (117, 5, 3);
INSERT INTO `role_per` VALUES (118, 5, 4);
INSERT INTO `role_per` VALUES (119, 5, 7);
INSERT INTO `role_per` VALUES (120, 5, 8);
INSERT INTO `role_per` VALUES (121, 5, 9);
INSERT INTO `role_per` VALUES (122, 5, 25);
INSERT INTO `role_per` VALUES (123, 5, 26);

-- ----------------------------
-- Table structure for updategoodslog
-- ----------------------------
DROP TABLE IF EXISTS `updategoodslog`;
CREATE TABLE `updategoodslog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '修改日志表的ID',
  `pid` int(11) NULL DEFAULT NULL COMMENT '商品编号',
  `pname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品名称',
  `eid` int(11) NULL DEFAULT NULL COMMENT '员工号',
  `ename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '修改人',
  `updatetime` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of updategoodslog
-- ----------------------------
INSERT INTO `updategoodslog` VALUES (1, 3, '韩版大露背蝴蝶结系带收腰喇叭线连衣裙', 9, '周杰伦', '2019-11-08 19:11:25');
INSERT INTO `updategoodslog` VALUES (2, 1, '百搭显高单排扣破洞高腰弹力小脚裤', 3, '王五', '2019-11-08 19:59:25');
INSERT INTO `updategoodslog` VALUES (3, 1, '百搭显高单排扣破洞高腰弹力小脚裤', 1, '张三', '2019-11-10 14:25:00');
INSERT INTO `updategoodslog` VALUES (4, 1, '百搭显高单排扣破洞高腰弹力小脚裤', 1, '张三', '2019-11-10 14:26:07');
INSERT INTO `updategoodslog` VALUES (5, 6, '新品玫瑰字母印花蕾丝拼接长袖', 1, '张三', '2019-11-10 14:27:04');
INSERT INTO `updategoodslog` VALUES (6, 6, '新品玫瑰字母印花蕾丝拼接长袖', 1, '张三', '2019-11-10 14:27:05');
INSERT INTO `updategoodslog` VALUES (7, 4, '韩版休闲百搭宽松简约字母绣花短袖T恤', 1, '张三', '2019-11-10 14:29:02');
INSERT INTO `updategoodslog` VALUES (8, 8, '2019春夏新款织带针织小开衫短款', 1, '张三', '2019-11-10 14:29:56');
INSERT INTO `updategoodslog` VALUES (9, 3, '韩版大露背蝴蝶结系带收腰喇叭线连衣裙', 1, '张三', '2019-11-10 14:30:21');
INSERT INTO `updategoodslog` VALUES (10, 5, '春装韩版百搭针织T恤女圆领纯色上衣', 1, '张三', '2019-11-10 14:30:54');
INSERT INTO `updategoodslog` VALUES (11, 5, '春装韩版百搭针织T恤女圆领纯色上衣', 1, '张三', '2019-11-10 14:30:56');
INSERT INTO `updategoodslog` VALUES (12, 5, '春装韩版百搭针织T恤女圆领纯色上衣', 1, '张三', '2019-11-10 14:31:26');
INSERT INTO `updategoodslog` VALUES (13, 6, '新品玫瑰字母印花蕾丝拼接长袖', 1, '张三', '2019-11-10 14:32:42');
INSERT INTO `updategoodslog` VALUES (14, 1, '百搭显高单排扣破洞高腰弹力小脚裤', 1, '张三', '2019-11-10 14:33:01');
INSERT INTO `updategoodslog` VALUES (15, 7, '修身显瘦撞色边针织T恤 学院风上衣', 1, '张三', '2019-11-10 14:34:31');
INSERT INTO `updategoodslog` VALUES (16, 116, '水杯', 1, '张三', '2019-11-10 14:36:18');
INSERT INTO `updategoodslog` VALUES (17, 116, '水杯', 1, '张三', '2019-11-10 14:36:22');
INSERT INTO `updategoodslog` VALUES (18, 116, '水杯', 1, '张三', '2019-11-10 14:37:38');
INSERT INTO `updategoodslog` VALUES (19, 116, '水杯', 1, '张三', '2019-11-10 14:38:42');
INSERT INTO `updategoodslog` VALUES (20, 116, '水杯', 1, '张三', '2019-11-10 14:40:27');
INSERT INTO `updategoodslog` VALUES (21, 113, '脆司令椒香脆皮鸭味干脆面', 1, '张三', '2019-11-10 14:41:45');
INSERT INTO `updategoodslog` VALUES (22, 116, '水杯', 1, '张三', '2019-11-10 14:43:41');
INSERT INTO `updategoodslog` VALUES (23, 113, '脆司令椒香脆皮鸭味干脆面', 1, '张三', '2019-11-10 14:44:04');
INSERT INTO `updategoodslog` VALUES (24, 1, '百搭显高单排扣破洞高腰弹力小脚裤', 1, '张三', '2019-11-10 15:57:31');
INSERT INTO `updategoodslog` VALUES (25, 1, '百搭显高单排扣破洞高腰弹力小脚裤', 1, '张三', '2019-11-10 15:57:43');
INSERT INTO `updategoodslog` VALUES (26, 1, '百搭显高单排扣破洞高腰弹力小脚裤', 1, '张三', '2019-11-10 20:33:30');
INSERT INTO `updategoodslog` VALUES (27, 45, '春季新款韩版街头立领收腰风衣外套', 1, '张三', '2019-11-11 08:06:32');
INSERT INTO `updategoodslog` VALUES (28, 24, '韩版小樱桃小清新雪纺衫衬衫上衣', 1, '张三', '2019-11-11 08:08:35');
INSERT INTO `updategoodslog` VALUES (29, 45, '春季新款韩版街头立领收腰风衣外套', 1, '张三', '2019-11-11 08:17:41');
INSERT INTO `updategoodslog` VALUES (30, 4, '韩版休闲百搭宽松简约字母绣花短袖T恤', 1, '张三', '2019-11-11 08:17:59');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(100) NOT NULL AUTO_INCREMENT,
  `telephone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` int(2) NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (12, '18503827215', '123456', '747057738@qq.com', '长安归故里', 1);
INSERT INTO `user` VALUES (16, '13071787517', '8248', 'guohangbk@163.com', '小马儿', 1);
INSERT INTO `user` VALUES (17, '17837141202', '00', '123@qq.com', '今天的小尹', 1);
INSERT INTO `user` VALUES (18, '15093381701', '00000', '123@qq.com', '老鹰', 0);

-- ----------------------------
-- Table structure for useraddress
-- ----------------------------
DROP TABLE IF EXISTS `useraddress`;
CREATE TABLE `useraddress`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uid` int(10) NOT NULL COMMENT '客户id',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收货人电话',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收货人姓名',
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收货地址',
  `isdefault` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '是否是默认收货地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of useraddress
-- ----------------------------
INSERT INTO `useraddress` VALUES (25, 11, '17703849708', 'cy', 'aaa', '0');
INSERT INTO `useraddress` VALUES (26, 11, '17703849708', 'cy1', 'aaa', '0');
INSERT INTO `useraddress` VALUES (27, 11, '17703849708', 'cy3', 'aaa', '0');
INSERT INTO `useraddress` VALUES (28, 14, '13071787517', '郭航', '河南省郑州市金水区牛顿国际', '1');
INSERT INTO `useraddress` VALUES (29, 12, '18503827215', '刘一博', '江南style', '0');
INSERT INTO `useraddress` VALUES (30, 14, '12', '张三', '12', '0');
INSERT INTO `useraddress` VALUES (32, 14, '1233333', '李四', '1545454545', '0');
INSERT INTO `useraddress` VALUES (35, 15, '1111', '1111', '1111', '1');
INSERT INTO `useraddress` VALUES (36, 16, '13071787517', '郭航', '河南省郑州市', '1');
INSERT INTO `useraddress` VALUES (37, 16, '121212', '张三', '1212121', '0');
INSERT INTO `useraddress` VALUES (38, 17, '第三方跟东方财富', '东风股份等水果等方式', '电饭锅电饭锅', '1');
INSERT INTO `useraddress` VALUES (39, 13, '15093381701', '米冠男', '牛顿国际B做', '1');

-- ----------------------------
-- Table structure for warehouselog
-- ----------------------------
DROP TABLE IF EXISTS `warehouselog`;
CREATE TABLE `warehouselog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NULL DEFAULT NULL,
  `eid` int(11) NULL DEFAULT NULL,
  `ename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` datetime(0) NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of warehouselog
-- ----------------------------
INSERT INTO `warehouselog` VALUES (1, 4, 1, '张三', '2019-11-11 20:35:05', '修改库存成功');

-- ----------------------------
-- Table structure for wish
-- ----------------------------
DROP TABLE IF EXISTS `wish`;
CREATE TABLE `wish`  (
  `oid` int(20) NOT NULL AUTO_INCREMENT,
  `uid` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `pid` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `pname` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pimage` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `price` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`oid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of wish
-- ----------------------------
INSERT INTO `wish` VALUES (33, '6', '5', '2017 春装新款韩版百搭针织打底短袖T恤女圆领纯色上衣', 'products/5.jpg', '36');
INSERT INTO `wish` VALUES (35, '8', '38', '2019春季运动裤女九分学生韩版哈伦', 'products/38.jpg', '68');
INSERT INTO `wish` VALUES (36, '11', '51', '韩版百搭时尚遮阳帽潮笑脸盘帽防晒帽', 'products/51.jpg', '29');
INSERT INTO `wish` VALUES (39, '12', '1', '百搭显高单排扣破洞高腰弹力小脚裤', 'products/1.jpg', '77');
INSERT INTO `wish` VALUES (40, '11', '42', '女宽松上衣春装2019韩版百搭半袖t恤', 'products/42.jpg', '45');
INSERT INTO `wish` VALUES (41, '14', '57', 'siggi草帽女夏天沙滩帽防晒遮阳帽\r\n', '/images/57.jpg', '39');
INSERT INTO `wish` VALUES (42, '14', '13', '2019春夏百搭优雅短袖套头针织衫', '/images/13.jpg', '56');
INSERT INTO `wish` VALUES (43, '15', '2', '百搭韩版显瘦纯色玫瑰花T恤', '/images/68261ed8-aebd-4fcc-aa54-ae85f77681c4.jpg', '56');
INSERT INTO `wish` VALUES (45, '13', '1', '百搭显高单排扣破洞高腰弹力小脚裤', '/images/1.jpg', '59');

SET FOREIGN_KEY_CHECKS = 1;
