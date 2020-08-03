/**
 * 
 */
package com.yybs.dao;

import java.util.List;
import java.util.Map;


/**
 * @author 郭航
 * @date  2019年11月10日
 */
public interface IStaffManageDAO {
	
	/*
	 * 获取员工职位分类
	 * */
	List<Map<String, Object>> getEmpDept(Map m);

	/**
	 * 获取员工信息+分页+搜索
	 * @return
	 */
	Map<String, Object> getStaffInfoByPage(Map m);

	/**
	 * 修改员工账号状态
	 * @param m
	 * @return
	 */
	int stopAccount(Map m);

	/**
	 * 获取所有职位信息
	 * @param m
	 * @return
	 */
	List<Map<String, Object>> getAllDept(Map m);

	/**
	 * 通过id获取员工信息
	 * @return
	 */
	Map<String, Object> getStaffInfoByid(Map m);

	/**
	 * 通过员工id修改信息
	 * @return
	 */
	int updateStaffInfo(Map m);

	/**
	 * 往login表中插入数据，返回主键
	 * @param tel
	 * @param password
	 * @return
	 */
	int addLogin(String tel, String password);

	/**
	 * 添加数据到employee表中插入数据
	 * @param loginID
	 * @param m
	 * @return
	 */
	int addStaffInfo(int loginID, Map m);
	
	
}
