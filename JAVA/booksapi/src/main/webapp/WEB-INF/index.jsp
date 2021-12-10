<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

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
                        <title>All Books</title>
                        <!-- Bootstrap -->
                        <link rel="stylesheet"
                            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                            crossorigin="anonymous">
                    </head>

<body>
    <table  class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Language</th>
                    <th scope="col">Number of Pages</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

                <c:forEach var = "i" items = "${books}" >
                    <tr>
                        <td> <c:out value="${i.id}"></c:out></td>
                        <td> <c:out value="${i.title}"></c:out></td>
                        <td> <c:out value="${i.description}"></c:out></td>
                        <td> <c:out value="${i.language}"></c:out></td>
                        <td> <c:out value="${i.numberOfPages}"></c:out></td>
                        <td> <a href="/books/${i.id}" >Show </a>  <a href="" > Edit </a>  <a href="/delete/${i.id}" > Delete </a></td>
                    </tr>



                </c:forEach>

                 <!-- loop over all the books to show the details as in the wireframe! -->
            </tbody>
        </table>
</body>

                    </html>