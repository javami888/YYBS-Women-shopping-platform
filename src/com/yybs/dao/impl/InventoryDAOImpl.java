package com.yybs.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yybs.dao.InventoryDAO;
import com.yybs.util.DAOUtil;
import com.yybs.util.PageUtil;
import com.yybs.util.TenPageUtil;

public class InventoryDAOImpl implements InventoryDAO {
	/*
	 * 获取所有商品
	 * */
	@Override
	public Map<String, Object> allProInventory(Map m) {
		//动态拼接sql
		StringBuilder sb = new StringBuilder();
		if(m.get("pname")!=null && !"".equals(m.get("pname")) ){
			sb.append(" and pname like '%"+m.get("pname")+"%'");
		};
		//查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count from product where state = 0 ");
		sb1.append(sb);
		List<Map<String,Object>> d1 = DAOUtil.executeQuery(sb1.toString() );
		Long totalCount = (Long)d1.get(0).get("count");
		
		//使用page工具类 计算所有的信息
		long parseLong  = Long.parseLong((String)(m.get("page")));
		PageUtil util = new PageUtil( parseLong,totalCount);
		
		//查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" select * from product where state = 0 ");
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
	 * 根据商品id获取商品的库存
	 */
	@Override
	public Map<String, Object> getInvenBypid(Map m) {
		String sql = "select pid,inventory from product where pid = ? ";
		return DAOUtil.executeQuery(sql, m.get("pid")).get(0);
	}

	
	/*
	 * 根据商品id修改库存
	 * */
	@Override
	public int updateProInventory(Map m) {
		String sql = "UPDATE product set inventory = ? WHERE pid = ?";
		int res = DAOUtil.executeUpdate(sql, m.get("inventory"),m.get("pid"));
		if(res >0){
			return res;
		}
		return 0;
	}

	
	/**
	 * 入库日志 分页 搜索
	 */
	@Override
	public Map<String, Object> getHouseLogByPage(Map m) {
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
		sb1.append(" select count(*) count from warehouselog where 1=1 ");
		sb1.append(sb);
		List<Map<String,Object>> d1 = DAOUtil.executeQuery(sb1.toString() );
		Long totalCount = (Long)d1.get(0).get("count");
		
		//使用page工具类 计算所有的信息
		long parseLong  = Long.parseLong((String)(m.get("page")));
		TenPageUtil util = new TenPageUtil( parseLong,totalCount);
		
		//查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" select DATE_FORMAT(w.time,'%Y-%m-%d %H:%i:%S')outtime,w.* from warehouselog w where 1=1 ");
		sb2.append(sb);
		sb2.append(" limit  ? , 10  ");
		List<Map<String,Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());
		
		//整理当前页的数据
		Map<String,Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageDate", d2);
		
		return map;
	}

	
	

	/* 
	 * 设置修改日志
	 */
	@Override
	public int setLog(String eid, String ename,String state, Map m) {
		String sql = "insert into warehouselog values (null, ?, ?, ?, now(), ?)";
		return DAOUtil.executeUpdate(sql, m.get("pid"), eid, ename, state);
	}

	
	
	
	
	
}
