package com.yybs.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

import com.yybs.dao.IRoleDAO;
import com.yybs.util.DAOUtil;

public class RoleDAOImpl implements IRoleDAO {
	/*
	 * 获取所有的职位数据
	 * */
	@Override
	public List<Map<String,Object>> getAllRole(Map m) {
		String sql  = "select * from department ";
		List<Map<String,Object>> list = DAOUtil.executeQuery(sql);
		if(list.size() >0){
			return list;
		}
		return null;
	}

	/*
	 * 通过id获取单个职位数据
	 * */
	@Override
	public List<Map<String,Object>> getRoleById(Map m) {
		String sql = "SELECT dept.id,dept.name,rp.pid from department dept INNER JOIN role_per rp on dept.id=rp.rid  where dept.id = ?";
		List<Map<String,Object>> list = DAOUtil.executeQuery(sql,m.get("id"));
		if(list.size() >0){
			return list;
		}
		return null;
	}

	/*
	 * 获取所有的权限
	 * */
	@Override
	public List<Map<String, Object>> getPermission(Map m) {
		//查询父权
		String sql = "select  DISTINCT p1.id,p1.name  from  role_per  rp  " + 
				"inner  join   permission  p " + 
				"on  rp.pid = p.id " + 
				"inner  join   permission  p1 " + 
				"on  p.parentid = p1.id  " + 
				"where 1 = 1";
		List<Map<String,Object>> list = DAOUtil.executeQuery(sql);
		
		//查询子权限
		String sql1 = "select p.id pid,per.id,per.name from permission p INNER JOIN permission per ON per.parentid = p.id ";
		List<Map<String,Object>> list2 = DAOUtil.executeQuery(sql1);
		
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
	 * 通过id修改单个职位的权限
	 */
	@Override
	public int updateRole(Map m) {
		String sql = "DELETE FROM role_per WHERE rid = ? ";
		int a = DAOUtil.executeUpdate(sql, m.get("deptid"));
		if (a > 0) {
			String[] updaterole = m.get("updaterole").toString().split(",");
			for (int i = 0; i < updaterole.length; i++) {
				String sqll = "INSERT INTO role_per (rid, pid) VALUES (?, ?)";
				int al = DAOUtil.executeUpdate(sqll, m.get("deptid"), updaterole[i]);
			}
			return 1;
		}
		return 0;
	}

	
	/*
	 * 添加新职位
	 * */
	@Override
	public int addDept(Map m) {
		String sql = "INSERT INTO department VALUES (null , ?, ?, 1)";
		int res = DAOUtil.executeUpdateAndGeneratedKeys(sql,m.get("name"),m.get("desc"));
		if(res > 0){
			String sqll = "INSERT INTO role_per (rid, pid) VALUES (?, 0)";
			DAOUtil.executeUpdate(sqll, res);
			return 1;
		}
		return 0;
	}

	/*
	 * 删除职位及权限
	 * */
	@Override
	public int deleteStaffInfo(Map m) {
		//删除职位
		String sql = "DELETE FROM department WHERE id = ?";
		int res = DAOUtil.executeUpdate(sql, m.get("id"));
		if(res > 0 ){
			//删除权限
			String sqll ="DELETE FROM role_per WHERE rid = ?"; 
			int foo =DAOUtil.executeUpdate(sqll, m.get("id"));
			if(foo > 0){
				return foo;
			}
			return 0;
		}
		return 0;
	}

	
	
	
	
}
