package com.yybs.dao;

import java.util.List;
import java.util.Map;

public interface IProductDAO {
	
	/**
	 *  分页+搜索
	 */
	Map<String,Object> getProByPage(Map  m);

	
	/**
	 * 获取所有商品的分类
	 * @return
	 */
	List<Map<String,Object>> getallgoodsType();
	
	
	/*
	 * 添加审核商品
	 * */
	int addPro(Map<String, Object> map);
	
	
	/*
	 * 向auditinfo表中添加上传商品的姓名id和上传商品的id
	 * */
	int addAuditlnfo(int id, Object object, Object ename);
	
	
	/*
	 * 通过pid获取审核商品
	 * */
	Map<String, Object> getAuditProByPID(Map m);
	
	
	/*
	 * 审核商品 
	 * */
	int updateAudiPro(Map m);
	
	
	/*
	 * 添加审核结果到 审核日志中
	 * */
	int addAuditLog(Map m, Map<String, Object> emp);
	
	
	/*
	 * 获取审核结果
	 * */
	Map<String, Object> getAuditLog(Map m, Map<String, Object> emp);
	
	
	/*
	 * 分页审核信息
	 * */
	Map<String, Object> getaduiProInfo(Map m);
	
	
	/*
	 * 查看审核商品图片
	 * */
	Map<String, Object> getProImgByPID(String pid);
	
	/*
	 * 通过id查看审核日志
	 * */
	Map<String, Object> getAuditResult(Map m ,Map<String, Object> emp);


	/**
	 * 根据商品id获取商品介绍
	 * @param pid
	 * @return
	 */
	Map<String, Object> showGoodsDesc(String pid);


	/**
	 * @param pid
	 * @return
	 */
	Map<String, Object> queryGoodsByPid(String pid);


	/**
	 * 修改商品信息
	 * @param m
	 * @return
	 */
	int updateGoodsInfo(Map m);


	/**
	 * 修改商品图片
	 * @param map
	 * @return
	 */
	int updateGoodsImg(Map<String, Object> map,String pid);

	
	/*
	 * 添加修改日志
	 * */
	int addGoodsLog(Map m, Map<String, Object> emp);
	
	/*
	 *获取修改商品记录 并分页
	 * */
	Map<String, Object> getAuditLog(Map m);

	
	/*
	 * 查询所有商品及类别并分页
	 * */
	Map<String, Object> getGoodsAndType(Map m);


	/**
	 * 通过pid查询商品及类别
	 * @param m
	 * @return
	 */
	Map<String, Object> getGoodsTypeByPid(Map m);

	
	/*
	 * 查询商品claid是否存在
	 * */
	Map<String, Object> selectGoodsClaid(Map m);
	
	
	/*
	 *给pid商品添加claid
	 * */
	int addGoodsTypeByPid(Map m);
	
	
	/*
	 * 通过pid修改商品类别
	 * */
	int updateGoodsTypePid(Map m);

	/*
	 * 首页展示营业额和订单量
	 * */
	Map<String,List<Object>> getLineChart();
	
	
	
}
