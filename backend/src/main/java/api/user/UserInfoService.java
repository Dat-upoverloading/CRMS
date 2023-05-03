package api.user;

import java.util.List;

public interface UserInfoService {

    List<UserInfo> getAllUserInfo();

    UserInfo getUserById(String id);

    UserInfo addUser(UserInfo userInfo);

    UserInfo updateUser(String id);

    UserInfo deleteUser(String id);

}
