package chap1_3.OPP_Quiz;

public class BankAccount {
    int accountNumber;
    String owner;
    int balance;

    BankAccount(int aN, String oN, int bA) {
        accountNumber = aN;
        owner = oN;
        balance = bA;
    }

    void deposite(int amount) {
        balance += amount;
        System.out.printf("입금액: %d 원\n현재 금액: %d 원\n",amount, balance);
    }
    void withdraw(int amount){
        if(amount > balance) {
            System.out.printf("잔액이 부족합니다.\n출금액:%d\n현재 금액:%d 원\n",amount, balance);

        } else {
            balance -= amount;
            System.out.printf("%d 원 출금되었습니다.\n잔액:%d 원\n",amount,balance);
        }
    }
    void displayBalance() {
        System.out.printf("현재 잔액: %d 원\n",balance);
    }
}
