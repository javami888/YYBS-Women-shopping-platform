package com.yybs.dao;

import java.util.List;
import java.util.Map;

public interface InventoryDAO {
	
	/*
	 * 获取所有的商品
	 * */
	Map<String, Object> allProInventory(Map m);

	/**
	 * 根据商品id获取商品的库存
	 * @param m
	 * @return
	 */
	Map<String, Object> getInvenBypid(Map m);
	
	
	/*
	 * 根据商品id修改库存
	 * */
	int updateProInventory(Map m);

	
	
	/**
	 * 入库日志分页  搜索
	 * @param m
	 * @return
	 */
	Map<String, Object> getHouseLogByPage(Map m);
	
	
	/**
	 * 写入修改日志
	 * @param eid
	 * @param ename
	 * @param m
	 * @return
	 */
	int setLog(String eid, String ename,String state, Map m);

	
	
	
	
}
