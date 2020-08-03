package com.yybs.dao;

import java.util.List;
import java.util.Map;

public interface IAdminDAO {
	
	/**
	 * 员工登录
	 * @param m
	 * @return  int  如果登录成功返回登录id  不成功返回0
	 */
	int  isLogin(Map  m);

	/**
	 * 根据登录d查询员工
	 * @param id
	 * @return
	 */
	Map<String, Object> getEmpById(int id);
	
	/*
	 * 获取员工权限
	 * */
	List<Map<String, Object>> getPermissionByRid(int rid);

	/**
	 * 根据员工id修改员工信息及头像
	 * @param map
	 * @param id
	 * @return
	 */
	int updateInfo(Map<String, Object> map, String id);

	/**
	 * 展示员工个人信息
	 * @param id
	 * @return
	 */
	Map<String, Object> showinfo(String id);

	/**
	 * 后台首页展示员工信息
	 * @param m
	 * @return
	 */
	Map<String, Object> showStaffInfo(Map m);
	
	

}
