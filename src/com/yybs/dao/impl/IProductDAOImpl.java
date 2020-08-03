package com.yybs.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

import com.yybs.dao.IProductDAO;
import com.yybs.util.DAOUtil;
import com.yybs.util.PageUtil;
import com.yybs.util.TenPageUtil;

public class IProductDAOImpl implements IProductDAO {
	/**
	 *  分页+搜索
	 */
	@Override
	public Map<String, Object> getProByPage(Map m) {
		//动态拼接sql
		StringBuilder sb = new StringBuilder();
		if(m.get("pname")!=null && !"".equals(m.get("pname")) ){
			sb.append(" and pname like '%"+m.get("pname")+"%'");
		};
		if(m.get("minprice")!=null && !"".equals(m.get("minprice")) ){
			sb.append(" and shopPrice >"+m.get("minprice"));
		};
		if(m.get("maxprice")!=null && !"".equals(m.get("maxprice")) ){
			sb.append(" and shopPrice <"+m.get("maxprice"));
		};
		if(m.get("ispflag")!=null && !"".equals(m.get("ispflag")) ){
			sb.append(" and pflag ="+m.get("ispflag"));
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
	 * 获取所有商品分类
	 */
	@Override
	public List<Map<String,Object>> getallgoodsType() {
		String sql = "select * from category";
		return DAOUtil.executeQuery(sql);
	}
	
	
	/*
	 * 添加审核商品
	 * */
	@Override
	public int addPro(Map<String, Object> map) {
		String sql = "insert into product (pname,marketPrice,shopPrice,pimage,isHot,pflag,pdesc,cid,state)  values (?,?,?,?,?,?,?,?,1)";
		int i = DAOUtil.executeUpdateAndGeneratedKeys(sql, map.get("pname"),map.get("marketPrice"),map.get("shopPrice"),map.get("pimage"),map.get("isHot"),map.get("pflag"),map.get("pdesc"),map.get("cid")); 	
		return i;
	}
	
	
	/*
	 * 像auditinfo表中添加上传商品的姓名id和上传商品的id
	 * */
	@Override
	public int addAuditlnfo(int id, Object object, Object ename) {
		String sql = "insert into auditinfo values (null,?,?,?)";
		int a = DAOUtil.executeUpdate(sql, id,object,ename);
		return a;
	}
	
	
	/*
	 * 通过pid获取审核商品
	 * */
	@Override
	public Map<String, Object> getAuditProByPID(Map m) {
		String sql = "select * from product where pid =? ";
		List<Map<String,Object>> list = DAOUtil.executeQuery(sql, m.get("pid"));
		if(list.size()>0){
			return list.get(0);
		}
		return null;
	}
	
	
	/*
	 * 审核商品
	 * */
	@Override
	public int updateAudiPro(Map m) {
		String sql = "update product set state = ? where pid = ?";
		int a = DAOUtil.executeUpdate(sql, m.get("state"),m.get("pid"));
		return a;
	}
	
	
	/*
	 * 将审核结果添加到审核日志里
	 * */
	@Override
	public int addAuditLog(Map m, Map<String, Object> emp) {
		String sql = "insert into auditlog values (null,?,?,?,?,?)";
		int a = DAOUtil.executeUpdate(sql, m.get("pid"),emp.get("id"),emp.get("name"),m.get("state"),m.get("msg"));
		return a;
	}
	
	
	/*
	 * 员工查看审核页面(分页)
	 * */
	@Override
	public Map<String, Object> getAuditLog(Map m, Map<String, Object> emp) {
		// 0 动态拼接sql
		StringBuilder sb = new StringBuilder();
		if (m.get("pname") != null && !"".equals(m.get("pname"))) {
			sb.append("  and  pname  like  '%" + m.get("pname") + "%'");
		};
		
		if (m.get("state") != null && !"".equals(m.get("state"))) {
			sb.append("  and  product.state = " + m.get("state"));
		};

		// 1 查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count  from auditinfo left JOIN   auditlog  \r\n" + 
				"ON  auditinfo.pid = auditlog.pid\r\n" + 
				"inner  join  product\r\n" + 
				"on  auditinfo.pid = product.pid\r\n" + 
				"WHERE 1=1  ");
		sb1.append(sb);
		List<Map<String, Object>> d1 = DAOUtil.executeQuery(sb1.toString());// [{count=50}]
		Long totalCount = (Long) d1.get(0).get("count");

		// 2 使用 page工具类 计算所有信息
		long parseLong = Long.parseLong((String) (m.get("page")));
		PageUtil util = new PageUtil(parseLong, totalCount);

		// 3 查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" SELECT  *  FROM  auditinfo    \r\n" + 
				"left JOIN   auditlog  \r\n" + 
				"ON  auditinfo.pid = auditlog.pid\r\n" + 
				"inner  join  product\r\n" + 
				"on  auditinfo.pid = product.pid\r\n" + 
				"WHERE 1=1");
		sb2.append(sb);
		sb2.append(" limit  ? , 8  ");

		List<Map<String, Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());

		// 4 整理当前页的数据
		Map<String, Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageData", d2);

		return map;
	}
	
	
	/*
	 * 审核中的分页
	 * */
	@Override
	public Map<String, Object> getaduiProInfo(Map m) {
		// 0 动态拼接sql
		StringBuilder sb = new StringBuilder();
		if (m.get("pname") != null && !"".equals(m.get("pname"))){
			sb.append("  and  pname  like  '%" + m.get("pname") + "%'");					
		}

		// 1 查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count  from product where state = 1  ");
		sb1.append(sb);
		List<Map<String, Object>> d1 = DAOUtil.executeQuery(sb1.toString());// [{count=50}]
		Long totalCount = (Long) d1.get(0).get("count");

		// 2 使用 page工具类 计算所有信息
		long parseLong = Long.parseLong((String) (m.get("page")));
		PageUtil util = new PageUtil(parseLong, totalCount);

		// 3 查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(
				" select  *  from  product inner  join  auditinfo on  product.pid = auditinfo.pid  where state = 1 ");
		sb2.append(sb);
		sb2.append(" limit  ? , 8  ");

		List<Map<String, Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());

		// 4 整理当前页的数据
		Map<String, Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageData", d2);

		return map;

	}
	
	
	/*
	 * 商品审核和商品管理的图片预览
	 * */
	@Override
	public Map<String, Object> getProImgByPID(String pid) {
		String sql = "select pid,pimage from product where pid= ?";
		return  DAOUtil.executeQuery(sql, pid).get(0);
	}
	
	
	/*
	 * 员工权限的eid只能查看自己的提交审核商品
	 */
	@Override
	public Map<String, Object> getAuditResult(Map m, Map<String, Object> emp) {
		// 0 动态拼接sql
		StringBuilder sb = new StringBuilder();
		if (m.get("pname") != null && !"".equals(m.get("pname"))) {
			sb.append("  and  pname  like  '%" + m.get("pname") + "%'");
		};
		
		if (m.get("state") != null && !"".equals(m.get("state"))) {
			sb.append("  and  product.state = " + m.get("state"));
		};

		// 1 查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count  from auditinfo left JOIN   auditlog  \r\n" + 
				"ON  auditinfo.pid = auditlog.pid\r\n" + 
				"inner  join  product\r\n" + 
				"on  auditinfo.pid = product.pid\r\n" + 
				"WHERE eid = "+emp.get("id")+" " );
		sb1.append(sb);
		List<Map<String, Object>> d1 = DAOUtil.executeQuery(sb1.toString());// [{count=50}]
		Long totalCount = (Long) d1.get(0).get("count");

		// 2 使用 page工具类 计算所有信息
		long parseLong = Long.parseLong((String) (m.get("page")));
		PageUtil util = new PageUtil(parseLong, totalCount);

		// 3 查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" SELECT  *  FROM  auditinfo    \r\n" + 
				"left JOIN   auditlog  \r\n" + 
				"ON  auditinfo.pid = auditlog.pid\r\n" + 
				"inner  join  product\r\n" + 
				"on  auditinfo.pid = product.pid\r\n" + 
				"WHERE eid ="+emp.get("id")+" ");
		sb2.append(sb);
		sb2.append(" limit  ? , 8  ");

		List<Map<String, Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());

		// 4 整理当前页的数据
		Map<String, Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageData", d2);

		return map;
	}


	/* 
	 * 根据商品id获取商品的介绍
	 */
	@Override
	public Map<String, Object> showGoodsDesc(String pid) {
		String sql = "select pdesc from product where pid = ? ";
		return DAOUtil.executeQuery(sql, pid).get(0);
	}


	/* 
	 * 根据商品id获取商品所有信息，展示在修改的模态框中
	 */
	@Override
	public Map<String, Object> queryGoodsByPid(String pid) {
		String sql = "select * from product where pid = ?";
		return DAOUtil.executeQuery(sql, pid).get(0);
	}


	/*
	 * 修改商品信息
	 */
	@Override
	public int updateGoodsInfo(Map m) {
		String sql = "update product set pname = ? , marketPrice = ? , shopPrice = ? , pdesc = ? , pflag = ? , cid = ? where pid = ?";
		return DAOUtil.executeUpdate(sql, m.get("pname"), m.get("marketPrice"), m.get("shopPrice"),
				m.get("pdesc"), m.get("pflag"), m.get("cid"), m.get("pid"));
	}


	/*
	 * 修改商品图片
	 */
	@Override
	public int updateGoodsImg(Map<String, Object> map,String pid) {
		String sql = "update product set pimage = ? where pid = ?";
		return DAOUtil.executeUpdate(sql, map.get("updateimg"), pid);
	}

	
	/*
	 * 添加修改日志
	 * */
	@Override
	public int addGoodsLog(Map m, Map<String, Object> emp) {
		String sql = "insert into updategoodslog values (null,?,?,?,?,now() )";
		int a = DAOUtil.executeUpdate(sql, m.get("pid"),m.get("pname"),emp.get("id"),emp.get("name"));
		return a;
	}
	
	
	/*
	 *获取修改商品记录 并分页
	 * */
	@Override
	public Map<String, Object> getAuditLog(Map m) {
		// 0 动态拼接sql
		StringBuilder sb = new StringBuilder();
		if (m.get("ename") != null && !"".equals(m.get("ename"))){
			sb.append("  and  ename  like  '%" + m.get("ename") + "%'");					
		}

		// 1 查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" select count(*) count  from updategoodslog where 1 = 1  ");
		sb1.append(sb);
		List<Map<String, Object>> d1 = DAOUtil.executeQuery(sb1.toString());
		Long totalCount = (Long) d1.get(0).get("count");

		// 2 使用 page工具类 计算所有信息
		long parseLong = Long.parseLong((String) (m.get("page")));
		TenPageUtil util = new TenPageUtil(parseLong, totalCount);

		// 3 查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(
				" select  DATE_FORMAT(u.updatetime,'%Y-%m-%d %H:%i:%S')time,u.*  from  updategoodslog u   where 1 = 1 ");
		sb2.append(sb);
		sb2.append(" limit  ? , 10  ");

		List<Map<String, Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());

		// 4 整理当前页的数据
		Map<String, Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageData", d2);

		return map;
	}

	
	/*
	 * 查询所有商品及类别并分页
	 * */
	@Override
	public Map<String, Object> getGoodsAndType(Map m) {
		StringBuilder sb = new StringBuilder();
		if (m.get("pname") != null && !"".equals(m.get("pname"))){
			sb.append(" and p.pname like '%" + m.get("pname") + "%'  ");					
		};
		if (m.get("claid") != null && !"".equals(m.get("claid"))){
			sb.append("  and  c.claid = " + m.get("claid"));					
		};

		
		/*
		 * select * from product INNER JOIN classify on product.pid = classify.pid  where 1 = 1
		 * */
		// 1 查询当前商品的总数量
		StringBuilder sb1 = new StringBuilder();
		sb1.append(" SELECT count(*) count FROM product AS p LEFT JOIN (SELECT * FROM classify GROUP BY pid)  "
				+ " AS c ON p.pid = c.pid where state = 0 ");
		sb1.append(sb);
		List<Map<String, Object>> d1 = DAOUtil.executeQuery(sb1.toString());
		Long totalCount = (Long) d1.get(0).get("count");

		// 2 使用 page工具类 计算所有信息
		long parseLong = Long.parseLong((String) (m.get("page")));
		PageUtil util = new PageUtil(parseLong, totalCount);

		// 3 查询当前页的数据
		StringBuilder sb2 = new StringBuilder();
		sb2.append(" SELECT p.*,c.claid FROM product AS p LEFT JOIN (SELECT * FROM classify GROUP BY pid)  "
					+ " AS c ON p.pid = c.pid where state = 0 ");
		sb2.append(sb);
		sb2.append(" limit  ? , 8  ");

		List<Map<String, Object>> d2 = DAOUtil.executeQuery(sb2.toString(), util.getPageIndex());

		// 4 整理当前页的数据
		Map<String, Object> map = new HashMap<>();
		map.put("pageInfo", util);
		map.put("pageData", d2);

		return map;
	}

	
	/*
	 * 通过pid查询商品及类别
	 * */
	@Override
	public Map<String, Object> getGoodsTypeByPid(Map m) {
		String sql = "SELECT p.*,c.claid FROM product AS p LEFT JOIN (SELECT * FROM classify GROUP BY pid) "
				+ " AS c ON p.pid = c.pid where p.pid = ?";
		List<Map<String,Object>> list =DAOUtil.executeQuery(sql, m.get("pid"));
		if(list.size()>0){
			return list.get(0);
		}
		return null;
	}

	
	/*
	 * 查询商品claid是否存在
	 * */
	@Override
	public Map<String, Object> selectGoodsClaid(Map m) {
		String sql ="select * from classify where pid = ?";
		List<Map<String,Object>> list =DAOUtil.executeQuery(sql, m.get("pid"));
		if(list.size() >0){
			return list.get(0);
		}
		return null;
	}
	/*
	 * 给pid商品添加claid
	 * */
	@Override
	public int addGoodsTypeByPid(Map m) {
		String sql = "INSERT INTO classify(claid,pid) VALUES (?,?)";
		int a =DAOUtil.executeUpdate(sql, m.get("claid"),m.get("pid"));
		return a ;
	}
	
	/*
	 * 通过pid修改商品类别
	 * */
	@Override
	public int updateGoodsTypePid(Map m) {
		String sql = "UPDATE classify SET claid = ? WHERE pid = ? ";
		int res =DAOUtil.executeUpdate(sql, m.get("claid"),m.get("pid"));
		return res;
	}


	/* 
	 * 首页展示营业额和订单量
	 */
	@Override
	public Map<String, List<Object>> getLineChart() {
		//查找订单量、时间、当天营业额
		String sql = "select sum(total) money,count(*) count,time from orders where date_sub(curdate(), INTERVAL 7 DAY) < date(ordertime) GROUP BY time";
		List<Map<String, Object>> listmap = DAOUtil.executeQuery(sql);
		
		List<Object> time = new ArrayList<>();
		List<Object> count = new ArrayList<>();
		List<Object> money = new ArrayList<>();
		for (Map<String, Object> map : listmap) {
			time.add(map.get("time").toString());
			count.add(Integer.parseInt(map.get("count").toString()));
			money.add(Integer.parseInt(map.get("money").toString()));
		}
		Map<String,List<Object>> bigMap = new HashMap<String, List<Object>>();
		bigMap.put("time", time);
		bigMap.put("count", count);
		bigMap.put("money", money);
		return bigMap;
	}
	
	
	


}
