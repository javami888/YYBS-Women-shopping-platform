/**
 * 
 */
package com.yybs.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yybs.dao.IUserManageDAO;
import com.yybs.util.DAOUtil;
import com.yybs.util.PageUtil;

/**
 * @author 郭航
 * @date  2019年11月9日
 */
public class UserManageDAOImpl implements IUserManageDAO {

	/* 
	 * 分页+搜索获取所有用户的信息
	 */
	@Override
	public Map<String, Object> getUserInfoByPage(Map m) {
		//动态拼接sql
		StringBuilder sb = new StringBuilder();
		if(m.get("params")!=null && !"".equals(m.get("params")) ){
			sb.append(" and telephone like '%"+m.get("params")+"%'");
			sb.append(" or nickname like '%"+m.get("params")+"%'");
		};
		
		//查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count from user where 1=1 ");
		sb1.append(sb);
		List<Map<String,Object>> d1 = DAOUtil.executeQuery(sb1.toString() );
		Long totalCount = (Long)d1.get(0).get("count");
		
		//使用page工具类 计算所有的信息
		long parseLong  = Long.parseLong((String)(m.get("page")));
		PageUtil util = new PageUtil( parseLong,totalCount);
		
		//查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" select * from user where 1=1 ");
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
	 * 通过用户id将用户信息展示在模态框
	 */
	@Override
	public Map<String, Object> getUserInfoByUid(Map m) {
		String sql = "select * from user where uid = ? ";
		return DAOUtil.executeQuery(sql, m.get("uid")).get(0);
	}
	
	
	/*
	 * 在模态框中修改用户信息，将数据放进user表中
	 * */
	public int updateUserInfo(Map m) {
		String sql = "update user set telephone = ? ,password = ? ,email = ? ,nickname = ? where uid = ?";
		return DAOUtil.executeUpdate(sql, m.get("telephone"), m.get("password"), m.get("email"), m.get("nickname"), m.get("uid"));
		
	}
	
	
	/*
	 * 设置用户账号状态
	 * 0禁用
	 * 1启用
	 * */
	public int stopAccount(Map m) {
		String sql = "update user set state = ? where uid = ?";
		return DAOUtil.executeUpdate(sql, m.get("state"), m.get("uid"));
	}
	
	
	
}
