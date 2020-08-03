package com.yybs.servlet;

import java.util.List;
import java.util.Map;

import javax.servlet.annotation.WebServlet;

import com.yybs.dao.IListDAO;
import com.yybs.dao.impl.ListDAOImpl;
import com.yybs.result.Result;


@WebServlet("/list")
public class ListServlet extends BaseServlet {
	
	private IListDAO dao = new ListDAOImpl();
	
	
	
	
	Result changeState(Map m){
		Map<String, Object> emp = (Map<String, Object>) session.getAttribute("emp");
		int i	= dao.changeState(m);
		if ( i > 0 ) {
			String s = "发货成功";
			int  k =  dao.setOrderLog(m,emp,s);
			return new Result(10208, " 发货成功 ", null);
		}
		String j = "发货失败";
		int  k =  dao.setOrderLog(m,emp,j);
		return new Result(10209, " 发货失败", null);
		
	}
	
	
	
	
	Result updateOrder(Map m){
		
		int i = dao.updateOrder(m);
		if (i > 0 ) {
			return new Result(10206, "修改成功", null);
		}
		return new Result(10207, "修改失败", null);
		
	}
	
	
	
	
	Result getOrder(Map m){
		int oid = Integer.parseInt(m.get("oid").toString());
		System.out.println(oid);
		List<Map<String, Object>> order = dao.getOrder(oid);
		
		System.out.println(order);
		
		if (order == null) {
			return new Result(10204, "获取订单详情失败", null);
		}
		return new Result(10205, "获取订单详情成功", order);
	}
	
	/*
	 * 订单分页及查询
	 * */
	Result getList(Map m){
		Map<String,Object> map = dao.getListByPage(m);
		if(map.size()>0){
			return new Result(10202,"获取分页成功", map);			
		}else{
			return new Result(10203,"获取分页失败", null);
		}
	}
	
	Result	getOrderLog(Map m){
		Map<String,Object> map = dao.getOrderLogByPage(m);
		if(map.size()>0){
			return new Result(10202,"获取分页成功", map);			
		}else{
			return new Result(10203,"获取分页失败", null);
		}
		
		
	}
}
