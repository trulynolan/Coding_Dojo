<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Show fortune</title>
</head>
<body>
	<div>
		<h3>Here is your Omikuji</h3>
		<div>
			<h4>In 
			<span> <c:out value = "${number}"></c:out></span> years, you will live in 
			<span><c:out value="${city}"></c:out></span> with 
			<span><c:out value="${person}"></c:out></span> as your roommate, 
			<span><c:out value="${hobby}"></c:out></span> for a living. 
			The next time you see a 
			<span><c:out value="${thing}"></c:out></span> you will have good luck.
			Also, <span><c:out value="${nice}"></c:out></span> </h4>
			
			<a href="/omikuji">Go Back</a>
		</div>
	
	</div>



</body>
</html>