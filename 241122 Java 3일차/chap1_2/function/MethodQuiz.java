package chap1_2.function;

import java.util.Arrays;

public class MethodQuiz {

    static String[] foods = {"떡볶이", "치킨", "파스타"};

    static void printFoods() {
        System.out.println(Arrays.toString(foods));
    }

    static void push(String addFood) {
        // 배열 사본 생성
        String[] foodsCopy = new String[foods.length + 1];
        // 사본 배열에 원본값 넣기
        for (int i = 0; i < foods.length; i++) {
            foodsCopy[i] = foods[i];
        }
        // 사본 배열 끝 인덱스 수정
        foodsCopy[foodsCopy.length - 1] = addFood;

        foods = foodsCopy;
        foodsCopy = null;
    }
    static int indexOf(String findFood){
        int index = -1;
        for (int i = 0; i < foods.length; i++) {
            if (findFood.equals(foods[i])) {
                index = i;
                break;
            } // end if
        } // end for
        return index;
    }
    static void pop(){
        // 배열 사본 생성
        String[] foodsCopy = new String[foods.length - 1];
        // 사본 배열에 원본값 넣기
        for (int i = 0; i < foods.length -1; i++) {
            foodsCopy[i] = foods[i];
        }
        foods = foodsCopy;
        foodsCopy = null;
    }
//    static void remove(String removeFood){
//
//    }

    public static void main(String[] args) {
        printFoods();
        push("라면");
        push("김치찌개");
        printFoods();

        int index = indexOf("파스타");
        System.out.println("index = " + index);

        int index2 = indexOf("라면땅");
        System.out.println("index2 = " + index2);

        pop();
        printFoods();
    }
}
