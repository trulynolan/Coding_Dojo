<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<title>Omikuji</title>
</head>
<body>
	<h1>Send an Omikuji</h1>
	<form action="/send" method = "POST">
	
	<label for= "number">Pick any number from 5 to 25</label>
    	<input type="number" min="5" max="25" name='number'> 
    	<br>
    	<br>
	<label for= city">Enter the name of any City</label>
    	<input type="text" name='city'>
    	<br>
    	<br>
    <label for= "person">Enter the name of any real person</label>
    	<input type="text" name='person'>
    	<br>
    	<br>
    <label for= "hobby">Enter professional endeavor or hobby</label>
    	<input type="text" name='hobby'>
    	<br>
    	<br>
   	<label for= "thing">Enter any type of living thing</label>
    	<input type="text" name='thing'>
    	<br>
    	<br>
	<label for= "nice">Say something nice to someone</label>
    	<input type="text" name='nice'>
    	<br>
    	<br>
    <label for= "submit">Send and show a friend</label>
    	<input type="submit" value="Bet you won't hit this">    
	</form>
</body>
</html>