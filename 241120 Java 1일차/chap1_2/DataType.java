package chap1_2;

public class DataType {

    //메인 메서드: 프로그램의 실행 기점
    public static void main(String[] args) {
//        System.out.println(20);

        // Ctrl + Alt + V : 모르는 타입에 대해 자동으로 타입을 만들어줌
        int ageInt = 20; // 정수
        double ageDouble = 20; // 실수
        System.out.println(ageDouble);

        // 정수 타입(byte: 1byte , short: 2byte, int: 4byte , long: 8byte)
        byte x1 = 127; // 1byte == 8bit 0(첫 번째 비트는 '부호'로 사용) 1111111 (-128 ~ 127)
        short x2 = 32767; // 2byte == 16bit 0(첫 번째 비트는 '부호'로 사용) 1111111 11111111(2의 15승) (-32768 ~ 32767)
        int x3 = 2147483647;

        // 10; // 리터럴: 변수에 저장되기 전 데이터
        // 정수 리터럴 기본타입 int
        long x4 = 214748364812313123L;
        System.out.println(x4);

        // 실수 타입
        float f1 = 3.141592123123132123F; // 4byte
        double f2 = 3.141592123123132123;
        System.out.println("f1 = " + f1);
        System.out.println("f2 = " + f2);
        System.out.println("========================================");

        // 논리 타입
        boolean b1 = true;
        boolean b2 = false;
        boolean b3 = 10 < 5;
        boolean b4 = (10 + 3 == 13) && (9 * 1 == 8);

        // 문자와 문자열 타입
        char c1 = 'A'; // 2byte
        char c2 = 67;
        char c3 = 97;
        char c4 = 44032;
        System.out.println("c2 = " + c2);
        System.out.println("c3 = " + c3);
        System.out.println("c4 = " + c4);
        System.out.println("========================================");

        // hello ['h', 'e', 'l', 'l', 'o']
        char[] cArr = {'h', 'e', 'l', 'l', 'o'};
        String str = new String(cArr);
        System.out.println("str = " + str);

        String str2 = "안녕하세요";
        System.out.println("str2 = " + str2);


        // 자바 17부터 지원
        String str3 = """
                안녕하세요
                ㅁㄴㅇㄹ1
                ㅁㄴㅇㄹ2
                ㅁㄴㅇㄹ3
                """;

        // 동적 타이핑 ( java 9에서 등장 | 잊어먹기 : 위험함 )
        var z = 100; // 타입 추론 -> 성능상 안 좋고 위험함
        var h = "dsfdf";

    }
}
