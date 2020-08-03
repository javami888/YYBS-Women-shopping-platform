package com.yybs.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebFilter("/*")
public class CheckLoginFilter implements Filter {

	@Override
	public void destroy() {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;	
		// 获得请求的URL
		String url = req.getRequestURL().toString();
		// 获得session中的对象
		HttpSession session = req.getSession();
		Object obj = session.getAttribute("emp");
		// 使用endsWith()判断url结尾的字符串，如果是这些格式的文件或者检测合格，可以放行
		if (url.endsWith("login.html")   || obj != null  
				|| url.endsWith(".css")  || url.endsWith(".js") || url.contains("font")  || url.endsWith(".map")
				
				|| url.contains("icon")  || url.contains("themify")  ||  url.contains("FontAwesome")
				
				|| url.endsWith(".png")  || url.endsWith(".jpg") || checkAjax(req,resp)) {
			//放行
			chain.doFilter(request, response);
		} else {
			//不满足条件重定向
			resp.sendRedirect(req.getContextPath() + "/login.html");
		}
		
	}
	
	
	/*
	 * 判断是否是ajax请求
	 * */
	private boolean checkAjax(HttpServletRequest req, HttpServletResponse resp) {
		boolean isAjax = false;
		if (req.getHeader("X-Requested-With") != null && req.getHeader("X-Requested-With").equals("XMLHttpRequest")) {
			//此时是ajax请求
			resp.setHeader("isAjax", "timeout");
			isAjax = true;
		}
		return isAjax;
	}

	
	@Override
	public void init(FilterConfig arg0) throws ServletException {
		
		
	}

}
