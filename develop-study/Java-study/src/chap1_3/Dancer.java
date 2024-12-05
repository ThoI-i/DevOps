package chap1_3;

import java.util.Arrays;

// 클래스: 객체를 만들기 위한 설계도
public class Dancer {
    // 객체: 속성 + 기능
    // 속성: 객체를 명사적 표현
    // 필드(field): 객체의 속성
    /*
        {
            dancerName: 'kim',
            crewName: 'street man',
            genres: ['kpop', 'choreo', 'wacking'],
            danceLevel: 1,
        }
     */
    String dancerName; // 댄서 명
    String crewName; // 크루 명
    String[] genres; // 장르 목록
    int danceLevel; // 0: 초보, 1: 아마추어, 2: 프로

    // 객체의 기능 - 객체를 동사적으로 표현
    // method : 해당 객체만 할 수 있는 메소드
    // 설계도에 있는 함수는 static을 붙이지 않는다.

    // 춤추는 기능
    void dance() {
        System.out.printf("%s 댄서가 %s춤을 춥니다.\n", dancerName, genres[0]);
    }
    // 자기소개 기능
    void introduce() {
        System.out.println("이름: " + dancerName);
        System.out.println("팀명: " + crewName);
        System.out.println("장르: " + Arrays.toString(genres));
        System.out.println("레벨: " + danceLevel);
    }
    // 생성자 (constructor)
    // 객체가 생성 시 호출되는 특별한 함수
    // 생성자 규칙
    // 1. 생성자 명 = 클래스 명 ( 반드시 같아야 함 )
    // 2. 생성자 void return (무조건)
    Dancer() {
        // 객체 생성시 필드를 초기화
        dancerName = "춤꾼";
        crewName = "시골 춤쟁이들";
        genres = new String[] {"kpop"};
        danceLevel = 0;
    }

    // 오버로딩 (overloading): 메서드를 같은 이름으로 여러 개 생성
    // 규칙: 이름은 같지만 파라미터의 타입이나 개수가 달라야 함.
    Dancer(String dName) {
        dancerName = dName;
        crewName = "도시 춤쟁이들";
        genres = new String[] {"urban"};
        danceLevel = 0;
    }

    Dancer(String dName, String cName) {
        dancerName = dName;
        crewName = cName;
        genres = new String[] {"choreo"};
        danceLevel = 2;
    }

    Dancer(String dName, String cName, String... genreList) {
        dancerName = dName;
        crewName = cName;
        genres = genreList;
        danceLevel = 0;
    }
}

