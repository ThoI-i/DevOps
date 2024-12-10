public class Weapon extends Student{ // Main 클래스: 객체 생성, 사용

    String weapon;

    Weapon(){
    }

    Weapon(String name, String weapon){
        super(name);
        this.weapon = weapon;
    }

    Weapon(String name, int age, String grade, String weapon){
        super(name, age, grade);
        this.weapon = weapon;
    }

    public String getWeapon() {
        return weapon;
    }

    public void setWeapon(String weapon) {
        this.weapon = weapon;
    }

    @Override
    void printInfo() {
        super.printInfo();
        System.out.println("무기: " + weapon);
        System.out.println("===================");
    }
}