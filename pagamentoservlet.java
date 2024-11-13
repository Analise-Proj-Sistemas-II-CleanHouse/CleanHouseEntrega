import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/PagamentoServlet")
public class PagamentoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // Obtém os dados de pagamento do formulário
        String paymentMethod = request.getParameter("paymentMethod");
        String cardNumber = request.getParameter("cardNumber");
        String cardName = request.getParameter("cardName");
        String cardExpiry = request.getParameter("cardExpiry");
        String cardCvv = request.getParameter("cardCvv");
        String userName = request.getParameter("userName");
        String userEmail = request.getParameter("userEmail");

        // Simulação de processamento de pagamento
        // Aqui você poderia adicionar lógica para validar o cartão, processar o pagamento, etc.
        
        // Define os atributos de confirmação e redireciona para a tela de confirmação
        request.setAttribute("userName", userName);
        request.setAttribute("paymentMethod", paymentMethod);
        request.getRequestDispatcher("confirmation.html").forward(request, response);
    }
}

