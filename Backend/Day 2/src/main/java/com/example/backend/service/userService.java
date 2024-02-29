package com.example.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.userRegister;
import com.example.backend.repository.userRepo;

import java.util.List;
import java.util.Optional;

@Service
public class  userService {
    @Autowired
    private userRepo userRepo;

    public List<userRegister> getAllUsers() {
        return userRepo.findAll();
    }

    @SuppressWarnings("null")
    public Optional<userRegister> getuserRegisterById(Long id) {
        return userRepo.findById(id);
    }

    @SuppressWarnings("null")
    public userRegister createuserRegister(userRegister userRegister) {
        return userRepo.save(userRegister);
    }

    public userRegister updateuserRegister(Long id, userRegister updateduserRegister) {
        @SuppressWarnings("null")
        Optional<userRegister> userRegister = userRepo.findById(id);
        if (userRegister.isPresent()) {
            updateduserRegister.setId(id);
            return userRepo.save(updateduserRegister);
        } else {
            throw new RuntimeException("student not found");
        }
    }

    @SuppressWarnings("null")
    public void deleteuserRegister(Long id) {
        userRepo.deleteById(id);
    }
}
