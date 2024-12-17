package com.spring.core.chap02_3.controller;

import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

class MyControllerTest {

    @Test
    void test() {

        ApplicationContext context
                = new AnnotationConfigApplicationContext(ModelConfig.class);

        MyController controller = context.getBean(MyController.class);
        controller.handleRequest();


//        MyController controller = new MyController(
//                new MyService(
//                        new MyRepository()
//                )
//        );
//
//        controller.handleRequest();
    }
}