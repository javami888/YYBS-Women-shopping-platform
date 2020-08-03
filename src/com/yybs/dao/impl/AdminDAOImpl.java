package com.yybs.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.Test;

import com.yybs.dao.IAdminDAO;
import com.yybs.util.DAOUtil;

public class AdminDAOImpl implements IAdminDAO{
	/*
	 * 
	 * 员工登录
	 * */
	@Override
	public int isLogin(Map m) {
		String sql = "select id from login where username = ? and password = ?";
		
		List<Map<String, Object>> list = DAOUtil.executeQuery(sql, m.get("username"),m.get("password"));
		
		if(list.size() > 0 ) {
			return  (int) list.get(0).get("id");
		}
		
		return 0;
	}
	/*
	 * 
	 * 获取员工id
	 * */
	@Override
	public Map<String, Object> getEmpById(int id) {
		String sql = "select *  from employee where loginID = ?";
		List<Map<String, Object>> list = DAOUtil.executeQuery(sql, id);
		
		if(list.size() > 0) {
			return list.get(0);
		}
		return null;
	}
	/*
	 * 
	 * 获取员工权限
	 * */
	@Override
	public List<Map<String, Object>> getPermissionByRid(int rid) {
		//查询父权
		String sql = "select  DISTINCT p1.id,p1.name  from  role_per  rp  " + 
				"inner  join   permission  p " + 
				"on  rp.pid = p.id " + 
				"inner  join   permission  p1 " + 
				"on  p.parentid = p1.id  " + 
				"where rp.rid = ?";
		List<Map<String,Object>> list = DAOUtil.executeQuery(sql, rid);
		
		//查询子权限
		String sql1 = "select  p.id,p.parentid  pid,p.name , p.url urlPath  from  role_per  rp  " + 
				"inner  join   permission  p " + 
				"on  rp.pid = p.id " + 
				"where rp.rid = ?";
		List<Map<String,Object>> list2 = DAOUtil.executeQuery(sql1, rid);
		
		//把子权限的内容遍历到父权限里
		for(Map<String,Object> map : list){
			List<Map<String,Object>> subMenu = new ArrayList<>();
			Object id =map.get("id");
			
				for(Map<String,Object> map2 : list2){
						Object pid = map2.get("pid");
						if(id.equals(pid)){
							subMenu.add(map2);
						}
						map.put("subMenu", subMenu);
				}
		}
		return list;
	}
	

	/* 
	 * 根据员工id。修改员工信息及头像
	 */
	@Override
	public int updateInfo(Map<String, Object> map, String id) {
		Object object = map.get("updateimg");
		if(object == null) {
			String sql = "update employee set telephone = ? where id = ?";
			return DAOUtil.executeUpdate(sql, map.get("telephone") ,id);
		}else{
			String sql = "update employee set telephone = ? , portrait = ? where id = ?";
			return DAOUtil.executeUpdate(sql, map.get("telephone"), map.get("updateimg") ,id);
		}
	}
	/*
	 * 展示员工个人信息
	 */
	@Override
	public Map<String, Object> showinfo(String id) {
		String sql = "select DATE_FORMAT(emp.hiredate,'%Y-%m-%d %H:%i:%S')hiredate,emp.id,emp.name,emp.telephone,emp.portrait from employee emp where id = ?";
		return DAOUtil.executeQuery(sql, id).get(0);
	}
	
	
	/* 
	 * 后台首页展示员工信息
	 */
	@Override
	public Map<String, Object> showStaffInfo(Map m) {
		String sql = "select emp.name,emp.portrait,dep.name dname from employee emp inner join department dep on emp.deptID = dep.id where emp.id = ? ";
		return DAOUtil.executeQuery(sql, m.get("id")).get(0);
	}
	

}
