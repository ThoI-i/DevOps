package com.study.jpa.chap01;

import com.study.jpa.chap01.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// JPA Repository: 기본 CRUD 포함
// 첫 번째 제네릭타입: 엔터티 클래스 타입, 두 번쨰 제네릭타입:ID의 타입
public interface ProductRepository extends JpaRepository<Product, Long> {

}
