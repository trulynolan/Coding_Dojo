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
<title>Poke Book</title>
</head>
<body>
	<h1>PokeBook</h1>
	<table border="2" bordercolor="black" minwidth="300">
		<thead>
			<tr>
				<th>Expense</th>
				<th>Vendor</th>
				<th>Amount</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="i" items="${poke}">
				<tr>
					<td>
					<a href="/onePoke/${i.id}">
					<c:out value="${i.expense}"></c:out>
					</a>
					</td>
					<td><c:out value="${i.vendor}"></c:out></td>
					<td><c:out value="${i.amount}"></c:out></td>
					
					<td><a href="/expenses/${i.id}/edit">Edit</a> <a href="/onepoke/delete/${i.id}">Delete</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>

	<h2>Track an expense BOZO!</h2>
	<form:form action="/expenses" method="post" modelAttribute="dad">
		<form:label path="expense">Expense Name</form:label>
		<form:input path="expense" />
		<form:errors path="expense"></form:errors>
		<form:label path="vendor">Vendor</form:label>
		<form:input path="vendor" />
		<form:errors path="vendor"></form:errors>
		<form:label path="amount">Amount</form:label>
		<form:input path="amount" type="number" />
		<form:errors path="amount"></form:errors>
		<form:label path="description">Description</form:label>
		<form:input path="description" />
		<form:errors path="description"></form:errors>
		<input type="submit" value="button"></input>
	</form:form>

</body>
</html>