package chap1_8.example.q1;

class Circle extends Shape { // 자식 클래스
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

