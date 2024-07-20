package com.onlinebookstore.onlinebookstore.Entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

//import jakarta.persistence.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity   //for creating table
@Table(name="courses")   //specify the name of table in database
public class Courses {
		 
		@Id //primary key
	 	@GeneratedValue(strategy=GenerationType.IDENTITY)  //for auto incrementing   
	 	private Long cid;
		private String cname;
		private String duration;
		private String description;
		private String price;
		private String link;
		private String imglink;

		 @OneToMany(mappedBy = "courses")
		 Set<Dashboard> dashboard;

		
		/* @OneToMany(mappedBy = "courses", cascade = CascadeType.ALL, orphanRemoval = true)
		 @JsonIgnoreProperties("courses")
		 private Set<Dashboard> dashboard = new HashSet<>();
		*/
		
		
		public Long getCid() {
			return cid;
		}

		public void setCid(Long cid) {
			this.cid = cid;
		}
 
		public String getCname() {
			return cname;
		}


		public void setCname(String cname) {
			this.cname = cname;
		}


		public String getDuration() {
			return duration;
		}


		public void setDuration(String duration) {
			this.duration = duration;
		}


		public String getDescription() {
			return description;
		}


		public void setDescription(String description) {
			this.description = description;
		}


		

		public String getPrice() {
			return price;
		}


		public void setPrice(String price) {
			this.price = price;
		}


		public String getImglink() {
			return imglink;
		}


		public void setImglink(String imglink) {
			this.imglink = imglink;
		}


		public String getLink() {
			return link;
		}


		public void setLink(String link) {
			this.link = link;
		}


	
}
