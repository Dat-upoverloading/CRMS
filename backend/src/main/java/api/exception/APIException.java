package api.exception;

import org.springframework.http.ResponseEntity;

public class APIException extends RuntimeException {

    private final int code;
    private final String message;

    public APIException(int code, String message) {
        super();

        this.code = code;
        this.message = message;
    }

    public ResponseEntity<String> getResponse() {
        return ResponseEntity.status(code).body(message);
    }

}
