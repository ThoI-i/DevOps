package com.spring.core.chap03_3.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MessageControllerTest {

    @Autowired
    MessageController controller;

    @Test
    void test() {
        controller.showMessage();
    }

}