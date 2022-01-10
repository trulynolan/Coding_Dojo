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
<title>Edit book page</title>
<!-- Bootstrap -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<!-- Beginning of Container -->
		<h1 display="inline">Change your Entry</h1>
		<a href="/classes">Back to the Shelves</a>
		
		
		
		<form:form action="/classes/update/${course.id}" method="post"
			modelAttribute="course">
			<input type="hidden" name="_method" value="put">
			<form:hidden path="user" value="${user.id}" />
			
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
	</div>
	</form:form>
	<a href="/${course.id}/delete" class="btn btn-danger mt-2">DELETE</a>
	
	</div>
	<!-- End of Container -->
	</div>
	<!-- End of Container -->

</body>
</html>