package com.example.backend.userrepository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.userentity.UserRegister;

public interface UserRepository extends JpaRepository<UserRegister,Long>{
    
}
