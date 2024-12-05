package chap1_9.enum_;

import chap1_9.enum_.pizza.beforeEnum.PizzaEnum_;

public class Main {
    public static void main(String[] args) {

        PizzaEnum_ pizza = new PizzaEnum_();
        pizza.orderPizza();
        pizza.readyPizza();
        pizza.deliverPizza();
    }
}