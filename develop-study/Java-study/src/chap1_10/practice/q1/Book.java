package chap1_10.practice.q1;

public abstract class Book {

    protected String title;
    protected String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public abstract void displayInfo();
}