package chap1_2;

public class Casting {

    public static void main(String[] args) {

        // 타입 캐스팅
        // 타입이 다르면 연산이 불가능

        // 묵시적 형 변환 : 작은 데이터를 큰 데이터에 대입하면 자동변환
        byte a = 100; // 1byte
        int b = a;    // 4byte
        System.out.println("b = " + b);

        // 큰 데이터를 작은 공간에 넣을 때는 명시적으로 변환을 해야 함.

        // 0: 양수, 1: 음수
        // 0 0000000 00000000 00000011 11101000
        int c = 1000; // 4byte

        // 1 1101000

        // 1의 보수: 비트를 반전
        // 1101000 -> 0010111
        // 2의 보수 : 1을 더함
        //  0010111
        //+       1
        //  0011000 -> 24
        byte d = (byte) c;   // 1byte
        System.out.println("d = " + d);

        // 결론: 큰데이터를 작은공간에 대입하면 데이터 손실 가능성이 있음

        int k = 50; // 4byte
        double j = k; // 8byte
        System.out.println("j = " + j);

        double m = 5.567;
        int n = (int) m;
        System.out.println("m = " + m);
        System.out.println("n = " + n); //의도적으로 버리는 경우: 소숫점 버러기 | 함수 사용

        // 묵시적 형 변환 -> upcasting (promotion)
        // 명시적 형 변환 -> downcasting
        System.out.println("=========================");
        // 타입이 다른 경우 큰 쪽에 맞춰서 자동 캐스팅
        int v = 100;
        double z = 6.6;
        double result = v + z;
        System.out.println("result = " + result);

        int result2_2 = 'A' + 4; // 데이터가 큰 쪽으로 바뀜 int(4byte) char(2byte)
        System.out.println("result2 = " + result2_2);

        char result2_3 = (char) ('A' + v);
        System.out.println("result3 = " + result2_3);
        System.out.println("=========================");

        int result3_1 = 27 / 5;
        int result3_2 = 27 % 5;
        double result3_3 = 27.0 / 5;
        int h = 5;
        double result3_4 = (double)h;
        System.out.println("result3_1 = " + result3_1);
        System.out.println("result3_2 = " + result3_2);
        System.out.println("result3_3 = " + result3_3);
        System.out.println("result3_4 = " + result3_4);
        System.out.println("=========================");

        // int보다 작은 데이터의 연산은 강제로 int로 변환됨
        byte b1 = 100; // -128 ~ 127까지 오버플로우 발생 방지
        byte b2 = 80;
        int b3 = b1 + b2;

        // char + char == int
        int i = 'A' + 'B'; // char 2byte | int 4byte



    }
}
