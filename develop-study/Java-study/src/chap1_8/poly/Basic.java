package chap1_8.poly;

class A {}
class B extends A {}
class C extends A {}
class D extends B {}
class E extends C {}
/*
          Object
            |
            A
         /    \
        B     C
        |     |
        D     E
 */

public class Basic {

    public static void main(String[] args) {
        // 다형성: 객체가 다양한 형태를 가지고 있음
        //         다양한 타입을 사용 가능(부모의 타입)
        // 전제: 상속관계에서만 가능

        // type     constructor
        A x1 = new A();
//        B x2 = new B();
        A X2 = new B();
//        C x3 = new C();
        A x3 = new C();
//        D x4 = new D();
        B x4 = new D();
//        E x5 = new E();
        C x5 = new E();
    }
}
