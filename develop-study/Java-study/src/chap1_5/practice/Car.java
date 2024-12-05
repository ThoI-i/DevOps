package chap1_5.practice;

public class Car {
    String model;
    String color;
    int year;
    int mileage;

    public Car(String model, String color) {
        year = 2024;
        mileage = 7;
    }

    @Override
    public String toString() {
        return "Car{" +
                "model='" + model + '\'' +
                ", color='" + color + '\'' +
                ", year=" + year +
                ", mileage=" + mileage +
                '}';
    }
}
