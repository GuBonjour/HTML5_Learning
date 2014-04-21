function createTable(){
			document.write("<table border='1'>");
			for (var i = 0; i < 3; i++) {
				document.write("<tr>");
				for (var j = 0; j < 4; j++) {
					document.write("<td>");
					document.write("Arr(" + i + "," + j + ")");
					document.write("</td>");
				}
				document.write("</tr>");
			}
			   document.write("</table>");
}