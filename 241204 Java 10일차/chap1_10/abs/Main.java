package chap1_10.abs;

public class Main {
    public static void main(String[] args) {


        Pet pet = new Pet(); // 추상적인 객체

        Dog myDog = new Dog();
        Cat myCat = new Cat();

        Pet[] petList = {myCat, myDog};
    }
}
