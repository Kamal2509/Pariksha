package Exam.ExamPortal.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import Exam.ExamPortal.model.Authority;
import Exam.ExamPortal.model.User;

@SuppressWarnings("serial")
public class CustomUserDetails implements UserDetails {
	private User user;

	public CustomUserDetails(User user) {
		super();
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Set<Authority> set = new HashSet<Authority>();
		this.user.getUserRoles().forEach(userRole -> {
			set.add(new Authority(userRole.getRole().getRolename()));
		});

		return set;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getUsername();
	}

	public String getFirstname() {
		// TODO Auto-generated method stub
		return user.getFirstname();
	}

	public String getLastname() {
		// TODO Auto-generated method stub
		return user.getLastname();
	}
	public String getPhone() {
		// TODO Auto-generated method stub
		return user.getPhone();
	}
	public long getUserId() {
		// TODO Auto-generated method stub
		return user.getId();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return user.isEnable();
	}

}
