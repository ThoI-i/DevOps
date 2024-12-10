package chap2_8.stream;

import java.util.Objects;

public class DishDetail {
    private String name;
    private String typeName;

    public DishDetail() {
    }

    public DishDetail(String name, String typeName) {
        this.name = name;
        this.typeName = typeName;
    }

    public DishDetail(Dish dish) {
        this.name = dish.getName();
        DishType type = dish.getType();
        switch (type) {
            case MEAT:
                this.typeName = "육류";
                break;
            case FISH:
                this.typeName = "어류";
                break;
            case OTHER:
                this.typeName = "기타";
                break;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    @Override
    public String toString() {
        return "DishDetail{" +
                "name='" + name + '\'' +
                ", typeName='" + typeName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DishDetail that = (DishDetail) o;
        return Objects.equals(name, that.name) && Objects.equals(typeName, that.typeName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, typeName);
    }
}
