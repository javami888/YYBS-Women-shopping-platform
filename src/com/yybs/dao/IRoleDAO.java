package com.yybs.dao;

import java.util.List;
import java.util.Map;

import com.yybs.result.Result;
import com.yybs.util.DAOUtil;

public interface IRoleDAO {
	/*
	 * 获取所有的职位数据
	 * */
	List<Map<String,Object>> getAllRole(Map m);
	
	/*
	 * 通过id获取单个职位数据
	 * */
	List<Map<String,Object>> getRoleById(Map m);
	
	/*
	 * 获取所有的权限
	 * */
	List<Map<String, Object>> getPermission(Map m);
	
	/*
	 * 通过id修改单个职位的权限
	 * */
	int updateRole(Map m);

	/*
	 * 添加新职位
	 * */
	int addDept(Map m);

	/*
	 * 删除职位及权限
	 * */
	int deleteStaffInfo(Map m);

	

}
