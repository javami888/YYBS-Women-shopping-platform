package com.yybs.servlet;

import java.util.List;
import java.util.Map;

import javax.servlet.annotation.WebServlet;

import com.yybs.dao.IRoleDAO;
import com.yybs.dao.impl.RoleDAOImpl;
import com.yybs.result.Result;
import com.yybs.util.DAOUtil;
@WebServlet("/role")
public class RoleManageServlet extends BaseServlet {
		private IRoleDAO dao  = new RoleDAOImpl();
	
	/*
	 * 获取所有的职位数据
	 * */
	Result getAllRole(Map m){
		List<Map<String,Object>> map = dao.getAllRole(m);
		if(map.size() >0){
			return new  Result(10160,"获取所有职位信息成功",map);
		}
		return new  Result(10161,"获取所有职位信息失败",map);
	}
	
	
	
	/*
	 * 获取所有的权限
	 * */
	Result  getPermission(Map  m) {

		List<Map<String, Object>> list = dao.getPermission(m);
		if(list.size()>0){		
			return  new Result(10162, "获取所有权限成功", list);
		}
		return  new Result(10163, "获取所有权限失败", null);
	}
	
	
	/*
	 * 通过id获取单个职位数据
	 * */
	Result getRoleById(Map m){
		List<Map<String,Object>> list = dao.getRoleById(m);
		if(list.size() >0){
			return  new Result(10164, "获取单个角色权限成功", list);
		}
		return  new Result(10165, "获取单个角色权限失败", null);
	}


	/*
	 * 通过id修改单个职位的权限
	 * */
	Result updateRole(Map m){
		int a = dao.updateRole(m);
		if(a >0){
			return  new Result(10166, "通过id修改单个职位的权限成功", null);
		}
		return  new Result(10167, "通过id修改单个职位的权限失败", null);
	}

	
	
	/*
	 * 添加新职位
	 * */
	Result addDept(Map m){
		int res = dao.addDept(m);
		if(res >0 ){
			return new Result(10168,"添加新职位成功",null);
		}
		return new Result(10169,"添加新职位失败",null);
	}

	
	/*
	 * 删除职位及权限
	 * */
	Result deleteStaffInfo(Map m){
		int res = dao.deleteStaffInfo(m);
		if(res >0 ){
			return new Result(10176,"删除职位成功",null);
		}
		return new Result(10177,"删除职位失败",null);
	}
	
	
}
