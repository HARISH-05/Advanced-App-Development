package com.example.backend.adminrepository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.adminentity.AdminRegister;

public interface AdminRepository extends JpaRepository<AdminRegister,Long>{
    
}




