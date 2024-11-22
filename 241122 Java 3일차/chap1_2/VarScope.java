package chap1_2;

public class VarScope {
    public static void main(String[] args) {
        // java는 변수가 선언된 중괄호(블록)에서 생성되고
        // 블록이 끝나는 부분에서 소멸한다.
        int x1 = 10;
        if (true) {
            int x2 = 20;
        } // int x2 = 20; 소멸
        System.out.println("x1 = " + x1);
//        System.out.println("x1 = " + x2);

//        for (int x1 = 0; i < 3; i++) { // x1 살아있음
//
//        }
//        System.out.println(i);
    }
}
