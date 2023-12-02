package Exam.ExamPortal.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "userId",nullable = false)
private long id;
private String username;
private String password;
private String firstname;
private String lastname;
private String email;
private String phone;
private boolean enable=true;
private String profile;

//one to many relationship with user role

@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "user")
@JsonIgnore
private Set<UserRole> userRoles= new HashSet<>();


public User(long id, String username, String password, String firstname, String lastname, String email, String phone,
		boolean enable) {
	super();
	this.id = id;
	this.username = username;
	this.password = password;
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;
	this.phone = phone;
	this.enable = enable;
}

public User() {
	super();
}


public Set<UserRole> getUserRoles() {
	return userRoles;
}

public void setUserRoles(Set<UserRole> userRoles) {
	this.userRoles = userRoles;
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getFirstname() {
	return firstname;
}

public void setFirstname(String firstname) {
	this.firstname = firstname;
}

public String getLastname() {
	return lastname;
}

public void setLastname(String lastname) {
	this.lastname = lastname;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPhone() {
	return phone;
}

public void setPhone(String phone) {
	this.phone = phone;
}

public boolean isEnable() {
	return enable;
}

public void setEnable(boolean enable) {
	this.enable = enable;
}

public String getProfile() {
	return profile;
}

public void setProfile(String profile) {
	this.profile = profile;
}

@Override
public String toString() {
	return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstname=" + firstname
			+ ", lastname=" + lastname + ", email=" + email + ", phone=" + phone + ", enable=" + enable + "]";
}


}
