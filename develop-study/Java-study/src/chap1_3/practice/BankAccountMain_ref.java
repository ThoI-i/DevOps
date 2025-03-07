package chap1_3.practice;

public class BankAccountMain_ref {
    public static void main(String[] args) {

        BankAccount_ref myAccount = new BankAccount_ref();
        BankAccount_ref yourAccount = new BankAccount_ref();

        myAccount.deposit(5000);
        myAccount.deposit(7000);
        myAccount.withdraw(8000);
        myAccount.withdraw(89000);

        // 계좌 이체
        myAccount.transfer(yourAccount, 3000);

        System.out.println("=== 나의 잔액 ===");
        myAccount.displayBalance();

        System.out.println("=== 상대방의 잔액 ===");
        yourAccount.displayBalance();

    }
}
