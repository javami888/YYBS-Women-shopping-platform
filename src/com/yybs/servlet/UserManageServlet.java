/**
 * 
 */
package com.yybs.servlet;

import java.util.Map;

import javax.servlet.annotation.WebServlet;

import com.yybs.dao.IUserManageDAO;
import com.yybs.dao.impl.UserManageDAOImpl;
import com.yybs.result.Result;

/**
 * @author 郭航
 * @date  2019年11月9日
 */
@WebServlet("/user")
public class UserManageServlet extends BaseServlet {
	
	
	private IUserManageDAO dao = new UserManageDAOImpl();
	
	/*
	 * 分页+搜索获取用户信息
	 * */
	Result getUserInfoByPage(Map m) {
		Map<String, Object> map = dao.getUserInfoByPage(m);
		if(map.size()>0){
			return new Result(10132,"获取用户及分页信息成功", map);			
		}else{
			return new Result(10133,"获取用户及分页信息失败", null);
		}
	}
	
	
	/*
	 * 通过用户id获取用户信息展示在模态框
	 * */
	Result getUserInfoByUid(Map m) {
		Map<String, Object> map = dao.getUserInfoByUid(m);
		if(map.size() > 0) {
			return new Result(10134,"通过uid获取用户信息成功", map);
		}
		return new Result(10135,"通过uid获取用户信息失败", null);
	}
	
	
	/*
	 * 在模态框中修改用户信息，将数据放进user表中
	 * */
	Result updateUserInfo(Map m) {
		int res = dao.updateUserInfo(m);
		if(res > 0) {
			return new Result(10136,"修改用户信息成功", res);
		}
		return new Result(10137,"修改用户信息失败", null);
	}
	
	
	/*
	 * 设置用户账号状态
	 * 0禁用
	 * 1启用
	 * */
	Result stopAccount(Map m) {
		int res = dao.stopAccount(m);
		if(res > 0) {
			return new Result(10138,"修改用户账号状态成功", res);
		}
		return new Result(10139,"修改用户账号状态失败", null);
	}
	
	
	
}
