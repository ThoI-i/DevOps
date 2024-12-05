package chap1_8.example.q0.method;

public class Main {

        public static void main(String[] args) {
//            AnimalSound animalSound = new AnimalSound();

            Animal myDog = new Dog(); // 개 선언
            Animal myCat = new Cat(); // 고양이 선언

            AnimalSound.makeAnimalSound(myDog);
            AnimalSound.makeAnimalSound(myCat);
        }
}
