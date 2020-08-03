package com.yybs.util;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.sql.DataSource;

import org.apache.catalina.util.Introspection;

import com.alibaba.druid.pool.DruidDataSourceFactory;

public class DAOUtil {
	
    private static DataSource source = null;
	
	static {
		
		//1 创建一个数据库连接池（连接池也只创建一次）
		try {
			Properties p = new Properties();
			p.load(DAOUtil.class.getClassLoader().getResourceAsStream("druid.properties"));//加载配置文件
			source = DruidDataSourceFactory.createDataSource(p);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static  Connection getConnection() throws Exception {
		// 2 从链接池中获取链接对象
		return source.getConnection();
	}
	
	/**
	 * 增删改
	 * @param sql
	 * @param data
	 * @return
	 */
	public static int executeUpdate(String sql,Object... data) {
		Connection conn = null;
		PreparedStatement ps = null;
		try {
			conn = DAOUtil.getConnection();
			ps = conn.prepareStatement(sql);
			for (int i = 0; i < data.length; i++) {
				ps.setObject( i+1 , data[i] ) ;
			}
			int i = ps.executeUpdate();
			return i;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			close(null, ps, conn);
		}
		return 0;
	}
	
	/*
	 * 插入数据并返回主键
	 * */
	public static int executeUpdateAndGeneratedKeys(String sql,Object... data) {
		Connection conn = null;
		PreparedStatement ps = null;
		try {
			conn = DAOUtil.getConnection();
			ps = conn.prepareStatement(sql ,Statement.RETURN_GENERATED_KEYS);
			for (int i = 0; i < data.length; i++) {
				ps.setObject( i+1 , data[i] ) ;
			}
			int i = ps.executeUpdate();
			
			
			ResultSet set = ps.getGeneratedKeys();
			
			if(set.next()) {
				return set.getInt(1);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			close(null, ps, conn);
		}
		return 0;
	}
	
	
	public static List<Map<String,Object>> executeQuery(String sql ,Object... data){
		Connection conn = null;
		PreparedStatement ps = null;
		ResultSet set = null;
		try {
			conn = DAOUtil.getConnection();
			ps = conn.prepareStatement(sql);
			for (int i = 0; i < data.length; i++) {
				ps.setObject(i+1, data[i]);
			}
			set = ps.executeQuery();
			List<Map<String,Object>> list = new ArrayList<>();
			int count = set.getMetaData().getColumnCount();
			while(set.next()) {
				Map<String,Object> map = new HashMap<>();
				for (int i = 1; i <= count; i++) {
					Object v = set.getObject(i);
					String k = set.getMetaData().getColumnLabel(i);
					map.put(k, v);
				}
				list.add(map);
			}
			return  list;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			close(set, ps, conn);
		}
		return null;
	}
	
	private static void close(ResultSet set,PreparedStatement ps ,Connection conn) {
		try {
			if(set!=null) set.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		try {
			if(ps!=null) ps.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		try {
			if(conn!=null) conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	

	public static <T> List<T> executeQueryAndEntity(String sql ,Class c ,Object... data){
		//先根据查询条件将数据结果集封装成List<Map>的形式
		List<Map<String, Object>> list = executeQuery(sql, data);
		List<T> back = new ArrayList<T>();
		
		try {
			BeanInfo info = Introspector.getBeanInfo(c);
			PropertyDescriptor[] descriptors = info.getPropertyDescriptors();
			for (Map<String, Object> map : list) {
				T obj  = (T) c.newInstance();
				
				for (PropertyDescriptor p : descriptors) {
					String name = p.getName();
				}
				
			}
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
		
		return null;
		
		
		
	}
	
	
	
	
	
	
	
	
	
}














