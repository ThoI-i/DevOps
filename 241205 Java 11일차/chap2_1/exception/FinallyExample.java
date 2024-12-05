package chap2_1.exception;

public class FinallyExample {
    public static void main(String[] args) {

        String[] pets = {"멍멍이", "야옹이", "비둘긔"};

        for (int i = 0; i < 4; i++) {

            try {
                System.out.println(pets[i] + " 키울래요~");
            } catch (Exception e) {
                System.out.println("그런 애완동물은 없어요");
            } finally{
                // 예외 여부 상관없이 실행
                // 일반적으로 메모리 정리 차원에서 사용하는 경우 많음
                System.out.println("애완동물 화이팅!");
            }
        }
    }
}
