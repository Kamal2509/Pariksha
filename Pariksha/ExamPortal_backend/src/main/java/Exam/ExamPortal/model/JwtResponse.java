package Exam.ExamPortal.model;

public class JwtResponse {
String tokenString;

public JwtResponse() {
	super();
}

public JwtResponse(String tokenString) {
	super();
	this.tokenString = tokenString;
	
}

public String getTokenString() {
	return tokenString;
}

public void setTokenString(String tokenString) {
	this.tokenString = tokenString;
}




}
