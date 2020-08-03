
package com.yybs.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.alibaba.fastjson.JSON;

/**
 * @author 郭航
 * @date  2019年11月1日
 */
public class BaseServlet extends HttpServlet {
	HttpSession session = null;
	HttpServletRequest request = null;
	HttpServletResponse response = null;
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		session = req.getSession();
		request = req;
		response = resp;
		
		//获取接收到的所有的参数，放入Map的值的数组中
		Map<String, String[]> map = req.getParameterMap();
		//拿到所有的键
		Set<String> set = map.keySet();
		//创建一个HashMap
		HashMap<String, Object> params = new HashMap<>();
		//遍历出每一个键，并通过每一个键拿到对应的值，然后将键值对放入HashMap中，当做参数传到业务servlet中
		for (String k : set) {
			params.put(k, req.getParameter(k));
		}
		
		String m = req.getParameter("m");
		//加载字节码文件
		Class c1 = this.getClass();
		try {
			//getDeclaredMethod()获取本类(m)中的所有方法，传入的参数类型为Map，map中放的是前台传过来的所有参数
			Method method = c1.getDeclaredMethod(m,Map.class);
			//设置在用反射时，可以访问私有变量，因为在本类中的方法，都是protected的
			method.setAccessible(true);
			//对带有指定参数的指定对象调用，传进一个对象，传进两个已经指定过的的参数
			Object obj = method.invoke(this, params);
			PrintWriter out = resp.getWriter();
			String jsonString = JSON.toJSONString(obj);
			out.write(jsonString);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
	}
	
}
