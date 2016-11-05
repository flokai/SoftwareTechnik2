package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class facebookServlets
 */
@WebServlet("/facebookServlet")
public class facebookServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		PrintWriter writer = response.getWriter();
		String vorname = request.getParameter("vname");
		String nachname = request.getParameter("nname");
		String email = request.getParameter("email");

		writer.write("<html><body><h1>ServletSeite</h1><form><table><tr><th>Parameter</th><th>Wert</th><th>Änderungen</th></tr>"
				+ "<tr><td>Vorname</td><td>"+ vorname + "</td><td><input type=button value=Ändern></td></tr>"
						+ "<tr><td>Nachname</td><td>"+ nachname + "</td><td><input type=button value=Ändern></td></tr>"
								+ "<tr><td>Email</td><td>"+ email + "</td><td><input type=button value=Ändern></td></tr>"
						+ "</table></form></body></html>");
		writer.flush();
		writer.close();
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
