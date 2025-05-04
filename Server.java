import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) throws IOException {
        int port = 8080;
        ServerSocket serverSocket = new ServerSocket(port);
        System.out.println("Server pokrenut na http://localhost:" + port);

        while (true) {
            Socket socket = serverSocket.accept();
            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            OutputStream output = socket.getOutputStream();

            String line = input.readLine();
            if (line == null || !line.startsWith("GET")) {
                socket.close();
                continue;
            }

            String file = line.split(" ")[1];
            if (file.equals("/")) {
                file = "/index.html";
            }

            File htmlFile = new File("." + file);
            if (htmlFile.exists()) {
                String contentType = file.endsWith(".css") ? "text/css" : "text/html";

                output.write(("HTTP/1.1 200 OK\r\nContent-Type: " + contentType + "\r\n\r\n").getBytes());
                FileInputStream fileStream = new FileInputStream(htmlFile);
                fileStream.transferTo(output);
                fileStream.close();
            } else {
                output.write("HTTP/1.1 404 Not Found\r\n\r\nStranica nije pronađena.".getBytes());
            }

            socket.close();
        }
    }
}
