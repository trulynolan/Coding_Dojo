<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach ; c:if -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (like dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Edit Poke BRO</h1>

	<form:form action="/expenses/poke/${poke.id}" method="post" modelAttribute="poke">
        <input type="hidden" name="_method" value="put">
        
			<form:label path="expense">Expense Name:</form:label>
			<form:errors path="expense"/>
			<form:input path="expense"/><br><br>
			
			<form:label path="vendor">Vendor Name:</form:label>
			<form:errors path="vendor"/>
			<form:input path="vendor"/><br><br>
			
			<form:label path="amount">Amount:</form:label>
			<form:errors path="amount"/>
			<form:input path="amount"/><br><br>
			
			<form:label path="description">Description:</form:label>
			<form:errors path="description"/>
			<form:textarea path="description"/><br><br>
		
			<input type="submit" value="Submit"/>
		
		</form:form>

</body>
</html>