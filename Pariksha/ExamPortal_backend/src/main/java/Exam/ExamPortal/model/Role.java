package Exam.ExamPortal.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity(name="Roles")
public class Role {
	@Id
	private Long roleId;
	private String rolename;
	
	// one to many relationship with user role
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY, mappedBy = "role")
	private Set<UserRole> userRoles=new HashSet<>();
	
	public Role() {
		super();
	}
	public Role(Long roleId, String rolename) {
		super();
		this.roleId = roleId;
		this.rolename = rolename;
	}
	

	public Set<UserRole> getUserRoles() {
		return userRoles;
	}
	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	public String getRolename() {
		return rolename;
	}
	public void setRolename(String rolename) {
		this.rolename = rolename;
	}
	

}
