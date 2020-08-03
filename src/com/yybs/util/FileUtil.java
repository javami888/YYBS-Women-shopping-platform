package com.yybs.util;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;

public class FileUtil {
	
	/** 
	 * 
	 * @param req  请求参数 因为我们要获取的数据都在请求参数中
	 * @return  Map   工具类会将数据帮我们拆分好 并且以key - value 形式存储到map中并返回
	 */
	public static Map<String,Object> upload(HttpServletRequest req){
		
		
		Map<String,Object> map = new  HashMap<>();
		
		try {
			// 创建一个DiskFileItemFactory 工厂对象   这个工厂是专门用来创建 FileItem   什么是FileItem？
			DiskFileItemFactory factory = new  DiskFileItemFactory();
			// 创建文件上传器
			ServletFileUpload upload = new  ServletFileUpload(factory);
			// 文件上传器解析请求 获取请求中的 数据
			// 将我们的请求对象   中的数据 通过工厂 变成 一个 List  list中存储 FileItem  每一个 FileItem对象 都是 一个 表单信息
			List<FileItem> list = upload.parseRequest(req);
			// 遍历list  从list中取出  每个 FileItem 对象 再从 FileItem对象中取出 数据
			for (FileItem fileItem : list) {
				// 获取请求参数的名字  pid  pname  pimage pdesc
				String name = fileItem.getFieldName();
				// 判断当前FileItem 是 普通表单数据 还是  文件上传的数据
				if(fileItem.isFormField()) {
					//普通表单数据  直接获取数据的值  将名字和值存放进map中
					String value = fileItem.getString("UTF-8");
					map.put(name, value);
				}else {
					//文件上传数据  判断是否有文件传送过来
					if(!"".equals(fileItem.getName())) {
						//通过一个随机数创建一个文件名    时间戳+随机数
						 String fileName = UUID.randomUUID().toString()+"."+FilenameUtils.getExtension(fileItem.getName());
						//将图片保存到图片服务器中
						 fileItem.write(new  File("E:/Development/Tomcat7.0/webapps/images",fileName));
						 map.put(name, "/images/"+fileName);
					}
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return map;
	}
	
	/**
	 * $.ajax({
           	            url:"/meilishuo/back/pro?m=update",
           	            type:"post",
           	            data:data,
           	            processData:false,
           	            contentType:false,
           	            success:function(data){
           	            	
           	            	
           	            }
           	        });
	 */
	

}
