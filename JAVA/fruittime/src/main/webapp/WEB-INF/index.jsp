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
		<c:forEach var="person" items="${people}">
    		<c:out value="${person.name}"/>
</c:forEach>
</body>
</html>