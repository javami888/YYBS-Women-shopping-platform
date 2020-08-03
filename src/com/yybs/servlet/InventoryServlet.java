package com.yybs.servlet;

import java.util.Map;

import javax.servlet.annotation.WebServlet;

import com.yybs.dao.InventoryDAO;
import com.yybs.dao.impl.InventoryDAOImpl;
import com.yybs.result.Result;


@WebServlet("/inven")
public class InventoryServlet extends BaseServlet {

	private InventoryDAO dao = new InventoryDAOImpl();
	
	/*
	 * 获取所有的商品
	 * */
	Result allProInventory(Map m){
		Map<String, Object> map = dao.allProInventory(m);
		if(map.size() >0){
			return new Result(10170,"显示库存管理页面成功",map);
		}
		return new Result(10171,"显示库存管理页面失败",null);
	}
	
	/*
	 * 根据商品id获取商品的库存
	 * */
	Result getInvenBypid(Map m){
		Map<String, Object> map = dao.getInvenBypid(m);
		if(map.size() >0){
			return new Result(10172,"根据商品id获取商品库存成功",map);
		}
		return new Result(10173,"根据商品id获取商品库存失败",null);
	}
	
	
	/*
	 * 根据商品id修改库存
	 * */
	Result updateProInventory(Map m){
		Map<String,Object> map = (Map<String, Object>) session.getAttribute("emp");
		String eid = map.get("id").toString();
		String ename = map.get("name").toString();
		//修改库存
		int res = dao.updateProInventory(m);
		if(res > 0 ){
			int i = dao.setLog(eid,ename,"修改库存成功",m);
			return new Result(10174,"修改库存成功",null);
		}
		int i = dao.setLog(eid,ename,"修改库存失败",m);
		return new Result(10175,"修改库存失败",null);
	}

	
	/**
	 * 入库记录
	 * @param m
	 * @return
	 */
	Result getHouseLog(Map m){
		Map<String,Object> map = dao.getHouseLogByPage(m);
		if(map.size()>0){
			return new Result(10204,"获取入库记录数据成功", map);			
		}else{
			return new Result(10205,"获取入库记录数据失败", null);
		}
		
	}
	
	

	
	
	
	
}
