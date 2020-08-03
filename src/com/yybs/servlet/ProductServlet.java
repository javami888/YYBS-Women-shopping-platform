package com.yybs.servlet;

import java.util.List;
import java.util.Map;

import javax.servlet.annotation.WebServlet;

import com.yybs.dao.IProductDAO;
import com.yybs.dao.impl.IProductDAOImpl;
import com.yybs.result.Result;
import com.yybs.util.FileUtil;

@WebServlet("/pro")
public class ProductServlet extends BaseServlet {
	private IProductDAO dao = new IProductDAOImpl();
	/*
	 * 分页及查询
	 * */
	Result getpro(Map m){
		Map<String,Object> map = dao.getProByPage(m);
		if(map.size()>0){
			return new Result(10007,"获取商品分页及查询成功", map);			
		}else{
			return new Result(10008,"获取商品分页及查询失败", null);
		}
	}
	
	
	/*
	 * 获取所有商品分类
	 * */
	Result getallgoodsType(Map m) {
		List<Map<String,Object>> list = dao.getallgoodsType();
		if(list.size() > 0) {
			return new Result(10100, "获取所有商品分类成功", list);
		}
		return new Result(10101, "获取所有商品分类失败", null);
	}
	
	
	/*
	 * 添加审核商品
	 * */
	Result addPro(Map m){
		Map<String,Object> map = FileUtil.upload(request);
		
		int id = dao.addPro(map);
		if(id > 0) {	//	添加成功
			Map<String,Object> emp = (Map<String,Object>)session.getAttribute("emp");
			int a =dao.addAuditlnfo(id,emp.get("id"),emp.get("name"));
			if(a > 0){
				return new Result(10009,"添加成功，请等待审核结果",null);
			}
			return new Result(10010,"添加成功，日志记录失败！",null);
		}else {
			return new Result(100100,"添加失败！",null);
		}
	}
	
	
	/*
	 * 通过pid获取审核商品
	 * */
	Result getAuditProByPID(Map m){
		Map<String,Object> pro = dao.getAuditProByPID(m);
		if(pro.size()>0){
			return new Result(10011,"通过pid获取待审核商品成功",pro);
		}
		return new Result(10012,"通过pid获取待审核商品失败",null);
	}
	
	
	/*
	 * 审核商品 并添加审核结果到 审核日志中
	 * */
	Result auditResult(Map m){
		//修改审核选项
		int a =dao.updateAudiPro(m);
		if(a > 0){
			Map<String,Object> emp = (Map<String,Object>)session.getAttribute("emp");
			int b =dao.addAuditLog(m,emp);
			if( b > 0){
				return new Result(10013,"审核完成",null);
			}
		}
		return new Result(10014,"审核失败",null);
	}
	
	
	/*
	 * 获取审核结果
	 * */
	Result getAuditLog(Map m){
		//获取session值
		Map<String,Object> emp =(Map<String,Object>)session.getAttribute("emp");
		Map<String,Object> data =dao.getAuditLog(m,emp);
		if(data.size() > 0){
			return new Result(10015,"获得审核结果成功",data);
		}
		return new Result(10016,"获得审核结果s失败",null);
	}
	
	
	/*
	 * 分页审核信息
	 * */
	Result aduitProInfo(Map m){
		Map<String,Object> map = dao.getaduiProInfo(m);
		return new Result(10017,"",map);
	}

	
	/*
	 * 根据id查看审核商品
	 * */
	Result getAuditResult(Map m){
		//获取session值
		Map<String,Object> emp =(Map<String,Object>)session.getAttribute("emp");
		Map<String,Object> data =dao.getAuditResult(m,emp);
		if(data.size() > 0){
			return new Result(10018,"获得审核结果成功",data);
		}
		return new Result(10019,"获得审核结果失败",null);
	}
	
	
	/*
	 * 根据商品id查看商品图片进行预览
	 * */
	Result getProImgByPID(Map m) {
		String pid = m.get("pid").toString();
		Map<String, Object> img = dao.getProImgByPID(pid);
		if(img.size() > 0) {
			return new Result(10104, "获取商品图片成功", img);
		}
		return new Result(10105, "获取商品图片失败", null);
	}
	
	
	/*
	 * 通过商品id获取到商品的介绍
	 * */
	Result showGoodsDesc(Map m) {
		String pid = m.get("pid").toString();
		Map<String, Object> desc = dao.showGoodsDesc(pid);
		if(desc.size() > 0) {
			return new Result(10106, "获取商品介绍成功", desc);
		}
		return new Result(10107, "获取商品介绍失败", null);
	}
	
	
	/*
	 * 通过pid查询到商品信息进行修改
	 * */
	Result queryGoodsByPid(Map m){
		String pid = m.get("pid").toString();
		Map<String, Object> pro = dao.queryGoodsByPid(pid);
		if(pro.size() > 0) {
			return new Result(10108, "通过商品id获取商品所有信息成功", pro);
		}
		return new Result(10109, "通过商品id获取商品所有信息失败", null);
	}
	
	
	/*
	 * 修改商品图片
	 * */
	Result updateGoodsImg(Map m) {
		Map<String, Object> map = FileUtil.upload(request);
		String pid = m.get("pid").toString();
		int i = dao.updateGoodsImg(map,pid);
		if(i > 0) {
			return new Result(10112, "修改商品图片成功", i);
		}
		return new Result(10113, "修改商品图片失败", i);
	}

	
	/*
	 * 修改商品信息
	 * */
	Result updateGoodsInfo(Map m) {
		int res = dao.updateGoodsInfo(m);
		Map<String,Object> emp =(Map<String,Object>)session.getAttribute("emp");
		if(res > 0) {
			int a = dao.addGoodsLog(m,emp);
			return new Result(10110, "修改商品信息成功", null);
		}
		return new Result(10111, "修改商品信息失败", null);
	}
	
	
	/*
	 *获取修改商品记录 并分页
	 * */
	Result getUpdateGoodsLog(Map m){
		Map<String,Object> data =dao.getAuditLog(m);
		if(data.size() >0){
			return new Result(10112, "获取修改商品信息成功", data);
		}
		return new Result(10113, "获取修改商品信息失败", null);
	}

	
	/*
	 * 查询所有商品及类别并分页
	 * */
	Result getGoodsAndType(Map m){
		Map<String,Object> map =dao.getGoodsAndType(m);
		if(map.size()>0){
			return new Result(10114,"获取所有商品及类别并分页成功",map);
		}
		return new Result(10115,"获取所有商品及类别并分页失败",null);
	}

	
	/*
	 * 通过pid查询商品及类别
	 * */
	Result getGoodsTypeByPid(Map m){
		
		Map<String,Object>map =dao.getGoodsTypeByPid(m);
		if(map.size() >0){
			return new Result(10116,"获取pid查询商品及类别成功",map);
		}
		return new Result(10117,"获取pid查询商品及类别失败",null);
	}

	
	/*
	 * 通过pid修改商品类别
	 * */
	Result updateGoodsTypeByPid(Map m){
		Map<String,Object> map =dao.selectGoodsClaid(m);
		if(map == null){
			int a =dao.addGoodsTypeByPid(m);
			if(a >0){
				return new Result(10118,"通过pid添加商品类别成功",null);
			}
		}else{
			int res =dao.updateGoodsTypePid(m);
			if(res >0){
				return new Result(10119,"修改商品类别成功",null);
			}
		}
		return new Result(10120,"通过pid修改商品类别失败",null);
	}

	/*
	 * 获取折线图 
	 * */
	Result getLineChart(Map m) {
		Map<String, List<Object>> lineChart = dao.getLineChart();
		if(lineChart.size() > 0) {
			return new Result(10130, "获取折线图成功", lineChart);
		}
		return new Result(10131, "获取折线图失败", null);
	}
	
	
	
}
