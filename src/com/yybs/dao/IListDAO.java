package com.yybs.dao;

import java.util.List;
import java.util.Map;

public interface IListDAO {
	
	/**
	 * 查询所有订单
	 * @return
	 */
/*	List<Map<String, Object>> getListAll();*/
	
	/**
	 *  订单分页+搜索
	 */
	Map<String, Object> getListByPage(Map m);
	
	/**
	 * 获取订单详情
	 * @param oid
	 * @return
	 */
	List<Map<String, Object>> getOrder(int oid);
	
	
	/**
	 * 修改订单信息
	 * @param m
	 * @return
	 */
	int updateOrder(Map m);
	
	/**
	 * 发货
	 * @param m
	 * @return
	 */
	int changeState(Map m);
	
	
	/**
	 * 记录出库日志
	 * @param m
	 * @param emp
	 * @param s
	 * @return
	 */
	int setOrderLog(Map m,Map emp,String s);
	/*
	 * 出库日志分页 搜索
	 */
	Map<String, Object> getOrderLogByPage(Map m);

	
	
}
