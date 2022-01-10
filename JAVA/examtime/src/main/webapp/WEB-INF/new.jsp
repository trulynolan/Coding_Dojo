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
<title></title>
<!-- Bootstrap -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">

</head>
<body>
<div class="container"> 
	<form:form action="/classes/create" method="post" modelAttribute="course">
		<form:hidden path="user" value="${userId}" />


		<div class="form-group">
			<label>Name: </label>
			<form:input path="name" class="form-control" />
			<form:errors path="name" class="text-danger" />
		</div>

		<div class="form-group">
			<label>Day of Week: </label>
			<form:input path="weekday" class="form-control" />
			<form:errors path="weekday" class="text-danger" />
		</div>

		<div class="form-group">
			<label>Price: </label>
			<form:input path="price" class="form-control" />
			<form:errors path="price" class="text-danger" />
		</div>

		<div class="form-group">
			<label>Description: </label>
			<form:input path="description" class="form-control" />
			<form:errors path="description" class="text-danger" />
		</div>

		<input class="btn btn-info" type="submit" value="Create course">
	</form:form>
</div>

</body>
</html>