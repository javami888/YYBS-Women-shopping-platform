/**
 * 
 */
package com.yybs.dao;

import java.util.Map;

/**
 * @author 郭航
 * @date  2019年11月9日
 */
public interface IUserManageDAO {
	
	/*
	 * 分页+搜索获取所有用户的信息
	 * */
	Map<String,Object> getUserInfoByPage(Map  m);
	
	
	/*
	 * 通过用户id获取用户信息展示在模态框
	 * */
	Map<String,Object> getUserInfoByUid(Map m);
	
	
	/*
	 * 在模态框中修改用户信息，将数据放进user表中
	 * */
	public int updateUserInfo(Map m);
	
	
	/*
	 * 设置用户账号状态
	 * 0禁用
	 * 1启用
	 * */
	public int stopAccount(Map m);
	
	
	
}
