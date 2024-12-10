package chap2_8.stream;


import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class Filtering {
    public static void main(String[] args) {

        // 요리 메뉴중 채식주의자가 먹을 수 있는 요리만 필터링
        List<Dish> menuList = Menu.menuList;

        // 채식주의자들의 요리를 담을 새 리스트를 생성
//        List<Dish> vegetarianList = new ArrayList<>();

        // 필터링
//        for (Dish dish : menuList) {
//            if (dish.isVegetarian()) {
//                vegetarianList.add(dish);
//            }
//        }

//            // 1단계
//            List<Dish> vegetarianList = menuList.stream().filter(new Predicate<Dish>() {
//            @Override
//            public boolean test(Dish dish) {
//                return dish.isVegetarian();
//            }
//            (Dish dish) -> {
//                return dish.isVegetarian();
//            }
        //    ).collect(Collectors.toList());

        // 2단계
//        List<Dish> vegetarianList = menuList.stream()  // 1. 데이터 소스 생성
//                .filter((dish) -> dish.isVegetarian()) // 2. 중간 연산
//                .collect(Collectors.toList());         // 3. 최종 연산

        // 3단계
        List<Dish> vegetarianList = menuList.stream()  // 1. 데이터 소스 생성
                .filter(Dish::isVegetarian) // 2. 중간 연산
                .collect(toList());         // 3. 최종 연산

        // 반복문 처리
        // 1단계
//        vegetarianList.stream()
//                        .forEach(dish -> System.out.println(dish));
//        2단계
        vegetarianList.forEach(dish -> System.out.println(dish));
        System.out.println("============================");

        // 메뉴 목록 중 육류이면서 600칼로리 미만인 요리 필터링
        List<Dish> meatLowCalories = menuList.stream()
                .filter((menu) -> menu.getType() == DishType.MEAT && menu.getCalories() < 600)
                .collect(toList());

//        meatLowCalories.forEach(m -> System.out.println(m));
        meatLowCalories.forEach(System.out::println);
        System.out.println("============================");
        // 메뉴 목록에서 요리 이름이 4글자인 것만 필터링

        menuList.stream()
                .filter(menu -> menu.getName().length() == 4)
                .collect(toList())
                .forEach(System.out::println);

        System.out.println("============================");

        // 300 칼로리보다 큰 요리 중 앞에서 3개만 필터링
        List<Dish> limit3 = menuList.stream()
                .filter(m -> m.getCalories() > 300)
                .limit(3) // 앞에서부터 3개 선택
                .collect(toList());

        limit3.forEach(System.out::println);
        System.out.println("============================");
        // 300 칼로리보다 큰 요리 중 처음 2개 스킵 후 필터링
        List<Dish> skip2 = menuList.stream()
                .filter(m -> m.getCalories() > 300)
                .skip(2) // 2개 스킵
                .collect(toList());

        skip2.forEach(System.out::println);
        System.out.println("============================");

        List<Integer> numbers = List.of(1, 2, 3, 41, 4, 42, 4, 34, 3, 2, 235, 235, 235, 4, 2, 32, 3, 1, 2, 3, 9);

        // 숫자 리스트에서 짝수들만 필터링
        List<Integer> evenNumbers = numbers.stream()
                .filter(n -> n % 2 == 0)
                .distinct() // 중복 제거
                .collect(toList());

        System.out.println("evenNumbers = " + evenNumbers);

    }
}
