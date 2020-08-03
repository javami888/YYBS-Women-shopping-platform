package com.yybs.servlet;

import java.util.List;
import java.util.Map;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;

import com.yybs.dao.IAdminDAO;
import com.yybs.dao.impl.AdminDAOImpl;
import com.yybs.result.Result;
import com.yybs.sysconst.EmpState;
import com.yybs.util.FileUtil;

@WebServlet("/admin")
public class AdminServlet extends BaseServlet{
	
	
	private IAdminDAO dao = new AdminDAOImpl();
	
	
	/*
	 * 员工注销
	 * */
	Result logout(Map m )  {
		//清空session
		session.invalidate();
		//跳转到登录界面
		return new Result(10004, "注销成功", null);
}
	/*
	 * 员工登录
	 * */
	Result  login(Map  m) {
		
		int id = dao.isLogin(m);
		//账号或密码错误
		if(id == EmpState.LOGIN_FAIL) return new Result(10000, "账号密码错误", null);
		//账号密码正确，获取员工的信息
		Map<String,Object> emp = dao.getEmpById(id);
		//获取员工的 状态码
		int state = (int) emp.get("state");
		//判断 员工的状态码  正常1 离职2 冻结3
		if(state == EmpState.LIZHI) return new Result(10001, "员工离职", null);
		if(state == EmpState.DONGJIE) return new Result(10002, "员工冻结", null);
		//员工在职的话 存入session
		session.setAttribute("emp", emp);
		return new Result(10003, "登录成功", null);
	}
	/*
	 * 获取员工权限
	 * */
	Result  getPermission(Map  m) {
		//1 获取session中 用户
		Map<String,Object> emp = (Map<String, Object>) session.getAttribute("emp");
		Integer rid = (Integer) emp.get("roleID");
		//2 根据rid获取对应的权限
		List<Map<String, Object>> list = dao.getPermissionByRid(rid);
		if(list.size()>0){		
			return  new Result(10005, "获取权限成功", list);
		}
		return  new Result(10006, "获取权限失败", null);
	}
	
	/*
	 * 展示员工个人信息
	 * */
	Result showinfo(Map m){
		//1 获取session中 用户
		Map<String,Object> emp = (Map<String, Object>) session.getAttribute("emp");
		String id = emp.get("id").toString();
		Map<String,Object> map = dao.showinfo(id);
		if(map.size() > 0) {
			return  new Result(10140, "获取员工信息成功", map);
		}
		return  new Result(10141, "获取员工信息失败", null);
	}
	
	/*
	 * 修改个人信息
	 * */
	Result updateInfo(Map m) {
		Map<String, Object> map = FileUtil.upload(request);
		String id = m.get("id").toString();
		int res = dao.updateInfo(map,id);
		if(res > 0) {
			return  new Result(10142, "修改信息成功", res);
		}else {
			return  new Result(10143, "修改信息失败", null);
		}
	}
	
	Result showStaffInfo(Map m) {
		Map<String,Object> emp = (Map<String, Object>) session.getAttribute("emp");
		Map<String, Object> map = dao.showStaffInfo(emp);
		if(map.size() > 0) {
			return  new Result(10144, "获取头像信息成功", map);
		}else {
			return  new Result(10145, "获取头像信息失败", null);
		}
	}
	
	
	

}





