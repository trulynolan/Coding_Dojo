    <!-- c:out ; c:forEach ; c:if -->
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
        <!-- Formatting (like dates) -->
        <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
            <!-- form:form -->
            <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
                <!-- for rendering errors on PUT routes -->
                <%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Render</title>
</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <h1>AY! Here' them books!</h1>
        <c:out value="${book.title}"></c:out>
        <c:out value="${book.description}"></c:out>
        <c:out value="${book.language}"></c:out>
        <c:out value="${book.numberOfPages}"></c:out>
    </div> <!-- End of Container -->
</body>
</html>