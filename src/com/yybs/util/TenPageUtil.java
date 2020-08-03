package com.yybs.util;

public class TenPageUtil {
	/**当前页*/
	private  long    currentPage;
	/**首页*/
	private  long    firstPage = 1;

	/**上一页*/
	private  long    upPage;
	/**下一页*/
	private  long    nextPage;
	
	/**总数量*/
	private  long    totalCount;
	/**总页数*/
	private  long    totalPage;
	
	
	public TenPageUtil() {}
	
	public TenPageUtil(long  currentPage,long    totalCount) {
		this.currentPage = currentPage;
		this.totalCount = totalCount;
		
		this.totalPage = (this.totalCount + 9)/10;
		this.upPage = this.currentPage - 1 > 0 ? this.currentPage - 1 : 1 ;
		this.nextPage = this.currentPage + 1 < this.totalPage ? this.currentPage + 1 : this.totalPage;
	}

	public long getPageIndex() {
	    return  (this.currentPage -1) * 8;
	}
	
	public long getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(long currentPage) {
		this.currentPage = currentPage;
	}

	public long getFirstPage() {
		return firstPage;
	}

	public void setFirstPage(long firstPage) {
		this.firstPage = firstPage;
	}

	public long getUpPage() {
		return upPage;
	}

	public void setUpPage(long upPage) {
		this.upPage = upPage;
	}

	public long getNextPage() {
		return nextPage;
	}

	public void setNextPage(long nextPage) {
		this.nextPage = nextPage;
	}

	public long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(long totalCount) {
		this.totalCount = totalCount;
	}

	public long getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(long totalPage) {
		this.totalPage = totalPage;
	}

	@Override
	public String toString() {
		return "PageUtil [currentPage=" + currentPage + ", firstPage=" + firstPage + ", upPage=" + upPage
				+ ", nextPage=" + nextPage + ", totalCount=" + totalCount + ", totalPage=" + totalPage + "]";
	}
}
