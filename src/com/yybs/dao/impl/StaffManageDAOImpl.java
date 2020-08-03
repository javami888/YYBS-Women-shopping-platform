/**
 * 
 */
package com.yybs.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import com.yybs.dao.IStaffManageDAO;
import com.yybs.util.DAOUtil;
import com.yybs.util.PageUtil;

/**
 * @author 郭航
 * @date  2019年11月10日
 */
public class StaffManageDAOImpl implements IStaffManageDAO {

	/* 
	 * 获取员工职位分类
	 */
	@Override
	public List<Map<String, Object>> getEmpDept(Map m) {
		String sql = "select * from department ";
		return DAOUtil.executeQuery(sql);
	}
	
	
	/* 
	 * 获取员工信息+分页+搜索
	 */
	@Override
	public Map<String, Object> getStaffInfoByPage(Map m) {
		//动态拼接sql
		StringBuilder sb = new StringBuilder();
		if(m.get("params")!=null && !"".equals(m.get("params")) ){
			sb.append(" and telephone like '%"+m.get("params")+"%'");
			sb.append(" or emp.name like '%"+m.get("params")+"%'");
		};
		if(m.get("deptID")!=null && !"".equals(m.get("deptID")) ){
			sb.append(" and emp.deptID = "+m.get("deptID") );
		};
		
		//查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" SELECT count(*)count FROM employee emp INNER JOIN department dept ON emp.deptID = dept.id where 1=1 ");
		sb1.append(sb);
		List<Map<String,Object>> d1 = DAOUtil.executeQuery(sb1.toString() );
		Long totalCount = (Long)d1.get(0).get("count");
		
		//使用page工具类 计算所有的信息
		long parseLong  = Long.parseLong((String)(m.get("page")));
		PageUtil util = new PageUtil( parseLong,totalCount);
		
		//查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" SELECT emp.id,emp.name,emp.telephone,DATE_FORMAT(emp.hiredate,'%Y-%m-%d %H:%i:%S')hiredates,emp.state, "
				+ "dept.name deptname FROM employee emp INNER JOIN department dept ON emp.deptID = dept.id where 1=1 ");
		sb2.append(sb);
		sb2.append(" limit ?,8 ");
		List<Map<String,Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());
		
		//整理当前页的数据
		Map<String,Object> map = new HashMap();
		map.put("pageInfo", util);
		map.put("pageDate", d2);
		
		return map;
	}


	/* 
	 * 修改员工账号状态
	 */
	@Override
	public int stopAccount(Map m) {
		String sql = "update employee set state = ? where id = ?";
		return DAOUtil.executeUpdate(sql, m.get("state"), m.get("id"));
	}


	/* 
	 * 获取所有职位
	 */
	@Override
	public List<Map<String, Object>> getAllDept(Map m) {
		String sql = "select * from department";
		return DAOUtil.executeQuery(sql);
	}


	/* 
	 * 通过id获取员工信息
	 */
	@Override
	public Map<String, Object> getStaffInfoByid(Map m) {
		String sql = "select DATE_FORMAT(emp.hiredate,'%Y-%m-%d %H:%i:%S')hiredates,emp.* from employee emp where id = ? ";
		return DAOUtil.executeQuery(sql, m.get("id")).get(0);
	}


	/* 
	 * 通过id修改员工信息
	 */
	@Override
	 public int updateStaffInfo(Map m) {
		String sql = "update employee set telephone = ?, deptID = ?, roleID= ? where id = ?";
		return DAOUtil.executeUpdate(sql, m.get("telephone"),m.get("deptID"),m.get("deptID"), m.get("id"));
	}


	/* 
	 * 往login表中插入账号密码，返回主键ID
	 */
	@Override
	public int addLogin(String tel, String password) {
		String sql = "insert into login values (null,?,?)";
		return DAOUtil.executeUpdateAndGeneratedKeys(sql, tel, password);
	}


	/* 
	 * 添加数据到employee表中插入数据
	 */
	@Override
	public int addStaffInfo(int loginID, Map m) {
		String sql = "insert into employee values(null, ?, ?, ?, 1, ?, ?, 0, ?, '/images/touxiang.png') ";
		return DAOUtil.executeUpdate(sql, m.get("name"), m.get("telephone"), m.get("hiredate"), m.get("deptID"), m.get("deptID"), loginID);
	}
	
	
	
	
	
	
	
	

	
}
