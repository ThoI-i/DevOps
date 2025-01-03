package chap1_2.array;

import java.util.Arrays;

public class ArrayCopy {
    public static void main(String[] args) {

        String[] pets = {"멍멍이", "야옹이", "짹짹이"};
//        String[] petsCopy = pets; // 주소값 복사

//        String[] petsCopy = new String[pets.length];
        // 0. 값을 하나하나씩 "직접" 넣어줘야함
//        petsCopy[0] = pets[0];
//        petsCopy[1] = pets[1];
//        petsCopy[2] = pets[2];
//      // 1. 반복문
//        for (int i = 0; i < petsCopy.length; i++) {
//            petsCopy[i] = pets[i];
//        }
        // 2.
        String[] petsCopy = Arrays.copyOf(pets, pets.length);

        pets[1] = "콩콩이";

        System.out.println("원본: " + Arrays.toString(pets));
        System.out.println("사본: " + Arrays.toString(petsCopy));
        System.out.println("원본의 주소: " + pets);
        System.out.println("사본의 주소: " + petsCopy);
    }
}
