public class Skill extends Student { // Main 클래스: 객체 생성, 사용
    String skill;

    public Skill(){
    }

    public Skill(String name, String skill) {
        super(name);
        this.skill = skill;
    }
    public Skill(String name, int age, String grade, String skill){
        super(name,age,grade);
        this.skill = skill;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    @Override
    void printInfo() {
        super.printInfo();
        System.out.println("스킬: " + skill);
        System.out.println("===================");
    }
}