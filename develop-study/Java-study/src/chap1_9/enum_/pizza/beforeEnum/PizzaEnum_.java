package chap1_9.enum_.pizza.beforeEnum;

public class PizzaEnum_ {

    private String pizzaName; // 피자이름
    private String status; // 주문 상태 (주문완료, 요리완료, 배달완료)

    // 피자 주문 기능
    public void orderPizza() {
        this.status = PizzaStatusEnum_.ORDERED;
        System.out.println("피자 주문이 들어왔습니다.");
    }
    // 피자 요리 완료 기능
    public void readyPizza() {
        if (this.status.equals(PizzaStatusEnum_.ORDERED)) {
            this.status = PizzaStatusEnum_.READY;
            System.out.println("피자 요리가 완료되었습니다.");
        } else {
            System.out.println("아직 피자 주문이 없습니다.");
        }
    }
    // 피자 배달 기능
    public void deliverPizza() {
        if (this.status.equals(PizzaStatusEnum_.READY)) {
            this.status = PizzaStatusEnum_.DELIVERED;
            System.out.println("피자가 배달되었습니다.");
        } else {
            System.out.println("피자가 아직 요리중입니다.");
        }
    }
}
