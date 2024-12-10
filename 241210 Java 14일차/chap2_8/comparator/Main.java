package chap2_8.comparator;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import static java.util.Comparator.comparing;

public class Main {
    public static void main(String[] args) {

        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student("김철수", 15, 79));
        studentList.add(new Student("박영희", 13, 41));
        studentList.add(new Student("고길동", 17, 11));
        studentList.add(new Student("도우너", 19, 34));

        // 나이 순으로 오름차 정렬 (나이 적은 순서
        /*
            compare는 리턴ㅇ
         */
        // 오름차순 : 나이 오름차순
        // 1단계
//        studentList.sort(new Comparator<Student>() {
//            @Override
//            public int compare(Student o1, Student o2) {
//                return o1.getScore() - o2.getScore();
//            }
//        });
        // 2단계
//        studentList.sort((o1, o2) -> o1.getAge() - o2.getAge());
        // 간편화 1단계
//        studentList.sort(Comparator.comparing(stu -> stu.getAge()));
        // 간편화 2단계
        studentList.sort(comparing(Student::getAge));
        studentList.forEach(System.out::println);
        System.out.println("================================");

        // 나이 내림차 - 나이 많은 순
        System.out.println("====================");
        studentList.sort(comparing(Student::getAge).reversed());
        studentList.forEach(System.out::println);

        // 이름 오름차 - 가나다순
        System.out.println("====================");
        studentList.sort(Comparator.comparing(Student::getName));
        studentList.forEach(System.out::println);

    }
}

