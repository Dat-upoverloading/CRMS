package api.user;

import java.util.List;

import org.springframework.stereotype.Service;

import api.exception.ResourceNotFoundException;

@Service
public class UserInfoServiceImp implements UserInfoService {

    private final UserInfoRepository repository;

    public UserInfoServiceImp(UserInfoRepository repository) {
        super();
        this.repository = repository;
    }

    @Override
    public List<UserInfo> getAllUserInfo() {
        return repository.findAll();
    }

    @Override
    public UserInfo getUserById(String id) {
        UserInfo userInfo = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(404, "Post not found with id:"));

        return userInfo;
    }

    @Override
    public UserInfo addUser(UserInfo userInfo) {
        return repository.save(userInfo);
    }

    @Override
    public UserInfo updateUser(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public UserInfo deleteUser(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

}
