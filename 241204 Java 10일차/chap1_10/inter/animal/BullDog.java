package chap1_10.inter.animal;

public class BullDog implements Huntable, Wild, Pet {

    String s;

    // 사냥 기술
    @Override
    public void hunt(Animal pet) {

    }

    // 애완동물로 키울 수 있음
    @Override
    public void handle() {

    }

    @Override
    public boolean inject() {
        return false;
    }

    // 난폭한 행동
    @Override
    public void violent() {

    }
}
