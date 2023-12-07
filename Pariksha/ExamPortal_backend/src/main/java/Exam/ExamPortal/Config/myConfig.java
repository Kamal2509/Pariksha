package Exam.ExamPortal.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;

import Exam.ExamPortal.Service.Impl.UserDetailsServiceImpl;


@Configuration
public class myConfig {
	
	@Bean
    public UserDetailsService userDetailsService() {
//        UserDetails userDetails = User.builder().
//                username("Amit1")
//                .password(passwordEncoder().encode("123")).roles("ADMIN").
//                build();
//        System.out.println(userDetails);
		System.out.println("checking" + new UserDetailsServiceImpl());
        return new UserDetailsServiceImpl();//InMemoryUserDetailsManager(userDetails);
    }

   
  
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
        return builder.getAuthenticationManager();
    }
}
