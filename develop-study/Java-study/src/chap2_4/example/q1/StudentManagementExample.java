package chap2_4.example.q1;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class StudentManagementExample {
    public static void main(String[] args) {
        // 학생들 이름 저장 ArrayList
        List<String> studentNames = new ArrayList<>();
        studentNames.add("홍길동");
        studentNames.add("이순신");
        studentNames.add("강감찬");
        studentNames.add("홍길동"); // 중복

        System.out.println("studentNames = " + studentNames);

        // 중복 제거를 위해 HashSet 사용
        Set<String> uniqueNames = new HashSet<>(studentNames);
        System.out.println("학생 명(중복 제거) = " + uniqueNames);
    }
}
