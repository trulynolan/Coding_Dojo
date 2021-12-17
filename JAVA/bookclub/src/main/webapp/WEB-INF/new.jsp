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
<title>New book page</title>
<!-- Bootstrap -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>
	<form:form action="/books/post" method="post" modelAttribute="book">
		<form:hidden path="user" value="${user.id}" />
		<div class="form-group">
			<form:label path="title">Title</form:label>
			<form:input path="title" class="form-control" />
			<form:errors path="title" class="text-danger" />
		</div>
		<div class="form-group">
			<form:label path="author">Author:</form:label>
			<form:input path="author" class="form-control" />
			<form:errors path="author" class="text-danger" />
		</div>
		<div class="form-group">
			<form:label path="description">My thoughts:</form:label>
			<form:textarea path="description" class="form-control" />
			<form:errors path="description" class="text-danger" />
		</div>
		<div class="form-group">
			<input type="submit" value="Submit">
		</div>
		</div>
	</form:form>
	</div>
</body>
</html>