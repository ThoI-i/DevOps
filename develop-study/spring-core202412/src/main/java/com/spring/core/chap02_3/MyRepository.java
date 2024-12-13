package com.spring.core.chap02_3.config;

import com.spring.core.chap02_3.controller.MyController;
import com.spring.core.chap02_3.repository.MyRepository;
import com.spring.core.chap02_3.service.MyService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelConfig {

    @Bean
    public MyRepository repository() {
        return new MyRepository();
    }

    @Bean
    public MyService service() {
        return new MyService(repository());
    }

    @Bean
    public MyController controller() {
        return new MyController(service());
    }
}
