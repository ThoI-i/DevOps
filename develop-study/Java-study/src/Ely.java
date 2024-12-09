public class Ely extends Student{ // Main 클래스: 객체 생성, 사용

    String weapon;

    Ely(){
    }

    Ely(String name){
        super(name);
        this.weapon = "Bow";
    }

    @Override
    void printInfo() {
        super.printInfo();
        System.out.println("무기: " + weapon);
        System.out.println("===================");
    }
}