package chap1_10.example.vehicle;

abstract class Vehicle { // 추상 클래스: Vehicle
    protected String name;

    public Vehicle(String name) {
        this.name = name;
    }

    public abstract void start(); // 추상 메서드: 차량 시작

    public String getName() { // 일반 메서드
        return name;
    }
}

