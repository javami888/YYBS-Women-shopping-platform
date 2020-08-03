package com.yybs.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yybs.dao.IListDAO;
import com.yybs.util.DAOUtil;
import com.yybs.util.PageUtil;
import com.yybs.util.TenPageUtil;

public class ListDAOImpl implements IListDAO{

	/**
	 *  分页+搜索
	 */
	@Override
	public Map<String, Object> getListByPage(Map m) {
		//动态拼接sql
		StringBuilder sb = new StringBuilder();
		if(m.get("name")!=null && !"".equals(m.get("name")) ){
			sb.append(" and name like '%"+m.get("name")+"%'");
		};
		if(m.get("telephone")!=null && !"".equals(m.get("telephone")) ){
			sb.append(" and telephone like '%"+m.get("telephone")+"%'");
		};
		if(m.get("state")!=null && !"".equals(m.get("state")) ){
			sb.append(" and state ="+m.get("state"));
		};
		
		
		//查询当前订单的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count from orders where 1=1 ");
		sb1.append(sb);
		List<Map<String,Object>> d1 = DAOUtil.executeQuery(sb1.toString() );
		Long totalCount = (Long)d1.get(0).get("count");
		
		//使用page工具类 计算所有的信息
		long parseLong  = Long.parseLong((String)(m.get("page")));
		PageUtil util = new PageUtil( parseLong,totalCount);
		
		//查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" select DATE_FORMAT(o.ordertime,'%Y-%m-%d %H:%i:%S')ordertimes,o.* from orders o where 1=1");
		sb2.append(sb);
		sb2.append(" limit  ? , 8  ");
		List<Map<String,Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());
		
		//整理当前页的数据
		Map<String,Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageDate", d2);
		
		return map;
	}
	
	
	
	
	
	@Override
	public List<Map<String, Object>> getOrder(int oid) {
		String sql = "select * from orderitem oi inner join orders o on oi.oid= o.oid where oi.oid = ?";
		
		List<Map<String,Object>> list = DAOUtil.executeQuery(sql, oid);
		return list;
	}

	@Override
	public int updateOrder(Map m) {
		String sql = "update orders set name=? , address = ?, telephone = ?  where oid = ?";	
		return DAOUtil.executeUpdate(sql,m.get("name"),m.get("address"),m.get("telephone"),m.get("oid"));
	}

	@Override
	public int changeState(Map m) {
		
		String sql = " update orders set state = 2  where oid = ?";
		return DAOUtil.executeUpdate(sql, m.get("oid"));
	}

	@Override
	public int setOrderLog(Map m, Map emp,String s) {
		String  sql = " insert into orderoutlog values(null,?,?,?,now(),?)";
		int i = DAOUtil.executeUpdate(sql, m.get("oid"),emp.get("id"),emp.get("name"),s);
		return i;
	}




	/*
	 * 出库记录+分页+搜索
	 * */
	@Override
	public Map<String, Object> getOrderLogByPage(Map m) {
		//动态拼接sql
		StringBuilder sb = new StringBuilder();
		if(m.get("ename")!=null && !"".equals(m.get("ename")) ){
			sb.append(" and ename like '%"+m.get("ename")+"%'");
		};
		if(m.get("time")!=null && !"".equals(m.get("time")) ){
			sb.append(" and time like '%"+m.get("time")+"%'");
		};
		
		
		
		//查询当前日志总条数
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count from orderoutlog where 1=1 ");
		sb1.append(sb);
		List<Map<String,Object>> d1 = DAOUtil.executeQuery(sb1.toString() );
		Long totalCount = (Long)d1.get(0).get("count");
		
		//使用page工具类 计算所有的信息
		long parseLong  = Long.parseLong((String)(m.get("page")));
		TenPageUtil util = new TenPageUtil( parseLong,totalCount);
		
		//查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" select DATE_FORMAT(o.time,'%Y-%m-%d %H:%i:%S')outtime,o.* from orderoutlog o where 1=1 ");
		sb2.append(sb);
		sb2.append(" limit  ? , 10  ");
		List<Map<String,Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());
		
		//整理当前页的数据
		Map<String,Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageDate", d2);
		
		return map;
	}
	
	
}
