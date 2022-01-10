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
<title>Dashboard; first page when you log in.</title>
<!-- Bootstrap -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h1 display="inline" class="text-info">
			Welcome,
			<c:out value="${user.userName}"></c:out>
		</h1>
		<a href="/logout">Logout</a>
		<h2 display="inline">Course Schedule</h2>
		<div class="container">
			<table>
				<thead>
					<tr>
						<th scope="col">Class Name</th>
						<th scope="col">Instructor</th>
						<th scope="col">Weekday</th>
						<th scope="col">Price</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="i" items="${courses}">
						<tr>
							<td scope="row">  <a  href="/view/${i.id}" ><c:out value="${i.name}"></c:out></a>     <c:choose>
									<c:when test="${user.id == i.user.id}">
										<a href="/classes/${i.id}/edit" class="btn btn-primary mt-2">Edit</a>
									</c:when>

								</c:choose></td>
							<td><c:out value="${i.user.userName}"></c:out></td>
							<td><c:out value="${i.weekday}"></c:out></td>
							<td>$<c:out value="${i.price}"></c:out></td>
						</tr>
					</c:forEach>
				</tbody>
				<a href="/classes/new" class="btn btn-warning mt-2">+new course</a>
			</table>
		</div>
	</div>
</body>
</html>