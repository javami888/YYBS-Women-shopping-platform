/**
 * 
 */
package com.yybs.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * @author gh
 */
public class CharsetFilter implements Filter {
	
	String ce = null;
	String ct = null;
	
	@Override
	public void init(FilterConfig con) throws ServletException {
		ce = con.getInitParameter("ce");
		ct = con.getInitParameter("ct");
		if(ce == null) {
			ce = "UTF-8";
		}
		if(ct == null) {
			ct = "text/json;charset=UTF-8";
		}
	}
	
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		request.setCharacterEncoding(ce);
		response.setContentType(ct);
		chain.doFilter(request, response);
	}
	
	
	@Override
	public void destroy() {
		
	}
}
