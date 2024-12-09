public class Yae extends Student { // Main 클래스: 객체 생성, 사용
    String skill;

    public Yae(){
    }

    public Yae(String name) {
        super(name);
        this.skill = "Nine Tails";
    }

    @Override
    void printInfo() {
        super.printInfo();
        System.out.println("스킬: " + skill);
        System.out.println("===================");
    }
}