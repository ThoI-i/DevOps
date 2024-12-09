class Student { // Student 클래스: 설계도
    private String name; // 필드(변수) : 학생 명
    private int age; // 나이
    private String grade; // 성적

    public Student() { // 기본 생성자
    }

    Student(String name) {
        // 생성자(Constructor) | 파라미터
        this.name = name;
        this.age = 20;
        this.grade = "S+++";
    }

    void printInfo() { // 정보 출력 메서드
        System.out.println("이름: " + name);
        System.out.println("학번: " + age);
        System.out.println("성적: " + grade);
    }
}

