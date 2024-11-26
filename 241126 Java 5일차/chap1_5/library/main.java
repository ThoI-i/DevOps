package chap1_5.library;

public class main {

    public static void main(String[] args) {

//        Book book1 = new Book(); // 에러 발생: 생성자가 있기 때문
        Book book1 = new Book("해리포터");
        System.out.println("book1 = " + book1);

        Book book2 = new Book("판지의 게왕", "뽀로로", 1999);
        System.out.println("book2 = " + book2);
    }
}
