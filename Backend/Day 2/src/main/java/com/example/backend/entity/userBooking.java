package com.example.backend.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="user_booking")
public class userBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
        private String firstName;
        private String lastName;
        private String email;
        private Long phone;
        private Date startDate;
        private Date endDate;
        private int numGuests;
        private String boatType;
        private String duration;
        private Long altPhone;
        private String address1;
        private String address2;
        private String state;
        private String country;

}
