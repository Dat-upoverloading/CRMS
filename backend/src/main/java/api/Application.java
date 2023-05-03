package api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.logging.Logger;
import java.util.logging.Level;

@SpringBootApplication
public class Application {

	static {

		Logger logger = Logger.getLogger("org.mongodb.driver");
		logger.setLevel(Level.OFF);
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
