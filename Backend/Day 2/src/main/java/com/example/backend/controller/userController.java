package com.example.backend.controller;

import com.example.backend.entity.userRegister;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.service.userService;


@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins ="http://localhost:5173/",allowedHeaders = "*")
public class userController {
    @Autowired
    private userService userService;

    @GetMapping("/all")
    public List<userRegister> getAllUsers() {
        return userService.getAllUsers();
    }


    @PostMapping("/add")
    public userRegister createuserRegister(@RequestBody userRegister userRegister) {
        return userService.createuserRegister(userRegister);
    }


    @PutMapping("/update")
    public userRegister updateuserRegister(@PathVariable Long id,@RequestBody userRegister updateduserRegister) {
        return userService.updateuserRegister(id,updateduserRegister);
    }
    

    @DeleteMapping("/delete/{id}")
    public void deleteuserRegister(@PathVariable Long id) {
        userService.deleteuserRegister(id);
    }
}