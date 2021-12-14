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
<title>Show it BRUH</title>
</head>
<body>
	<div class="container">
	<h1>Expense Details</h1>
	<a href="/dashboard">GO BACK!</a> <br>
	<c:out value="${poke.expense}"></c:out> <br>
    <c:out value="${poke.vendor}"></c:out> <br>
    <c:out value="${poke.amount}"></c:out> <br>
    <c:out value="${poke.description}"></c:out>
    </div>
    
</body>
</html>