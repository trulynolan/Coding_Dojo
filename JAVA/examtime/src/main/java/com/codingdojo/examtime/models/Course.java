package com.codingdojo.examtime.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "courses")
public class Course {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min=3, max=25, message= "Name must be between 3 and 25 characters long.")
	private String name;
	
	@NotNull 
	@Size(min=3, max=25, message= "Name must be between 3 and 25 characters long.")
	private String weekday;

	
	@NotNull(message="The price is required! What, you don't want to make money?")
    @Min(value= 1, message="HEY! Price has to be more than $0.00, JACK!")
    private Integer price;
	
	@NotNull 
	@Size(min=3, max=300, message= "Description must be between 3 and 300 characters long.")
	private String description;
	

	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	
	public Course() {
		
	}

	public Course(
			@NotNull @Size(min = 3, max = 25, message = "Name must be between 3 and 25 characters long.") String name,
			@NotNull @Size(min = 3, max = 25, message = "Name must be between 3 and 25 characters long.") String weekday,
			@NotNull(message = "The price is required! What, you don't want to make money?") @Min(value = 1, message = "HEY! Price has to be more than $0.00, JACK!") Integer price,
			@NotNull @Size(min = 3, max = 300, message = "Description must be between 3 and 300 characters long.") String description,
			User user) {
		this.name = name;
		this.weekday = weekday;
		this.price = price;
		this.description = description;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWeekday() {
		return weekday;
	}

	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
