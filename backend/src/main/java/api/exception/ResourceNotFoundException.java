package api.exception;

public class ResourceNotFoundException extends APIException {

    public ResourceNotFoundException(int code, String message) {
        super(code, message);
    }
}
