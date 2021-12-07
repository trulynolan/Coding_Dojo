<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hey this is the title.</title>
</head>
<body>
<div class="container">
		<h1>Fruit Store</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="fruit" items="${fruit}">
				<tr>
					<td><c:out value="${fruit.name}"></c:out></td>
					<td><c:out value="${fruit.price}"></c:out></td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>