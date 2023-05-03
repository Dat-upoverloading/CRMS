package api.user;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin/customer")
public class UserInfoController {

    @Autowired
    private ModelMapper mapper;
    private UserInfoService service;

    public UserInfoController(UserInfoService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserInfoDTO> getAllUserInfo() {
        return service.getAllUserInfo()
                .stream()
                .map((u) -> mapper.map(u, UserInfoDTO.class))
                .toList();
    }

    @PostMapping
    public void createUser(@RequestBody UserInfo userInfo) {
        service.addUser(userInfo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserInfoDTO> getUserById(@RequestParam(name = "id") String id) {
        UserInfoDTO userInfo = mapper.map(service.getUserById(id), UserInfoDTO.class);
        return ResponseEntity.ok().body(userInfo);
    }

}
