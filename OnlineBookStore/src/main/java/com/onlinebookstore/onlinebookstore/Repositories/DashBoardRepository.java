package com.onlinebookstore.onlinebookstore.Repositories;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.onlinebookstore.onlinebookstore.Entities.Dashboard;
//import com.onlinebookstore.onlinebookstore.Entities.Customer;
import com.onlinebookstore.onlinebookstore.Entities.UserLogin;

import jakarta.transaction.Transactional;

public interface DashBoardRepository extends JpaRepository<Dashboard, Long> {
			
	
		//fetch all carts which belongs to user=id;
		//	@Query(value="select * from cart ct where ct.custid =: id ")
		//	List<Customer> findBy(@Param("custid") int id);
	@Query(value="select d.cid,dash_id,d.uid from dashboard d inner join user_login u on d.uid=u.uid and d.uid=(:query)", nativeQuery=true)
	Set<Dashboard> getByUserId(@Param("query") Long uid);

//	@Modifying
//	@Query(value="insert into dashboard(uid,cid) values(uid,cid)",nativeQuery=true)
//	@Transactional
//	void save(@Param("uid")long uid, @Param("cid")long cid);
}
