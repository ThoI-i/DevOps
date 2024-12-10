import java.util.UUID;

class Student { // Student 클래스: 설계도
    private String name; // 필드(변수) : 학생 명
    private int age; // 나이
    private String grade; // 성적

    public Student() { // 기본 생성자
    }

    public Student(String name) {
        this(name, 20, "A");
    }

    Student(String name, int age, String grade) {
        // 생성자(Constructor) | 파라미터
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {

        return age;
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            System.out.println("나이 입력이 올바르지 않습니다!");
        }
    }


    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    void printInfo() { // 정보 출력 메서드
        System.out.println("이름: " + name);
        System.out.println("나이: " + age);
        System.out.println("성적: " + grade);
    }
}