/**
 * 
 */
package com.yybs.servlet;

import java.util.List;
import java.util.Map;

import javax.servlet.annotation.WebServlet;

import com.yybs.dao.IStaffManageDAO;
import com.yybs.dao.impl.StaffManageDAOImpl;
import com.yybs.result.Result;
import com.yybs.util.SendCodeUtil;

/**
 * @author 郭航
 * @date  2019年11月10日
 */
@WebServlet("/staff")
public class StaffManageServlet extends BaseServlet {
	
	IStaffManageDAO dao = new StaffManageDAOImpl();
	
	/*
	 * 获取所有职位分类
	 * */
	Result getEmpDept(Map m) {
		List<Map<String, Object>> map = dao.getEmpDept(m);
		if(map.size() > 0) {
			return new Result(10146, "获取员工职位分类成功", map);
		}
		return new Result(10147, "获取员工职位分类失败", null);
	}
	
	
	/*
	 * 获取所有员工信息+分页+搜索
	 * */
	Result getStaffInfoByPage(Map m) {
		Map<String, Object> map = dao.getStaffInfoByPage(m);
		if(map.size() > 0) {
			return new Result(10148, "获取员工信息成功", map);
		}
		return new Result(10149, "获取员工信息失败", null);
	}
	
	/*
	 * 设置员工账号状态
	 * */
	Result stopAccount(Map m) {
		int res = dao.stopAccount(m);
		if(res > 0) {
			return new Result(10150, "设置员工账号状态成功", res);
		}
		return new Result(10151, "设置员工账号状态失败", null);
	}
	
	
	/*
	 * 通过id获取员工信息
	 * */
	Result getStaffInfoByid(Map m) {
		Map<String,Object> map = dao.getStaffInfoByid(m);
		if(map.size() > 0) {
			return new Result(10152, "通过id获取员工信息成功", map);
		}
		return new Result(10153, "通过id获取员工信息失败", null);
	}
	
	
	
	/*
	 * 获取所有职位(废弃  )
	 * */
	Result getAllDept(Map m) {
		List<Map<String,Object>> list = dao.getAllDept(m);
		if(list.size() > 0) {
			return new Result(10154, "获取所有职位成功", list);
		}
		return new Result(10155, "获取所有职位失败", null);
	}
	/*
	 * 通过员工id修改员工信息
	 * */
	Result updateStaffInfo(Map m) {
		int res = dao.updateStaffInfo(m);
		if(res > 0) {
			return new Result(10156, "修改员工职位成功", null);
		}
		return new Result(10157, "修改员工职位失败", null);
	}
	
	/*
	 * 添加新员工
	 * */
	Result addStaffInfo(Map m) {
		//1.拿到新员工手机号
		String tel = m.get("telephone").toString();
		//2.发送密码到员工手机号，密码为随机生成，调用sendCode方法会回传回来；
		String password = SendCodeUtil.sendCode(tel);
		//3.往login表中存储账号密码，返回主键
		int loginID = dao.addLogin(tel,password);
		//4.往employee表中插入数据
		int res = dao.addStaffInfo(loginID,m);
		if(res > 0) {
			return new Result(10158, "添加员工成功", res);
		}
		return new Result(10159, "添加员工失败", null);
	}
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
}
