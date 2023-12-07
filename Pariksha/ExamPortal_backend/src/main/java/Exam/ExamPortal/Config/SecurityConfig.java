package Exam.ExamPortal.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import Exam.ExamPortal.Security.JwtAuthenticationEntryPoint;
import Exam.ExamPortal.Security.JwtAuthenticationFIlter;

@Configuration
public class SecurityConfig {

	    @Autowired
	    private JwtAuthenticationEntryPoint point;
	 
	    @Autowired
	    private JwtAuthenticationFIlter filter;
	    
	    @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	    	//Configuration for access different Url
	    	http.csrf(csrf -> csrf.disable())
	    	.cors(cors->cors.disable())
            .authorizeHttpRequests(auth->
            auth.requestMatchers("/home/user/**").authenticated()
                 .requestMatchers("/home/login").permitAll()
                 .requestMatchers("/home/signup").permitAll()
                 .anyRequest().authenticated()
            		)
                  .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
                  .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
	    	
            http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);	
	    	
	    return http.build();	
	    }
}
