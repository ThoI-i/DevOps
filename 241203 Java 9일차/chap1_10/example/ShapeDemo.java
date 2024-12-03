package chap1_10.example;

// 다형성을 활용한 도형 클래스
public class ShapeDemo {
    // 매개변수에 다형성을 적용하여 면적 계산
    public void printArea(Shape shape) {
        System.out.println("도형의 면적 " + shape.area());
    }

    public static void main(String[] args) {
        ShapeDemo demo = new ShapeDemo();

        Shape circle = new Circle(5);
        Shape rectange = new Rectangle(4, 6);

        demo.printArea(circle); // 원의 면적 출력
        demo.printArea(rectange); // 직사각형의 면적 출력
    }
}
